const connection = require('../config/connection');

const getItemByIdQuery = (id) => connection.query('SELECT * FROM items WHERE id=$1', [id]);

module.exports = getItemByIdQuery;
