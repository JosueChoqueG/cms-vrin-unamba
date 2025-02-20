---
id: 3a97b207-65ca-404e-beb8-4c582916489a
blueprint: page
title: Eventos
texto_bienvenida: Eventos
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1707699836

titulo_pagina: 'Eventos - VRIN UNAMBA'
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter"  data-parallax="true" style="background-image: url('/assets/a_home_otros/eventos.webp');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto ">
                    <h1 class="title">Eventos</h1>
                </div>
            </div>
        </div>
      </div>-->
  mode: htmlmixed
block_types:
  -
    id: lkefs74w
    template:
      code: |-
        <style>
        .card-event {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            margin-bottom: 20px;
            overflow: hidden;
            display: flex;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }

        .card-header-image {
            position: relative;
            height: 100%;
        }

        .card-header-image img {
            width: 70%;
            height: auto;
            object-fit: cover;
            border-radius: 8px 0 0 8px;
        }

        .date-box {
            position: absolute;
            background-color: #ffc107;
            top: 100px;
            left: 230px;
            color: #fff;
            padding: 5px 5px;
            border-radius: 4px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
        }

        .date-box .day {
            font-size: 28px;
        }

        .date-box .month {
            font-size: 14px;
        }

        .card-body {
            padding: 15px;
        }

        .card-title {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }

        .card-time {
            font-size: 14px;
            color: #555;
            margin-bottom: 5px;
        }

        .card-location {
            font-size: 14px;
            color: #777;
            margin-bottom: 10px;
        }

        .card-description {
            font-size: 14px;
            color: #555;
        }
        
        .title-container {
            display: inline-block;
            padding: 10px 20px;
            border: 2px solid #2980b9; 
            border-radius: 10px; 
            background: #f0f8ff;
            color: #2c3e50; 
            font-weight: bold;
            font-size: 1.25rem; 
            text-align: center;
            margin: 0 auto 25px auto; 
        }
        </style>

        <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="title-container">El Vicerrectorado de Investigación te invita a ser partícipe de los eventos, concursos y convocatorias dirigidas a la comunidad universitaria.</h3>
                </div>
        </div>

        <div class="main main-raised">
            {{ collection:blog }}
            <div class="profile-content">
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    
                    <div class="row">
                        <!-- Card for each event -->
                        <div class="col-md-12">
                        <div class="card card-event">
                            <div class="row no-gutters align-items-center">
                            <!-- Image Section -->
                            <div class="col-md-4">
                                <div class="card-header-image position-relative">
                                <div class="date-box">
                                        <span class="day">{{ date | timezone | format('d') }}</span>
                                        <br>
                                        <span class="month">{{ date | timezone | format('F') | trans:date }}</span>
                                        <br>
                                        <span class="year">{{ date | timezone | format('Y') }}</span>
                                </div>
                                <a href="{{url}}" target="_blank">
                                    <img class="img img-raised" src="{{imagen_principal}}" alt="Evento">
                                </a>
                                </div>
                            </div>
                            <!-- Content Section -->
                            <div class="col-md-8">
                                <div class="card-body">
                                <h6 class="card-category text-info">{{direccion_o_vrin}}</h6>
                                <h4 class="card-title">
                                    <a href="{{url}}">{{title}}</a>
                                </h4>
                                <p class="card-location">{{ubicacion}}</p>
                                <p class="card-description">{{content}}</p>

                                <a href="{{url}}" style="color: #1E3C91; text: primary; text-decoration: none;  font-weight: bold;" target="_blank">
                                            Ver Publicación <i class="fa fa-external-link"></i>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {{ /collection:blog }}
            </div>

      mode: htmlmixed
    type: template
    enabled: true
modal:
  code: null
  mode: htmlmixed
---
