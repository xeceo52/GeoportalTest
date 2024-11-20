import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';
import { setupPopup } from './popup.js';
import { createLayerGroups, setupLayerVisibilityControls } from './Layer-grouping.js';

// Описание подложки OpenStreetMap
function createBaseLayer() {
    return new TileLayer({
        source: new OSM() // Используем OpenStreetMap в качестве подложки
    });
}

// Основные параметры карты
const format = 'image/png';
const bounds1 = [6016671.923282493, 7142418.482385793, 6020457.117489953, 7164807.43952286];
const layerNames = [
    'GeoPortal:Цеха',
    'GeoPortal:Факелы',
    'GeoPortal:Регионы_добычи',
    'GeoPortal:Населенные_пункты',
    'GeoPortal:Прочие_источники',
    'GeoPortal:Скважины',
    'GeoPortal:Источник_выброса_(организованный)',
    'GeoPortal:Дренажные_емкости',
    'GeoPortal:Районы_РБ'
];

// Сопоставление слоев с их полями
const layerFields = {
    'GeoPortal:Цеха': ['id', 'Наименование цеха', 'Area'],
    'GeoPortal:Населенные_пункты': ['id', 'Name', 'A_DSTRCT', 'POPULATION'],
    'GeoPortal:Факелы': ['id', 'name'],
    'GeoPortal:Скважины': ['id', 'Регион', 'Административный район', 'Месторождение', 'Цех', '№скважины/наименованиеобъекта', 'Куст', 'Количество скважин на кусту', 'Назначение', 'Состояние'],
    'GeoPortal:Прочие_источники': ['id', 'name', 'kust_num'],
    'GeoPortal:Источник_выброса_(организованный)': ['id', 'name'],
    'GeoPortal:Дренажные_емкости': ['id', 'name', 'volume', 'diameter', 'ZRA_num', 'flants_num', 'height'],
    'GeoPortal:Регионы_добычи': ['id', 'СОБСТВЕННИК', 'layer'],
    'GeoPortal:Районы_РБ': ['Идентификатор записи', 'Собственное название'],
};

// Функция для проверки наличия слоя
async function checkLayerAvailability(layerName) {
    const url = `http://localhost:8080/geoserver/wms?service=WMS&version=1.1.1&request=DescribeLayer&layers=${layerName}`;
    const response = await fetch(url);
    return response.ok;
}

// Функция для создания слоя WMS
function createWmsLayer(layerName) {
    return new ImageLayer({
        source: new ImageWMS({
            url: 'http://localhost:8080/geoserver/ows?',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                'STYLES': '',
                'LAYERS': layerName,
                'exceptions': 'application/vnd.ogc.se_inimage',
                'TILED': true
            },
            serverType: 'geoserver'
        }),
        visible: true
    });
}

// Создание слоев
async function createLayers() {
    const layers = [];
    for (const name of layerNames) {
        const isAvailable = await checkLayerAvailability(name);
        if (isAvailable) {
            layers.push(createWmsLayer(name));
        } else {
            console.log(`Слой ${name} не доступен.`);
        }
    }
    return layers;
}

/// Основная логика
document.addEventListener('DOMContentLoaded', async function () {
    const layers = await createLayers();

    // Создание базового слоя
    const baseLayer = createBaseLayer();

    // Конфигурация групп слоев
    const groupConfigs = [
        {
            name: 'territory-group',
            conditions: ['GeoPortal:Регионы_добычи', 'GeoPortal:Районы_РБ', 'GeoPortal:Населенные_пункты']
        },
        {
            name: 'objects-group',
            conditions: ['GeoPortal:Прочие_источники', 'GeoPortal:Скважины', 'GeoPortal:Факелы', 'GeoPortal:Цеха', 'GeoPortal:Дренажные_емкости']
        }
    ];

    const layerGroups = createLayerGroups(layers, groupConfigs);

    const map = new Map({
        target: 'map',
        layers: [baseLayer, ...layers], // Подложка ниже остальных слоев
        view: new View({
            center: [(bounds1[0] + bounds1[2]) / 2, (bounds1[1] + bounds1[3]) / 2],
            zoom: 6
        })
    });

    const dataDisplay = document.getElementById('data-display');

    setupPopup(map, layers, dataDisplay, layerFields);

    // Настройка управления видимостью слоев и групп
    setupLayerVisibilityControls(layerGroups, layers);
});
