// Dependencies
// =============================================================
const router = require('express').Router();
const { Op } = require('sequelize');
const Book = require('../../models/book');

// Routes
// =============================================================

// Get all books
router.get('/books', (req, res) => {
  Book.findAll({}).then(results => {
    res.json(results);
  });
});

// Get all books of a specific genre
router.get('/genres/:genre', (req, res) => {
  Book.findAll({
    where: {
      genre: req.params.genre
    }
  }).then(results => {
    res.json(results);
  });
});

// Get all books from a specific author
router.get('/authors/:author', (req, res) => {
  Book.findAll({
    where: {
      author: req.params.author
    }
  }).then(results => {
    res.json(results);
  });
});

// Get all "long" books (books 350 pages or more)
router.get('/books/length/long', (req, res) => {
  Book.findAll({
    where: {
      pages: {
        [Op.gte]: 350
      }
    },
    order: [['pages', 'DESC']]
  }).then(results => {
    res.json(results);
  });
});

// Get all "short" books (books 350 pages or less)
router.get('/books/length/short', (req, res) => {
  Book.findAll({
    where: {
      pages: {
        [Op.lte]: 350
      }
    },
    order: [['pages', 'ASC']]
  }).then(results => {
    res.json(results);
  });
});

module.exports = router;
