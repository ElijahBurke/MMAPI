const { GraphQLDateTime } = require('graphql-iso-date');

const {
  fighters, fights, events, divisions,
} = require('./query.resolver');
const types = require('./types.resolver');

const customScalarResolver = {
  Date: GraphQLDateTime,
};

const resolvers = {
  Date: customScalarResolver,
  Query: {
    fighters,
    fights,
    events,
    divisions,
  },
  Fighter: {
    potn: types.get_fighter_potn,
    division: types.get_fighter_division,
    fights: types.get_fighter_fights,
  },
  Fight: {
    blue_fighter: types.get_blue_fighter,
    red_fighter: types.get_red_fighter,
    event: types.get_fight_event,
    division: types.get_fight_division,
  },
  Event: {
    fights: types.get_event_fights,
    potn: types.get_event_potns,
    fotn: types.get_event_fotn,
  },
  Division: {
    fighters: types.get_division_fighters,
    fights: types.get_division_fights,
    champ: types.get_division_champ,
  },
};

module.exports = resolvers;
