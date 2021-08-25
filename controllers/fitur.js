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
exports.searchgore = async(req, res) => {
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
    skrep.searchgore(query).then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', data: resu.data});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.randomgore = async(req, res) => {
    const query = req.query.query;
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
    skrep.randomgore().then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', data: { 
            judul: resu.data.judul, 
            views: resu.data.views, 
            comments: resu.data.comment, 
            thumbnail: resu.data.thumb, 
            videourl: resu.data.link
        }});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.sliding = async(req, res) => {
    const query = req.query.text;
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
    skrep.textmakervid(query, 'poly').then(resu => {
        res.status(200).send({status: 200, result: resu.url});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.colorful = async(req, res) => {
    const query = req.query.text;
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
    skrep.textmakervid(query, 'colorful').then(resu => {
        res.status(200).send({status: 200, result: resu.url});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.army = async(req, res) => {
    const query = req.query.text;
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
    skrep.textmakervid(query, 'army').then(resu => {
        res.status(200).send({status: 200, result: resu.url});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.glowing = async(req, res) => {
    const query = req.query.text;
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
    skrep.textmakervid(query, 'glowing').then(resu => {
        res.status(200).send({status: 200, result: resu.url});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.retro = async(req, res) => {
    const query = req.query.text;
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
    skrep.textmakervid(query, 'retro').then(resu => {
        res.status(200).send({status: 200, result: resu.url});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.bold = async(req, res) => {
    const query = req.query.text;
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
    skrep.textmakervid(query, 'bold').then(resu => {
        res.status(200).send({status: 200, result: resu.url});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
