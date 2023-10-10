const express=require('express');
const router=express.Router();
const { body } = require('express-validator');
const { userController } = require('../controller/userController');
// const userController= require('../controller/userController');

const postRegisterValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email')
        .isEmail().withMessage('Invalid email')
        .custom(value => {
            if (!/@(charusat\.edu\.in|charusat\.ac\.in)$/i.test(value)) {
                throw new Error("Invalid Email Domain");
            }
            return true;
        }),
    body('password')
        .isLength({ min: 10, max: 20 }).withMessage('Password must be between 10 and 20 characters')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/[0-9]/).withMessage('Password must contain at least one number')
        .matches(/[!@$%&(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
    body('mobile').custom((value, { req }) => {
        if (!/^(?:\+91|91|0)?[56789]\d{9}$/.test(value) && !/^(?:\+1)?[2-9]\d{2}[2-9](?!11)\d{6}$/.test(value)) {
            throw new Error('Invalid mobile number');
        }
        return true;
    }),
    body('dob').isISO8601().toDate().withMessage('Invalid date of birth')
];

const postLoginValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 10, max: 20 }).withMessage('Password must be between 10 and 20 characters')
];
// router.get('/login',userController.getLogin);
// router.get('/register',userController.getRegister);
// router.post('/register',userController.postRegister);
// router.post('/login',userController.postLogin)
router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
router.post('/register', postRegisterValidation, userController.postRegister);
router.post('/login', postLoginValidation, userController.postLogin);
module.exports=router;