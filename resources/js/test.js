import 'ol/ol.css';
import {Map, View} from 'ol';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';

const format = 'image/png';
const bounds1 = [6016671.923282493, 7142418.482385793, 6020457.117489953, 7164807.43952286];
const layerNames = [
    'ne:Цеха',
    'ne:Населенные_пункты4',
    'ne:Факелы',
    'ne:Скважины (2)',
    'ne:Прочие источники (2)',
    'ne:Источник_выброса (организованный)',
    'ne:Дренажные емкости (2)',
    'ne:Регионы добычи',
    'ne:Районы_РБ'
];

// Сопоставление слоев с их полями
const layerFields = {
    'ne:Цеха': ['id', 'Наименование цеха', 'Area'],
    'ne:Населенные_пункты4': ['id', 'Name', 'A_DSTRCT', 'POPULATION'],
    'ne:Факелы': ['id', 'name'],
    'ne:Скважины (2)': ['id', 'Регион', 'Административный район', 'Месторождение', 'Цех', '№скважины/наименованиеобъекта', 'Куст', 'Количество скважин на кусту', 'Назначение', 'Состояние'],
    'ne:Прочие источники (2)': ['id', 'name', 'kust_num'],
    'ne:Источник_выброса (организованный)': ['id', 'name'],
    'ne:Дренажные емкости (2)': ['id', 'name', 'volume', 'diameter', 'ZRA_num', 'flants_num', 'height'],
    'ne:Регионы добычи': ['id', 'СОБСТВЕННИК', 'layer'],
    'ne:Районы_РБ': ['Идентификатор записи', 'Собственное название'],
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
            console.warn(`Слой ${name} не доступен.`);
        }
    }
    return layers;
}

// Основная логика
document.addEventListener('DOMContentLoaded', async function () {
    const layers = await createLayers();

    const map1 = new Map({
        target: 'map1',
        layers: layers,
        view: new View({
            center: [(bounds1[0] + bounds1[2]) / 2, (bounds1[1] + bounds1[3]) / 2],
            zoom: 4
        })
    });

    // Элемент для отображения данных
    const dataDisplay = document.getElementById('data-display');

    // Обработчик клика для отображения данных объекта
    map1.on('singleclick', async function (evt) {
        dataDisplay.innerHTML = "Loading... please wait..."; // Изначально выводим сообщение
        const view = map1.getView();
        const viewResolution = view.getResolution();

        await Promise.all(layers.map(async layer => {
            if (!layer.getVisible()) return;

            const layerName = layer.getSource().getParams().LAYERS;
            const fields = layerFields[layerName];

            const url = layer.getSource().getFeatureInfoUrl(evt.coordinate, viewResolution, view.getProjection(), {
                'INFO_FORMAT': 'application/json',
                'FEATURE_COUNT': 50
            });

            if (url) {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (data.features && data.features.length > 0) {
                        dataDisplay.innerHTML = ''; // Очищаем содержимое
                        data.features.forEach(feature => {
                            fields.forEach(field => {
                                if (feature.properties[field] !== undefined) {
                                    dataDisplay.innerHTML += `<b>${field}:</b> ${feature.properties[field]}<br>`;
                                }
                            });
                        });
                    } else {
                        dataDisplay.innerHTML = "Нет данных для отображения.";
                    }
                } else {
                    console.error('Ошибка:', response.status);
                    dataDisplay.innerHTML = "Ошибка при загрузке данных.";
                }
            }
        }));
    });
});
