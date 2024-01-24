const getEmployees = 'SELECT * FROM employees';
const addEmployee = 'INSERT INTO employees (team_id, name, role) VALUES ($1, $2, $3) RETURNING id, team_id, name, role;';

module.exports = {
  getEmployees,
  addEmployee,
}