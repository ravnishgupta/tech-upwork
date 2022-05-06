const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
    {
      
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firstName : {
        type : DataTypes.STRING(30),
        allowNull: false
      },
      lastName : {
        type : DataTypes.STRING(30),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      },
      github: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
          validate: {
              isUrl: true
          }
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1 //available by default
      },
      hourlyRate: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0
      },
      resume: {
        type: DataTypes.BLOB,
        allowNull: true
      }
    },

    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            } 
             
        },
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
  );

module.exports = User;