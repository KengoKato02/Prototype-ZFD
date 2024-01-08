const pool = require('../../db');
const bcrypt = require('bcrypt');

const createUser = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10); // Use a suitable saltRounds value, such as 10
  const result = await pool.query(
    'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
    [email, hashedPassword]
  );
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);
  return result.rows[0];
};

module.exports = {
  getUserByEmail,
  createUser,
};
