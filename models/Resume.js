const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resume extends Model {}

Resume.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      encoding:{
        type: DataTypes.STRING,
        allowNull: false
      },
      mimetype:{
        type: DataTypes.STRING,
        allowNull: false
      },
      data:{
        type: DataTypes.BLOB('long'),
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id'
            },
          }
    },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'resume'
      }
      );

module.exports = Resume;