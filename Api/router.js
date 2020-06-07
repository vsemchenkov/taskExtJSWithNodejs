const express = require('express')
const path = require('path')
const router = express.Router()

// Controllers
const getController = require('../Controller/GetController')
const postController = require('../Controller/PostController')
const appController = require('../Controller/AppController')
const jsController = require('../Controller/JsController')

router.get('/', appController)
router.get('/app.js', jsController);
router.get('/api/:id', getController)
router.post('/api/post', postController)

module.exports = router;



