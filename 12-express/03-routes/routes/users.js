const express = require('express')

const router = express.Router();

const { getUsersHandler, postUsersHandler, getSingleUserHandler, deleteSingleUserHandler } = require('../controllers/users')



router.get('/', getUsersHandler)
router.post('/', postUsersHandler)
router.get('/:userId', getSingleUserHandler)
router.delete('/:userId', deleteSingleUserHandler)

module.exports = router;