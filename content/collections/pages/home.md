---
id: home
blueprint: pages
title: Home
template: home
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1690009016
block_types:
  -
    id: lka0v9ms
    title_1: 'Servicios VRIN'
    template: |-
      <h2 class="title" style="text-align:center">{{title_1}}</h2>
      <div class="section ">
          <div class="team">
              <div class="row">
                  {{collection:servicios_vrin }}
                  <div class="feat-item mb-md50 col-lg-4">
                      <div class="text-center">
                          <figure>
                              <a href="{{enlace}}" {{abrir_en_otra_pagina}}>
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
                      <a title="docentes" target="_blank" href="/docentes-renacyt">
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
                      <a title="docentes" target="_blank" href="docentes-renacyt">
                      <img class="eb-counter-image" alt="" src="{{estado_2}}"/></a>
                  </div>
              </div>
              <h1><span class="block-no">{{contador1}}</span></h1>
              <b>{{contador_2}}</b>
          </div>
          <div class="sm-block" id="block3">
              <div class="icon-img-wrapper">
                  <div class="eb-counter-image-wrapper">
                      <a title="docentes" target="_blank" href="/lineas-investigacion">
                      <img class="eb-counter-image" alt="" src="{{estado_3}}"/></a>
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
    imagen_vicerrector: a_home_otros/vicerrectora-hilda.jpg
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
                          <h5 class="description fs-3" style="color: #e6e0e0">{{nombre_vicerrector}}</h5>
                          <h4 class="title" style="color: #e6e0e0">{{cargo}}</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- fin acerca de vicerrector -->
    cargo: 'Vicerrectora de Investigación'
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
                                          <img class=" img img-raised" src="{{imagen_principal}}" alt="">
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
  -
    id: lkbe8ld0
    direccion: 'Av. Inca Garcilazo de la Vega, Abancay'
    correo_vrin: vrin@unamba.edu.pe
    horario_atencion: '7:30 am - 13:00 pm y 14:00 pm - 15:30 pm'
    template: |-
      <!---==inicio contacto ==-->
      <div class="cd-section header-filter" id="contactus">
      	<div class="contactus-1 section-image" style="background-image: url('./assets/a_home_otros/bg6.jpg')">
      		<div class="container">
      			<div class="row">
      				<div class="col-md-8 info info-horizontal">
      					<h2 class="title" style="color: white">Vicerrectorado de Investigación</h2>
      					<h5 class="description fs-3" style="color: #e6e0e0">Información de Contacto</h5>
      					<div class="icon icon-primary">
      						<i class="material-icons">pin_drop</i>
      					</div>
      					<div class="description">
      						<h4 class="info-title" style="color: white">Encuentra nuestra oficina</h4>
      						<h5 style="color: #e6e0e0">{{direccion}} <br>
      							2° Piso Biblioteca General
      						</h5>
      					</div>
      					<div class="icon icon-primary">
      						<i class="material-icons">phone</i>
      					</div>
      					<div class="description" style="color: #e6e0e0">
      						<h4 class="info-title" style="color: white">Contactanos</h4>
      						<h5> {{correo_vrin}} 
      							<br>Lunes a Viernes
      							<br> Horario de atención: {{horario_atencion}}
      						</h5>
      					</div>
      				</div>
      				<div class="col-md-5 ml-auto">
      					<div class="card card-contact">
      						<br>
      						<form id="contact-form" method="post">
      							<div class="card-header card-header-raised card-header-primary text-center">
      								<h4 class="card-title">Contactanos</h4>
      							</div>
      							<div class="card-body">
      								<div class="row">
      									<div class="col-md-6">
      										<div class="form-group label-floating is-empty bmd-form-group">
      											<label class="bmd-label-floating">Tu nombre</label>
      											<input type="text" name="name" class="form-control">
      											<span class="material-input"></span>
      										</div>
      									</div>
      									<div class="col-md-6">
      										<div class="form-group label-floating is-empty bmd-form-group">
      											<label class="bmd-label-floating">Apellidos</label>
      											<input type="text" name="name" class="form-control">
      											<span class="material-input"></span>
      										</div>
      									</div>
      								</div>
      								<div class="form-group label-floating is-empty bmd-form-group">
      									<label class="bmd-label-floating">Correo electronico</label>
      									<input type="email" name="email" class="form-control">
      									<span class="material-input"></span>
      								</div>
      								<div class="form-group label-floating is-empty bmd-form-group">
      									<label for="exampleMessage1" class="bmd-label-floating">Mensaje</label>
      									<textarea name="message" class="form-control" id="exampleMessage1" rows="6"></textarea>
      									<span class="material-input"></span>
      								</div>
      							</div>
      							<div class="card-footer justify-content-between">
      								
      								<button type="button" id="form-submit" class="btn btn-primary pull-right">Enviar mensaje</button>
      							</div>
      						</form>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
      <!-- fin contacto -->
    type: info_contacto
    enabled: true
texto_bienvenida: 'Vicerrectorado de Investigación'
titulo_pagina: 'Vicerrectorado de Investigación - VRIN UNAMBA'
imagen_fondo:
  - a_home_otros/bg4.jpg
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
---
## Bienvenido a la página web del VRIN!