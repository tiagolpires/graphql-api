const StudentTypes = require('./Student.js')

const types = [];
const queries = [];
const mutations = [];

const schemas = [StudentTypes];

schemas.forEach((s) => {
  if(s.types) types.push(s.types);
  if(s.queries) queries.push(s.queries);
  if(s.mutations) mutations.push(s.mutations);
});

module.exports = `
  ${types.join('\n')}

  type Query {
    ${queries.join('\n')}
  }

  type Mutation {
    ${mutations.join('\n')}
  }
`;
