const express = require('express')

const router = express.Router();

const {getCommentsHadler, postCommentsHandler, getSingleCommentHandler, deleteSingleCommentHandler} = require('../controllers/comments')



router.get('/', getCommentsHadler)
router.post('/', postCommentsHandler)
router.get('/:commentId', getSingleCommentHandler)
router.delete('/:commentId', deleteSingleCommentHandler)

module.exports = router;