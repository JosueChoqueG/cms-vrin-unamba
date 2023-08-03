---
id: c74a0910-654f-4686-8423-fa95a8f80143
blueprint: page
title: 'Centro experimental'
titulo_pagina: 'Centros experimental - VRIN UNAMBA'
texto_bienvenida: 'Centro experimental'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter " data-parallax="true"
        style="background-image: url('/assets/centro-experimental/pachachacace.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand">
                        <h1>Centro Experimental</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1691037712
block_types:
  -
    id: lkunbiar
    template:
      code: |-
        <div class="section">
            <div class="row">
                <div class="col-md-10">
                    <!-- Contenido aquí -->
                    <h3>El centro experimental de la Universidad Nacional Micaela Bastidas de Apurímac cuenta con dos lugares de
                        trabajo:
                    </h3>
                    <h2 class="text-center title center">CENTRO EXPERIMENTAL PACHACHACA</h2>
                </div>
                <div class="col-md-5 ml-auto">
                    <div class="info info-horizontal">
                        <div class="description">
                            <p class="description h4">
                                El Centro Experimental Pachachaca tiene una extensión de 12 hectáreas cultivables, 
                                de las cuales, en más de siete hectáreas se tiene plantado paltas de las especies
                                hass y fuerte, naranjas huando, limones con y sin pepa, guayabas, mangos, chirimoyas 
                                y lúcumos; asimismo, se tiene instalado cinco camas almacigueras de níspero Japonés, 
                                mangos y paltas hass y fuerte.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 mr-auto">
                    <!--inicio carousel--->
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" style="max-width: 80%" src="/assets/centro-experimental/cuyes.jpg" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" style="max-width: 80%" src="/assets/centro-experimental/pachachacace.jpg" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" style="max-width: 80%" src="/assets/centro-experimental/vivero.jpg" alt="Third slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="sr-only">Atras</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="sr-only">Siguiente</span>
                        </a>
                    </div>
                    <!--Fin carousel-->
                </div>
            </div>
        </div>
        <!----->
        <div class="row">
            <div class="col-lg-8 col-md-2">
                <ul class="nav nav-pills nav-pills-icons" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#dashboard-1" role="tab" data-toggle="tab">
                        <i class="material-icons">dashboard</i>
                        Principales actividades:
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#schedule-1" role="tab" data-toggle="tab">
                        <i class="material-icons">schedule</i>
                        Líneas de trabajo
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tasks-1" role="tab" data-toggle="tab">
                        <i class="material-icons">list</i>
                        Líneas de investigación
                        </a>
                    </li>
                </ul>
                <div class="tab-content tab-space">
                    <div class="tab-pane active" id="dashboard-1">
                        <li>Producción de palta hass</li>
                        <li>Producción de palta fuerte</li>
                        <li>Producción de naranjas</li>
                        <li>Producción de limones con y sin pepa</li>
                        <li>Producción de guayaba</li>
                        <li>Producción de mango</li>
                        <li>Producción de chirimoya</li>
                        <li>Níspero Japonés</li>
                    </div>
                    <div class="tab-pane" id="schedule-1">
                        <li>Área agrícola</li>
                        <li>Área ganadera</li>
                    </div>
                    <div class="tab-pane" id="tasks-1">
                        <li>Cuyes</li>
                        <li>Palto</li>
                    </div>
                </div>
            </div>
        </div>
        <!----->
        </div>
      mode: htmlmixed
    type: centro_experimental
    enabled: true
    imagenes_pachachaca:
      - centro-experimental/cuyes.jpg
      - centro-experimental/pachachacace.jpg
      - centro-experimental/vivero.jpg
---
