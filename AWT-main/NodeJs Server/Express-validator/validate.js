// app.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to Express Validator Example');
});

app.post(
    '/validate',
    [
        // check('name').notEmpty().withMessage('Name is required'),
        // check('email').isEmail().withMessage('Invalid email'),
        // check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        // check('mobile').isMobilePhone().withMessage('Invalid mobile number'),
        // check('dob').isISO8601().toDate().withMessage('Invalid date of birth'),
        body('name').notEmpty().withMessage('Name is required'),
        //body('email').isEmail().withMessage('Invalid email'),
        //body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        // body('name')ss
        //     .isEmpty().withMessage('Username is required')
        //     .isLength({ min: 5 }).withMessage('Username must be at least 5 characters')
        //     .oneOf([
        //         body('name').equals('admin').withMessage('Username cannot be "admin"'),
        //         body('name').not().equals('superuser').withMessage('Username cannot be "superuser"'),
        //     ]).withMessage('Username is not allowed'),
        body('password')
            .isLength({ min: 10, max: 20 }).withMessage('Password must be between 10 and 20 characters')
            .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
            .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
            .matches(/[0-9]/).withMessage('Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
        //body('mobile').isMobilePhone().withMessage('Invalid mobile number'),
        body('mobile')
            .custom((value, { req }) => {
                if (!/^(?:\+91|91|0)?[56789]\d{9}$/.test(value) && !/^(?:\+1)?[2-9]\d{2}[2-9](?!11)\d{6}$/.test(value)) {
                    throw new Error('Invalid mobile number');
                }
                return true;
            }),

        body('dob').isISO8601().toDate().withMessage('Invalid date of birth'),
        body('email')
            .isEmail().withMessage('Invalid email')
            .custom(value => {
                if (!/\.(com|ac\.in)$/i.test(value)) {
                    throw new Error('Invalid email domain');
                }
                return true;
            }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        // If validation passes, process the data here
        const { name, email, password, mobile, dob } = req.body;
        res.json({ message: 'Validation passed!', data: { name, email, mobile, dob } });
    }
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
