const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

router.get('/', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if(err) {
      res.send(err);
    }
    res.render('categories', {
      title: 'Categories',
      categories: categories
    });
  })
});

router.post('/add', (req, res, next) => {
  let category = new Category();
  category.title = req.body.title;
  category.description = req.body.description;
  Category.addCategory(category, (err, category) => {
    if(err) {
      res.send(err);
    }
    res.redirect('/manage/categories');
  })
})

router.post('/edit/:id', (req, res, next) => {
  const update = {title: req.body.title, description: req.body.description}
  Category.updateCategory(req.params.id, update, {}, (err) => {
    if(err) {
      res.send(err);
    }
    res.redirect('/manage/categories');
  })
})

router.delete('/delete/:id', (req, res, next) => {
  Category.removeCategory(req.params.id, (err) => {
    if(err) {
      res.send(err);
    }
    res.status(200);
  });
});



module.exports = router;
