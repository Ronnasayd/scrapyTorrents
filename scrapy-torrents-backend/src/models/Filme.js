const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const FilmeSchema = new mongoose.Schema({
  titulo: {
    type: 'String'
  },
  sinopse: {
    type: 'String'
  },
  trailer: {
    type: 'String'
  },
  idioma: {
    type: ['String']
  },
  formato: {
    type: ['String']
  },
  image_url: {
    type: 'String'
  },
  original_link: {
    type: 'String'
  },
  ano_lancamento: {
    type: 'Number'
  },
  genero: {
    type: ['String']
  },
  duracao: {
    type: 'String'
  },
  qualidade_audio: {
    type: 'Number'
  },
  qualidade_video: {
    type: 'Number'
  },
  imdb: {
    type: 'Number'
  },
  tamanho: {
    type: ['String']
  },
  magnet_links: {
    type: ['Mixed']
  },
  tipo: {
    type: 'String'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

FilmeSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Filme', FilmeSchema, 'filme')
