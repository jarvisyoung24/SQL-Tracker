const pool = require('./connection');

module.exports = {

    viewAllEmployees() {
        return pool.query(`
            SELECT 
                employee.id,
                employee.first_name,
                employee.last_name,
                role.title,
                department.name AS department,
                role.salary,
                CONCAT(manager.first_name, ' ', manager.last_name) AS manager
            FROM
                employee
            LEFT JOIN role ON employee.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            LEFT JOIN employee manager ON employee.manager_id = manager.id;
        `);
    },

    viewAllRoles() {
        return pool.query(`
            SELECT 
                role.id,
                role.title,
                role.salary,
                department.name AS department
            FROM
                role
            LEFT JOIN department ON role.department_id = department.id;
        `);
    },

    viewAllDepartments() {
        return pool.query(`
            SELECT 
                department.id,
                department.name
            FROM
                department;
        `);
    },

    addEmployee(employee) {
        return pool.query('INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES($1,$2,$3,$4)', employee);
    },

    addRole(role) {
        return pool.query('INSERT INTO role SET ?', role);
    },

    addDepartment(department) {
        return pool.query('INSERT INTO department (name) VALUES($1)', [department]);
    },

    updateEmployeeRole(employeeId, roleId) {
        return pool.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
    }

};