---
id: 87b3fbc4-779b-49e6-bf44-69b5f2a37cb8
blueprint: page
title: Reglamentos
texto_bienvenida: Reglamentos
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1738771845
block_types:
  -
    id: lkdih7d4
    template:
      code: |-
        <style>
            .table th,
            .table td {
                font-size: 1.2rem;
            }

            .nav-link:active {
                background-color: #6a1b9a;
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

        <div id="navigation-pills">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="title-container">En esta sección encontrarás los reglamentos y bases de concursos vigentes del Vicerrectorado de Investigación de la Universidad Nacional Micaela Bastidas de Apurímac (UNAMBA).</h3>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10 col-md-8">
               
                <ul class="nav nav-pills nav-pills-primary">
                    <li class="nav-item">
                    <a class="nav-link active" href="#pill1" data-toggle="tab">Reglamentos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#pill2" data-toggle="tab">Bases de concursos</a>
                    </li>
                </ul>
                <div class="card tab-content">
                    <!-- Resoluciones -->
                    <div class="tab-pane active h4" id="pill1">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>N°</th>
                            <th colspan="2">Reglamento</th>
                            <th>Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- Aquí se generarán dinámicamente las filas -->
                        {{ collection:reglamentos sort="orden asc" }}
                        {{ if reglamento_o_base == "reglamento" }}
                        <tr>
                            <th scope="row">{{ orden }}</th>
                            <td colspan="2">{{ title }}</td>
                            <td>
                            <a href={{ link_documento }} target="_blank">Ver</a>
                            </td>
                        </tr>
                        {{ /if }}
                        {{ /collection:reglamentos }}
                        </tbody>
                    </table>
                    </div>

                    <!-- Bases de Concursos -->
                    <div class="tab-pane fade h4" id="pill2">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>N°</th>
                            <th colspan="2">Base de Concurso</th>
                            <th>Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- Aquí se generarán dinámicamente las filas -->
                        {{ collection:reglamentos sort="orden asc" }}
                        {{ if reglamento_o_base == "base" }}
                        <tr>
                            <th scope="row">{{ orden }}</th>
                            <td colspan="2">{{ title }}</td>
                            <td>
                            <a href={{ link_documento }} target="_blank">Ver</a>
                            </td>
                        </tr>
                        {{ /if }}
                        {{ /collection:reglamentos }}
                        </tbody>
                    </table>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
      mode: htmlmixed
    type: template
    enabled: true
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter "  data-parallax="true" style="background-image: url('/assets/a_home_otros/reglamento.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto ">
                    <h1 class="title">{{texto_bienvenida}}</h1>
                </div>
            </div>
        </div>
    </div>-->
  mode: htmlmixed
titulo_pagina: 'Reglamentos - Vicerrectorado de Investigacion'
modal:
  code: null
  mode: htmlmixed
---
