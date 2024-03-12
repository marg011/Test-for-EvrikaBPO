const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('goodResp');
});


module.exports = router;