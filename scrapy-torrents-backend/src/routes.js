const { Router } = require('express')
const filmesController = require('./controllers/filmesController')

const router = Router()

router.get('/filmes/:page', filmesController.index)
router.get('/generos', filmesController.generos)
router.get('/filme/:id', filmesController.detail)
router.get('/search/:search', filmesController.search)

module.exports = router
