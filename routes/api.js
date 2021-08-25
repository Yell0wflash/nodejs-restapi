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

router.get('/downloader/ytplay', youtubePlay);
router.get('/downloader/ytmp4', youtubeMp4);
router.get('/downloader/ytmp3', youtubeMp3);

//game
router.get('/game/caklontong', cakLontong);

//random
router.get('/random/quotes', quotes);
router.get('/random/fakta', fakta);
router.get('/random/bijak', bijak);
router.get('/random/ptl', ptl);
router.get('/random/motivasi', motivasi);
router.get('/random/gore', fitur.randomgore);

//search
router.get('/search/asupan', fitur.asupan);
router.get('/search/sfile', fitur.sfiles);
router.get('/search/group', fitur.grups);
router.get('/search/ghuser', fitur.usergh);
router.get('/search/resepmasakan', fitur.resepmasakan);

//videomaker
router.get('/videomaker/sliding', fitur.sliding);
router.get('/videomaker/colorful', fitur.colorful);
router.get('/videomaker/army', fitur.army);
router.get('/videomaker/bold', fitur.bold);
router.get('/videomaker/glowing', fitur.glowing);
router.get('/videomaker/retro', fitur.retro);
module.exports = router;
