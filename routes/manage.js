const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Article = require('../models/Article');

router.get('/articles', (req, res, next) => {
  Article.getArticles((err, articles) => {
    if(err) {
      res.send(err);
    }
    res.render('manage_articles', {
      title: 'Manage Articles',
      articles
    });
  });
});

router.get('/categories', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if(err) {
      res.send(err);
    }
    res.render('manage_categories', {
      title: 'Manage Categories',
      categories: categories
    });
  })
});

router.get('/articles/add', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if(err) {
      res.send(err);
    }
    res.render('add_article', {
      title: 'Create Article',
      categories
    });
  });
});

router.get('/categories/add', (req, res, next) => {
  res.render('add_category', { title: 'Create Category' });
});

router.get('/categories/edit/:id', (req, res, next) => {
  Category.getCategoryById(req.params.id, (err, category) => {
    if(err) {
      res.send(err);
    }
    res.render('edit_category', {
      title: 'Edit Category',
      category
     });
  })
});

router.get('/articles/edit/:id', (req, res, next) => {
  Article.getArticleById(req.params.id, (err, article) => {
    if(err) {
      res.send(err);
    }
    Category.getCategories((err, categories) => {
      if(err) {
        res.send(err);
      }
      res.render('edit_article', {
        title: 'Edit Category',
        article,
        categories
      });
    })
  })
});

module.exports = router;
