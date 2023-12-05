const rssService = require('../services/rssService');

async function getNews(req, res) {
    try {
        const data = await rssService.fetchRssFeed('https://cointelegraph.com/rss');
        res.status(200).json(data);
    } catch (err) {
        res.status(404).json({
            status: 'error',
            message: 'An error occurred when fetching news',
        });
    }
}

module.exports = {
    getNews,
};
