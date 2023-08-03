---
id: f3775bf4-df55-47c2-9b8a-137cd6f78377
blueprint: page
title: 'Alumnos Investigadores'
texto_bienvenida: 'Alumnos Investigadores'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1691041466
titulo_pagina: 'Alumnos Investigadores - VRIN UNAMBA'
block_types:
  -
    id: lkdis9zv
    type: entradas_multiples
    enabled: true
    imagen:
      - a_home_otros/alumnosi.png
    template:
      code: |-
        <div class="section">
            <div class="container">
                <div class="row">
                    <!-- Contenido aquí -->
                    <div class="cd-section">
                        <div class="row">
                            <div class="col-md-6">
                                <br>
                                <h5>En nuestra universidad, los alumnos investigadores son una parte fundamental de la
                                    comunidad académica y contribuyen significativamente a la generación de conocimientos y a
                                    la formación de profesionales altamente capacitados. Su compromiso con la investigación y
                                    su capacidad para enfrentar los desafíos más complejos son una muestra del espíritu
                                    innovador y emprendedor que caracteriza a nuestra universidad.
                                </h5>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-plain card-blog">
                                    <img class="img" src="{{imagen1}}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <!-- tabla -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table">
                                <tr>
                                    <th>Numero</th>
                                    <th>Asesor</th>
                                    <th>Responsable</th>
                                    <th>Proyecto</th>
                                    <th>Escuela</th>
                                    <th>Monto</th>
                                </tr>
                                {{collection:alumnos_investigadores}}
                                <tr>
                                    <td>{{title}}</td>
                                    <td>{{asesor}}</td>
                                    <td>{{responsable}}</td>
                                    <td>{{proyecto}}</td>
                                    <td>{{escuela}}</td>
                                    <td>{{monto}}</td>
                                </tr>
                                {{/collection:alumnos_investigadores}}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      mode: htmlmixed
    imagen1: a_home_otros/alumnosi.png
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter " data-parallax="true" style="background-image: linear-gradient(195deg, rgb(22 191 105), rgb(85, 8, 116), rgb(167 13 131), rgb(18 3 16), #ff980000, rgb(12 135 11));">
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
modal:
  code: null
  mode: htmlmixed
---
