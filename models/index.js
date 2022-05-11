const User = require('./User');
const Project = require("./Project");
const Skill = require('./Skill');
const ProjectSkill = require('./ProjectSkill')
const UserSkill = require('./UserSkill')
const Apply = require("./Apply")

User.belongsToMany(Skill, {through: UserSkill, foreignKey: 'userId'});
Skill.belongsToMany(User, {through: UserSkill, foreignKey: 'skillId'});

User.belongsToMany(Project, {through: Apply, foreignKey:'userId'});
Project.belongsToMany(User, {through: Apply, foreignKey: 'projectId'});


Project.belongsToMany(Skill, {through: ProjectSkill, foreignKey: 'projectId'});
Skill.belongsToMany(Project, {through: ProjectSkill, foreignKey: 'skillId'});


module.exports = { User, Project, Skill, ProjectSkill, UserSkill, Apply};