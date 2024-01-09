const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmail, createUser } = require('./queries');

const register = async (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists
  const existingUser = await getUserByEmail(email);

  console.log('Existing User:', existingUser);

  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // Create a new user with hashed password
  const newUser = await createUser(email, password);

  // Generate a JWT for the new user
  const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET);

  res.json({ message: 'User registered successfully', user: newUser, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Get the user from the database
  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Check if the password is correct
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Generate a JWT
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  res.json({ token, message: 'Login successful' });
};

module.exports = {
  login,
  register,
};
