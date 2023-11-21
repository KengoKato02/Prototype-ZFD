const express = require('express');
const holidayRoutes = require('./src/holidays/routes');
const authenticationRoutes = require('./src/authentication/routes');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('wasuup');
});


app.use('/auth', authenticationRoutes); //login


app.use('/api/v1/holidays', holidayRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
