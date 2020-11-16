/* eslint-disable no-useless-escape */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const db = require('../express/models');

const errors = {};

async function getFights(fightUrl, winnerName) {
  const res = await fetch(fightUrl);
  const text = await res.text();
  const $ = cheerio.load(text);
  const fight = {};
  fight.r_fighter = $($('.b-fight-details__table-text')[0]).text().replace('\n', '').trim();
  fight.b_fighter = $($('.b-fight-details__table-text')[1]).text().replace('\n', '').trim();
  fight.winner = winnerName === fight.r_fighter ? 'red' : winnerName === fight.b_fighter ? 'blue' : null;
  fight.division = $('.b-fight-details__fight-title').text().replace(/[^\w] |\n|Bout/gi, '').trim();
  fight.event = $('.b-content__title').text().replace(/\n|[^\w.:] /gi, '').trim();
  const methodReg = new RegExp('\\n|^[\w] |Method:', 'gi');
  fight.method = $($('.b-fight-details__fight-title')[0]).text().replace(methodReg, '').trim();
  [, fight.details] = $($('.b-fight-details__text-item')[4]).text().trim().toLowerCase()
    .split(' ')
    .filter((el) => el !== '' && el !== '\n')
    .join('')
    .split('\n\n');
  fight.details += $($('.b-fight-details__text-item')[5]).text().trim().toLowerCase()
    .split(' ')
    .filter((el) => el !== '' && el !== '\n')
    .join('')
    .split('\n\n')[1];
  fight.details += $($('.b-fight-details__text-item')[6]).text().trim().toLowerCase()
    .split(' ')
    .filter((el) => el !== '' && el !== '\n')
    .join('')
    .split('\n\n')[1];
  if (!fight.details) {
    const fdReg = new RegExp('\\n|Details:|^[\w] ', 'gi');
    fight.details = $($('.b-fight-details__text')[1]).text().replace(fdReg, '').trim();
  }

  const roundReg = new RegExp('\\n|Round:|^[\w] ', 'gi');
  fight.rounds = $($('.b-fight-details__text-item')[0]).text().replace(roundReg, '').trim();
  const roundEndReg = new RegExp('\\n|Time:|^[\w] ', 'gi');
  fight.round_end_time = $($('.b-fight-details__text-item')[1]).text().replace(roundEndReg, '').trim();
  fight.fotn = !!$('img[src="http://1e49bc5171d173577ecd-1323f4090557a33db01577564f60846c.r80.cf1.rackcdn.com/fight.png"]')[0];
  const nRoundsReg = new RegExp('\\n|Time format:|^[\w] ', 'gi');
  fight.n_rounds = $($('.b-fight-details__text-item')[2]).text().replace(nRoundsReg, '').trim();

  let current = 2;

  for (let i = 0; i <= fight.rounds; i++) {
    fight[`r_kd${current < 22 ? '' : `_r${i}`}`] = $($('.b-fight-details__table-text')[current++]).text()
      .replace('\n', '').trim();
    fight[`b_kd${current < 22 ? '' : `_r${i}`}`] = $($('.b-fight-details__table-text')[current++]).text()
      .replace('\n', '').trim();
    [fight[`r_sig_str_landed${current < 22 ? '' : `_r${i}`}`], fight[`r_sig_str_attempts${current < 22 ? '' : `_r${i}`}`]] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim()
      .split(' of ');
    [fight[`b_sig_str_landed${current < 22 ? '' : `_r${i}`}`], fight[`b_sig_str_attempts${current < 22 ? '' : `_r${i}`}`]] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim()
      .split(' of ');
    current += 2;
    [fight[`r_total_str_landed${current < 22 ? '' : `_r${i}`}`], fight[`r_total_str_attempts${current < 22 ? '' : `_r${i}`}`]] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim()
      .split(' of ');
    [fight[`b_total_str_landed${current < 22 ? '' : `_r${i}`}`], fight[`b_total_str_attempts${current < 22 ? '' : `_r${i}`}`]] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim()
      .split(' of ');
    [fight[`r_td_landed${current < 22 ? '' : `_r${i}`}`], fight[`r_td_attempts${current < 22 ? '' : `_r${i}`}`]] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim()
      .split(' of ');
    [fight[`b_td_landed${current < 22 ? '' : `_r${i}`}`], fight[`b_td_attempts${current < 22 ? '' : `_r${i}`}`]] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim()
      .split(' of ');
    current += 2;
    fight[`r_sub_att${current < 22 ? '' : `_r${i}`}`] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim();
    fight[`b_sub_att${current < 22 ? '' : `_r${i}`}`] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim();
    fight[`r_reversal${current < 22 ? '' : `_r${i}`}`] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim();
    fight[`b_reversal${current < 22 ? '' : `_r${i}`}`] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim();
    fight[`r_ctrl${current < 22 ? '' : `_r${i}`}`] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim();
    fight[`b_ctrl${current < 22 ? '' : `_r${i}`}`] = $($('.b-fight-details__table-text')[current++])
      .text().replace('\n', '').trim();
    current += 2;
  }

  const fighterBlue = await db.fighters.findOne({
    where: { name: fight.b_fighter },
  });
  const fighterRed = await db.fighters.findOne({
    where: { name: fight.r_fighter },
  });

  const division = await db.divisions.findOne({
    where: { division_name: fight.division.toLowerCase() },
  });

  const event = await db.events.findOne({
    where: { name: fight.event },
  });

  db.sequelize.sync()
    .then(() => db.fights.create(fight))
    .then((dbFight) => {
      if (division) division.addFight(dbFight);
      return dbFight;
    })
    .then((dbFight) => {
      dbFight.addFighter(fighterBlue, { through: { color: 'blue' } });
      return dbFight;
    })
    .then((dbFight) => {
      dbFight.addFighter(fighterRed, { through: { color: 'red' } });
      return dbFight;
    })
    .then((dbFight) => event.addFight(dbFight))
    .catch((err) => {
      errors[fight.event] = [err.message, fight];
      console.log(err);
    });
}

(async () => {
  db.sequelize.sync()
    .catch((err) => console.log(err));

  const res = await fetch('http://www.ufcstats.com/statistics/events/completed?page=all');
  const text = await res.text();
  const $ = cheerio.load(text);
  const eventUrls = [];
  $('.b-link').each((_, el) => eventUrls.push($(el).attr('href')));

  const fightUrls = [];

  for (let i = 0; i < eventUrls.length; i++) {
    const eventRes = await fetch(eventUrls[i]);
    const eventText = await eventRes.text();
    const $ = cheerio.load(eventText);
    $('.js-fight-details-click').each((_, el) => {
      fightUrls.push([$(el).attr('data-link'), $($($(el).children()[1]).children()[0]).text().replace(/\n|[^\w] /gi, '').trim()]);
    });
  }

  for (let i = 0; i < fightUrls.length; i += 1) {
    const fightUrl = fightUrls[i];
    await getFights(...fightUrl);
  }

  console.log(errors);
})();
