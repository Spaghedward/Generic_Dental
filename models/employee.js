const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
    {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        department: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        },
        salary: {
            type: DataTypes.DECIMAL
        },
        manager: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'employee'
    }
);

module.exports = Employee;