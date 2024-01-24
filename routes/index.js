const db = require('../config/connection');
const inquirer = require('inquirer');
// const { addDepartment, viewDepartments } = require('./department');
// const { viewEmployees, addEmployee, updateEmployeeRole } = require('./employee');
// const { viewRoles, addRole } = require('./role');

function menu() {
            console.log("***********************************");
            console.log("***********************************");
            console.log("*                                 *");
            console.log("*        Generic Dental           *");
            console.log("*                                 *");
            console.log("***********************************");
            console.log("***********************************");
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
    .then(async (choice) => {
    switch (choice.mainMenu) {
        case 'View Departments':
            console.log("***********************************");
            console.log("***********************************");
            console.log("*                                 *");
            console.log("*           Departments           *");
            console.log("*                                 *");
            console.log("***********************************");
            console.log("***********************************");
            const departments = await viewDepartments();
            console.table(departments);
            break;
        case 'Add Department':
            console.log("***********************************");
            console.log("***********************************");
            const addDept = await addDepartment();
            console.log('Department Added')
            break;
        case 'View Employees':
            console.log("***********************************");
            console.log("***********************************");
            console.log("*                                 *");
            console.log("*            Employees            *");
            console.log("*                                 *");
            console.log("***********************************");
            console.log("***********************************");
            const employees = await viewEmployees();
            console.table(employees);
            break;
        case 'Add Employee':
            console.log("***********************************");
            console.log("***********************************");
            addEmployee();
            break;
        case 'Update Employee Role':
            console.log("***********************************");
            console.log("***********************************");
            updateEmployeeRole();
            break;
        case 'View Roles':
            console.log("***********************************");
            console.log("***********************************");
            console.log("*                                 *");
            console.log("*              Roles              *");
            console.log("*                                 *");
            console.log("***********************************");
            console.log("***********************************");
            const roles = await viewRoles();
            console.table(roles);
            break;
        case 'Add Role':
            console.log("***********************************");
            console.log("***********************************");
            addRole();
            break;
        case 'Exit':
            console.log("Goodbye")
            db.end()

    }
});
};

const viewDepartments = () => {
    const sql = `SELECT * FROM department`;
   db.query(sql, (err, res) => {
        if (err) throw err;
        
    });
    
};

async function addDepartment() {
   const answer = await inquirer.prompt(
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of the new department?'
    })
        const sql = `INSERT INTO department (department_name)
        VALUES ('${answer}')`;
        const newDept = await db.query(sql, (err => {
        if (err) throw err;
        return newDept;
        
   
    }));
  
};

const viewEmployees = () => {
    const sql = `SELECT * FROM employee`;
   db.query(sql, (err, res) => {
        if (err) throw err;
        
    });
    
};

function addEmployee() {
    return inquirer.prompt([
        {
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
])
.then(answer => {
    const sql = `INSERT INTO employee (first_name, last_name, department_id, role, manager)
        VALUES ('${answer.first}', '${answer.last}', '${answer.deptID}', '${answer.title}', '${answer.manager}')`;
        db.query(sql, (err => {
            if (err) throw err;
            
        }));
});
};

function updateEmployeeRole() {
    return inquirer.prompt([
        {
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
])
.then(answer => {
    const sql = `UPDATE employee SET role = '${answer.role}' WHERE employee_id = '${answer.id}'`;
    db.query(sql, (err => {
        if (err) throw err;
        
    }))
})
};

const viewRoles = () => {
    const sql = `SELECT * FROM roles`;
   db.query(sql, (err, res) => {
        if (err) throw err;
        
    });
    
};

function addRole() {
   return inquirer.prompt([
    {
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
    }
])
    .then(answer => {
        const sql = `INSERT INTO roles (title, department_id, salary)
        VALUES ('${answer.title}', '${answer.department}', '${answer.salary}')`;
    db.query(sql, (err => {
        if (err) throw err;
        
    }));
        
  });
  
};

menu();
