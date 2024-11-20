<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'My Application')</title>

</head>
<body>
    <div class="panel col-lg-2 d-flex flex-column align-items-center">
        <div class="row">
            <div class="title">Аналитика</div>
        </div>
        <div class="btn1 row custom-button">
            <a class="col-lg-9 button-text ml-2" href="{{ route('dashboard1') }}">Общая</a>
            <img class="col-lg-3" src="{{asset('images/pie-chart.png')}}" alt=""/>
        </div>
        <div class="btn2 row custom-button">
            <a href="{{ route('dashboard2') }}" class="col-lg-9 button-text ml-2">Адм. районы</a>
            <img class="col-lg-3" src="{{asset('images/bar-graph.png')}}" alt=""/>
        </div>
        <div class="btn3 row custom-button">
            <a href="{{ route('dashboard3') }}" class="col-lg-9 button-text ml-2">C33</a>
            <img class="col-lg-3" src="{{asset('images/icon-map.png')}}" alt=""/>
        </div>

        <div class="btn3 row custom-button">
            <a href="{{ route('dashboard4') }}" class="col-lg-9 button-text ml-2">Общая Новый</a>
            <img class="col-lg-3" src="{{asset('images/icon-map.png')}}" alt=""/>
        </div>
        <div class="menu mt-5">
            <a href="{{ route('welcome') }}">Главная</a>
        </div>
    </div>
</body>
</html>
