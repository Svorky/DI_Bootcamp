const express = require('express');
const router = express.Router();
const controller = require('../controller/quizController.js');

router.get('/', controller.getQuestion);
router.post('/', controller.insertAnswer);
router.get('/score', controller.getScore)

module.exports = router