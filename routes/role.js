const inquirer = require('inquirer');
const db = require('../config/connection');
const menu = require('./index');

function viewRoles() {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
    });
    
    
};

function addRole() {
   return inquirer.prompt[{
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
    .then(answer => {
        const sql = `INSERT INTO roles (title, department_id, salary)
        VALUES ('${answer.title}', '${answer.department}', '${answer.salary}')`;
    db.query(sql, (err => {
        if (err) throw err;
        menu();
    }));
        
  });
  
};



module.exports = { viewRoles, addRole };