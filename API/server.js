const express = require("express")
const holidayRoutes = require('./src/holidays/routes');
const cors = require('cors'); 


const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("wasuup");
} );

app.use('/api/v1/holidays', holidayRoutes); 

app.listen(port, () => console.log(`app listening on port ${port}`));