const fetch = require('node-fetch');
const cheerio = require('cheerio');
const db = require('../express/models');

async function getChamps() {
  const res = await fetch('https://www.espn.com/mma/story/_/id/14947566/current-all-ufc-champions');
  const text = await res.text();
  const $ = cheerio.load(text);
  $('p strong').each(async (_, el) => {
    const name = $(el).text();
    const fighter = await db.fighters.findOne({ where: { name } });
    if (fighter) fighter.update({ is_champ: true });
  });
}

(async () => {
  getChamps();
})();
