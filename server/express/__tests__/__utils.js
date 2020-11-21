const { ApolloServer } = require('apollo-server');
const resolvers = require('../../graphQL/resolvers');
const typeDefs = require('../../graphQL/schemas');

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const GET_FIGHTS = gql`
query fights {
  fights (id: 1) {
    id
    fighter
  }
}
`;

module.exports = {
  server,
  GET_FIGHTS,
};
