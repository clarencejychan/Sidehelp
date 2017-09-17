var mongoose = require('mongoose');

var itemsSchema = new mongoose.Schema({
  itemName: String,
  itemPrice: String,
  itemDescription: String,
  itemLocation: String,
  timeAdded: Number
});

module.exports = mongoose.model('Items', itemsSchema);