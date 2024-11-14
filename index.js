const inquirer = require('inquirer');
const db = require('./db');
const consoleTable = require('console.table');

async function mainMenu() {
    try {
        const { choice } = await inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit'
            ]
        }]);

        switch (choice) {
            case 'View All Employees':
                await viewAllEmployees();
                break;
            case 'View All Roles':
                await viewAllRoles();
                break;
            case 'View All Departments':
                await viewAllDepartments();
                break;
            case 'Add Employee':
                await addEmployee();
                break;
            case 'Add Role':
                await addRole();
                break;
            case 'Add Department':
                await addDepartment();
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit();
                break;
            default:
                mainMenu();
        }
    } catch (err) {
        console.error('An error occurred:', err);
        
    }
}

async function viewAllEmployees() {
    try {
        const result = await db.viewAllEmployees();
        console.table(result.rows);
    } catch (err) {
        console.error('Error fetching employees:', err);
    } finally {
        mainMenu();
    }
}

async function viewAllRoles() {
    try {
        const result = await db.viewAllRoles();
        console.table(result.rows);
    } catch (err) {
        console.error('Error fetching roles:', err);
    } finally {
        mainMenu();
    }
}

async function viewAllDepartments() {
    try {
        const result = await db.viewAllDepartments();
        console.table(result.rows);
    } catch (err) {
        console.error('Error fetching departments:', err);
    } finally {
        mainMenu();
    }
}

async function addEmployee() {
    try {
        const roles = await db.viewAllRoles();
        const employees = await db.viewAllEmployees();

        const roleChoices = roles.rows.map(({ id, title }) => ({ name: title, value: id }));
        const managerChoices = employees.rows.map(({ id, first_name, last_name }) => ({ name: `${first_name} ${last_name}`, value: id }));
        managerChoices.unshift({ name: 'None', value: null });

        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "Enter the employee's first name:",
                validate: input => input ? true : 'First name cannot be empty.'
            },
            {
                type: 'input',
                name: 'last_name',
                message: "Enter the employee's last name:",
                validate: input => input ? true : 'Last name cannot be empty.'
            },
            {
                type: 'list',
                name: 'role_id',
                message: "Select the employee's role:",
                choices: roleChoices
            },
            {
                type: 'list',
                name: 'manager_id',
                message: "Select the employee's manager:",
                choices: managerChoices
            }
        ]);

        await db.addEmployee([answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);
        console.log('Employee added successfully.');
    } catch (err) {
        console.error('Error adding employee:', err);
    } finally {
        mainMenu();
    }
}

async function addRole() {
    try {
        const departments = await db.getDepartments();
        const departmentChoices = departments.map(({ id, name }) => ({ name, value: id }));

        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: "Enter the role's title:",
                validate: input => input ? true : 'Title cannot be empty.'
            },
            {
                type: 'input',
                name: 'salary',
                message: "Enter the role's salary:",
                validate: input => {
                    const valid = !isNaN(input) && parseFloat(input) > 0;
                    return valid || 'Please enter a valid positive number.';
                }
            },
            {
                type: 'list',
                name: 'department_id',
                message: "Select the department for this role:",
                choices: departmentChoices
            }
        ]);

        await db.addRole(answers.title, parseFloat(answers.salary), answers.department_id);
        console.log('Role added successfully.');
    } catch (err) {
        console.error('Error adding role:', err);
    } finally {
        mainMenu();
    }
}

async function addDepartment() {
    try {
        const { name } = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the department's name:",
                validate: input => input ? true : 'Department name cannot be empty.'
            }
        ]);

        await db.addDepartment(name);
        console.log('Department added successfully.');
    } catch (err) {
        console.error('Error adding department:', err);
    } finally {
        mainMenu();
    }
}

// Start the application
mainMenu();