const router = require('express').Router();
const { Skill } = require('../../models');

router.get('/', (req, res) => {
  Skill.findAll()
    .then(dbSkillData => res.json(dbSkillData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  
  Skill.create({
    
    description: req.body.description,
})
    .then(dbSkillData => res.json(dbSkillData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Skill.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbSkillData => {
      if (!dbSkillData) {
        res.status(404).json({ message: 'No Skill found with this id!' });
        return;
      }
      res.json(dbSkillData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;