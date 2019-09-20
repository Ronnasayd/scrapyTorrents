const { Router } = require('express')
const FilmesController = require('./controllers/FilmesController')

const router = Router()

router.get('/filmes/:page', FilmesController.Index)
router.get('/generos', FilmesController.Generos)
router.get('/filme/:id', FilmesController.Detail)
router.get('/search/:search', FilmesController.Search)

module.exports = router
