const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectSkill extends Model {}

ProjectSkill.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        skillID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'skill',
              key: 'id'
            }
        },
        projectID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'project',
              key: 'id'
            }
        }
    },
    {   sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'projectskill'
    }
);

module.exports = ProjectSkill;
