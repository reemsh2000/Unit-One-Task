const connection = require('../config/connection');

const displayItemsQuery = (pageNum=1) => connection.query('SELECT * FROM items ORDER BY id asc LIMIT 7 OFFSET ($1 - 1) * 7', [pageNum]);

module.exports = displayItemsQuery;
