<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/app.jsn'])
    <title>Document</title>
</head>
<body>
    <a class="" href="{{ route('dashboard1') }}">Перейти к DashBoards</a>
    <a class="" href="{{ route('general_map') }}">Перейти к Основной карте</a>
</body>
</html>