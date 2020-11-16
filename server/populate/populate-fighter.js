/* eslint-disable no-await-in-loop */
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { Op } = require('sequelize');
const _ = require('lodash');
const db = require('../express/models');

async function getFighter(url) {
  const res = await fetch(url);
  const text = await res.text();
  const $ = cheerio.load(text);
  const fighter = {};
  fighter.name = $('.b-content__title-highlight').text().trim();
  fighter.nickname = $('.b-content__Nickname').text().trim();
  fighter.height = $($('.b-list__box-list li')[0]).text().replace(/Height:| |\n/gi, '');
  [fighter.weight_lbs] = $($('.b-list__box-list li')[1]).text().replace(/Weight:| |\n/gi, '').split('l');
  fighter.reach = $($('.b-list__box-list li')[2]).text().replace(/Reach:| |\n/gi, '');
  fighter.stance = $($('.b-list__box-list li')[3]).text().replace(/Stance:| |\n/gi, '');
  fighter.dob = $($('.b-list__box-list li')[4]).text().replace(/DOB:| |\n/gi, '');
  fighter.record = $('.b-content__title-record').text().replace(/Record:| |\n|\(.*\)/gi, '');
  [fighter.wins, fighter.losses, fighter.no_contest] = fighter.record.split('-');
  fighter.is_champ = false;
  fighter.slpm = $($('.b-list__box-list li')[5]).text().replace(/slpm:| |\n/gi, '');
  fighter.str_acc = $($('.b-list__box-list li')[6]).text().replace(/Str\. Acc\.:| |\n/gi, '');
  fighter.sapm = $($('.b-list__box-list li')[7]).text().replace(/sapm:| |\n/gi, '');
  fighter.str_def = $($('.b-list__box-list li')[8]).text().replace(/str\. def:| |\n/gi, '');
  fighter.td_avg = $($('.b-list__box-list li')[10]).text().replace(/td avg.:| |\n/gi, '');
  fighter.td_acc = $($('.b-list__box-list li')[11]).text().replace(/td acc.:| |\n/gi, '');
  fighter.td_def = $($('.b-list__box-list li')[12]).text().replace(/td def.:| |\n/gi, '');
  fighter.sub_avg = $($('.b-list__box-list li')[13]).text().replace(/sub. avg.:| |\n/gi, '');

  fighter.potns = [];
  const POTN = !!$('img[src="http://1e49bc5171d173577ecd-1323f4090557a33db01577564f60846c.r80.cf1.rackcdn.com/perf.png"]')[0];
  if (POTN) {
    $($('img[src="http://1e49bc5171d173577ecd-1323f4090557a33db01577564f60846c.r80.cf1.rackcdn.com/perf.png"]')).each((i, el) => {
      fighter.potns.push($($(el).parent().parent().prev()
        .first()
        .children()[0])
        .text()
        .replace(/\n|[^\w|:|.] |/gi, ''));
    });
  }

  const SOTN = !!$('img[src="http://1e49bc5171d173577ecd-1323f4090557a33db01577564f60846c.r80.cf1.rackcdn.com/sub.png"]')[0];
  if (SOTN) {
    $($('img[src="http://1e49bc5171d173577ecd-1323f4090557a33db01577564f60846c.r80.cf1.rackcdn.com/sub.png"]')).each((i, el) => {
      fighter.potns.push($($(el).parent().parent().prev()
        .first()
        .children()[0])
        .text()
        .replace(/\n|[^\w|:|.] |/gi, ''));
    });
  }

  const KOTN = !!$('img[src="http://1e49bc5171d173577ecd-1323f4090557a33db01577564f60846c.r80.cf1.rackcdn.com/ko.png"]')[0];
  if (KOTN) {
    $($('img[src="http://1e49bc5171d173577ecd-1323f4090557a33db01577564f60846c.r80.cf1.rackcdn.com/ko.png"]')).each((i, el) => {
      fighter.potns.push($($(el).parent().parent().prev()
        .first()
        .children()[0])
        .text()
        .replace(/\n|[^\w|:|.] |/gi, ''));
    });
  }

  const weight = +fighter.weight_lbs;
  const weightClass = !Number.isNaN(weight) ? await db.divisions.findOne({
    where: {
      [Op.and]: [{
        min_weight: {
          [Op.lte]: weight,
        },
      }, {
        max_weight: {
          [Op.gte]: weight,
        },
      },
      ],
    },
  }) : null;

  fighter.potns = fighter.potns.map(async (el) => {
    const event = await db.events.findOne({
      where: {
        name: el,
      },
    });
    return event;
  });

  db.sequelize.sync()
    .then(() => db.fighters.create(fighter))
    .then((fighterDb) => {
      if (weightClass) weightClass.addFighter(fighterDb);
      fighter.potns.forEach(async (potn) => {
        const potnDb = await potn;
        if (potnDb) {
          fighterDb.addPotn(potnDb);
        }
      });
    })
    .catch((err) => console.log(err));
}

(async () => {
  let fighterUrls = [];
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i += 1) {
    const currChar = String.fromCharCode(i);
    const res = await fetch(`http://www.ufcstats.com/statistics/fighters?char=${currChar}&page=all`);
    const text = await res.text();
    const $ = cheerio.load(text);

    $('.b-link').each((ind, el) => fighterUrls.push($(el).attr('href')));
  }
  fighterUrls = _.uniq(fighterUrls).filter((el) => el.includes('fighter-details'));
  for (let i = 0; i < fighterUrls.length; i += 1) {
    await getFighter(fighterUrls[i]);
  }
})();
