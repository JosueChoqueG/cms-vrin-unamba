---
id: 9f45291d-4ad8-4d2c-9d27-6811235bf2c6
blueprint: page
title: 'Unidades de Investigación'
titulo_pagina: 'Unidades de Investigación - VRIN UNAMBA'
texto_bienvenida: 'Unidades de Investigación'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter "  data-parallax="true" style="background-image: url('/assets/a_home_otros/unidades_investigacion_vrin_unamba.webp');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto ">
                    <h1 class="title">{{texto_bienvenida}}</h1>
                </div>
            </div>
        </div>
    </div>-->
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
        <style>
        .vicerrectorado-section {
            background-color: #fff;
            padding: 40px 20px;
        }

        .vicerrectorado-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .vicerrectorado-row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px; 
        }

        .vicerrectorado-image-wrapper {
            position: relative;
            flex: 1;
            max-width: 40%;
            text-align: center;
        }

        /*.vicerrectorado-image-background {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            position: absolute;
            bottom: 20px;
            left: 60px;
            width: 60%;
            height: 100%;
            background-color: #e6e6e6;
            border-radius: 8px;
            z-index: 1;
        }*/

        .vicerrectorado-image {
           
            box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.15);
            position: relative;
            z-index: 2;
            width: 60%;
            height: 60%;
            border-radius: 8px;
            object-fit: cover;
        }

        .vicerrectorado-content {
            flex: 1;
            max-width: 55%;
        }

        .vicerrectorado-title {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
        }

        .vicerrectorado-description {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
            margin-bottom: 20px;
        }

        .vicerrectorado-content p {
            margin-bottom: 10px;
            color: #555;
        }

        .vicerrectorado-content strong {
            color: #333;    
        }

        .btn-primary {
            background-color: #6a1b9a;
            border-color: #6a1b9a;
            color: #fff;
        }

        .btn-primary:hover {
            background-color: #4a148c;
            border-color: #4a148c;
        }
        </style>
        
        <div class="cd-section" id="teams">
            <div class="team-2" id="team-2">
                <h2 style="text-align: center; font-weight: bold;">Conoce nuestras Unidades de Investigación</h2>
                
                <div class="container">
                <!-- Descripción general -->
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                    <h5 class="description" style="color: #000;">
                        La Unidad de Investigación es la unidad orgánica de línea dependiente del Decanato; responsable de coordinar y ejecutar la implementación e integración de las actividades de Investigación de la facultad en coordinación directa con el Instituto de Investigación.
                    </h5>
                    <!-- Botón general -->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                        VER FUNCIONES
                    </button>
                    </div>
                </div>

                <!-- Unidades de investigación -->
                <div class="vicerrectorado-section">
                    <div class="vicerrectorado-container">
                    {{collection:dir_unidades}}
                    <div class="vicerrectorado-row">

                        <!-- Imagen con diseño de contenedor adicional -->
                        <div class="vicerrectorado-image-wrapper">
                        <div class="vicerrectorado-image-background"></div>
                        <img src="{{imagen_director_unidades}}" alt="Director de {{title}}" class="vicerrectorado-image">
                        </div>

                        <!-- Contenido textual -->
                        <div class="vicerrectorado-content">
                        <h3 class="vicerrectorado-title">{{title}}</h3>
                        <p><strong>Director:</strong> {{nombre_director_unidades}}</p>
                        <p class="vicerrectorado-description">
                            {{descripcion_unidad}}
                        </p>
                        <p><strong>Correo:</strong> {{correo}}</p>
                        <p><strong>Oficina:</strong> {{direccion_oficina}}</p>
                        <p><strong>Horario:</strong> 8:00 A.M. – 1:00 P.M. y 2:00 P.M. – 3:30 P.M.</p>
                        </div>
                    </div>
                    {{/collection:dir_unidades}}
                    </div>
                </div>
                </div>
            </div>
        </div>

      mode: htmlmixed
    type: template
    enabled: true
---
