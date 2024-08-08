---
id: 070293c2-becf-464f-9928-dd5642843d0d
blueprint: page
title: Institutos
texto_bienvenida: 'Dirección de Institutos de Investigación'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1723149193
titulo_pagina: 'Dirección de Institutos de Investigación - VRIN UNAMBA'
block_types:
  -
    id: lkc86wjr
    nombre_completo: 'DR. Ecler Mamani Vilca'
    cargo_direccion: 'Director de Institutos de Investigación'
    direccion_oficina: '2° PISO BIBLIOTECA GENERAL.'
    horario: '8:00 A.M. – 1:00 PM. Y 2:00 PM. – 3:30 PM.'
    imagen: ecler.jpg
    template: |-
      <div class="section">
          <div class="row justify-content-center">
              <div class="col-md-5 ">
                  <div class="card-profile ">
                      <div class=" card-header-image mr-auto ml-auto ">
                          <a href="#">
                          <img class="img rounded-circle" src="{{imagen}}">
                          </a>
                      </div>
                      <div class="card-body ">
                          <h4 class="card-title">{{nombre_completo}} <br>
                              {{cargo_direccion}}
                          </h4>
                          <b>Correo: <small class="text-muted h6"></small> <br>
                          Oficina: <small class="text-muted h6">2° PISO BIBLIOTECA GENERAL.</small><br>
                          Horario: <small class="text-muted h6">8:00 A.M. – 1:00 PM. Y 2:00 PM. – 3:30 PM.</small></b>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card card-profile card-plain">
                      <div class="row">
                          <div class="col-md-11">
                              <div class="card-body">
                                  <h5 class="description">
                                      El Instituto de Investigación es el órgano de línea dependiente del 
                                      Vicerrectorado de Investigación, responsable de dirigir, coordinar y 
                                      promover el desarrollo de investigaciones; en coordinación con las unidades de investigación.
                                  </h5>
                                  <h4 class="card-title">Funciones Dirección de Instituto de Investigación.</h4>
                                  <button type="button" class="btn btn-primary" data-toggle="modal"
                                      data-target="#exampleModalScrollable3">
                                  VER FUNCIONES
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    type: director_direcciones_vrin
    enabled: true
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
modal:
  code: |-
    {{# Inicio Modal Institutos de Investigacion #}}
    <div class="modal fade" id="exampleModalScrollable3" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <b class="modal-title h3" id="exampleModalScrollableTitle">Funciones Dirección de Instituto de Investigación</b>
                </div>
                <div class="modal-body">
                    <div id="global_modal">
                        <div id="mensajess">
                            <p class="h4">a) Proponer al Vicerrectorado de Investigación las políticas, reglamentos y/o normas de funcionamiento de los Institutos de Investigación.</p>
                            <p class="h4">b) Ejecutar proyectos de investigación en base a las líneas establecidas por el Vicerrectorado de Investigación.</p>
                            <p class="h4">c) Organizar actividades de difusión del conocimiento y los resultados de las investigaciones.</p>
                            <p class="h4">d) Promover y gestionar la generación de conocimientos.</p>
                            <p class="h4">e) Gestionar la participación en fondos de investigación.</p>
                            <p class="h4">f) Promover entre los miembros de la comunidad universitaria el desarrollo de trabajos de investigación para ser publicados.</p>
                            <p class="h4">g) Administrar un registro de las publicaciones oficiales realizadas por la universidad.</p>
                            <p class="h4">h) Otras funciones que le asigne el Vicerrectorado de Investigación.</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    {{# Fin Modal Institutos de Investigacion #}}
  mode: htmlmixed
---
