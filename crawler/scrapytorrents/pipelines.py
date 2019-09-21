# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
from scrapytorrents.utils import *
import json
import os
from scrapy.exceptions import DropItem
from decouple import config
from scrapytorrents.models import Filme
from mongoengine import *
import datetime


class ScrapytorrentsPipeline(object):
    data = []
    file = None

    def open_spider(self, spider):
        connect('filmes', host=config('DATABASE_URL'))
        path = os.path.dirname(__file__)
        self.file = open(path + '/data/'+spider.name+'.json', 'w')

    def close_spider(self, spider):
        self.file.write(json.dumps(
            self.data, ensure_ascii=False).encode('utf-8'))
        self.file.close()

    def process_item(self, item, spider):
        try:
            filme = Filme(**dict(item))
            filme.save()
            self.data.append(dict(item))
        except Exception as err:
            [filme] = Filme.objects(titulo_slug=item['titulo_slug'])
            filme.updated_at = datetime.datetime.utcnow()
            filme.save()
            # spider.logger.error(err)
        return item
