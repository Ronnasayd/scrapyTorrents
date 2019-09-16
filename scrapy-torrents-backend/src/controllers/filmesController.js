const mongoose = require('mongoose')
require('../models/Filme')
const Filme = mongoose.model('Filme')

module.exports = {
  index: async (req, res) => {
    const { page } = req.params
    const filme = await Filme.paginate(req.query, {
      page,
      limit: 27,
      sort: { ano_lancamento: -1, updated_at: -1 },
      select: 'titulo titulo_slug ano_lancamento image_url imdb'
    })
    res.json(filme)
  },
  generos: async (req, res) => {
    const generos = await Filme.find().distinct('genero')
    return res.json(generos)
  },
  detail: async (req, res) => {
    const { id } = req.params
    const filme = await Filme.findById(id)
    return res.json(filme)
  },
  search: async (req, res) => {
    const { search } = req.params
    const filmes = await Filme.find({
      titulo: { $regex: search.toLowerCase().replace(' ', '_'), $options: 'i' }
    }).select('titulo ano_lancamento image_url trailer imdb')
    return res.json(filmes)
  }
}
