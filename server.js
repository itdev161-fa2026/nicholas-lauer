import express from 'express';
import connectDatabase from './config/db.js';

//Initialize express application
const app = express();

// Connect to Database
connectDatabase();

// Configure Middleware
app.use(express.json({ extended: false}));

//API endpoints
/**
 * @route GET /
 * @desc Test Endpoint
 */
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')    
);

/**
 * @route Post api/users
 * @desc Registered user
 */
app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

//Connection Listener
app.listen(3000, () => console.log('Express Server running on port 3000'));

