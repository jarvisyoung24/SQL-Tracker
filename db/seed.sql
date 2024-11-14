INSERT INTO department (name) VALUES 
('Engineering'),
('Finance'),
('Human Resources'),
('Marketing');

-- Insert Roles
INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 80000, 1),
('Senior Software Engineer', 100000, 1),
('Accountant', 70000, 2),
('HR Manager', 75000, 3),
('Marketing Specialist', 65000, 4);

-- Insert Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Wayne', 'Bruce', 2, NULL),
('Kent', 'Clark', 2, 1),
('Parker', 'Peter', 3, NULL),
('Stark', 'Tony', 4, NULL),
('Stewart', 'John', 5, NULL),
('Grimes', 'Rick', 1, 2),
('Danvers', 'Carol', 1, 1);