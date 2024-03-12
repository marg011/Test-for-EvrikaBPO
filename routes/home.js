const {Router} = require('express');
const router = Router();
const os = require('os');

router.get('/', (req, res) => {
    res.render('index');
});


router.post('/', (req, res) => {
    let formData = req.body.visitor;
    if (os.userInfo().username === formData) {
        res.redirect('/goodResp');
    } else {
        res.redirect('/badResp');
    }
})


module.exports = router;