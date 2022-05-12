use tech_up_work_db;

-- User table
insert into user (firstName, lastName, email, password, gitHub, isAvailable, hourlyRate)
values ('Jill', 'Smith', 'js@yahoo.com', 'abc123', 'github.com/js', 0, 200);

insert into user (firstName, lastName, email, password, gitHub, isAvailable, hourlyRate)
values ('Will', 'Smith', 'ws@yahoo.com', 'slap123', 'github.com/slap', 0, 150);

insert into user (firstName, lastName, email, password, gitHub, isAvailable, hourlyRate)
values ('Jill', 'Klein', 'jk@yahoo.com', 'abc123', 'github.com/jk', 0, 200);

insert into user (firstName, lastName, email, password, gitHub, isAvailable, hourlyRate)
values ('Calvin', 'Klein', 'ck@yahoo.com', 'abc123', 'github.com/ck', 0, 200);

-- Project table
insert into project (title, description, payPerHour, startDate, endDate)
values ('Full Stack C#', 'Full Stack C#', 100, '2022-01-01', '2022-05-01');

insert into project (title, description, payPerHour, startDate, endDate)
values ('Full Stack JS', 'Full Stack JS', 90, '2022-01-01', '2022-12-31');

insert into project (title, description, payPerHour, startDate, endDate)
values ('React Project', 'React Project', 100, '2021-06-01', '2021-12-31');

insert into project (title, description, payPerHour, startDate, endDate)
values ('Java Project', 'Java Project', 250, '2021-06-01', '2021-12-31');

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