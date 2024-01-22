const inquirer = require('inquirer');
const Employee = require('../models/employee');

async function viewEmployees() {
    const answer = await Role.findAll();
    console.table(answer)
    return menu();
}

async function addEmployee() {
    const answer = await inquirer.prompt[{
        name: 'first',
        type: 'input',
        message: 'First Name.'
    },
    {
        name: 'last',
        type: 'input',
        message: 'Last Name.'
    },
    {
        name: 'title',
        type: 'choices',
        message: 'What is their job title?',
        choices: ['Oral Surgeon', 'Dentist', 'Hygienist', 'Receptionist', 'Office Manager']
    },
    {
        name: 'deptID',
        type: 'number',
        message: 'What is their department ID?'
    },
    {
        name: 'manager',
        type: 'input',
        message: 'Who is managing this person?'
    }
]


    const newEmployee = await Employee.create({
        first_name: answer.first,
        last_name: answer.last,
        title: answer.title,
        department_id: answer.deptID,
        manager: answer.manager    
    })

    console.log(`${newEmployee} has been created.`)
    return menu();
}

async function updateEmployeeRole() {
    const answer = await inquirer.prompt[{
        name: 'id',
        type: 'number',
        message: 'What is the ID for the employee being updated?'
    },
    {
        name: 'role',
        type: 'choices',
        message: 'What is their new role?',
        choices: ['Oral Surgeon', 'Dentist', 'Hygienist', 'Receptionist', 'Office Manager']
    }
]

    const updatedEmployee = await Employee.update(answer.role, {
        where: {
            role: answer.role,
        }
    });

    console.log(`${updatedEmployee} has been updated.`)

}


module.exports = {viewEmployees, addEmployee, updateEmployeeRole};

