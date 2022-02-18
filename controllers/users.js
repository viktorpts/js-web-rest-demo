const router = require('express').Router();
const { register } = require('../services/users');
const mapErrors = require('../utils/mapper');


router.post('/register', async (req, res) => {
    try {
        if (req.body.password.trim() == '' || req.body.email.trim() == '') {
            throw new Error('Email and password are required');
        }

        const result = await register(req.body.email.trim().toLowerCase(), req.body.password.trim());
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/login', (req, res) => {
    console.log(req.body);
    console.log('login');
    res.end();
});

router.get('/logout', (req, res) => {
    console.log('logout');
    res.end();
});

module.exports = router;