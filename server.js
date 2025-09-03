import express from 'express';
import connectDatabase from './config/db.js';

//Initialize express application
const app = express();

// Connect to Database
connectDatabase();

//API endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')    
);

//Connection Listener
app.listen(3000, () => console.log('Express Server running on port 3000'));

