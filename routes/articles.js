const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/', (req, res, next) => {
  res.render('articles', {
    title: 'Articles'
  });
});

router.get('/show/:id', (req, res, next) => {
  res.render('article', {
    title: 'Article'
  });
});

router.get('/category/:category_id', (req, res, next) => {
  res.render('articles', {
    title: 'Category Articles'
  });
});

router.post('/add', (req, res, next) => {
  let article = new Article();
  article.title = req.body.title;
  article.subtitle = req.body.subtitle;
  article.category = req.body.category;
  article.author = req.body.author;
  article.body = req.body.body;
  Article.addArticle(article, (err, category) => {
    if(err) {
      res.send(err);
    }
    res.redirect('/manage/articles');
  })
});

router.post('/edit/:id', (req, res, next) => {
  let article = new Article();
  const update = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    category: req.body.category,
    author: req.body.author,
    body: req.body.body,
  }

  Article.updateArticle(req.params.id, update, {}, (err, category) => {
    if(err) {
      res.send(err);
    }
    res.redirect('/manage/articles');
  })
});

router.delete('/delete/:id', (req, res, next) => {
  Article.removeArticle(req.params.id, (err) => {
    if(err) {
      res.send(err);
    }
    res.status(200);
  });
});


module.exports = router;
