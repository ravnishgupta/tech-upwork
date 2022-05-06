const router = require('express').Router();
const { Project,
// Skill
} = require('../../models');

router.get('/', (req, res) => {
  Project.findAll()
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  
  Project.create({
    title: req.body.title,
    description: req.body.description,
    payPerHour: req.body.payPerHour,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    // skillRequired: req.body.skillRequired,
  })
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProjectData => {
      if (!dbProjectData) {
        res.status(404).json({ message: 'No Project found with this id!' });
        return;
      }
      res.json(dbProjectData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;