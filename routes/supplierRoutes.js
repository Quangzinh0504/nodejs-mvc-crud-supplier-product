const express = require('express');
const controller = require('../controllers/supplierController');
const router = express.Router();

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Lấy danh sách nhà cung cấp
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', controller.list);
router.get('/new', controller.showCreate);
router.post('/new', controller.create);
router.get('/:id/edit', controller.showEdit);
router.post('/:id/edit', controller.edit);
router.post('/:id/delete', controller.delete);

module.exports = router;