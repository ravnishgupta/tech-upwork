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
    res.render('signup');	
});

router.get('/file', async (req, res) => {
    res.render('file');	
});

router.get('/file/:id', async (req, res) => {
    
    console.log(req.params.id);
    const data = await  
    Resume.findOne({
        where: {
          user_id: req.params.id
        },
        raw: true
      });

     if(data){
        fileType = data.mimetype;
        fileName = data.fileName;
        fileData = data.data;

        console.log(fileType);
        console.log(fileName);
        console.log(fileData);
        const fileContents = Buffer.from(fileData, data.encoding);
        console.log(fileContents);
        const readStream = new stream.PassThrough();
        readStream.end(fileContents);

        res.set('Content-disposition', 'attachment; filename=' + fileName);
        res.set('Content-Type', fileType);

        readStream.pipe(res);
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