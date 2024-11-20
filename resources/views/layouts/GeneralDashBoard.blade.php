@extends('dashboards')

@section('title', 'Общая Аналитика')

@section('content')
    <div class="board col-lg-10 p-2">
        <div class="row pb-2 g-2" style="height: 50%">
            <div class="bl col-lg-3">
                <div class="diagram diagram1">
                    <p>Регионы добычи</p>
                    <div id="diagramJs1" class="diagramJs" style="height: 100%;"></div>
                </div>
            </div>
            <div class="bl col-lg-3">
                <div class="diagram diagram2">
                    <p>Назначение скважин</p>
                    <div id="diagramJs2" class="diagramJs" style="height: 100%"></div>
                </div>
            </div>
            <div class="bl col-lg-3">
                <div class="diagram diagram3">
                    <p>Состояние скважин</p>
                    <div id="diagramJs3" class="diagramJs" style="height: 100%;"></div>
                </div>
            </div>
            <div class="bl col-lg-3">
                <div class="diagram diagram4">
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Выберите регион</button>
                        <ul id="regionDropdown" class="dropdown-menu" style="cursor: pointer;">
                            <li><a class="dropdown-item" data-region="Общая статистика">Общая статистика</a></li>
                            <li><a class="dropdown-item" data-region="Арланский">Арланский</a></li>
                            <li><a class="dropdown-item" data-region="Ишимбайский">Ишимбайский</a></li>
                            <li><a class="dropdown-item" data-region="Краснохолмский">Краснохолмский</a></li>
                            <li><a class="dropdown-item" data-region="Туймазинский">Туймазинский</a></li>
                            <li><a class="dropdown-item" data-region="Чекмагушевский">Чекмагушевский</a></li>
                        </ul>
                    </div>
                    <div class="attribute">
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Количество ЗОУИТ</p></div>
                            <div class="col-lg-4 data-info"><p id="totalZOUIT" style="color: green; text-align: right;">3500</p></div>
                        </div>
                        <hr/>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Полные</p></div>
                            <div class="col-lg-4"><p id="totalFull" style="color: green; text-align: right;">700</p></div>
                        </div>
                        <hr/>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Сокращенные</p></div>
                            <div class="col-lg-4"><p id="totalShort" style="color: green; text-align: right;">250</p></div>
                        </div>
                        <hr/>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Без установления</p></div>
                            <div class="col-lg-4"><p id="totalWithoutEstablishing" style="color: green; text-align: right;">45</p></div>
                        </div>
                        <hr/>
                    </div>

                </div>
            </div>
        </div>
        <div class="row pt-2 g-2" style="height: 51.5%">
            <div class="bl col-lg-5">
                <div class="diagram diagram5">
                    <div id="map1" class="map"></div>
                </div>
            </div>
            <div class="bl col-lg-7">
                <div class="diagram diagrams6">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <p>Динамика вынесения решений</p>
                                <p style="right: 20px">1 из 5</p>
                                <div id="chart1" class="chart-container"></div>
                            </div>
                            <div class="swiper-slide">
                                <p>Динамика получения СЭЗ</p>
                                <p style="right: 20px">2 из 5</p>
                                <div id="chart2" class="chart-container"></div>
                            </div>
                            <div class="swiper-slide">
                                <p>Динамика проведения инвентаризации</p>
                                <p style="right: 20px">3 из 5</p>
                                <div id="chart3" class="chart-container"></div>
                            </div>
                            <div class="swiper-slide">
                                <p>Динамика проведения лабораторных исследований</p>
                                <p style="right: 20px">4 из 5</p>
                                <div id="chart4" class="chart-container"></div>
                            </div>
                            <div class="swiper-slide">
                                <p>Динамика разработки проектов СЗЗ</p>
                                <p style="right: 20px">5 из 5</p>
                                <div id="chart5" class="chart-container"></div>
                            </div>
                        </div>
                        <!-- Кнопки навигации -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
