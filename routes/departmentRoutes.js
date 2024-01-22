const router = require('express').Router();
const Department = require('../models/department');

async function viewDepartments() {
    const answer = await Department.findAll();
    console.table(answer)
    
}

async function addDepartment() {
    const answer = await inquirer.prompt[{
        name: 'title',
        type: 'input',
        message: 'What is the name of the new department?'
    }]


    const newDepartment = await Department.create({
        name: answer.title
    })

    console.log(`${newDepartment} has been created.`)

}


module.exports = {viewDepartments, addDepartment};