---
id: home
blueprint: pages
title: Home
template: home
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1727300527
block_types:
  -
    id: lka0v9ms
    title_1: 'Servicios VRIN'
    template:
      code: |-
        <h2 class="title animate-pulse" style="text-align:center">{{title_1}}</h2>
        <div class="section ">
            <div class="team ">
                <div class="row">
                    {{collection:servicios_vrin }}
                    <div class="feat-item mb-md50 col-lg-4 ">
                        <div class="text-center reveal zoom-in ">
                            <figure>
                                <a href="{{enlace ?? slug}}" {{abrir_en_otra_pagina}}>
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
      mode: htmlmixed
    type: servicios_vrin
    enabled: true
  -
    id: lka3zo1d
    estado_1: a_home_otros/inves.png
    contador1: 32
    contador_1: 'DOCENTES RENACYT'
    estado_2: a_home_otros/grupos.png
    contador2: 18
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
    template:
      code: |-
        <!---==inicio count status ==-->
        <div id="status">
            <div class="sm-block" id="block1">
                <div class="icon-img-wrapper">
                    <div class="eb-counter-image-wrapper">
                        <a title="docentes" target="_blank" href="/docentes-renacyt">
                        <img class=" eb-counter-image" alt="" src="{{icono_docentes_renacyt}}">
                        </a>
                    </div>
                </div>
                <h1><span class="block-no">{{contador_docentes_renacyt}}</span></h1>
                <b >DOCENTES RENACYT</b>
            </div>
            <div class="sm-block" id="block2">
                <div class="icon-img-wrapper">
                    <div class="eb-counter-image-wrapper">
                        <a title="grupos" href="/grupos-de-investigacion">
                        <img class="eb-counter-image" alt="" src="{{icono_grupos_de_investigacion}}"/></a>
                    </div>
                </div>
                <h1><span class="block-no">{{contador_grupos_de_investigacion}}</span></h1>
                <b>GRUPOS DE INVESTIGACIÓN</b>
            </div>
            <div class="sm-block" id="block3">
                <div class="icon-img-wrapper">
                    <div class="eb-counter-image-wrapper">
                        <a title="lineas-de-investigacion" href="/lineas-de-investigacion">
                        <img class="eb-counter-image" alt="" src="{{icono_lineas_de_investigacion}}"/></a>
                    </div>
                </div>
                <h1><span class="block-no">{{contador_lineas_de_investigacion}}</span></h1>
                <b>LINEAS DE INVESTIGACIÓN</b>
            </div>
           
        </div>
        <!---==end secction count status ==-->
      mode: htmlmixed
    contador_docentes_renacyt: 51
    contador_grupos_de_investigacion: 20
    contador_lineas_de_investigacion: 20
    icono_docentes_renacyt: a_home_otros/inves.png
    icono_grupos_de_investigacion: a_home_otros/grupos.png
    icono_lineas_de_investigacion: a_home_otros/lineas.png
  -
    id: lka55qtw
    template_vicerrector: |-
      <!---==inicio acerca de vicerrector ==-->
      <div class="cd-section  header-filter"  id="contactus" style="background-image: url('./assets/img/bg6.jpg');">
          <div class="contactus-1 section-image " data-parallax="false" >
              <div class="container">
                  <div class="row">
                      <div class="col-md-6" style="color: white">
                          <h2 class="title " style="color: white">Acerca del Vicerrectorado de Investigación!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h2>
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
                              <img src="" alt="viverrector-investigacion">
                          </div>
                          <h5 class="description fs-3" style="color: #e6e0e0">Dr. Wilson Jhon Mollocondo Flores</h5>
                          <h4 class="title" style="color: #e6e0e0">Vicerrector de Investigación</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- fin acerca de vicerrector -->
    type: acerca_vicerrector
    enabled: true
    nombre_vicerrector: 'Dr. Wilson Jhon Mollocondo Flores'
    template:
      code: |-
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

                            <ol style="
            margin-left: 20px;
        ">
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
      mode: htmlmixed
    cargo: 'Vicerrector de Investigación'
    imagen_vicerrector: fotos-rectorado-5.jpg
  -
    id: lkabqlir
    titulo_seccion_blog: 'Eventos Vicerrectorado de Investigación'
    template:
      code: |-
        <!-- inicio blog/evento -->
        <div class="cd-section" id="blogs">
            <div class="blogs-2" id="blogs-2">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                            <h2 class="title" style="text-align:center">{{titulo_seccion_blog}}</h2>
                            <br>
        					
                            <div class="row">
        					{{ collection:blog limit="3" }}
                                <div class="col-md-4">
                                    <div class="card card-plain card-blog">
                                        <div class=" card-header card-header-image bg-image hover-zoom">
                                            <a href="{{url}}">
                                            <img class=" img img-raised" src="{{imagen_principal}}" alt="">
                                            </a>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;{{imagen_principal}}&quot;); opacity: 1;"></div>
                                        </div>
                                        <div class="card-body ">
                                            <h6 class="card-category text-danger" style="text-align:center">{{direccion_o_vrin}}</h6>
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
      mode: htmlmixed
    type: blog
    enabled: true
  -
    id: lkbe8ld0
    direccion: 'Av. Inca Garcilazo de la Vega, Abancay'
    correo_vrin: vrin@unamba.edu.pe
    horario_atencion: '7:30 am - 13:00 pm y 14:00 pm - 15:30 pm'
    template:
      code: |-
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
        						<form class="needs-validation" novalidate>
        							<div class="card-header card-header-raised card-header-primary text-center">
        								<h4 class="card-title">Contactanos</h4>
        							</div>
        							<div class="card-body">
        								<div class="form-row">
        									<div class="col-md-6">
        										<div class="form-group label-floating is-empty bmd-form-group">
        											<label for="validationCustom01">Nombre</label>
        											<input type="text" class="form-control" id="validationCustom01" value="" required>
        											<div class="valid-feedback">
        												Correcto!
        											</div>
        											<span class="material-input"></span>
        										</div>
        									</div>
        									<div class="col-md-6">
        										<div class="form-group label-floating is-empty bmd-form-group">
        											<label for="validationCustom02">Apellidos</label>
        										    <input type="text" class="form-control" id="validationCustom02" value="" required>
        											<div class="valid-feedback">
        												Correcto!
        											</div>
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
        								
        								<button class="btn btn-primary" type="submit">Submit form</button>
        							</div>
        						</form>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
      mode: htmlmixed
    type: info_contacto
    enabled: true
texto_bienvenida: 'Vicerrectorado de Investigación'
titulo_pagina: 'Vicerrectorado de Investigación - VRIN UNAMBA'
imagen_fondo:
  - a_home_otros/bg4.jpg
template_imagen_fondo:
  code: |-
    <div class="header-3">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               
            </ol>
            <div class="carousel-inner">
                
                <div class="carousel-item active">
                    <div class="page-header header-filter" data-parallax="true" style="background-image: url('./assets/a_home_otros/bg4.jpg');">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 ml-auto mr-auto text-center">
                                    <h1 class="title">{{texto_bienvenida}}</h1>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    			<div class="carousel-item">
                    <div class="page-header header-filter" data-parallax="true" style="background-image: url('./assets/a_home_otros/vrin_facebook.png');">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 text-left">
                                    <h1 class="title">Direcciones</h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <i class="material-icons">keyboard_arrow_left</i>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <i class="material-icons">keyboard_arrow_right</i>
            <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
---
## Bienvenido a la página web del VRIN!