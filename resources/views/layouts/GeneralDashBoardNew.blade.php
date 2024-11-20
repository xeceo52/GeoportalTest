@extends('dashboards')

@section('title', 'Общая Аналитика')

@section('content')
    <div class="container h-100">
        <div class="row">
            <div class="board col-lg-12">
                <div class="row" style="height: 50%;">
                    <div class="diagram col-lg-3"></div>
                    <div class="diagram col-lg-3"></div>
                    <div class="diagram col-lg-3"></div>
                    <div class="diagram col-lg-3"></div>
                </div>
                <div class="row" style="height: 50%;">
                    <div class="diagram col-lg-5"></div>
                    <div class="diagram col-lg-7"></div>
                </div>
            </div>
        </div>
    </div>
@endsection
