const Parser = require('rss-parser');
const parser = new Parser({
    headers: { 'User-Agent': 'Chrome' },
});

async function fetchRssFeed(feedUrl) {
    try {
        const feed = await parser.parseURL(feedUrl);
        return feed.items.map(item => ({
            data: item,
            title: item.title,
            description: item.description,
            link: item.link,
            date: item.pubDate,
        }));
    } catch (error) {
        throw error;
    }
}

module.exports = {
    fetchRssFeed,
};
