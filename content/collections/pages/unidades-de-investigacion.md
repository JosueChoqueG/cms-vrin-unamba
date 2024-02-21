---
id: 9f45291d-4ad8-4d2c-9d27-6811235bf2c6
blueprint: page
title: 'Unidades de Investigación'
titulo_pagina: 'Unidades de Investigación - VRIN UNAMBA'
texto_bienvenida: 'Unidades de Investigación'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter "  data-parallax="true" style="background-image: url('/assets/a_home_otros/unidades_investigacion_vrin_unamba.webp');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto ">
                    <h1 class="title">{{texto_bienvenida}}</h1>
                </div>
            </div>
        </div>
    </div>
  mode: htmlmixed
modal:
  code: |-
    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalScrollableTitle">Funciones de la Unidad de Investigación</h5>
                </div>
                <div class="modal-body">
                    <div id="global_modal">
                        <div id="mensajess">
                            <div class="texto">a) Conducir el proceso de investigación, desarrollo e innovación tecnológica en docentes, estudiantes y graduados pertenecientes a la facultad.</div>
                            <div class="texto">b) Generar mecanismos que incentiven la realización de investigaciones y su publicación en revistas indexadas por parte de docentes, investigadores y estudiantes.</div>
                            <div class="texto">c) Liderar los procesos de generación, revisión y medición de las líneas de investigación.</div>
                            <div class="texto">d) Vincular a la Unidad de Investigación con los organismos especializados de investigación a nivel universitario, nacional y/o extranjero, previo conocimiento de la autoridad.</div>
                            <div class="texto">e) Promover la publicación de los mejores trabajos de investigación.</div>
                            <div class="texto">f) Registrar los grupos de investigación y medir los indicadores de producción científica.</div>
                            <div class="texto">g) Coordinar, monitorear y evaluar el archivo documental de investigaciones en el repositorio de la UNAMBA.</div>
                            <div class="texto">h) Otras funciones que señale el Decano, Consejo de Facultad, el Reglamento del Instituto de Investigación y su propio Reglamento.</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1708488277
block_types:
  -
    id: lkuttke4
    template:
      code: |-
        <div class="cd-section " id="teams" >
            <div class="team-2 " id="team-2">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-8 ml-auto mr-auto text-center">
                            <h5 class="description">La Unidad de Investigación es la unidad orgánica de línea dependiente del Decanato; responsable de coordinar y ejecutar la implementación e integración de las actividades de Investigación de la facultad en coordinación directa con el Instituto de Investigación.</h5>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                            VER FUNCIONES
                            </button>
                        </div>
                    </div>
        			
                    <div class="row">
        			  {{collection:dir_unidades}}
                        <div class="col-md-4">
                            <div class="card card-profile ">
                                <div class=" card-header-image mr-auto ml-auto">
                                    <a href="#">
                                    <img class="img rounded-circle" src="{{imagen_director_unidades}}">
                                    </a>
                                </div>
                                <div class="card-body ">
                                    <h4 class="card-title text-center">{{title}}</h4>
                                    <p class="card-title text-center">Director: {{nombre_director_unidades}}</p>
                                    <p class="text-muted">{{correo}}</p>
                                    <h6>Oficina: <h5> {{direccion_oficina}} </h5></h6>
                                    <h6>Horario: <small class="text-muted h6">8:00 a.m. – 1:00 pm. y 2:00 pm. – 3:30 pm.</small></h6>
                                </div>
                            </div>
                        </div>
        			  {{/collection:dir_unidades}}
                    </div>
        			
                </div>
            </div>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
---
