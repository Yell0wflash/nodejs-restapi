const express = require('express');
const router = express.Router();
const { cekKey } = require('../database/db'); 
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const fitur = require('../controllers/fitur')
const { cakLontong, bijak, quotes, fakta, ptl, motivasi } = require('../controllers/randomtext');

router.get('/checkkey', async (req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    res.send({status: 200, apikey: apikey, response: 'Active'});
});

router.get('/ytplay', youtubePlay);
router.get('/ytmp4', youtubeMp4);
router.get('/ytmp3', youtubeMp3);
router.get('/caklontong', cakLontong);
router.get('/quotes', quotes);
router.get('/fakta', fakta);
router.get('/bijak', bijak);
router.get('/ptl', ptl);
router.get('/motivasi', motivasi);
router.get('/asupan', fitur.asupan);
router.get('/videomaker/sliding', fitur.sliding);
router.get('/videomaker/colorful', fitur.colorful);
router.get('/videomaker/army', fitur.army);
router.get('/videomaker/bold', fitur.bold);
router.get('/videomaker/glowing', fitur.glowing);
router.get('/videomaker/retro', fitur.retro);
router.get('/random/gore', fitur.randomgore);
router.get('/search/gore', fitur.searchgore);
module.exports = router;
