# -*- coding: utf-8 -*-
import scrapy
from scrapytorrents.items import ScrapytorrentsItem
from scrapytorrents.utils import handleParserInfo, handleParseMagnetLinks
from bs4 import BeautifulSoup


class MeusfilmestorrentsSpider(scrapy.Spider):
    name = "meusfilmestorrents"
    start_urls = ["https://meusfilmestorrents.com"]

    def parse(self, response):
        movies = response.css("a.more-link::attr(href)").getall()
        for movie in movies:
            yield response.follow(movie, callback=self.getData)
        next_page = response.css(
            "#content > div > div > a.nextpostslink::attr(href)"
        ).get()
        yield response.follow(next_page, callback=self.parse)

    def getData(self, response):
        info = response.css("div.entry-content.cf").get()
        infoText = BeautifulSoup(info).get_text()
        infoDictionay = handleParserInfo(self, infoText)
        torrent = ScrapytorrentsItem(**infoDictionay)

        torrent["image_url"] = response.css("div.entry-content.cf img::attr(src)").get(
            default="N/F"
        )
        torrent["trailer"] = response.css("iframe::attr(src)").get(default="N/A")
        torrent["original_link"] = response.url

        magnet_links = response.css(
            'div.entry-content.cf a[href^="magnet"]::attr(href)'
        ).getall()
        torrent["magnet_links"] = handleParseMagnetLinks(self, magnet_links)
        torrent["tipo"] = "serie" if "temporada" in response.url.lower() else "filme"
        torrent["titulo_slug"] = torrent["titulo"].lower().replace(" ", "_")

        self.logger.info(response.url)
        yield torrent
