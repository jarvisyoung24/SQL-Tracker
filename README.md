Employee Tracker
-----------------

Description
------------
Employee Tracker is a robust command-line application designed to help businesses effectively manage and organize their workforce. Built with Node.js, Inquirer, and PostgreSQL, this tool provides a user-friendly interface to view and manage departments, roles, and employees within a company. It enables business owners to efficiently plan their organizational structure and make data-driven decisions.

User Story
----------
As a business owner, I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business effectively.

Acceptance Criteria

View all departments: Displays a formatted table of department names and IDs.

View all roles: Shows job titles, role IDs, associated departments, and salaries.

View all employees: Displays employee IDs, names, job titles, departments, salaries, and managers.

Add a department: Prompts for department name and adds it to the database.

Add a role: Prompts for role name, salary, and department, then adds it to the database.

Add an employee: Prompts for the employee's first name, last name, role, and manager, then adds it to the database.

Update an employee role: Prompts to select an employee and update their role in the database.

Features 
---------

Update employee managers.

View employees by manager or department.

Delete departments, roles, and employees.

View the total utilized budget of a department.

Technologies Used

Node.js: Backend JavaScript runtime environment.

Inquirer: CLI tool for interactive user prompts.

PostgreSQL: Database management system.

pg package: Node.js module for interfacing with PostgreSQL.

Installation
------------

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Set up PostgreSQL: Create a .env file in the root directory with your database credentials:

DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=employee_tracker

Create database tables:

Refer to the schema.sql file for table definitions.

Optionally, use seeds.sql to pre-populate the database with sample data.

Usage

Start the application:

node index.js

Follow the prompts to interact with the database:

View departments, roles, and employees.

Add or update departments, roles, and employees.

Perform additional actions such as deleting records or viewing the department budget.

Database Schema

Tables

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
