const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        payPerHour: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
        {   
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: false,
            modelName: 'project'
        }
)

module.exports = project;