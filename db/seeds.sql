use tech_up_work_db;

-- User table
insert into user (firstName, lastName, email, password, gitHub, isAvailable, hourlyRate, aboutMe)
values ('Jill', 'Smith', 'js@yahoo.com', 'abc123', 'github.com/js', 0, 200,
'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla saepe beatae sunt quibusdam fuga placeat nam blanditiis laboriosam doloremque incidunt ab cum deleniti dolores tempora ut perferendis quod laborum. Blanditiis sunt accusamus, nulla voluptatem ratione veritatis rerum non fuga saepe dolores perferendis cupiditate adipisci quam fugiat ut sint a!');

insert into user (firstName, lastName, email, password, gitHub, isAvailable, hourlyRate, aboutMe)
values ('Will', 'Smith', 'ws@yahoo.com', 'slap123', 'github.com/slap', 0, 150,
'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla saepe beatae sunt quibusdam fuga placeat nam blanditiis laboriosam doloremque incidunt ab cum deleniti dolores tempora ut perferendis quod laborum. Blanditiis sunt accusamus, nulla voluptatem ratione veritatis rerum non fuga saepe dolores perferendis cupiditate adipisci quam fugiat ut sint a!');

insert into user (firstName, lastName, email, password, gitHub, isAvailable, hourlyRate, aboutMe)
values ('Jill', 'Klein', 'jk@yahoo.com', 'abc123', 'github.com/jk', 0, 200,
'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla saepe beatae sunt quibusdam fuga placeat nam blanditiis laboriosam doloremque incidunt ab cum deleniti dolores tempora ut perferendis quod laborum. Blanditiis sunt accusamus, nulla voluptatem ratione veritatis rerum non fuga saepe dolores perferendis cupiditate adipisci quam fugiat ut sint a!');

insert into user (firstName, lastName, email, password, gitHub, isAvailable, hourlyRate, aboutMe)
values ('Calvin', 'Klein', 'ck@yahoo.com', 'abc123', 'github.com/ck', 0, 200,
'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla saepe beatae sunt quibusdam fuga placeat nam blanditiis laboriosam doloremque incidunt ab cum deleniti dolores tempora ut perferendis quod laborum. Blanditiis sunt accusamus, nulla voluptatem ratione veritatis rerum non fuga saepe dolores perferendis cupiditate adipisci quam fugiat ut sint a!');

-- Project table
insert into project (title, description, payPerHour, startDate, endDate)
values ('Software Infrastructure- Cloud', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, nulla saepe beatae sunt quibusdam fuga placeat nam blanditiis laboriosam doloremque incidunt ab cum deleniti dolores tempora ut perferendis quod laborum. Blanditiis sunt accusamus, nulla voluptatem ratione veritatis rerum non fuga saepe dolores perferendis cupiditate adipisci quam fugiat ut sint a!',
 100, '2022-06-01', '2022-12-31');

insert into project (title, description, payPerHour, startDate, endDate)
values ('Internal applications', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus natus aspernatur ab tempore, veritatis hic fugit, illo, provident expedita repellat ipsam? A facilis voluptate, commodi eveniet, totam dicta, pariatur perferendis asperiores architecto repellendus harum molestiae quis qui ipsum veniam fugiat quaerat. Alias enim aliquam possimus omnis ipsum saepe sapiente rem corrupti commodi id. Ratione, dicta iure. Impedit corrupti odit ullam quis minus, earum ipsam aliquid harum sapiente dolor! Quam velit pariatur et sint rem quas, in eveniet iusto, assumenda tempore beatae ipsa eius reprehenderit fuga accusamus animi, praesentium ratione dicta ullam est numquam. Minus ratione, animi aperiam placeat non distinctio!',
 140, '2022-05-15', '2023-05-01');

insert into project (title, description, payPerHour, startDate, endDate)
values ('Full Stack JS', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quam tempora quisquam voluptate temporibus laborum quod excepturi incidunt laboriosam!', 
90, '2022-06-01', '2022-12-31');

insert into project (title, description, payPerHour, startDate, endDate)
values ('React Project', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quam tempora quisquam voluptate temporibus laborum quod excepturi incidunt laboriosam!',
 100, '2022-06-01', '2022-12-31');

insert into project (title, description, payPerHour, startDate, endDate)
values ('Java Project', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quam tempora quisquam voluptate temporibus laborum quod excepturi incidunt laboriosam!',
 250, 
'2022-06-01', '2022-12-31');

-- Skill table
insert into skill (description)
values ('JavaScript');

insert into skill (description)
values ('Java');

insert into skill (description)
values ('C#');

insert into skill (description)
values ('React');

insert into skill (description)
values ('Bootstrap');

insert into skill (description)
values ('Express');

insert into skill (description)
values ('Node');

-- UserSkill table
-- user id 1
insert into userskill (skillid, userid)
values (1,1);

insert into userskill (skillid, userid)
values (2,1);

insert into userskill (skillid, userid)
values (3,1);

insert into userskill (skillid, userid)
values (4,1);

insert into userskill (skillid, userid)
values (5,1);

insert into userskill (skillid, userid)
values (6,1);

-- user id 2
insert into userskill (skillid, userid)
values (1,2);

insert into userskill (skillid, userid)
values (2,2);

insert into userskill (skillid, userid)
values (3,2);

insert into userskill (skillid, userid)
values (4,2);

insert into userskill (skillid, userid)
values (5,2);

-- user id 3

insert into userskill (skillid, userid)
values (1,3);

insert into userskill (skillid, userid)
values (2,3);

insert into userskill (skillid, userid)
values (3,3);

-- user id 4
insert into userskill (skillid, userid)
values (1,4);

insert into userskill (skillid, userid)
values (2,4);

-- Project skill table
-- project id 1
insert into projectskill (skillid, projectId)
values (1,1);

insert into projectskill (skillid, projectId)
values (2,1);

insert into projectskill (skillid, projectId)
values (3,1);

insert into projectskill (skillid, projectId)
values (4,1);

insert into projectskill (skillid, projectId)
values (5,1);

insert into projectskill (skillid, projectId)
values (6,1);

-- project id 2
insert into projectskill (skillid, projectId)
values (1,2);

insert into projectskill (skillid, projectId)
values (2,2);

insert into projectskill (skillid, projectId)
values (3,2);

insert into projectskill (skillid, projectId)
values (4,2);

insert into projectskill (skillid, projectId)
values (5,2);

-- project id 3

insert into projectskill (skillid, projectId)
values (1,3);

insert into projectskill (skillid, projectId)
values (2,3);

insert into projectskill (skillid, projectId)
values (3,3);

-- project id 4
insert into projectskill (skillid, projectId)
values (1,4);

insert into projectskill (skillid, projectId)
values (2,4);