const router = require('express').Router();
const { User, Skill,Resume, UserSkill, Apply} = require('../../models');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    include: [
      {model: Skill, attributes: ['description']}
    ]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {model: Skill, attributes: ['description']}
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', upload.single('resume'), createUser);

async function createUser(req, res)
{ 
  try
  {
    const user = await User.create(req.body);

    if(user)
    {
      const resume = await Resume.create({
        fileName: req.file.originalname,
        encoding: req.file.encoding,
        mimetype: req.file.mimetype,
        data: req.file.buffer,
        user_id: user.id
      });

      if(req.body.skills.length)
      {
        const userSkillArr = req.body.skills.map((skills) => 
                                {
                                  return{userId: user.id, skills};
                                });
        await UserSkill.bulkCreate(userSkillArr);
      }
      
      req.session.save(() => {
        req.session.user_id= user.id;
        req.session.email = user.email;
        req.session.userType = user.userType;
        req.session.loggedIn = true;
      });
      res.status(200).json(user);
    }
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json(err);
  };
}

router.post('/apply', async (req,res) => {
 console.log(req.body);
 console.log(req.session);
  try{
      const response = await Apply.create({
      projectId : req.body.projectId,
      userId: req.session.user_id  });

      res.status(200).json(response);

  }
  catch(err)
  {
    console.log(err);
    res.status(500).json(err);
  }
   
})

router.post('/login', (req, res) => {

  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    // Session
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.email = dbUserData.email;
      req.session.userType = dbUserData.userType;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

