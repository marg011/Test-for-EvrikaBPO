const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('badResp');
});

module.exports = router;