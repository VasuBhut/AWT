const express = require('express');
const Joi = require('joi');
const router = express.Router();
const userController = require('../joi_controller/userController');

const postRegisterValidation = (req, res, next) => {
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
    next();
};

const postLoginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(10).max(20).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).json({ errors: error.details });
    }
    next();
};

router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
router.post('/register', postRegisterValidation, userController.postRegister);
router.post('/login', postLoginValidation, userController.postLogin);

module.exports = router;
