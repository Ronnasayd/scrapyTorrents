# -*- coding: utf-8 -*-
import scrapy
from scrapytorrents.items import ScrapytorrentsItem
from scrapytorrents.utils import handleParseMagnetLinks
import re


class TorrentfilmesSpider(scrapy.Spider):
    name = 'torrentfilmes'
    start_urls = ['http://torrentfilmes.net/']

    def parse(self, response):
        movies = response.css('div.listagem div.item a::attr(href)').getall()
        for movie in movies:
            yield response.follow(movie, callback=self.getData)
        next_page = response.css(
            'a.nextpostslink::attr(href)').get()
        yield response.follow(next_page, callback=self.parse)

    def getData(self, response):
        def querySelector(query):
            return response.css(query).get()

        def querySelectorAll(query):
            return response.css(query).getall()

        def getElementByString(String):
            return [element.split(':', 1) for element in infoArray if String in element]

        def splitItem(dictionaty, key, pattern):
            element = dictionaty.get(key)
            if any(character in element for character in pattern):
                element = re.split("["+pattern+"]", element)
                for index in range(len(element)):
                    element[index] = element[index].replace(' ', '')
            else:
                element = [element]
            return element
        torrent = dict()
        infoText, _ = ''.join(querySelectorAll(
            'div.content.clearfix *::text')).split(3*'\n')
        infoArray = infoText.split('\n')

        torrent['original_link'] = response.url
        torrent['tipo'] = 'serie' if 'temporada' in response.url else 'filme'
        torrent['image_url'] = querySelector(
            'div.content.clearfix  img::attr(src)')
        torrent['trailer'] = querySelector('iframe::attr(src)')
        torrent['imdb'] = querySelector('span.nota-imdb *::text')

        [[_, torrent['titulo']]] = getElementByString('Traduzido')
        [[_, torrent['sinopse']]] = getElementByString('Sinopse')
        [[_, torrent['formato']]] = getElementByString('Formato')
        [[_, torrent['idioma']]] = getElementByString('Idioma')
        [[_, torrent['tamanho']]] = getElementByString('Tamanho')
        [[_, torrent['genero']]] = getElementByString('Gênero')
        [[_, torrent['duracao']]] = getElementByString('Duração')
        [[_, torrent['qualidade_audio']]] = getElementByString('Áudio')
        [[_, torrent['qualidade_video']]] = getElementByString('Vídeo')
        [[_, torrent['ano_lancamento']]] = getElementByString('Lançamento')

        for key in torrent:
            torrent[key] = torrent[key].strip()

        magnet_links = querySelectorAll('a[href^="magnet"]::attr(href)')
        torrent['magnet_links'] = handleParseMagnetLinks(self, magnet_links)

        torrent['tamanho'] = splitItem(torrent, 'tamanho', '|/')
        torrent['formato'] = splitItem(torrent, 'formato', '|/')
        torrent['idioma'] = splitItem(torrent, 'idioma', '&')
        torrent['genero'] = splitItem(torrent, 'genero', ',.')

        torrent['titulo_slug'] = torrent['titulo'].lower().replace(' ', '_')
        torrent['imdb'] = torrent['imdb'].replace(',', '.')

        torrent = ScrapytorrentsItem(**torrent)

        self.logger.info(response.url)
        yield torrent
