---
id: home
blueprint: pages
title: Home
template: home
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1689813165
block_types:
  -
    id: lka0v9ms
    title_1: 'Servicios VRIN'
    template: |-
      <h2 class="title">{{title_1}}</h2>
      <div class="section ">
          <div class="team">
              <div class="row">
                  {{collection:servicios_vrin }}
                  <div class="feat-item mb-md50 col-lg-4">
                      <div class="text-center">
                          <figure>
                              <a href="repositorio-institucional.html">
                              <img src="{{imagen_servicio}}" alt="">
                              </a>
                          </figure>
                          <h5 class="card-title">{{title}}</h5>
                      </div>
                  </div>
                  {{/collection:servicios_vrin}}
              </div>
          </div>
      </div>
    type: servicios_vrin
    enabled: true
  -
    id: lka3zo1d
    estado_1: a_home_otros/inves.png
    contador1: 32
    contador_1: 'DOCENTES RENACYT'
    estado_2: a_home_otros/grupos.png
    contador2: 14
    contador_2: 'GRUPOS DE INVESTIGACIÓN'
    estado_3: a_home_otros/lineas.png
    contador3: 20
    contador_3: 'LINEAS DE INVESTIGACIÓN'
    template_estado: |-
      <div id="status">
          <div class="sm-block" id="block1">
              <div class="icon-img-wrapper">
                  <div class="eb-counter-image-wrapper">
                      <a title="docentes" target="_blank" href="investigacion/lista-de-docentes-renacyt-2.html">
                      <img class="eb-counter-image" alt="" src="assets/img/inves.png">
                      </a>
                  </div>
              </div>
              <h1><span class="block-no">32</span></h1>
              <b >DOCENTES RENACYT</b>
          </div>
          <div class="sm-block" id="block2">
              <div class="icon-img-wrapper">
                  <div class="eb-counter-image-wrapper">
                      <a title="docentes" target="_blank" href="https://vrin.unamba.edu.pe/lista-de-docentes-renacyt-2/">
                      <img class="eb-counter-image" alt="" src="assets/img/grupos.png"/></a>
                  </div>
              </div>
              <h1><span class="block-no">14</span></h1>
              <b>GRUPOS DE INVESTIGACIÓN</b>
          </div>
          <div class="sm-block" id="block3">
              <div class="icon-img-wrapper">
                  <div class="eb-counter-image-wrapper">
                      <a title="docentes" target="_blank" href="lineas-de-investigacion.html">
                      <img class="eb-counter-image" alt="" src="assets/img/lineas.png"/></a>
                  </div>
              </div>
              <h1><span class="block-no">20</span></h1>
              <b>LINEAS DE INVESTIGACIÓN</b>
          </div>
      </div>
    type: contador_estado
    enabled: true
    template: |-
      <!---==inicio count status ==-->
      <div id="status">
          <div class="sm-block" id="block1">
              <div class="icon-img-wrapper">
                  <div class="eb-counter-image-wrapper">
                      <a title="docentes" target="_blank" href="investigacion/lista-de-docentes-renacyt-2">
                      <img class="eb-counter-image" alt="" src="{{estado_1}}">
                      </a>
                  </div>
              </div>
              <h1><span class="block-no">{{contador1}}</span></h1>
              <b >{{contador_1}}</b>
          </div>
          <div class="sm-block" id="block2">
              <div class="icon-img-wrapper">
                  <div class="eb-counter-image-wrapper">
                      <a title="docentes" target="_blank" href="https://vrin.unamba.edu.pe/lista-de-docentes-renacyt-2">
                      <img class="eb-counter-image" alt="" src="{{estado_2}}"/></a>
                  </div>
              </div>
              <h1><span class="block-no">{{contador1}}</span></h1>
              <b>{{contador_2}}</b>
          </div>
          <div class="sm-block" id="block3">
              <div class="icon-img-wrapper">
                  <div class="eb-counter-image-wrapper">
                      <a title="docentes" target="_blank" href="lineas-de-investigacion">
                      <img class="eb-counter-image" alt="" src="{{estado_2}}"/></a>
                  </div>
              </div>
              <h1><span class="block-no">{{contador1}}</span></h1>
              <b>{{contador_3}}</b>
          </div>
      </div>
      </div>
      <!---==end secction count status ==-->
  -
    id: lka55qtw
    template_vicerrector: |-
      <!---==inicio acerca de vicerrector ==-->
      <div class="cd-section  header-filter"  id="contactus" style="background-image: url('./assets/img/bg6.jpg');">
          <div class="contactus-1 section-image " data-parallax="false" >
              <div class="container">
                  <div class="row">
                      <div class="col-md-6" style="color: white">
                          <h2 class="title " style="color: white">Acerca del Vicerrectorado de Investigación</h2>
                          <h5 class="description fs-3" style="color: #e6e0e0">El Vicerrectorado de Investigación es un órgano ejecutivo desconcentrado, de apoyo encargado de implementar y materializar los lineamientos de investigación, buscando el estímulo a la ciencia, investigación y creación.</h5>
                          <h3 class="title" style="color: white">Funciones Generales</h3>
                          <p class="h4">El Vicerrectorado de Investigación tiene las siguientes funciones:</p>
                          <br>
                          <ol>
                              <li>Dirigir y ejecutar la política general de investigación en la universidad.</li>
                              <li>Supervisar las actividades de investigación con la finalidad de garantizar la calidad de las mismas y su concordancia con la misión y metas establecidas por el estatuto de la Universidad.</li>
                              <li>Organizar la difusión del conocimiento y los resultados de las investigaciones.</li>
                              <li>Gestionar el financiamiento de la investigación ante las entidades y organismos públicos o privados.</li>
                              <li>Aprobar la realización y ejecución de programas de desarrollo de capacidades y de investigación en los trabajadores administrativos.</li>
                              <li>Promover la generación de recursos para la universidad a través de la producción de bienes y prestación de servicios derivados de las actividades de investigación y desarrollo, así como mediante la obtención de regalías por patentes u otros derechos de propiedad intelectual.</li>
                          </ol>
                          <br>
                      </div>
                      <div class="col-md-5 ml-auto text-center">
                          <div class="card card-contact">
                              <img src="./assets/img/vicerrectora-hilda.jpg" alt="viverrector-investigacion">
                          </div>
                          <h5 class="description fs-3" style="color: #e6e0e0">Dr. Hilda Huayhua Mamani</h5>
                          <h4 class="title" style="color: #e6e0e0">Vicerrectora de Investigación</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- fin acerca de vicerrector -->
    type: acerca_vicerrector
    enabled: true
    imagen_vicerrector: a_home_otros/vicerrector.png
    nombre_vicerrector: 'Dr. Hilda Huayhua Mamani'
    template: |-
      <!---==inicio acerca de vicerrector ==-->
      <div class="cd-section  header-filter"  id="contactus" style="background-image: url('./assets/a_home_otros/bg6.jpg');">
          <div class="contactus-1 section-image " data-parallax="false" >
              <div class="container">
                  <div class="row">
                      <div class="col-md-6" style="color: white">
                          <h2 class="title " style="color: white">Acerca del Vicerrectorado de Investigación</h2>
                          <h5 class="description fs-3" style="color: #e6e0e0">El Vicerrectorado de Investigación es un órgano ejecutivo desconcentrado, de apoyo encargado de implementar y materializar los lineamientos de investigación, buscando el estímulo a la ciencia, investigación y creación.</h5>
                          <h3 class="title" style="color: white">Funciones Generales</h3>
                          <p class="h4">El Vicerrectorado de Investigación tiene las siguientes funciones:</p>
                          <br>
                          <ol>
                              <li>Dirigir y ejecutar la política general de investigación en la universidad.</li>
                              <li>Supervisar las actividades de investigación con la finalidad de garantizar la calidad de las mismas y su concordancia con la misión y metas establecidas por el estatuto de la Universidad.</li>
                              <li>Organizar la difusión del conocimiento y los resultados de las investigaciones.</li>
                              <li>Gestionar el financiamiento de la investigación ante las entidades y organismos públicos o privados.</li>
                              <li>Aprobar la realización y ejecución de programas de desarrollo de capacidades y de investigación en los trabajadores administrativos.</li>
                              <li>Promover la generación de recursos para la universidad a través de la producción de bienes y prestación de servicios derivados de las actividades de investigación y desarrollo, así como mediante la obtención de regalías por patentes u otros derechos de propiedad intelectual.</li>
                          </ol>
                          <br>
                      </div>
                      <div class="col-md-5 ml-auto text-center">
                          <div class="card card-contact">
                              <img src="{{imagen_vicerrector}}" alt="viverrector-investigacion">
                          </div>
                          <h5 class="description fs-3" style="color: #e6e0e0">Dr. Hilda Huayhua Mamani</h5>
                          <h4 class="title" style="color: #e6e0e0">Vicerrectora de Investigación</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- fin acerca de vicerrector -->
  -
    id: lkabqlir
    titulo_seccion_blog: 'Eventos Vicerrectorado de Investigación'
    template: |-
      <!-- inicio blog/evento -->
      <div class="cd-section" id="blogs">
          <div class="blogs-2" id="blogs-2">
              <div class="container text-center">
                  <div class="row">
                      <div class="col-md-12 ml-auto mr-auto">
                          <h2 class="title">Eventos Vicerrectorado de Investigación</h2>
                          <br>
      					
                          <div class="row">
      					{{ collection:blog limit="3" }}
                              <div class="col-md-4">
                                  <div class="card card-plain card-blog">
                                      <div class=" card-header card-header-image ">
                                          <a href="{{url}}">
                                          <img class=" img img-raised" src="{{imagen_principal}}">
                                          </a>
                                          <div class="colored-shadow"
                                              style="background-image: url(&quot;./assets/img/blog/III-concurso.jpg&quot;); opacity: 1;"></div>
                                      </div>
                                      <div class="card-body ">
                                          <h6 class="card-category text-danger">{{direccion_o_vrin}}</h6>
                                          <h4 class="card-title">
                                              <a href="{{url}}">{{title}}</a>
                                          </h4>
                                          <p class="card-description">
                                              {{content}}
                                              <a href="{{url}}">Leer más </a>
                                          </p>
                                      </div>
                                  </div>
                              </div>
      						{{ /collection:blog }}
                          </div>
      					
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- fin blog/evento -->
    type: blog
    enabled: true
texto_bienvenida: 'Vicerrectorado de Investigación'
---
## Bienvenido a la página web del VRIN!