const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model {}

Skill.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true 
        }
    },
    {   sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'skill'
    }
)

module.exports = Skill;