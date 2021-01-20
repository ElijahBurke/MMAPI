const URL = 'http://localhost:3001/';
const graphqlQuery = (query) => fetch(`${URL}graphql`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query }),
})
  .then((resp) => resp.json());

const graphQlQueryPlayground = (query) => graphqlQuery(query);

const getStartStats = () => {
  const query = `
    {
      events {
        id
      }
      fights {
        rounds
        round_end_time
      }
    }`;
  return graphqlQuery(query)
    .then(({ data }) => {
      const rounds = data.fights.reduce((a, b) => a + b.rounds, 0);
      let seconds = data.fights.reduce((a, b) => {
        const [mins, secs] = b.round_end_time.split(':');
        return a + (+mins * 60) + +secs + ((+b.rounds - 1) * 300);
      }, 0);
      const days = Math.floor(seconds / (24 * 60 * 60));
      seconds -= (days * (24 * 60 * 60));

      const hours = Math.floor(seconds / (60 * 60));
      seconds -= (hours * 60 * 60);

      const minutes = Math.floor(seconds / 60);
      seconds -= (minutes * 60);

      const totalTime = `${days}:${hours}:${minutes}:${seconds}`;

      return {
        Events: data.events.length,
        Fights: data.fights.length,
        Rounds: rounds,
        'Total Time': totalTime,
      };
    });
};

export default {
  graphQlQueryPlayground,
  getStartStats,
};
