const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Department.init(
    {
        department_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'department'
    }
);

module.exports = Department;