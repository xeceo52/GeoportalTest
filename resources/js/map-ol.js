import 'ol/ol.css';
import { Map, View } from 'ol';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';

// Формат изображения
const format = 'image/png';

// Границы для первой карты
const bounds1 = [5917342.926689945, 6725761.699878624, 6640074.03619358, 7665584.589317026];

// Создание слоя для первой карты
const untiled1 = new ImageLayer({
    source: new ImageWMS({
        url: 'http://localhost:8080/geoserver/cite/wms',
        params: {
            'FORMAT': format,
            'VERSION': '1.1.1',
            'STYLES': '',
            'LAYERS': 'cite:SHPRegions',
            'exceptions': 'application/vnd.ogc.se_inimage'
        },
        serverType: 'geoserver'
    })
});

// Создание первой карты
const map1 = new Map({
    target: 'map1',
    layers: [
        untiled1
    ],
    view: new View({
        center: [(bounds1[0] + bounds1[2]) / 2, (bounds1[1] + bounds1[3]) / 2],
        zoom: 6
    })
});

// Границы для второй карты
const bounds2 = [5917237.448379098, 6722885.797243343, 6679249.566915597, 7665584.589317026];

// Создание слоя для второй карты
const untiled2 = new ImageLayer({
    source: new ImageWMS({
        ratio: 1,
        url: 'http://localhost:8080/geoserver/cite/wms',
        params: {
            'FORMAT': format,
            'VERSION': '1.1.1',
            'STYLES': '',
            'LAYERS': 'cite:Districts',
            'exceptions': 'application/vnd.ogc.se_inimage'
        }
    })
});

const tiled2 = new TileLayer({
    visible: false,
    source: new TileWMS({
        url: 'http://localhost:8080/geoserver/cite/wms',
        params: {
            'FORMAT': format,
            'VERSION': '1.1.1',
            'tiled': true,
            'STYLES': '',
            'LAYERS': 'cite:Districts',
            'exceptions': 'application/vnd.ogc.se_inimage',
            'tilesOrigin': `${bounds2[0]},${bounds2[1]}`
        }
    })
});

// Создание второй карты
const map2 = new Map({
    target: 'map2',
    layers: [
        untiled2,
        tiled2
    ],
    view: new View({
        center: [(bounds2[0] + bounds2[2]) / 2, (bounds2[1] + bounds2[3]) / 2],
        zoom: 6
    })
});

// Добавление контроля позиции мыши для второй карты
const mousePositionControl = new MousePosition({
    className: 'custom-mouse-position',
    target: document.getElementById('location'),
    coordinateFormat: createStringXY(5),
    undefinedHTML: '&nbsp;'
});
map2.addControl(mousePositionControl);
