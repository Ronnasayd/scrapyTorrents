from unidecode import unidecode
from scrapytorrents.items import ScrapytorrentsItem
import re
import urllib.parse


def handleQualidadeAudio(spider, key, value):
    if key.lower().startswith("qualidade") and key.lower().endswith("audio"):
        key = "qualidade_audio"
        value = ''.join(value.split())
    return key, value


def handleQualidadeVideo(spider, key, value):
    if key.lower().startswith("qualidade") and key.lower().endswith("video"):
        key = "qualidade_video"
        value = ''.join(value.split())
    return key, value


def handleLancamento(spider, key, value):
    if key.lower().endswith('lancamento'):
        key = 'ano_lancamento'
        value = ''.join(value.split())
    return key, value


def handleIMDB(spider, key, value):
    if key.lower().startswith('imdb'):
        key = 'imdb'
        value = ''.join(value.split())
        try:
            value = re.split("[\|/;-]", value)[0]
        except Exception as err:
            pass
    return key, value


def handleTamanho(spider, key, value):
    if key.lower().startswith('tamanho'):
        key = 'tamanho'
        value = ''.join(value.split())
        try:
            value = re.split("[/\|-]", value)
        except:
            value = [value]
    return key, value


def handleTitulo(infoInDictionaryFormat, spider, key, value):
    if 'titulo' not in infoInDictionaryFormat:
        if key.lower().startswith("titulo"):
            key = "titulo"
            if value.lower().startswith(' '):
                value = value[1::]
    return key, value


def handleGenero(spider, key, value):
    if key.lower().startswith('genero'):
        key = 'genero'
        value = ''.join(value.lower().split())
        try:
            value = re.split("[,/\|\.-]", value)
        except:
            value = [value]
    return key, value


def handleIdioma(spider, key, value):
    if key.lower().startswith('idioma') or key.lower().startswith('audio'):
        key = 'idioma'
        value = ''.join(value.lower().split())
        try:
            value = re.split("[,/\|\.-]", value)
        except:
            value = [value]
    return key, value


def handleDuracao(spider, key, value):
    if key.lower().startswith('duracao'):
        key = 'duracao'
        value = ''.join(value.split())
    return key, value


def handleFormato(spider, key, value):
    if key.lower().startswith('formato'):
        key = 'formato'
        value = ''.join(value.lower().split())
        try:
            value = re.split("[,/\|\.-]", value)
        except:
            value = [value]
    return key, value


def handleSinopse(spider, key, value):
    if key.lower().endswith('sinopse'):
        key = 'sinopse'

    return key, value


def handleParserInfo(spider, infoText):
    decodedInfoList = unidecode(infoText).split('\n')
    decodedInfoList = [i for i in decodedInfoList if i]
    infoInDictionaryFormat = {}
    for index, infoElement in enumerate(decodedInfoList):
        if index > 0:
            try:
                key, value = infoElement.split(':', 1)
                key, value = handleQualidadeAudio(spider, key, value)
                key, value = handleQualidadeVideo(spider, key, value)
                key, value = handleLancamento(spider, key, value)
                key, value = handleIMDB(spider, key, value)
                key, value = handleGenero(spider, key, value)
                key, value = handleTitulo(
                    infoInDictionaryFormat, spider, key, value)
                key, value = handleTamanho(spider, key, value)
                key, value = handleIdioma(spider, key, value)
                key, value = handleDuracao(spider, key, value)
                key, value = handleFormato(spider, key, value)
                key, value = handleSinopse(spider, key, value)

                if key.lower() in ScrapytorrentsItem.__dict__['fields'].keys():
                    infoInDictionaryFormat[key.lower()] = value
            except Exception as err:
                spider.logger.error(
                    "erro:{}-element:{}".format(err, infoElement))

    return infoInDictionaryFormat


def handleParseMagnetLinks(spider, magnetLinks):
    try:
        listOfMagnetLinks = []
        for magnet in list(magnetLinks):
            magnetDict = {}
            magnet = urllib.parse.unquote(magnet)
            magnetDict['link'] = magnet
            auxiliaryList = magnet.split('&')
            for part in auxiliaryList:
                if part.startswith('dn='):
                    magnetDict['nome'] = part.split('=')[1]
                if part.startswith('magnet:'):
                    magnetDict['hash'] = part.split('=')[1].split(':')[-1]
            listOfMagnetLinks.append(magnetDict)
    except Exception as err:
        spider.logger.error(err)

    return listOfMagnetLinks
