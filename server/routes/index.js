const { getItemById, displayItems, addNewItem } = require('../controllers/items');

const router = require('express').Router();
router.get('/item/:itemId',getItemById)
router.get('/items/:pageNum',displayItems)
router.post('/item',addNewItem)

module.exports = router;

