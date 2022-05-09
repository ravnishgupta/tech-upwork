const router = require('express').Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    res.render('signup');	
});

router.get('/file', async (req, res) => {
    res.render('file');	
});

router.post('/fupload', upload.single('file-upload'), function(req, res, next){
    console.log(req.file);

});

router.get('/projects', async (req, res) => {

     const projects=[{
        id:1,
        title: "Software Developer Infrastructure- Cloud",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla saepe beatae sunt quibusdam fuga placeat nam blanditiis laboriosam doloremque incidunt ab cum deleniti dolores tempora ut perferendis quod laborum. Blanditiis sunt accusamus, nulla voluptatem ratione veritatis rerum non fuga saepe dolores perferendis cupiditate adipisci quam fugiat ut sint a!",
        payPerHour: 50,
        startDate :'06-01-2022',
        endDate :'12-31-2022',
        skills: ['C#', 'Kubernetes', 'Docker']
    },
    {
        id:2,
        title: "Senior Manager- Internal applications",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus natus aspernatur ab tempore, veritatis hic fugit, illo, provident expedita repellat ipsam? A facilis voluptate, commodi eveniet, totam dicta, pariatur perferendis asperiores architecto repellendus harum molestiae quis qui ipsum veniam fugiat quaerat. Alias enim aliquam possimus omnis ipsum saepe sapiente rem corrupti commodi id. Ratione, dicta iure. Impedit corrupti odit ullam quis minus, earum ipsam aliquid harum sapiente dolor! Quam velit pariatur et sint rem quas, in eveniet iusto, assumenda tempore beatae ipsa eius reprehenderit fuga accusamus animi, praesentium ratione dicta ullam est numquam. Minus ratione, animi aperiam placeat non distinctio!",
        payPerHour: 80,
        startDate :'05-15-2022',
        endDate :'05-15-2023'        ,
        skills: ['C#', 'Kubernetes', 'Docker']
    },
    {
        id:3,
        title: "Principal Software Developer - Java, backend",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quam tempora quisquam voluptate temporibus laborum quod excepturi incidunt laboriosam!",
        payPerHour: 75,
        startDate :'06-01-2022',
        endDate :'12-31-2022',
        skills: ['C#', 'Kubernetes', 'Docker']
    }
    ];

    //console.log(projects);

   /* res.render('projects', {
        title: "Software Developer Infrastructure- Cloud",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla saepe beatae sunt quibusdam fuga placeat nam blanditiis laboriosam doloremque incidunt ab cum deleniti dolores tempora ut perferendis quod laborum. Blanditiis sunt accusamus, nulla voluptatem ratione veritatis rerum non fuga saepe dolores perferendis cupiditate adipisci quam fugiat ut sint a!",
        payPerHour: 50,
        startDate :'06-01-2022',
        endDate :'12-31-2022'
    });	*/

    res.render('projects', {projects});	
});

router.get('/talents', async (req, res) => {
    const talents=[{
        id:1,
        firstname: "Terry",
        lastname: "Pratchett",
        email: "fake2@email.com",
        gitHub :"fake2@email.com",
        isAvailable :true,
        hourlyRate: 60,
        aboutMe: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla saepe beatae sunt quibusdam fuga placeat nam blanditiis laboriosam doloremque incidunt ab cum deleniti dolores tempora ut perferendis quod laborum. Blanditiis sunt accusamus, nulla voluptatem ratione veritatis rerum non fuga saepe dolores perferendis cupiditate adipisci quam fugiat ut sint a!",
        skills: ['C#', 'Kubernetes', 'Docker']
    },
    {
        id:2,
        firstname: "Brandon",
        lastname: "Mull",
        email: "fake1@email.com",
        gitHub :"fake1@email.com",
        isAvailable :true,
        hourlyRate: 65.75,
        aboutMe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus natus aspernatur ab tempore, veritatis hic fugit, illo, provident expedita repellat ipsam? A facilis voluptate, commodi eveniet, totam dicta, pariatur perferendis asperiores architecto repellendus harum molestiae quis qui ipsum veniam fugiat quaerat. Alias enim aliquam possimus omnis ipsum saepe sapiente rem corrupti commodi id. Ratione, dicta iure. Impedit corrupti odit ullam quis minus, earum ipsam aliquid harum sapiente dolor! Quam velit pariatur et sint rem quas, in eveniet iusto, assumenda tempore beatae ipsa eius reprehenderit fuga accusamus animi, praesentium ratione dicta ullam est numquam. Minus ratione, animi aperiam placeat non distinctio!",
        skills: ['C#', 'Kubernetes', 'Docker']
    },
    {
        id:3,
        firstname: "Elizabeth",
        lastname: "Peters",
        email: "fake3@email.com",
        gitHub :"fake3@email.com",
        isAvailable :false,
        hourlyRate: 100,
        aboutMe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus natus aspernatur ab tempore, veritatis hic fugit, illo, provident expedita repellat ipsam? A facilis voluptate, commodi eveniet, totam dicta, pariatur perferendis asperiores architecto repellendus harum molestiae quis qui ipsum veniam fugiat quaerat. Alias enim aliquam possimus omnis ipsum saepe sapiente rem corrupti commodi id. Ratione, dicta iure. Impedit corrupti odit ullam quis minus, earum ipsam aliquid harum sapiente dolor! Quam velit pariatur et sint rem quas, in eveniet iusto, assumenda tempore beatae ipsa eius reprehenderit fuga accusamus animi, praesentium ratione dicta ullam est numquam. Minus ratione, animi aperiam placeat non distinctio!",
        skills: ['C#', 'Kubernetes', 'Docker']
    }
    ];

    res.render('talents', {talents});	
});

module.exports = router;