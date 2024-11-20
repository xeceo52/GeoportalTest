<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/main.css', 'resources/sass/app.scss'])
    <title>@yield('title')</title>
</head>
<body>
<div class="container vh-100">
    <div class="row-fluid d-flex justify-content-center align-items-center min-vh-100">
        @include('layouts/panel')

        @yield('content')
    </div>
</div>
@vite('resources/js/map-ol.js')
@vite('resources/js/app.js')
@vite('resources/js/charts.js')
@vite('resources/js/Region-charts')
</body>
</html>

