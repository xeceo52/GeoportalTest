<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/style.css', 'resources/sass/app.scss'])
    <title>Document</title>
</head>
<body>

<div class="container-fluid vh-100">
    <!-- Шапка страницы -->
    <div>
        @include('layouts/GeneralMap/header')

        @yield('content')
    </div>

    <div class="row vh-100">
        <div class="col-lg-3 vh-100 p-1" id="layer-control">
            <h3>Управление слоями</h3>

            <details open>
                <summary>
                    <input type="checkbox" id="territory-group" checked>
                    <label for="territory-group">Территория объекта</label>
                </summary>
                <ul class="listUnstyled">
                    <li>
                        <input type="checkbox" id="GeoPortal:Регионы_добычи" checked>
                        <label for="GeoPortal:Регионы_добычи" class="d-flex align-items-center">
                            <img src="" alt="Стиль 1" class="layer-icon me-2">Регионы добычи
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="GeoPortal:Районы_РБ" checked>
                        <label for="GeoPortal:Районы_РБ" class="d-flex align-items-center">
                            <img src="" alt="Стиль 2" class="layer-icon me-2">Районы РБ
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="GeoPortal:Населенные_пункты" checked>
                        <label for="GeoPortal:Населенные_пункты" class="d-flex align-items-center">
                            <img src="" alt="Стиль 3" class="layer-icon me-2">Населенные пункты
                        </label>
                    </li>
                </ul>
            </details>

            <details open>
                <summary>
                    <input type="checkbox" id="objects-group" checked>
                    <label for="objects-group">Объекты</label>
                </summary>
                <ul class="listUnstyled">
                    <li>
                        <input type="checkbox" id="GeoPortal:Поиск_источников" checked>
                        <label for="GeoPortal:Поиск_источников" class="d-flex align-items-center">
                            <img src="" alt="Стиль 4" class="layer-icon me-2">Прочие источники
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="GeoPortal:Скважины" checked>
                        <label for="GeoPortal:Скважины" class="d-flex align-items-center">
                            <img src="" alt="Стиль 5" class="layer-icon me-2">Скважины
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="GeoPortal:Факелы" checked>
                        <label for="GeoPortal:Факелы" class="d-flex align-items-center">
                            <img src="" alt="Стиль 6" class="layer-icon me-2">Факелы
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="GeoPortal:Цеха" checked>
                        <label for="GeoPortal:Цеха" class="d-flex align-items-center">
                            <img src="" alt="Стиль 7" class="layer-icon me-2">Цеха
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="GeoPortal:Дренажные_емкости" checked>
                        <label for="GeoPortal:Дренажные_емкости" class="d-flex align-items-center">
                            <img src="" alt="Стиль 8" class="layer-icon me-2">Дренажные емкости
                        </label>
                    </li>
                </ul>
            </details>

            <button class="btn btn-primary" id="download-geojson">Скачать GeoJSON</button>
        </div>  <!-- Управление слоями -->

        <div class="col-lg-6" id="map"></div>   <!-- Карта -->

        <div class="col-lg-3 vh-100 p-1" id="data-display"> <!-- Управление атрибутами -->
            <div id="object-attributes">
                <h3>Атрибуты объекта</h3>
                <p>Здесь будут атрибуты выбранного объекта.</p>
            </div>
            <div id="documents">
                <details open>
                    <summary>
                        <label for="open-documents">Фотографии</label>
                        <ul>
                        </ul>
                    </summary>
                    <h3>Приложение</h3>
                    <p>Здесь будут отображены фотографии и документы.</p>
                </details>
            </div>
        </div>
    </div>
</div>
</body>
@vite('resources/js/Maping/Create-map.js')
</html>
