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
