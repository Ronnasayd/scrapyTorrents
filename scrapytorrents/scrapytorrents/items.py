# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ScrapytorrentsItem(scrapy.Item):
    # define the fields for your item here like:
    titulo = scrapy.Field()
    titulo_slug = scrapy.Field()
    imdb = scrapy.Field()
    sinopse = scrapy.Field()
    trailer = scrapy.Field()
    idioma = scrapy.Field()
    formato = scrapy.Field()
    image_url = scrapy.Field()
    original_link = scrapy.Field()
    ano_lancamento = scrapy.Field()
    genero = scrapy.Field()
    duracao = scrapy.Field()
    qualidade_audio = scrapy.Field()
    qualidade_video = scrapy.Field()
    imdb = scrapy.Field()
    tamanho = scrapy.Field()
    magnet_links = scrapy.Field()
    tipo = scrapy.Field()
