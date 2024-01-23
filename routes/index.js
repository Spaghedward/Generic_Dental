const connection = require('../config/connection');
const inquirer = require('inquirer');
const { viewDepartments, addDepartment } = require('./department');
const { viewEmployees, addEmployee, updateEmployeeRole } = require('./employee');
const { viewRoles, addRole } = require('./role');

function menu() {
    inquirer.prompt({
        name: 'mainMenu',
        type: 'list',
        choices: [
            'View Departments',
            'Add Department',
            'View Employees',
            'Add Employee',
            'Update Employee Role',
            'View Roles',
            'Add Role',
            'Exit',
        ]

    })
    .then(mainMenu => {
    switch (mainMenu) {
        case 'View Departments':
            viewDepartments();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'View Employees':
            viewEmployees();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployeeRole();
            break;
        case 'View Roles':
            viewRoles();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Exit':
            connection.end()

    }
});
};

module.exports = menu;