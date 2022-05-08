const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('signup');	
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

module.exports = router;