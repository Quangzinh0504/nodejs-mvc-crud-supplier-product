const express = require('express');
const controller = require('../controllers/productController');
const router = express.Router();

router.get('/', controller.list);
router.get('/new', controller.showCreate);
router.post('/new', controller.create);
router.get('/:id/edit', controller.showEdit);
router.post('/:id/edit', controller.edit);
router.post('/:id/delete', controller.delete);

module.exports = router;