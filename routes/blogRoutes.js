const express = require('express')
const router = express.Router()
const Blog = require('../models/Blog')
const BlogController = require('../controllers/BlogController')

router.get('',BlogController.index)
router.post('',BlogController.store)
router.get('/create',BlogController.create)
router.post('/:id/delete',BlogController.destroy)
router.get('/:id',BlogController.show)

module.exports = router;