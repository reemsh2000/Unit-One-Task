const {displayItemsQuery } = require('../../database/queries');

const displayItems = async (req, res) => {
  const { pageNum } = req.params;
  try {
    const { rows,rowCount} = await displayItemsQuery(pageNum);
    if (rowCount) res.json({ data: rows });
    else res.json({ message: "there is no items to display" });
  } catch (err) {
    if (err.details) {
      res.status(400).json({ message: err.details[0].message });
    }
  }
};
module.exports = displayItems;
