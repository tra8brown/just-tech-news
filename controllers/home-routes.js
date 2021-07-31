//this will contain all the user-facing routes like homepage and login page.
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;