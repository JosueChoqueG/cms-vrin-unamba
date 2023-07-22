---
id: f3775bf4-df55-47c2-9b8a-137cd6f78377
blueprint: page
title: 'Alumnos Investigadores'
texto_bienvenida: 'Alumnos Investigadores'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1690003373
titulo_pagina: 'Alumnos Investigadores - VRIN UNAMBA'
block_types:
  -
    id: lkdis9zv
    type: entradas_multiples
    enabled: true
    imagen:
      - a_home_otros/alumnosi.png
    template: |-
      <div class="section">
          <div class="row">
              <!-- Contenido aquí -->
              <div class="cd-section">
                  <div class="container">
                      <div class="row">
                          <div class=" card-plain card-blog">
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
                                  <div class="col-md-5">
                                      <div class="card card-plain">
                                          <img class="img" src="{{imagen}}">
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <br>
                  <!-- tabla -->
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
---
