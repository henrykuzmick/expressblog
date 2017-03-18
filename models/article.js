const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  category: String,
  body: String,
  author: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  comments: [{
    comment_subject: String,
    comment_body: String,
    comment_author: String,
    comment_email: String,
    comment_date: String
  }]
});

const Article = module.exports = mongoose.model('Article', articleSchema);

module.exports.getArticles = function(callback, limit) {
  Article.find(callback).limit(limit).sort({title: 1})
}

module.exports.addArticle = function(article, callback)  {
  Article.create(article, callback);
}

module.exports.getArticleById = function(id, callback) {
  Article.findById(id, callback);
}

module.exports.updateArticle = function(id, update, options, callback){
  Article.findOneAndUpdate({_id: id}, update, options, callback);
}

module.exports.removeArticle = function(id, callback) {
  Article.remove({_id: id}, callback);
}
