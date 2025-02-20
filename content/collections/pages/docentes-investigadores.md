---
id: 9fd45702-7689-4991-93d5-6c15d837ab57
blueprint: page
title: 'Docentes Investigadores'
texto_bienvenida: 'Docentes Investigadores'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1697559722
titulo_pagina: 'Docentes Investigadores - VRIN UNAMBA'
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/a_home_otros/bg4.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand">
                        <h1 class="title">{{texto_bienvenida}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
  mode: htmlmixed
block_types:
  -
    id: lkf66ib4
    template:
      code: |-
        <style>
        .tbody tr{
          text-transform: uppercase;
        }
        
        .correo {
          text-transform: lowercase;
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

        <div class="section ">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="title-container">Aquí encontrarás a los docentes que, con su quehacer, contribuyen a la generación de nuevo conocimiento desde la Investigación, la Innovación y la Creación.</h3>
                </div>
            </div>
            <div class="row ">
                <!---------tabla--------->
                <table class="table table-responsive-sm ">
                    <thead>
                        <tr class="bg-info ">
                            <th>N°</th>
                            <!--<th>Título</th>-->
                            <th>Investigador</th>
                            <th>Departamento Académico</th>
                            <th>Nombre del Proyecto</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
        				{{collection:docentes_inv sort="n"}}
                        <tr>
                            <td>{{n}}</td>
                           <!-- <td>{{grado_profesional}}</td>-->
                            <td>{{title}}</td>
                            <td>{{departamento_academico}}</td>
                            <td>{{nombre_proyecto}}</td>
        				 	          <td class="correo">{{correo}}</td>
                            <td>{{link}}</td>
                        </tr>
        				{{/collection:docentes_inv}}
                </table>
                <!--------------------->
            </div>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
modal:
  code: null
  mode: htmlmixed
---
