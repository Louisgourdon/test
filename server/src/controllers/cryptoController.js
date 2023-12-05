const axios = require('axios');

async function getCryptoById(req, res) {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.toString());
    }
}

module.exports = {
    getCryptoById,
};
