const StudentTypes = require('./Student.js')

const types = [];
const queries = [];

const schemas = [StudentTypes];

schemas.forEach((s) => {
  if(s.types) types.push(s.types);
  if(s.queries) queries.push(s.queries);
});

module.exports = `
  ${types.join('\n')}

  type Query {
    ${queries.join('\n')}
  }
`;
