const { getItemByIdQuery } = require("../../database/queries");

const getItemById = async (req, res) => {
  const { itemId } = req.params;
  try {
    const {rows,rowCount} = await getItemByIdQuery(itemId);
    if (rowCount) res.json({ data: rows[0] });
    else res.json({ message: "this id does not exist" });
  } catch (err) {
    if (err.details) {
      res.status(400).json({ message: err.details[0].message });
    }
  }
};
module.exports = getItemById;
