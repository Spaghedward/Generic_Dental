DROP DATABASE IF EXISTS genericDental_db;
CREATE DATABASE genericDental_db;

USE genericDental_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE TABLE
    department (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        department_name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    roles (
        role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        department_id INTEGER,
        salary DECIMAL(7) NOT NULL,
        ADD CONSTRAINT PK_Role FOREIGN KEY (department_id) REFERENCES department(id)
    );

CREATE TABLE
    employee (
        employee_id INTEGER AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        department_id INTEGER,
        role VARCHAR(30),
        salary DECIMAL(7), 
        manager VARCHAR(30),
        FOREIGN KEY (department_id) REFERENCES department(id)
    );