@extends('dashboards')

@section('title', 'Административные районы')

@section('content')
    <div class="board col-lg-10 p-2">
        <div class="row g-2" style="height: 100%;">
            <div class="col-lg-4">
                <div class="diagram col-lg-12" style="height: 33%;">
                    <div id="chart-container-1" class="diagrams"></div>
                </div>
                <div class="diagram col-lg-12" style="height: 33%; margin-top: 2%;">
                    <div class="row" style="height: 100%; width: 100%;">
                        <div id="chart-container-2" class="diagrams col-lg-6"></div>
                        <div class="col-lg-6 d-flex align-items-center" style="text-align: left; font-size: 9pt;">Процентное соотношение количества СЗЗ в районе от общего количества СЗЗ в Республике Башкортостан</div>
                    </div>
                </div>
                <div class="diagram col-lg-12" style="height: 33%; margin-top: 2%;">
                    <div id="chart-container-3" class="diagrams"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="diagram col-lg-12" style="height: 101.1%;">
                    <div id="map2" class="map"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="diagram col-lg-12 d-flex align-items-center justify-content-center" style="height: 20%;">
                    <div class="diagram-dashboards-title">Административные районы</div>
                </div>
                <div class="custom-search diagram col-lg-12" style="height: 6%; margin-top: 2%;">
                    <i class="bi bi-search custom-search-icon"></i>
                    <input type="text" placeholder="Наименование: Уфимский" aria-label="Search">
                </div>
                <div class="diagram col-lg-12" style="height: 73%; margin-top: 2%;">
                    <div class="attribute pt-4">
                        <div class="row g-0">
                            <div class="col-lg-8"><p style="text-align: left">Наименование:</p></div>
                            <div class="col-lg-4 data-info"><p style="color: green; text-align: right;">Уфимский</p></div>
                        </div>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Площадь:</p></div>
                            <div class="col-lg-4 data-info"><p style="color: green; text-align: right;">1594,92 км²</p></div>
                        </div>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">...</p></div>
                            <div class="col-lg-4 data-info"><p style="color: green; text-align: right;">...</p></div>
                        </div>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">...</p></div>
                            <div class="col-lg-4 data-info"><p style="color: green; text-align: right;">...</p></div>
                        </div>
                        <hr style="width: 80%; margin-top: 20%;"/>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Всего СЗЗ</p></div>
                            <div class="col-lg-4 data-info"><p style="color: green; text-align: right;">866</p></div>
                        </div>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Полные</p></div>
                            <div class="col-lg-4 data-info"><p style="color: green; text-align: right;">580</p></div>
                        </div>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Сокращенные</p></div>
                            <div class="col-lg-4 data-info"><p style="color: green; text-align: right;">225</p></div>
                        </div>
                        <div class="row g-0 mt-4">
                            <div class="col-lg-8"><p style="text-align: left">Без установления</p></div>
                            <div class="col-lg-4 data-info"><p style="color: green; text-align: right;">61</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
