// const userModel = require('../model/userModel');
const Joi = require('joi');

const userController = {
    getLogin(req, res) {
        res.render('login');
    },
    getRegister(req, res) {
        res.render('register');
    },
    postRegister(req, res) {
        const { name, email, password, mobile, dob } = req.body;

        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required().regex(/@(charusat\.edu\.in|charusat\.ac\.in)$/),
            password: Joi.string().min(10).max(20).required()
                .pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@$%&(),.?":{}|<>])')),
            mobile: Joi.string().pattern(/^(?:\+91|91|0)?[56789]\d{9}$/),
            dob: Joi.date().iso(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(422).json({ errors: error.details });
        }

        // Store the user's registration data in the database or perform any necessary actions

        res.json({ message: 'Registration successful!', data: { name, email, mobile, dob } });
    },
    postLogin(req, res) {
        const { email, password } = req.body;

        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(10).max(20).required(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(422).json({ errors: error.details });
        }

        // Check if the user with the provided email exists in the database
        const userExists = userModel.checkUserExistence(email);

        if (!userExists) {
            return res.status(401).json({ message: 'User not registered' });
        }

        // Verify the user's login credentials, generate tokens, etc.
        // ...

        res.json({ message: 'Login successful!', data: { email } });
    }
};

module.exports = userController;
