const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  title: String,
  description: String
});

const Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function(callback, limit) {
  Category.find(callback).limit(limit).sort({title: 1})
}

module.exports.addCategory = function(category, callback)  {
  Category.create(category, callback);
}

module.exports.getCategoryById = function(id, callback) {
  Category.findById(id, callback);
}

module.exports.updateCategory = function(id, update, options, callback){
  Category.findOneAndUpdate({_id: id}, update, options, callback);
}

module.exports.removeCategory = function(id, callback) {
  Category.remove({_id: id}, callback);
}
