const router = require('express').Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const fs = require("fs");
const stream = require("stream");
const { User, Resume, Project,Skill, ProjectSkill, Apply } = require('../models');
const 
sequelize  = require('../config/connection');


router.get('/', async (req, res) => {

    if(req.session.loggedIn)
    {
        res.redirect('/home');
        return;
    }
    res.render('login');	
});

router.get('/signup', async (req, res) => {
    let skills = await  Skill.findAll();
    if(skills)
    {
        skills = skills.map(p => p.get({ plain: true}));
        res.render('signup',{skills});	
    }
    else{
        res.render('signup');
    }
   	
});

router.get('/login', async (req, res) => {
    res.render('login');	
});

router.get('/home', async (req, res) => {

   let projects = await Project.findAll({ include: [Skill, User] });

   if(projects)
   {
    projects = projects.map(p => p.get({ plain: true}));
  
   };

   res.render('projects', {projects});	
});


router.get('/projects', async (req, res) => {

   let projects = await Project.findAll({ attributes:['id', 'title',
            'description',
            'payPerHour',
            'startDate',
            'endDate',
            [sequelize.literal('(SELECT COUNT(*) FROM apply where apply.projectId = project.id)'),'applicant_count']
            ],
       include: [Skill, User] });

   if(projects)
   {
    projects = projects.map(p => p.get({ plain: true}));
      
   }

   res.render('adminprojects', {projects});	
});

router.get('/showapplicants/:id', async (req, res) => {

    let projects = await Project.findOne({
                                where:{
                                    id: req.params.id
                                },
                                 attributes:['id', 'title',
                                   'description',
                                   'payPerHour',
                                   'startDate',
                                   'endDate',
                                   [sequelize.literal('(SELECT COUNT(*) FROM apply where apply.projectId = project.id)'),'applicant_count']
                                ],
                                 include: [Skill, User] });
    
    if(projects)
    {
        projects = projects.get({ plain: true});
        
    }
    console.log(projects);
    res.render('showapplicants', {projects});	
});

router.get('/dashboard', async (req, res) => {

   let user = await User.findOne({
                    attributes: { exclude: ['password'] },
                    where: {
                    id: req.session.user_id
                    },
                    include: [Project]
                });
   user = user.get({ plain: true});
   console.log(user);

   res.render('dashboard', {user});	
});

router.get('/talents', async (req, res) => {

    let talents = await User.findAll({ include: [Skill] });

    if(talents)
    {
        talents = talents.map(p => p.get({ plain: true}));
        
    }
    res.render('talents', {talents});	
});

module.exports = router;