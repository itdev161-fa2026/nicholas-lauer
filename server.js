import express from 'express';
import connectDatabase from './config/db.js';
import { check, validationResult } from 'express-validator';

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
app.post(
    '/api/users',
    [
        check('name', 'Please enter your name').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6})
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            //Later we will save user to this database
            return res.send(req.body);
        }
    }
);

//Connection Listener
app.listen(3000, () => console.log('Express Server running on port 3000'));

