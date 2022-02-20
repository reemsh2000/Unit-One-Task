const connection = require('../config/connection');

const addNewItemQuery = ( name,description ) => connection.query(
  'INSERT INTO items (name,description ) VALUES ($1, $2) RETURNING id',
  [name,description],
);

module.exports = addNewItemQuery;
