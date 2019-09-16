from mongoengine import *
import datetime


class Filme(Document):
    titulo = StringField(required=True)
    titulo_slug = StringField(required=True, unique=True)
    sinopse = StringField(required=True)
    trailer = StringField(required=True)
    idioma = ListField(required=True)
    formato = ListField(required=True)
    image_url = StringField(required=True)
    original_link = StringField(required=True)
    ano_lancamento = IntField(required=True)
    genero = ListField(required=True)
    duracao = StringField(required=True)
    qualidade_audio = IntField(required=True)
    qualidade_video = IntField(required=True)
    imdb = FloatField(required=True)
    tamanho = ListField(required=True)
    magnet_links = ListField(required=True)
    tipo = StringField(required=True)
    created_at = DateTimeField(default=datetime.datetime.utcnow)
    updated_at = DateTimeField(default=datetime.datetime.utcnow)
