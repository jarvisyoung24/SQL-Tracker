Employee Tracker
Description
Employee Tracker is a command-line application designed to help businesses efficiently view and manage the departments, roles, and employees in their organization. Built with Node.js, Inquirer, and PostgreSQL, this tool offers a user-friendly interface for organizing and planning a company’s workforce database.

User Story
As a business owner,
I want to be able to view and manage the departments, roles, and employees in my company,
So that I can organize and plan my business effectively.

Acceptance Criteria
View all departments: Displays a formatted table of department names and IDs.
View all roles: Shows job titles, role IDs, associated departments, and salaries.
View all employees: Displays employee IDs, names, job titles, departments, salaries, and managers.
Add a department: Prompts for department name and adds it to the database.
Add a role: Prompts for role name, salary, and department, then adds it to the database.
Add an employee: Prompts for employee's first name, last name, role, and manager, then adds it to the database.
Update an employee role: Prompts to select an employee and update their role in the database.
Bonus Features
Update employee managers.
View employees by manager or department.
Delete departments, roles, and employees.
View the total utilized budget of a department.
Technologies Used
Node.js: Backend JavaScript runtime.
Inquirer: CLI tool for interactive user prompts.
PostgreSQL: Database management system.
pg package: Node.js module for interfacing with PostgreSQL.
Installation
Clone the repository.

bash
Copy code
git clone <repository-url>
Install dependencies.

bash
Copy code
npm install
Set up PostgreSQL and create a .env file with your database credentials.

Create the database tables:

Refer to the schema.sql file for table definitions.
Optionally, use seeds.sql to pre-populate tables.
Usage
Start the application:
bash
Copy code
node index.js
Follow the prompts to interact with the database.
Walkthrough Video
Link to walkthrough video demonstrating application functionality

Database Schema
The schema includes three tables: department, role, and employee.

Department

id: Primary key
name: Department name
Role

id: Primary key
title: Role title
salary: Role salary
department_id: Foreign key referencing department
Employee

id: Primary key
first_name: Employee's first name
last_name: Employee's last name
role_id: Foreign key referencing role
manager_id: Self-referencing key to another employee as the manager
Contributing
Contributions are welcome! Please open a pull request with a clear description.

License
MIT License
