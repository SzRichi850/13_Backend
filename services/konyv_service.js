const {
    konyvek
} = require("../database/konyvek_db");


const getHello = (req, res) => {
    res.json({message: "Könyvek backend"});
}

const getKonyvek = (req, res) => {
    res.json(konyvek);
}

const getKonyvById = (req, res) => {
    const simaid = Number(req.params.id);
    const konyv = konyvek.find(konyv => konyv.id == simaid);
    res.json(konyv);
}

module.exports = {
    getHello,
    getKonyvek,
    getKonyvById
}