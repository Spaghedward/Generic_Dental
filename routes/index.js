const connection = require('../config/connection');
const inquirer = require('inquirer');
const {viewDepartments, addDepartment} = require('./departmentRoutes');
const {viewEmployees, addEmployee, updateEmployeeRole} = require('./employeeRoutes');
const {viewRoles, addRole} = require('./roleRoutes');

async function menu() {
    const choice = await inquirer.prompt({
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
    switch(choice) {
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
};

menu();