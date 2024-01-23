const inquirer = require('inquirer');
const db = require('../config/connection');
const menu = require('./index');

function viewEmployees() {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
    });
    
    
};

function addEmployee() {
    return inquirer.prompt[{
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
.then(answer => {
    const sql = `INSERT INTO employee (first_name, last_name, department_id, role, manager)
        VALUES ('${answer.first}', '${answer.last}', '${answer.deptID}', '${answer.title}', '${answer.manager}')`;
        db.query(sql, (err => {
            if (err) throw err;
            menu();
        }));
});
};

function updateEmployeeRole() {
    return inquirer.prompt[{
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
.then(answer => {
    const sql = `UPDATE employee SET role = '${answer.role}' WHERE employee_id = '${answer.id}'`;
    db.query(sql, (err => {
        if (err) throw err;
        menu();
    }))
})
}


module.exports = { viewEmployees, addEmployee, updateEmployeeRole };

