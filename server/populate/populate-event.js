/* eslint-disable no-useless-escape */
/* eslint-disable no-await-in-loop */
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const db = require('../express/models');
const divisions = require('./populate-divisions');

async function getEvent(eventUrl) {
  const res = await fetch(eventUrl);
  const text = await res.text();
  const $ = cheerio.load(text);
  const event = {};
  event.name = $('.b-content__title-highlight').text().trim();
  const dateReg = new RegExp('\\n|^[w] |Date:', 'gi');
  event.date = new Date($($('.b-list__box-list li')[0]).text().replace(dateReg, ''));
  const locationReg = new RegExp('\\n|^[\w] |Location:', 'gi');
  event.location = $($('.b-list__box-list li')[1]).text().replace(locationReg, '').trim();
  return event;
}

(async () => {
  db.sequelize.sync({ force: true })
    .then(() => divisions(db))
    .catch((err) => console.log(err));

  const res = await fetch('http://www.ufcstats.com/statistics/events/completed?page=all');
  const text = await res.text();
  const $ = cheerio.load(text);
  const eventURLS = [];
  $('.b-link').each((_, el) => eventURLS.push($(el).attr('href')));

  for (let i = 0; i < eventURLS.length; i += 1) {
    const eventUrl = eventURLS[i];
    const event = await getEvent(eventUrl);
    await db.events.create(event);
  }
})();
