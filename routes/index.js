const connection = require('../config/connection');
const inquirer = require('inquirer');
const {} = require('./departmentRoutes');
const {} = require('./employeeRoutes');
const {} = require('./roleRoutes');

async function menu() {
    const choices = await inquirer.prompt({
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
    switch(choices) {
        case 'View Departments':
            viewDepartments();
            break;
        case 'Add Department':
            addDepartments();
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
            addAbortListener();
            break;
        case 'Exit':
          connection.end()  

    }
};

menu();