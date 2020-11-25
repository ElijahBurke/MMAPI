const gql = require('graphql-tag');

const GET_FIGHTS = gql`
query fights {
  fights {
    id
    winner
    method
  }
}
`;

const GET_FIGHT = gql`
query fights {
  fights(id: 1) {
    id
    winner
    method
  }
}
`;

const GET_FIGHTERS = gql`
query fighters {
  fighters {
    id
    name
    wins
    dob
  }
}
`;

const GET_FIGHTER = gql`
query fighters {
  fighters(id: 1) {
    id
    name
    nickname
    wins
  }
}
`;

const GET_EVENTS = gql`
query events {
  events {
    id
    name
    location
    fights {
      id
      winner
    }
  }
}
`;

const GET_EVENT = gql`
query events {
  events(id: 1) {
    id
    name
    location
    fights {
      id
      winner
    }
  }
}
`;

const GET_DIVISIONS = gql`
query divisions {
  divisions {
    id
    division_name
    max_weight
  }
}
`;

const GET_DIVISION = gql`
query divisions {
  divisions(id: 1) {
    id
    division_name
    max_weight
  }
}
`;

module.exports.queries = {
  GET_FIGHTS,
  GET_FIGHT,
  GET_EVENTS,
  GET_EVENT,
  GET_FIGHTERS,
  GET_FIGHTER,
  GET_DIVISIONS,
  GET_DIVISION,
};
