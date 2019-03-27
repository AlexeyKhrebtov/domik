<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Domik') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>

    @yield('content')
    <!-- layouts/app.blade.php -->

    <!-- Scripts -->
    <!-- <script src="{{ mix('js/app.js') }}" defer></script> -->
    <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"></script>
</body>
</html>
