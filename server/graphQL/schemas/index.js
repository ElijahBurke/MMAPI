const { gql } = require('apollo-server-express');

const query = require('./query.schema');
const types = require('./types.schema');

module.exports = gql`
  scalar Date
  ${query}
  ${types}
`;
