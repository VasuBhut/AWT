const userModel = require('../model/userModel')
const express = require('express');
const path=require('path')
const { validationResult } = require('express-validator');
const app = express();
app.use('../views', express.static(path.join(__dirname, 'views')));

// const userController = {

//     getLogin(req, res) {
//         // res.render('login');
//         res.sendFile('login.ejs', { root: path.join(__dirname, '../views') });
//     },
//     getRegister(req, res) {
//         res.sendFile('register.ejs', { root: path.join(__dirname, '../views') });
//     },
//     postRegister(req, res) {
//         // const user= req.body;
//         // const userId=userModel.createUser(user);
//         // res.send(`User Registered with Id :  ${userId}`)

//         [
//             body('name').notEmpty().withMessage('Name is required'),
//             body('email')
//                 .isEmail().withMessage('Invalid email')
//                 .custom(value => {
//                     if (!/@(charusat\.edu\.in|charusat\.ac\.in)$/i.test(value)) {
//                         throw new Error("Invalid Email Domain");
//                     }
//                     return true;
//                 }),
//             body('password')
//                 .isLength({ min: 10, max: 20 }).withMessage('Password must be between 10 and 20 characters')
//                 .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
//                 .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
//                 .matches(/[0-9]/).withMessage('Password must contain at least one number')
//                 .matches(/[!@$%&(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
//             body('mobile').custom((value, { req }) => {
//                 if (!/^(?:\+91|91|0)?[56789]\d{9}$/.test(value) && !/^(?:\+1)?[2-9]\d{2}[2-9](?!11)\d{6}$/.test(value)) {
//                     throw new Error('Invalid mobile number');
//                 }
//                 return true;
//             }),
//             body('dob').isISO8601().toDate().withMessage('Invalid date of birth')

//         ],
//             (req, res) => {
//                 const errors = validationResult(req);
//                 if (!errors.isEmpty()) {
//                     return res.status(422).json({ errors: errors.array() });
//                 }

//                 // If validation passes, process the registration data here
//                 const { name, email, password, mobile, dob } = req.body;
//                 // Store the user's registration data in the database or perform any necessary actions

//                 res.json({ message: 'Registration successful!', data: { name, email, mobile, dob } });
//             }

//     },
//     postLogin(req, res) {
//         [
//             body('email').isEmail().withMessage('Invalid email'),
//             body('password').isLength({ min: 10, max: 20 }).withMessage('Password must be between 10 and 20 characters')
//         ],
//             (req, res) => {
//                 const errors = validationResult(req);
//                 if (!errors.isEmpty()) {
//                     return res.status(422).json({ errors: errors.array() });
//                 }

//                 // If validation passes, process the login data here
//                 const { email, password } = req.body;
//                 // Verify the user's login credentials, generate tokens, etc.

//                 res.json({ message: 'Login successful!', data: { email } });
//             }
//     }
// }

const userController = {
    // ... (other methods)

    getLogin(req, res) {
        res.render('login'); // No need for 'root' parameter here
    },
    getRegister(req, res) {
        res.render('register'); // No need for 'root' parameter here
    },
    postRegister(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        // If validation passes, process the registration data here
        const { name, email, password, mobile, dob } = req.body;
        // Store the user's registration data in the database or perform any necessary actions

        res.json({ message: 'Registration successful!', data: { name, email, mobile, dob } });
    },
    postLogin(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        // If validation passes, process the login data here
        const { email, password } = req.body;
        // Verify the user's login credentials, generate tokens, etc.

        res.json({ message: 'Login successful!', data: { email } });
    }
};

module.exports = {
    userController,
};