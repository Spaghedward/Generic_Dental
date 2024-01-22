INSERT INTO department (department_id, name)
VALUES
    (1, "Doctors"),
    (2, "Hygiene"),
    (3, "Office");

INSERT INTO role (role_id, title, department_id, salary)
VALUES
    (1, "Oral Surgeon", 1, 450000),
    (2, "Dentist", 1, 300000),
    (3, "Hygienist", 2, 75000),
    (4, "Receptionist", 3, 40000),
    (5, "Office Manager", 3, 80000);

INSERT INTO employee (employee_id, first_name, last_name, department_id, role, salary, manager)
VALUES
    (1, "Curt", "Connors", 1, "Oral Surgeon", 450000, "Owner"),
    (2, "Victor", "Von Doom", 1, "Dentist", 300000, "Dr. Connors"),
    (3, "Remy", "LeBeau", 2, "Hygienist", 75000, "Dr. Connors"),
    (4, "Ben", "Grimm", 2, "Hygienist", 75000, "Dr. Connors"),
    (5, "Ororo", "Monroe", 2, "Hygienist", 75000, "Dr. Connors"),
    (6, "Norrin", "Radd", 3, "Receptionist", 40000, "Taa-an Galan")
    (7, "Taa-an", "Galan", 3, "Office Manager", 80000, "Dr. Connors");