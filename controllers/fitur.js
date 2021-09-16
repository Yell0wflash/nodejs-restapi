const skrep = require("../lib/skrep");
const { cekKey } = require('../database/db');w
const imgbb = require('imgbb-uploader')
const { exec, spawn } = require('child_process');
const axios = require('axios')
const fs = require('fs')

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
exports.nuliskiri = async(req, res) => {
	const query = req.query.teks;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
const splitText = query.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
    './media/nulis/sebelumkiri.jpg',
    '-font',
    './media/nulis/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '22',
    '-interline-spacing',
    '2',
    '-annotate',
    '+140+153',
    fixHeight,
    './media/nulis/setelahkiri.jpg'
])
.on('Maaf Terjadi Kesalahan', () => res.status(404).send({status: 'error'}))
.on('exit', () => {
    res.sendFile('/app/media/nulis/setelahkiri.jpg')
})
}
exports.nuliskanan = async(req, res) => {
	const query = req.query.teks;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
const splitText = query.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
    './media/nulis/images/buku/sebelumkiri.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '2',
    '-annotate',
    '+128+129',
    fixHeight,
    './media/nulis/setelahkanan.jpg'
])
.on('Maaf Terjadi Kesalahan', () => res.status(404).send({status: 'error'}))
.on('exit', () => {
    res.sendFile('/app/media/nulis/setelahkiri.jpg')
})
}

exports.foliokanan = async(req, res) => {
	const query = req.query.teks;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
const splitText = query.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
    './media/nulis/foliokanan.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '3',
    '-annotate',
    '+89+190',
    fixHeight,
    './media/nulis/sfoliokanan.jpg'
])
.on('Maaf Terjadi Kesalahan', () => res.status(404).send({status: 'error'}))
.on('exit', () => {
    res.sendFile('/app/media/nulis/setelahkiri.jpg')
})
}
exports.foliokiri = async(req, res) => {
	const query = req.query.teks;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
const splitText = query.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
    './media/nulis/foliokiri.jpg',
    '-font',
    './media/nulis/Indie-Flower.ttf',
    '-size',
    '1720x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '4',
    '-annotate',
    '+48+185',
    fixHeight,
    './media/nulis/sfoliokiri.jpg'
])
.on('Maaf Terjadi Kesalahan', () => res.status(404).send({status: 'error'}))
.on('exit', () => {
    res.sendFile('/app/media/nulis/setelahkiri.jpg')
})
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
exports.grups = async(req, res) => {
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
    skrep.carigc(query).then(resu => {
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', data: resu});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.sfiles = async(req, res) => {
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
    skrep.sfilesearch(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.sfiledown = async(req, res) => {
    const query = req.query.url;
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
    skrep.sfiledown(query).then(resu => {
        hdata = resu.data
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: {
                judul: hdata.judul,
                size: hdata.size,
                type: hdata.type,
                desc: hdata.desc,
                uploader: hdata.uploader,
                uploaded: hdata.uploaded,
                download_count : hdata.download_count,
                link: hdata.link
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.zippy = async(req, res) => {
    const query = req.query.url;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    skrep.zippydl(query).then(resu => {
        hdata = resu.data
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: {
                nama: hdata.judul,
                size: hdata.size,
                uploaded: hdata.uploaded,
                linkdl: hdata.link
            }
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.happymod = async(req, res) => {
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
    skrep.happymod(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu.data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.apkmody = async(req, res) => {
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
    skrep.apkmody(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu.data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.happymod = async(req, res) => {
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
    skrep.happymod(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu.data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.androidone = async(req, res) => {
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
    skrep.android1(query).then(resu => {
        res.status(200).send({
            status: 200, 
            creator: 'Fajar Ihsana', 
            data: resu.data
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.usergh = async(req, res) => {
    const query = req.query.username;
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
    skrep.ghuser(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.kiryu = async(req, res) => {
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
    skrep.kiryu(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.dewabatch = async(req, res) => {
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
    skrep.dewabatch(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.wattpad = async(req, res) => {
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
    skrep.wattpad(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.drakor = async(req, res) => {
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
    skrep.drakor(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.wallpaperhd = async(req, res) => {
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
    skrep.wallpaperhd(query).then(resu => {
	rand = resu[Math.floor(Math.random() * resu.length)]
        getBuffer(rand).then(data => {
		fs.writeFileSync('./media/wall.png', data)
		res.sendFile('/app/media/wall.png')
	})
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.konachan = async(req, res) => {
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
    skrep.konachan(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.wiki = async(req, res) => {
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
    skrep.wikisearch(query).then(resu => {
        res.status(200).send({
            status: 200,
            creator: 'Fajar Ihsana',
            data: resu
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
exports.resepmasakan = async(req, res) => {
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
    skrep.cariresep(query).then(resu => {
        skrep.bacaresep(resu.data[0].link).then(hsil => {
            hdata = hsil.data
            res.status(200).send({
                status: 200, 
                creator: 'Fajar Ihsana',
                data: {
                    judul: hdata.judul,
                    waktu_masak: hdata.waktu_masak,
                    hasil: hdata.hasil,
                    tingkat_kesulitan: hdata.tingkat_kesulitan,
                    thumbnail: hdata.thumb,
                    bahan: hdata.bahan,
                    langkah: hdata.langkah_langkah
                }
            });
        })
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
exports.infogempa = async(req, res) => {
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
    skrep.gempa().then(resu => {
        hdata = resu.data
        res.status(200).send({status: 200, creator: 'Fajar Ihsana', data: { 
            map: hdata.imagemap, 
            magnitude: hdata.magnitude, 
            kedalaman: hdata.kedalaman, 
            wilayah: hdata.wilayah, 
            waktu: hdata.waktu,
            lintang_bujur: hdata.lintang_bujur,
            dirasakan: hdata.dirasakan
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
	getBuffer(resu.url).then(data => {
	fs.writeFileSync('./media/bold.mp4', data)
	res.sendFile('./app/media/bold.mp4')
	})
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}
