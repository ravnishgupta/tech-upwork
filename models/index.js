const User = require('./User');
const Project = require("./Project");
const Skill = require('./Skill');
const ProjectSkill = require('./ProjectSkill')
const UserSkill = require('./UserSkill')
const Resume = require('./Resume')



User.belongsToMany(Skill, {through: UserSkill, foreignKey: 'userId'});
Skill.belongsToMany(User, {through: UserSkill, foreignKey: 'skillId'});


Project.belongsToMany(Skill, {through: ProjectSkill, foreignKey: 'projectId'});
Skill.belongsToMany(Project, {through: ProjectSkill, foreignKey: 'skillId'});


Resume.belongsTo(User, 
    {foreignKey: 'user_id'});

// Project.hasMany(User, {foreignKey: 'userId'});
// User.belongsTo(Project, {foreignKey:'projectId'});

module.exports = { User, Project, Skill, ProjectSkill, UserSkill, Resume };