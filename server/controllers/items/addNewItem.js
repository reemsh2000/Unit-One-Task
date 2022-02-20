const {addNewItemQuery } = require('../../database/queries');

const addNewItem = async (req, res) => {
  const {name , description } = req.body;
  try {
    const {rowCount} = await addNewItemQuery(name , description );
     rowCount && res.json({ message: "Added Successfully" });
  } catch (err) {
    if (err.details) {
      res.status(400).json({ message: err.details[0].message });
    }
  }
};
module.exports = addNewItem;
