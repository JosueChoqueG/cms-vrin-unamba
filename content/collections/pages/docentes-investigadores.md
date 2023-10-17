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
    <div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/a_home_otros/bg4.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand">
                        <h1 class="title">{{texto_bienvenida}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  mode: htmlmixed
block_types:
  -
    id: lkf66ib4
    template:
      code: |-
        <div class="section ">
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
                            <th>correo</th>
                        </tr>
                    </thead>
                    <tbody>
        				{{collection:docentes_inv}}
                        <tr>
                            <td>{{n}}</td>
                           <!-- <td>{{grado_profesional}}</td>-->
                            <td>{{title}}</td>
                            <td>{{departamento_academico}}</td>
                            <td>{{nombre_proyecto}}</td>
        				 	<td>{{correo}}</td>
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
