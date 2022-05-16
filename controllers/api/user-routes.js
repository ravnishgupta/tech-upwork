const router = require('express').Router();
const { User, Skill,Resume, UserSkill, Apply} = require('../../models');
const multer = require("multer");
const fs = require("fs");
const stream = require("stream");
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

//Return resume file for the specific user
router.get('/resume/:id', async (req, res) => { 
  console.log("call here");
  try{
      //A user has one resume saved. Return the resume for selected user.
      //The file data is returned in the raw format.
      const data = await  

      Resume.findOne({
          where: {
            user_id: req.params.id
          },
          raw: true
        });
      console.log(data);
        //The data is send as a stream to the ui javascript code to handle.
      if(data){
          fileType = data.mimetype;
          fileName = data.fileName;
          fileData = data.data;
          
          const fileContents = Buffer.from(fileData, data.encoding);
          console.log(fileContents);
          const readStream = new stream.PassThrough();
          readStream.end(fileContents);

          res.set('Content-disposition', 'attachment; filename=' + fileName);
          res.set('Content-Type', fileType);

          readStream.pipe(res);
        };
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json(err);   
  }
  
});

router.post('/apply', async (req,res) => {
 console.log(req.body);
 console.log(req.session);

   try{
      const lookup = await Apply.findOne({
            where: {
              projectId: req.body.projectId,
              userId: req.session.user_id 
            }
      });

      if(!lookup){
        const response = await Apply.create({
          projectId : req.body.projectId,
          userId: req.session.user_id  });

          res.status(200).json(response);
      }
      else{
        res.status(200).json(lookup);
      }
      
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

router.post('/', upload.single('resume'), createUser);

async function createUser(req, res)
{ 
  try
  {
    const user = await User.create(req.body);
    console.log(req.body);
    let newskills = [];

    if(user)
    {
      if(req.file)
      {
        const resume = await Resume.create({
          fileName: req.file.originalname,
          encoding: req.file.encoding,
          mimetype: req.file.mimetype,
          data: req.file.buffer,
          user_id: user.id
        });
      };
      
      newskills = req.body.skills;
      if(newskills)
      {
        const userSkillArr = await newskills.map((skills) => 
                                {
                                  return{userId: user.id, skillId: skills};
                                });
        await UserSkill.bulkCreate(userSkillArr);
      }
  
      res.status(200).json(user);
    }
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json(err);
  };
}

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

