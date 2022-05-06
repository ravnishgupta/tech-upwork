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
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
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
          },
    },
    {   sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'skill'
    }
)

module.exports = Skill;