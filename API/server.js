const express = require('express');
const holidayRoutes = require('./src/holidays/routes');
const authenticationRoutes = require('./src/authentication/routes');
const teamRoutes = require('./src/team/routes');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 3000;

// const corsOptions = {
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/auth', authenticationRoutes); 

app.use('/holiday', holidayRoutes);
app.use('/teams', teamRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

// Uncomment for deployment
// export default app;
