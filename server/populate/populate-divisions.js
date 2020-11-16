module.exports = ({ divisions }) => Promise.all([
  divisions.create({ division_name: 'women\'s strawweight', min_weight: '0', max_weight: '115' }),
  divisions.create({ division_name: 'women\'s flyweight', min_weight: '115', max_weight: '125' }),
  divisions.create({ division_name: 'women\'s bantamweight', min_weight: '125', max_weight: '135' }),
  divisions.create({ division_name: 'flyWeight', min_weight: '115', max_weight: '125' }),
  divisions.create({ division_name: 'bantamweight', min_weight: '125', max_weight: '135' }),
  divisions.create({ division_name: 'featherweight', min_weight: '135', max_weight: '145' }),
  divisions.create({ division_name: 'lightweight', min_weight: '145', max_weight: '155' }),
  divisions.create({ division_name: 'welterweight', min_weight: '155', max_weight: '170' }),
  divisions.create({ division_name: 'middleweight', min_weight: '170', max_weight: '185' }),
  divisions.create({ division_name: 'light heavyweight', min_weight: '185', max_weight: '205' }),
  divisions.create({ division_name: 'heavyweight', min_weight: '205', max_weight: '265' }),
]);
