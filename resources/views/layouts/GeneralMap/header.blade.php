<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/style.css')
    <title>@yield('title', 'My Application')</title>
</head>
<body>
<div class="row">
    <div class="header col-lg-12">
        <div class="row"><img class="col-lg-auto" src="{{ asset('images/logo.png') }}" alt="" style="width: 15%;"></div>
        <div class="row">
            <div class="col-10"><p>Саитовское н.м. / Дюртюлинский район / Чекмагушевский регион</p></div>
            <div class="col-auto"><button type="button" class="btn btn-outline-primary">Объект</button></div>
            <div class="col-auto"><button type="button" class="btn btn-outline-primary">Документ</button></div>
        </div>
    </div>
</div>
</body>
</html>
