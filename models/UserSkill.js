const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserSkill extends Model {}

UserSkill.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        skillId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'skill',
              key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id'
            }
        }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: false,
      modelName: 'userskill'
    }
);

module.exports = UserSkill;