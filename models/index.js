const User = require('./User');
const Project = require("./Project");
const Skill = require('./Skill');
const ProjectSkill = require('./ProjectSkill')
const UserSkill = require('./UserSkill')

User.hasMany(UserSkill, {
    foreignKey: 'userID'
})

Project.hasMany(ProjectSkill, {
    foreignKey: 'projectID'
})




module.exports = { User, Project, Skill, ProjectSkill, UserSkill };