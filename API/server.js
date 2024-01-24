const express = require('express');
const holidayRoutes = require('./src/holidays/routes');
const authenticationRoutes = require('./src/authentication/routes');
const teamRoutes = require('./src/team/routes');
const employeeRoutes = require('./src/employees/routes');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/auth', authenticationRoutes); 
app.use('/holidays', holidayRoutes);
app.use('/teams', teamRoutes);
app.use('/employees', employeeRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

// Uncomment for deployment
// export default app;
