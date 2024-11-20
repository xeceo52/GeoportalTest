@extends('dashboards')

@section('title', 'Санитарно защитные зоны')

@section('content')
    <div class="board col-lg-10 p-2">
       <div class="row g-2" style="height: 100%;">
           <div class="col-lg-4">
               <div class="diagram col-lg-12" style="height: 101.1%;">
                   <div>
                       <img src="{{asset('images/map-scheme.jpeg')}}" alt="" style="width: 100%; border-radius: 16px">
                   </div>
                   <button class="btn btn-outline-secondary btn-download">
                       Скачать <i class="bi bi-download"></i>
                   </button>
               </div>
           </div>
           <div class="col-lg-4">
               <div class="diagram col-lg-12" style="height: 101.1%;">
                   <div id="map2" class="map"></div>
               </div>
           </div>
           <div class="col-lg-4">
               <div class="diagram col-lg-12 d-flex align-items-center justify-content-center" style="height: 20%;">
                   <div class="diagram-dashboards-title">Зоны с особыми условиями использования территории (Санитарно-защитные зоны)</div>
               </div>
               <div class="custom-search diagram col-lg-12" style="height: 6%; margin-top: 2%;">
                   <i class="bi bi-search custom-search-icon"></i>
                   <input type="text" placeholder="Номер: 02:22-6.2453" aria-label="Search">
               </div>
               <div class="diagram col-lg-12" style="height: 73%; margin-top: 2%;">
                   <div class="attribute pt-4">
                       <div class="row g-0">
                           <div class="col-lg-5"><p style="text-align: left">Район:</p></div>
                           <div class="col-lg-7 data-info"><p style="color: green; text-align: left; height: 20%;">Краснокамский</p></div>
                       </div>
                       <div class="row g-0 mt-4">
                           <div class="col-lg-5"><p style="text-align: left">Тип:</p></div>
                           <div class="col-lg-7 data-info"><p style="color: green; text-align: left; height: 20%;">Зона с особыми условиями использования территории</p></div>
                       </div>
                       <div class="row g-0 mt-4">
                           <div class="col-lg-5"><p style="text-align: left">Вид:</p></div>
                           <div class="col-lg-7 data-info"><p style="color: green; text-align: left; height: 20%;">Санитарно-защитная зона предприятий, сооружений и иных объектов
                                   Зоны защиты населения</p></div>
                       </div>
                       <div class="row g-0 mt-4">
                           <div class="col-lg-5"><p style="text-align: left">Кадастровый район:</p></div>
                           <div class="col-lg-7 data-info"><p style="color: green; text-align: left; height: 20%;">02:22</p></div>
                       </div>
                       <div class="row g-0 mt-4">
                           <div class="col-lg-5"><p style="text-align: left">Наименование:</p></div>
                           <div class="col-lg-7 data-info"><p style="color: green; text-align: left; height: 20%;">Санитарно-защитная зона объекта Публичного акционерного общества "Акционерная нефтяная Компания "Башнефть" Скважина №218БТМ Таймурзинской площади Таймурзинского нефтяного месторождения</p></div>
                       </div>
                       <div class="row g-0 mt-4">
                           <div class="col-lg-5"><p style="text-align: left">Номер решения:</p></div>
                           <div class="col-lg-7 data-info"><p style="color: green; text-align: left; height: 20%;">№312-4212</p></div>
                       </div>
                       <div class="row g-0 mt-4">
                           <div class="col-lg-5"><p style="text-align: left">Дата установки:</p></div>
                           <div class="col-lg-7 data-info"><p style="color: green; text-align: left; height: 20%;">21.03.2024</p></div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
@endsection
