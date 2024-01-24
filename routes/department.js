const inquirer = require('inquirer');
const db = require('../config/connection');
const menu = require('./index');

const viewDepartments = () => {
    const sql = `SELECT * FROM department`;
   db.query(sql, (err, res) => {
        if (err) throw err;
        const departments = res;
        return departments;
        
    });
    
};

function addDepartment() {
   return inquirer.prompt[{
        name: 'title',
        type: 'input',
        message: 'What is the name of the new department?'
    }]
    .then(answer => {
        const sql = `INSERT INTO department (department_name)
        VALUES ('${answer.title}')`;
        db.query(sql, (err => {
        if (err) throw err;
        console.table
        menu();
    }));
        
  });
  
};


module.exports = { viewDepartments, addDepartment };