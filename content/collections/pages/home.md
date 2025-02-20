---
id: home
blueprint: pages
title: Home
template: home
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1740061915
block_types:
  -
    id: m7ap00pr
    template:
      code: |-
        <!--
        ==================================================================================================
        ====================================== SECCIÓN CONVOCATORIAS =====================================
        ==================================================================================================
        -->

        <style>
                .convocatorias-section {
                  position: relative;
                  display: block;
                  margin: 0 auto;
                  width: 100%;
                  background-color: #f4f4f4;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
                }

                .carousel-inner {
                  position: relative;
                  width: 100%;
                  height: auto;
                }

                .carousel-item-conv {
                  display: none; /* Ocultamos todos los elementos por defecto */
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  padding: 20px;
                  background: linear-gradient(120deg, #e3f98e, #6ebf91, #3c9f04);
                  border-radius: 10px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .carousel-item-conv.active {
                  display: flex; /* Solo mostramos el elemento activo */
                }

                .carousel-item-conv img {
                  max-width: 40%;
                  height: auto;
                  border-radius: 10px;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .convocatoria-content {
                  background: rgba(0, 0, 0, 0.4);
                  padding: 20px;
                  border-radius: 8px;
                  width: 55%;
                }

                .convocatoria-content h2 {
                  font-size: 28px;
                  color: #fff;
                  font-weight: bold;
                  margin-bottom: 15px;
                }

                .convocatoria-content p {
                  font-size: 16px;
                  color: #fff;
                  margin-bottom: 20px;
                }

                .convocatoria-content .btn {
                  font-size: 16px;
                  padding: 10px 20px;
                  border-radius: 20px;
                  background-color: #ffc107;
                  color: #000;
                  font-weight: bold;
                  text-transform: uppercase;
                  text-decoration: none;
                }

                .convocatoria-content .btn:hover {
                  background-color: #e0a800;
                  color: #fff;
                }

                /* Flechas de navegación */
                .carousel-control {
                  position: absolute;
                  top: 50%;
                  width: 40px;
                  height: 40px;
                  background: rgba(0, 0, 0, 0.6);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  transform: translateY(-50%);
                  opacity: 0;
                  transition: opacity 0.3s ease;
                }

                .carousel-control:hover {
                  background: rgba(0, 0, 0, 0.8);
                }

                .carousel-control svg {
                  fill: #fff;
                }

                .carousel-control-prev {
                  left: 10px;
                }

                .carousel-control-next {
                  right: 10px;
                }

                .convocatorias-section:hover .carousel-control {
                  opacity: 1;
                }
                </style>

        		<section id="convocatorias-relevantes" class="convocatorias-section">
        		  <div class="carousel-inner">
        			{{ collection:blog filter="convocatoria:si" sort="date:desc" limit="2" }}
        			<div class="carousel-item-conv {{ if {count} == 1 }}active{{ /if }}">
        			  <img src="{{ imagen_principal | url }}" alt="{{ title }}">
        			  <div class="convocatoria-content">
        				<h2>{{ title }}</h2>
        				<p>{{ descripcion }}</p>
        				<a href="/blog/{{ slug }}" class="btn">Leer más</a>
        			  </div>
        			</div>
        			{{ /collection:blog }}
        		  </div>

        		  <!-- Flecha izquierda -->
        		  <div class="carousel-control carousel-control-prev" onclick="prevSlide()">
        			<svg width="24" height="24" viewBox="0 0 24 24">
        			  <polyline points="15 18 9 12 15 6" fill="none" stroke="white" stroke-width="2" />
        			</svg>
        		  </div>

        		  <!-- Flecha derecha -->
        		  <div class="carousel-control carousel-control-next" onclick="nextSlide()">
        			<svg width="24" height="24" viewBox="0 0 24 24">
        			  <polyline points="9 6 15 12 9 18" fill="none" stroke="white" stroke-width="2" />
        			</svg>
        		  </div>
        		</section>

        		<script>
        		  let currentIndex = 0;
        		  const items = document.querySelectorAll('.carousel-item-conv');

        		  function updateCarousel() {
        			items.forEach((item, index) => {
        			  item.classList.toggle('active', index === currentIndex);
        			});
        		  }

        		  function prevSlide() {
        			currentIndex = (currentIndex - 1 + items.length) % items.length;
        			updateCarousel();
        		  }

        		  function nextSlide() {
        			currentIndex = (currentIndex + 1) % items.length;
        			updateCarousel();
        		  }

        		  // Opcional: Desplazamiento automático cada 5 segundos
        		  setInterval(() => {
        			nextSlide();
        		  }, 5000);
        		</script>
               <!--<section id="convocatorias-relevantes" class="convocatorias-section">
                  <div class="carousel-inner">
                    <div class="carousel-item-conv active">
                      <img src="assets/convocatoria-tesis.jpg" alt="Concurso de Financiamiento de Tesis">
                      <div class="convocatoria-content">
                        <h2>Concurso de Financiamiento de Tesis, 2024-II</h2>
                        <p>Participa y accede a financiamiento para tu proyecto de investigación. ¡Postula antes del 20 de enero!</p>
                        <a href="/noticias-vrin" class="btn">Leer más</a>
                      </div>
                    </div>

                    <div class="carousel-item-conv">
                      <img src="assets/convocatoria-riqchary.jpg" alt="Revista Científica Riqchary">
                      <div class="convocatoria-content">
                        <h2>Revista Científica Riqchary: Nueva Edición</h2>
                        <p>Explora los avances en tecnología 5G y 6G en la última edición de nuestra revista.</p>
                        <a href="/noticias-vrin" class="btn">Leer más</a>
                      </div>
                    </div>
                  </div>
         	
                  <div class="carousel-control carousel-control-prev" onclick="prevSlide()">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <polyline points="15 18 9 12 15 6" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                  </div>

                  <div class="carousel-control carousel-control-next" onclick="nextSlide()">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <polyline points="9 6 15 12 9 18" fill="none" stroke="white" stroke-width="2" />
                    </svg>
                  </div>
                </section>-->
      mode: htmlmixed
    type: template
    enabled: true
  -
    id: m7ap5pvp
    template:
      code: |-
        <!--
        ==================================================================================================
        ====================================== SECCIÓN NOTICIAS ==========================================
        ==================================================================================================
        -->

        <style>
                .main-container {
                    max-width: 95%; 
                    margin: 20px auto; 
                    background: #fff; 
                    border-radius: 15px; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
                    padding: 20px; 
                }
                .news-item {
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .news-item img {
                    width: 100%;
                  	height: 250px;
                    object-fit: cover;
                }
                .news-content {
                    padding: 15px;
                }
                .news-content h4 {
                    font-weight: bold;
                    color: #2c3e50; 
                    margin-bottom: 10px;
                    font-size: 1.25rem;
                }
                .news-content p {
                    margin-bottom: 10px;
                    color: #34495e; 
                    font-size: 0.95rem;
                }
                .news-content a {
                    color: #2980b9; 
                    font-weight: bold;
                    text-decoration: none;
                }
                .news-content a:hover {
                    text-decoration: underline;
                }

                .go-to-news {
                    display: inline-block;
                    margin: 20px auto;
                    padding: 10px 20px;
                    font-size: 16px;
                    font-weight: bold;
                    color: #fff;
                    background-color: #2980b9;
                    border: none;
                    border-radius: 5px;
                    text-align: center;
                    text-decoration: none;
                    cursor: pointer;
                }
                .go-to-news:hover {
                    background-color: #1a6ca8;
        		  	color: white;
                }
                </style>

                <!-- Contenedor principal -->
                <div class="main-container">
                  	<div class="section-header">
                		<h2>Últimas Noticias</h2>
                        <p>Conoce todas las actividades y noticias del Vicerrectorado de Investigación de la UNAMBA.</p>
                	</div> 

                    <!-- Lista de Noticias -->
                    <div class="row">
                        {{ collection:noticias limit="3" }}
                        <div class="col-md-4 mb-4">
                            <div class="news-item">
                                <!-- Imagen de la noticia -->
                                <a href="{{ url }}" target="_blank">
                                    <img src="{{ imagen_principal | url }}" alt="{{ title }}">
                                </a>
                                <!-- Contenido de la noticia -->
                                <div class="news-content">
                                    <h4>{{ title }}</h4>
                                    <p class="text-sm text-gray-500"><strong>Fecha:</strong> {{ fecha_publicacion }}</p>
                                    
                                    <a href="{{ link }}" class="text-blue-600 hover:underline">Ir a la publicación</a>
                                </div>
                            </div>
                        </div>
                        {{ /collection:noticias }}
                    </div>

                    <!-- Botón para ir al apartado completo de noticias -->
                    <div class="text-center">
                        <a href="/noticias-vrin" class="go-to-news" style="background-color: #6a1b9a;">Ver más Noticias</a>
                    </div>
                </div>
                <hr>
      mode: htmlmixed
    type: template
    enabled: true
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
    enabled: false
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
        <style>
                  /* Estilos generales */
                .vicerrectorado-section {
                  background-color: #f9f9f9;
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
                }

                /* Imagen con contenedor adicional */
                .vicerrectorado-image-wrapper {
                  position: relative;
                  flex: 1;
                  max-width: 40%;
                  text-align: center;
                }

                .vicerrectorado-image {
        		  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.15);
                  position: relative;
                  z-index: 2;
                  max-width: 100%;
                  height: auto;
                  border-radius: 8px;
                  object-fit: cover;
                }

                /* Contenido textual */
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
                  margin-bottom: 30px;
                }

                .vicerrectorado-button {
                  display: inline-block;
                  padding: 10px 20px;
                  font-size: 16px;
                  color: #fff;
                  background-color: #6a1b9a;
                  text-decoration: none;
                  border-radius: 5px;
                  transition: background-color 0.3s ease;
                }

                .vicerrectorado-button:hover {
                  background-color: #4a148c;
                }
        </style>

        <div class="vicerrectorado-section" id="vicerrectorado">
                  <div class="vicerrectorado-container">
                    <div class="vicerrectorado-row">
                      <!-- Imagen con diseño de contenedor adicional -->
                      <div class="vicerrectorado-image-wrapper">
                        
                        <img src="{{imagen_vicerrector}}" alt="vicerrector-investigacion" class="vicerrectorado-image">
                      </div>
                      <!-- Contenido textual -->
                      <div class="vicerrectorado-content">
                        <h3 class="vicerrectorado-title">Vicerrectorado de Investigación</h3>
                        <p class="vicerrectorado-description">
                          Nos enfocamos en impulsar la investigación, la innovación y el desarrollo tecnológico dentro de la universidad. Promovemos proyectos que generan conocimiento, fomentamos la creatividad científica y facilitamos la conexión entre investigadores, estudiantes y la sociedad para lograr un impacto real.</p>
        				<br>
        			  <h4 style="font-weight: bold;">{{ nombre_vicerrector }}</h4>

        			  <h5 style="font-weight: bold;">{{ cargo }}</h5>
                      </div>
        			  
                    </div>
                  </div>
                </div>
        <!-- fin acerca de vicerrector -->
      mode: htmlmixed
    cargo: 'Vicerrector de Investigación'
    imagen_vicerrector: fotos_vrin/mir_2116.jpg
  -
    id: lkabqlir
    titulo_seccion_blog: 'Eventos Vicerrectorado de Investigación'
    template:
      code: |-
        <style>
          .title {
          	color: #003366;
            margin-bottom: 10px;
            border-bottom: 3px solid #b22222;
            padding-bottom: 10px;
          }
        </style>
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
    id: m7by00qf
    template:
      code: |-
        <hr>
        <style>
        /* Estilos generales */
        .section-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #003366;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .section-header p {
          font-size: 1rem;
          color: #555;
          margin: 0;
        }

        .section-header h2::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background-color: #b22222;
          margin: auto 0;
        }
        </style>

        <div class="section-header">
            <h2>Comunidades del Conocimiento</h2>
            <p>Conoce más sobre nuestros docentes, grupos y líneas de investigación</p>
        </div>
      mode: htmlmixed
    type: template
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
        <!-- Comunidades del Conocimiento -->

        <style>
        /* Estilos generales */
        .section-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #003366;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .section-header p {
          font-size: 1rem;
          color: #555;
          margin: 0;
        }

        .section-header h2::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background-color: #b22222;
          margin: 10px auto 0;
        }

        .sm-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px; 
        }

        .sm-block {
          text-align: center;
          padding: 20px;
          border: 2px solid black;
          border-radius: 10px;
          width: 250px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sm-block:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .sm-block img {
          max-width: 100px;
          margin-bottom: 10px;
        }

        .sm-block h1 {
          font-size: 2rem;
          margin: 10px 0;
          color: #003366;
        }

        .sm-block b {
          font-size: 1rem;
          color: #555;
        }
        </style>

        <div id="status">
          <!-- Bloques -->
          <div class="sm-container">
            <!-- Bloque 1 -->
            <div class="sm-block" id="block1">
              <div class="icon-img-wrapper">
                <div class="eb-counter-image-wrapper">
                  <a title="docentes" target="_blank" href="/docentes-renacyt">
                    <img class="eb-counter-image" alt="" src="{{icono_docentes_renacyt}}">
                  </a>
                </div>
              </div>
              <h1><span class="block-no" style="font-family: 'Times New Roman', serif;">{{contador_docentes_renacyt}}</span></h1>
              <b>DOCENTES RENACYT</b>
            </div>

            <!-- Bloque 2 -->
            <div class="sm-block" id="block2">
              <div class="icon-img-wrapper">
                <div class="eb-counter-image-wrapper">
                  <a title="grupos" href="/grupos-de-investigacion">
                    <img class="eb-counter-image" alt="" src="{{icono_grupos_de_investigacion}}"/>
                  </a>
                </div>
              </div>
              <h1><span class="block-no" style="font-family: 'Times New Roman', serif;">{{contador_grupos_de_investigacion}}</span></h1>
              <b>GRUPOS DE INVESTIGACIÓN</b>
            </div>

            <!-- Bloque 3 -->
            <div class="sm-block" id="block3">
              <div class="icon-img-wrapper">
                <div class="eb-counter-image-wrapper">
                  <a title="lineas-de-investigacion" href="/lineas-de-investigacion">
                    <img class="eb-counter-image" alt="" src="{{icono_lineas_de_investigacion}}"/>
                  </a>
                </div>
              </div>
              <h1><span class="block-no" style="font-family: 'Times New Roman', serif;">{{contador_lineas_de_investigacion}}</span></h1>
              <b>LINEAS DE INVESTIGACIÓN</b>
            </div>
          </div>
        </div>
        <hr>
      mode: htmlmixed
    contador_docentes_renacyt: 56
    contador_grupos_de_investigacion: 20
    contador_lineas_de_investigacion: 20
    icono_docentes_renacyt: a_home_otros/inves.png
    icono_grupos_de_investigacion: a_home_otros/grupos.png
    icono_lineas_de_investigacion: a_home_otros/lineas.png
  -
    id: m7by1g19
    titulo_seccion_blog: 'REVISTAS DE INVESTIGACION'
    template:
      code: |-
        <style>
        .research-journals-section {
          padding: 50px 20px;
          background-color: #f9f9f9;
          text-align: center;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #003366;
          margin-bottom: 10px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 20px;
        }

        .btn-primary {
          display: inline-block;
          padding: 10px 20px;
          background-color: #b22222;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          /*font-weight: bold;*/
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #8b0000;
        }

        .journals-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .journal-card {
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
          max-width: 400px;
          text-align: left;
        }

        .journal-image {
          width: 100%;
          height: auto;
        }

        .journal-details {
          padding: 20px;
        }

        .journal-details h3 {
          font-size: 1.5rem;
          color: #003366;
          margin-bottom: 10px;
        }

        .journal-details p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 10px;
        }

        .btn-secondary {
          display: inline-block;
          padding: 8px 15px;
          background-color: #003366;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: #001f4d;
        }
        .section-header h2{
          color: #003366;
          margin-bottom: 10px;
          border-bottom: 3px solid #b22222; 
          padding-bottom: 10px; 
          }
          .section-header h2::after {
        	content: '';
        	display: block;
        	width: 60px;
        	height: 3px;
        	background-color: #b22222;
        	margin: 10px auto 0;
          }
        </style>

        <div class="research-journals-section">
          <!-- Título principal -->
          <div class="section-header">
            <h2 class="title">Revistas de Investigación UNAMBA</h2>
            <p>Explora las últimas publicaciones de las revistas de Investigación de la UNAMBA</p>
            <a href="https://revistas.unamba.edu.pe/" class="btn-primary" style="background-color: #6a1b9a;">Ir a Revistas</a>
          </div>
        <hr>
          <!-- Contenedor de revistas -->
          <div class="journals-container">
            <!-- Revista 1 -->
            <div class="journal-card">
        	  <a href="https://revistas.unamba.edu.pe/index.php/riqchary">
        	  	<img src="assets/journalThumbnail_es.jpg" alt="Portada Revista 1" class="journal-image" />
        	  </a>
              
              <div class="journal-details">
                <h3 class="title" style="text-align: center;">C&T Riqchary Revista de Investigación</h3>
                <p><strong>Áreas temáticas:</strong> Ciencias exactas, ingenierías y de materiales.</p>
                <p><strong>Periodicidad:</strong> Semestral</p>
                <p><strong>ISSN:</strong> 2706-543X (en línea), 2810-8124</p>
                <p><strong>Acceso:</strong> Abierto (CC BY-NC-ND)</p>
                <a href="enlace-a-revista1" class="btn-secondary" style="vertical-align: middle; justify-content: center; align-items: center; text-align: center;">Ver Revista</a>
              </div>
            </div>

            <!-- Revista 2 -->
            <div class="journal-card">
        	  <a href="https://revistas.unamba.edu.pe/index.php/micaela">
        	  	<img src="assets/micaela_revista.png" alt="Portada Revista 2" class="journal-image"/>
        	  </a>
              
              <div class="journal-details">
                <h3 class="title" style="text-align: center;">Micaela Revista de Investigación - UNAMBA</h3>
                <p><strong>Áreas temáticas:</strong> Multidisciplinaria en las áreas: Ciencia, Tecnología y Humanidades</p>
                <p><strong>Periodicidad:</strong> Semestral</p>
                <p><strong>ISSN:</strong> 2955-8646 (en línea), 2709-8990 (impresa)</p>
                <p><strong>Depósito Legal:</strong> BN - Perú: N° 2020-10220</p>
                <a href="enlace-a-revista2" class="btn-secondary">Ver Revista</a>
              </div>
            </div>
          </div>
        </div>
      mode: htmlmixed
    type: blog
    enabled: true
  -
    id: m7by2bng
    titulo_seccion_blog: 'REVISTA URQUTANPU WILLAKUY'
    template:
      code: |-
        <style>
        .title {
          font-size: 2.5rem;
          color: #003366;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .revista-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 10px;
          overflow: hidden;
        }

        .revista-card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .card-img {
          object-fit: cover;
        }

        .btn-primary {
          background-color: #b22222;
          border: none;
          padding: 10px 20px;
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #8b0000;
        }
        .title {
          font-family:"Roboto", "Helvetica", "Arial", sans-serif;  
        }
        </style>

        <div class="section-header">
        	<h2 class="text-center title">Revista Urqutanpu Willakuy</h2>
        </div>
        <div class="container my-5">
          <!-- Revista 1 -->
          <div class="card mb-4 shadow-sm revista-card">
            <div class="row no-gutters align-items-center">
              <div class="col-md-4">
                <img src="./assets/a_home_otros/revista_urqu_willakuy_11.png" class="card-img" alt="Revista Urqutanpu Vol. 1">
              </div>
        	  <div class="col-md-8 order-md-1">
                <div class="card-body">
                  <h5 class="card-title">Urqutanpu Huk Kaq Revista</h5>
        		  <p>La Revista Urqutanpu, originaria de la subregión de Apurímac, Perú, busca expandir el conocimiento a través de libros para el público nacional e internacional, especialmente aquellos interesados en la cultura Runasimi. Aunque el idioma Runasimi está siendo más reconocido tanto en Perú como en otros países, todavía hay un camino por recorrer para su pleno desarrollo. La revista se dedica a promover y difundir el conocimiento en Runasimi, abordando temas diversos como historia, cultura, música, agricultura, entre otros. Invita a escritores a contribuir y se compromete a seguir desarrollando y promoviendo la lengua y cultura Qichwa.</p>
        		  <div class="col-md-8">
        			<h5 class="card-title">
        			  <a>Wakichiy umalliq</a>
        			</h5>
        			<p class="card-description">
        			  Dr. Wilson Jhon Mollocondo Flores <br>
        			  Av. Tamburco s/n Abancay, Apurimac
        			</p>
        			<h5 class="card-title">
        			  <a>Wakichiy kamachiqkuna</a>
        			</h5>
        			<p class="card-description">
        			  Roxana Quispe Collantes <br>
        			  Jermani Ojeda Ludeña <br>
        			  Martín Castillo Collado <br>
        			  Calip Sierra Peña <br>
        			  Belen Cabrera Navarrete <br>
        			  Ernestina Choccata Cruz <br>
        			  Ecler Mamani Vilca
        			</p>
        			<h5 class="card-title">
        			  <a>Allichaqkuna:</a>
        			</h5>
        			<p class="card-description">
        			  Calip Sierra Peña <br>
        			  Martín Castillo Collado <br>
        			  Maura Bolivar Barrionuevo <br>
        			</p>
        			<p class="card-description">
        			  Hecho el depósito legal en la Biblioteca Nacional del Perú No 2021-08233. <br>
        			  Mayo, 2023
        			</p>
                  </div>
                  <div class="col-6 mx-auto">
        			<a href="https://drive.google.com/file/d/1-xuI-Foy4EFdjv5-PQs-zdPdOgDNJGBQ/view" target="_blank" class="btn btn-primary" style="vertical-align: middle; display: flex; justify-content: center; align-items: center; background-color: #6a1b9a;">Ver Revista</a>
                  </div>
        		</div>
              </div>
            </div>
          </div>

          <!-- Revista 2 -->
          <div class="card mb-4 shadow-sm revista-card">
            <div class="row no-gutters align-items-center">
              <div class="col-md-4 order-md-2">
                <img src="./assets/a_home_otros/urqu_tanpu_2.png" class="card-img" alt="Revista Urqutanpu Vol. 2">
              </div>
              <div class="col-md-8 order-md-1">
                <div class="card-body">
                  <h5 class="card-title">Urqutanpu Iskay Kaq Revista</h5>
        		  <p>Esta revista en su segunda edición nos habla sobre la importancia de escribir en nuestro propio idioma y de preservar el conocimiento cultural. Se cuestiona si el conocimiento debe almacenarse únicamente en inglés y se menciona la necesidad de mantener la voz propia en la forma en que nos expresamos. También se presenta el segundo número de Urqutampu, donde se compartirá conocimiento sobre diversas comunidades y temas culturales. Finalmente, se anima a seguir adelante juntos en este proceso de preservación y difusión del conocimiento.</p>
        		  <div class="col-md-8">
        			<h5 class="card-title">
        			  <a>Wakichiy umalliq</a>
        			</h5>
        			<p class="card-description">
        			  Dr. Wilson Jhon Mollocondo Flores <br>
        			  Av. Tamburco s/n Abancay, Apurimac
        			</p>
        			<h5 class="card-title">
        			  <a>Wakichiy kamachiqkuna</a>
        			</h5>
        			<p class="card-description">
        			  Jermani Ojeda Ludeña <br>
        			  Katherin Patricia Tairo Quispe <br>
        			  Calip Sierra Peña <br>
        			  Belen Cabrera Navarrete <br>
        			</p>
        			<h5 class="card-title">
        			  <a>Allichaqkuna:</a>
        			</h5>
        			<p class="card-description">
        			  Calip Sierra Peña <br>
        			  Maura Bolívar Barrionuevo <br>
        			  Gloria María Jara Valverde <br>
        			</p>
        			<h5 class="card-title">
        			  <a>Portada llimpiq:</a>
        			</h5>
        			<p class="card-description">
        			  Patrick M. Cisneros Prado <br>
        			</p>
        			<p class="card-description">
        			  Hecho el depósito legal en la Biblioteca Nacional del Perú No 2021-08233. <br>
        			  Mayo, 2023
        			</p>
                  </div>
                  <div class="col-6 mx-auto">
        			<a href="https://drive.google.com/file/d/1O9MHVrTvRWREfXdmqvXF7WrnA6Vw6alo/view" target="_blank" class="btn btn-primary" style="vertical-align: middle; display: flex; justify-content: center; align-items: center; background-color: #6a1b9a;">Ver Revista</a>
                  </div>
        		</div>
              </div>
            </div>
          </div>
        </div>
      mode: htmlmixed
    type: blog
    enabled: true
  -
    id: m7by52bw
    titulo_seccion_blog: 'HERRAMIENTAS DE BUSQUEDA DE LA UNAMBA'
    template:
      code: |-
        <!-- APARTADO DE HERRAMIENTAS DE BÚSQUEDA -->
        <style>
          .title h2 {
        	font-size: 2.5rem;
        	color: #003366;
        	margin-bottom: 10px;
          }
          .title h2 {
          color: #003366;
          margin-bottom: 10px;
          padding-bottom: 10px; 
          }
        .title {
          font-size: 2rem;
          color: #003366;
          margin-bottom: 20px;
        }

        .img-herramienta {
          max-height: 100px;
          transition: transform 0.1s ease;
        }

        .img:hover {
          transform: scale(1.1);
        }

        .carousel-control-prev, .carousel-control-next {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-control-prev:hover, .carousel-control-next:hover {
          background: rgba(0, 0, 0, 0.8);
        }

        .carousel-control-prev-icon, .carousel-control-next-icon {
          filter: invert(1);
        }
        </style>
        <div class="section ">
                    <div class="team">
                        <!-- cuerpo -->
                        <div class="cards">
                            <div class="container">
                                <div class="title">
                                    <h2 style="text-align: center; font-weight: bold; font-family: "Roboto", "Helvetica", "Arial", sans-serif;">Herramientas de Busqueda UNAMBA</h3>
                                </div>
        					 <div class="container">
        						<h4 style="text-align: center;"> La Universidad Nacional Micaela Bastidas de Apurímac cuenta con las siguientes herramientas útiles de búsqueda:
        						</h4>
        					</div>
                                <!--  herramientas de Busqueda unamba -->
                                <div class="row">
                                    <div class="col-md-4 ml-auto mr-auto text-center">
                                        <div class="card card-profile">
                                            <br>
                                            <div class=" mr-auto ml-auto ">
                                                <img class="img" src="./assets/informacion-docente/nube.png">
                                            </div>
                                            <div class="card-body">
                                                <h2 class="card-title text-center">
                                                PURE</h2>
                                                <p class="Tim-note">
                                                    PURE es una plataforma de gestión de investigación que recopila información sobre los
                                                    resultados obtenidos por docentes e investigadores, incluyendo publicaciones, proyectos
                                                    y más en un solo lugar.
                                                </p>
                                                <a href="https://pure.unamba.edu.pe/es/" target="_blank" class="btn btn-primary btn-round" style="background-color: #6a1b9a;">Ver Pagina</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 ml-auto mr-auto text-center">
                                        <div class="card card-profile">
                                            <br>
                                            <div class=" mr-auto ml-auto ">
                                                <img class="img" src="./assets/informacion-docente/repo.png">
                                            </div>
                                            <div class="card-body ">
                                                <h2 class="card-title text-center">
                                                Repositorio</h4>
                                                <p class="Tim-note">
                                                    El repositorio UNAMBA es una plataforma que contiene materiales académicos y científicos
                                                    producidos por la comunidad universitaria, tales como tesis, artículos y libros, entre otros .
                                                </p>
                                                <a href="https://repositorio.unamba.edu.pe" target="_blank" class="btn btn-primary btn-round" style="background-color: #6a1b9a;">Ver Pagina</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4  ml-auto mr-auto text-center ">
                                        <div class="card card-profile">
                                            <br>
                                            <div class=" mr-auto ml-auto ">
                                                <img class="img" src="/assets/informacion-docente/observatorio.png">
                                            </div>
                                            <div class="card-body ">
                                                <h2 class="card-title text-center">
                                                Observatorio</h4>
                                                <p class="Tim-note">
                                                    Aplicación web para el monitoreo de Proyectos de investigación Docente y Tesis de pre grado.
                                                    Forma parte de la red mas grande de investigadores de la región de Apurímac.
                                                </p>
                                                <a href="https://observatorio.unamba.edu.pe" target="_blank" class="btn btn-primary btn-round" style="background-color: #6a1b9a;">Ver Pagina</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        				<!-- Herramientas de Búsqueda Web -->
        				<div class="container text-center">
        				  <h2 style="color: #003366; font-weight: bold; font-family: "Roboto", "Helvetica", "Arial", sans-serif;">Herramientas de Búsqueda Web</h2>
        				  <br>
        				  <div id="search-tools-carousel" class="carousel slide" data-ride="carousel">
        					<!-- Contenedor de imágenes -->
        					<div class="carousel-inner">
        					  <!-- Grupo 1 -->
        					  <div class="carousel-item active">
        						<div class="d-flex justify-content-center">
        						  <a href="https://www.lareferencia.info/es/" target="_blank" class="mx-3">
        							<img src="/assets/la_referencia.png" alt="La Referencia" class="img-herramienta" style="width: 250px;">
        						  </a>
        						  <a href="https://www.gob.pe/concytec" target="_blank" class="mx-3">
        							<img src="/assets/concytec.png" alt="Concytec" class="img-herramienta" style="width: 250px;">
        						  </a>
        						  
        						  <a href="https://renati.sunedu.gob.pe" target="_blank" class="mx-3">
        							<img src="/assets/renati.jpg" alt="Renati" class="img-herramienta" style="width: 250px;">
        						  </a>
        						  
        						  <a href="https://alicia.concytec.gob.pe/vufind/" target="_blank" class="mx-3">
        							<img src="/assets/alicia.png" alt="Alicia" class="img-herramienta" style="width: 250px;">
        						  </a>
        						  
        						</div>
        					  </div>
        					  <!-- Grupo 2 -->
        					  <div class="carousel-item">
        						<div class="d-flex justify-content-center">
        						  <a href="https://alicia.concytec.gob.pe/vufind/" target="_blank" class="mx-3">
        							<img src="/assets/alicia.png" alt="Alicia" class="img-herramienta" style="width: 250px;">
        						  </a>
        						  
        						  <a href="https://scielo.org/es/" target="_blank" class="mx-3">
        							<img src="/assets/scielo.png" alt="Scielo" class="img-herramienta">
        						  </a>
        						  
        						  <a href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/" target="_blank" class="mx-3">
        							<img src="/assets/cti_vitae.jpg" alt="CTI Vitae" class="img-herramienta" style="width: 250px;">
        						  </a>
        						  
        						  <a href="https://www.scopus.com/home.uri" target="_blank" class="mx-3">
        							<img src="/assets/scopus-2.png" alt="Scopus" class="img-herramienta" style="width: 250px;">
        						  </a>
        						</div>
        					  </div>
        					</div>

        					<!-- Controles de navegación -->
        					<a class="carousel-control-prev" href="#search-tools-carousel" role="button" data-slide="prev">
        					  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        					  <span class="sr-only">Anterior</span>
        					</a>
        					<a class="carousel-control-next" href="#search-tools-carousel" role="button" data-slide="next">
        					  <span class="carousel-control-next-icon" aria-hidden="true"></span>
        					  <span class="sr-only">Siguiente</span>
        					</a>
        				  </div>
        				</div>
        			  <hr>
         		</div>
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
    enabled: false
texto_bienvenida: 'Vicerrectorado de Investigación'
titulo_pagina: 'Vicerrectorado de Investigación - VRIN UNAMBA'
imagen_fondo:
  - a_home_otros/bg4.jpg
template_imagen_fondo:
  code: |-
    <!--<div class="header-3">
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
    </div>-->
  mode: htmlmixed
modal:
  code: |-
    <!-- Modal HTML -->
    <div id="customModal" class="custom-modal">
      <div class="custom-modal-content">
        <!-- Header del modal -->
        <div class="custom-modal-header">
          <h4>¡Aviso importante!</h4>
          <span class="custom-close">&times;</span>
        </div>

        {{ collection:blog limit="1" sort="date:desc" }}
        {{ if modal == "si" }}
        <!-- Contenido principal del modal -->
        <div class="custom-modal-body">
          <!-- Imagen del Modal -->
          <img src="{{ imagen_principal }}" alt="Imagen del Modal" class="custom-modal-image">
        </div>

        <!-- Footer del modal -->
        <div class="custom-modal-footer">
          <a href="/blog/{{ slug }}" class="custom-modal-link" target="_blank">Ver más detalles</a>
        </div>
        {{ /if }}
        {{ /collection:blog }}
      </div>
    </div>

    <!-- CSS -->
    <style>
    body.modal-open {
      overflow: hidden; /* Evita el scroll del body cuando el modal está abierto */
    }

    body.modal-open:before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8); /* Fondo negro con opacidad */
      z-index: 11499; /* Un nivel por debajo del modal */
    }
    /* Estilo para el fondo del modal */
    .custom-modal {
      display: flex;
      position: fixed;
      z-index: 11500; /* Asegura que el modal esté encima de todo */
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.8); /* Fondo negro con más opacidad */
      justify-content: center;
      align-items: center;
    }

    /* Contenedor del contenido del modal */
    .custom-modal-content {
      position: relative;
      background-color: #ffffff; /* Fondo blanco */
      border-radius: 15px;
      border: 1px solid #cccccc;
      overflow: hidden;
      width: 90%;
      max-width: 450px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Sombra para darle profundidad */
    }

    /* Header del modal */
    .custom-modal-header {
      background-color: #f1f1f1; /* Fondo gris claro */
      border-bottom: 1px solid #cccccc; /* Línea divisoria */
      color: #333333;
      padding: 15px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }

    /* Botón de cerrar (X) */
    .custom-close {
      color: #999999;
      font-size: 25px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 15px;
    }
    .custom-close:hover,
    .custom-close:focus {
      color: #333333;
      text-decoration: none;
      cursor: pointer;
    }

    /* Contenido del cuerpo del modal */
    .custom-modal-body {
      padding: 20px;
      overflow-y: auto; /* Scroll vertical si el contenido excede la altura */
      text-align: center;
      font-size: 16px; /* Ajustar el tamaño de letra */
      line-height: 1.5;
    }

    /* Imagen del modal */
    .custom-modal-image {
      width: 300px;
      height: auto;

      object-fit: contain;
      margin: 0 auto;
      border-radius: 10px;
    }

    /* Footer del modal */
    .custom-modal-footer {
      background-color: #f1f1f1; /* Fondo gris claro */
      border-top: 1px solid #cccccc; /* Línea divisoria */
      padding: 15px;
      text-align: center;
      height: 60px;
    }

    /* Estilo para el enlace de redirección */
    .custom-modal-link {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff; /* Azul */
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    .custom-modal-link:hover {
      background-color: #0056b3; /* Azul más oscuro */
      color: white;
    }
    .custom-modal-link:visited {
      background-color: #007bff;
      color: white;
    }
    </style>

    <!-- JavaScript -->
    <script>
      // Obtener el modal y el botón de cerrar
      var modal = document.getElementById("customModal");
      var span = document.getElementsByClassName("custom-close")[0];

      // Mostrar el modal al cargar la página si hay contenido válido
      window.onload = function () {
        var modalContent = document.querySelector(".custom-modal-body img");
        if (modalContent && modalContent.getAttribute("src")) {
          modal.style.display = "flex"; // Mostrar el modal
        }
      };

      // Cerrar el modal cuando el usuario hace clic en el botón de cerrar
      span.onclick = function () {
        modal.style.display = "none";
      };

      // Mostrar el modal
      modal.style.display = "flex";
      document.body.classList.add("modal-open");

      // Cerrar el modal
      modal.style.display = "none";
      document.body.classList.remove("modal-open");

      // Cerrar el modal si el usuario hace clic fuera del contenido
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    </script>
  mode: htmlmixed
---
## Bienvenido a la página web del VRIN!