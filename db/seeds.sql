INSERT INTO department (department_id, name)
VALUES
    (1, "Doctors"),
    (2, "Hygiene"),
    (3, "Office");

INSERT INTO role (role_id, title, department, salary)
VALUES
    (1, "Oral Surgeon", "Doctors", 450000),
    (2, "Dentist", "Doctors", 300000),
    (3, "Hygienist", "Hygiene", 75000),
    (4, "Receptionist", "Office", 40000),
    (5, "Office Manager", "Office", 80000);

INSERT INTO employee (employee_id, first_name, last_name, department, role, salary, manager)
VALUES
    (1, "Curt", "Connors", "Doctors", "Oral Surgeon", 450000, "Owner"),
    (2, "Victor", "Von Doom", "Doctors", "Dentist", 300000, "Dr. Connors"),
    (3, "Remy", "LeBeau", "Hygiene", "Hygienist", 75000, "Dr. Connors"),
    (4, "Ben", "Grimm", "Hygiene", "Hygienist", 75000, "Dr. Connors"),
    (5, "Ororo", "Monroe", "Hygiene", "Hygienist", 75000, "Dr. Connors"),
    (6, "Norrin", "Radd", "Office", "Receptionist", 40000, "Taa-an Galan")
    (7, "Taa-an", "Galan", "Office", "Office Manager", 80000, "Dr. Connors");