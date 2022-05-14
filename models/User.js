const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
      gitHub: {
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
      aboutMe: {
        type: DataTypes.STRING(1000),
        allowNull: true
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },

    {
        // hooks: {
        //     async beforeCreate(newUserData) {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return newUserData;
        //     },
        //     async beforeUpdate(updatedUserData) {
        //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //         return updatedUserData;
        //     } 
             
        // },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'user'
      }
  );

module.exports = User;