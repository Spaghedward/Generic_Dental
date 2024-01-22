const inquirer = require('inquirer');
const Role = require('../models/role');

async function viewRoles() {
    const answer = await Role.findAll();
    console.table(answer)
    
}

async function addRole() {
    const answer = await inquirer.prompt[{
        name: 'title',
        type: 'input',
        message: 'What is the title of the role?'
    },
    {
        name: 'department',
        type: 'input',
        message: 'What is the department id for this role?'
    },
    {
        name: 'salary',
        type: 'input',
        message: 'What is the salary for this position?'
    }]


    const newRole = await Role.create({
        title: answer.title,
        department_id: answer.department,
        salary: answer.salary
        
    })

    console.log(`${newRole} has been created.`)
    return menu();
}


module.exports = {viewRoles, addRole};