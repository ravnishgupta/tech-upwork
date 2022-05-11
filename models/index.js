const User = require('./User');
const Project = require("./Project");
const Skill = require('./Skill');
const ProjectSkill = require('./ProjectSkill')
const UserSkill = require('./UserSkill')
<<<<<<< HEAD
const Resume = require('./Resume')
=======
const Apply = require("./Apply")
>>>>>>> a2ac69cb6c5d42a9a977daf3e5b6b174bdf42c51



User.belongsToMany(Skill, {through: UserSkill, foreignKey: 'userId'});
Skill.belongsToMany(User, {through: UserSkill, foreignKey: 'skillId'});

User.belongsToMany(Project, {through: Apply, foreignKey:'userId'});
Project.belongsToMany(User, {through: Apply, foreignKey: 'projectId'});


Project.belongsToMany(Skill, {through: ProjectSkill, foreignKey: 'projectId'});
Skill.belongsToMany(Project, {through: ProjectSkill, foreignKey: 'skillId'});

<<<<<<< HEAD

Resume.belongsTo(User, 
    {foreignKey: 'user_id'});

// Project.hasMany(User, {foreignKey: 'userId'});
// User.belongsTo(Project, {foreignKey:'projectId'});

module.exports = { User, Project, Skill, ProjectSkill, UserSkill, Resume };
=======

<<<<<<< HEAD
module.exports = { User, Project, Skill, ProjectSkill, UserSkill, Apply};
=======
module.exports = { User, Project, Skill, ProjectSkill, UserSkill };

>>>>>>> d70c5df1c078ee30f955fef47b01580c55e2794e
>>>>>>> a2ac69cb6c5d42a9a977daf3e5b6b174bdf42c51
