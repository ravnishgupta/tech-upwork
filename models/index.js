const User = require('./User');
const Project = require("./Project");
const Skill = require('./Skill');
const ProjectSkill = require('./ProjectSkill')
const UserSkill = require('./UserSkill')
const Resume = require('./Resume')
const Apply = require("./Apply")



User.belongsToMany(Skill, {through: UserSkill, foreignKey: 'userId'});
Skill.belongsToMany(User, {through: UserSkill, foreignKey: 'skillId'});

Project.belongsToMany(Skill, {through: ProjectSkill});
Skill.belongsToMany(Project, {through: ProjectSkill});



User.belongsToMany(Project, 
            {through: Apply, 
            foreignKey:'userId'});
Project.belongsToMany(User, 
                    {through: Apply, 
                        foreignKey: 'projectId'});

Apply.belongsTo(User,
        {foreignKey:'userId'}
    );

    Apply.belongsTo(Project,
        {foreignKey:'projectId'}
    );

Resume.belongsTo(User, 
    {foreignKey: 'user_id'});

// Project.hasMany(User, {foreignKey: 'userId'});
// User.belongsTo(Project, {foreignKey:'projectId'});

module.exports = { User, Project, Skill, ProjectSkill, UserSkill, Resume , Apply};

