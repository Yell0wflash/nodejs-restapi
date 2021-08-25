const skrep = require("../lib/skrep");
const { cekKey } = require('../database/db');

exports.asupan = async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    skrep.asupantiktok(query).then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', username: resu.username, data: { caption: resu.media.caption, likes: resu.media.likes, comments: resu.media.comments, share: resu.media.share, videourl: resu.media.videourl}});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.asupan = async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    skrep.asupantiktok(query).then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', username: resu.username, data: { caption: resu.media.caption, likes: resu.media.likes, comments: resu.media.comments, share: resu.media.share, videourl: resu.media.videourl}});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
