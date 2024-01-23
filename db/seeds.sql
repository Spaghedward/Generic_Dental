INSERT INTO department (department_name)
VALUES
    ("Doctors"),
    ("Hygiene"),
    ("Office");

INSERT INTO roles (title, department_id, salary)
VALUES
    ("Oral Surgeon", 1, 450000),
    ("Dentist", 1, 300000),
    ("Hygienist", 2, 75000),
    ("Receptionist", 3, 40000),
    ("Office Manager", 3, 80000);

INSERT INTO employee (first_name, last_name, department_id, role, salary, manager)
VALUES
    ("Curt", "Connors", 1, "Oral Surgeon", 450000, "Owner"),
    ("Victor", "Von Doom", 1, "Dentist", 300000, "Dr. Connors"),
    ("Remy", "LeBeau", 2, "Hygienist", 75000, "Dr. Connors"),
    ("Ben", "Grimm", 2, "Hygienist", 75000, "Dr. Connors"),
    ("Ororo", "Monroe", 2, "Hygienist", 75000, "Dr. Connors"),
    ("Norrin", "Radd", 3, "Receptionist", 40000, "Taa-an Galan"),
    ("Taa-an", "Galan", 3, "Office Manager", 80000, "Dr. Connors");