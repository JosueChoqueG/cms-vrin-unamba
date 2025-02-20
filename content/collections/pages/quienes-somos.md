---
id: 01c5d506-c6c3-437f-94c0-233432f549d8
blueprint: page
title: 'Quiénes somos'
titulo_pagina: 'Quiénes Somos'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template_imagen_fondo:
  code: null
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1739972637
block_types:
  -
    id: m7bwuhre
    template:
      code: |-
        <style>
        	.authority-card {
        		display: flex;
        		align-items: center;
        		overflow: hidden;
        		transition: transform 0.3s ease, box-shadow 0.3s ease;
        		background-color: #fff;
        		height: 100%;
        		padding: 15px;
        	}

        	.authority-card:hover {
        		transform: scale(1.02);
        		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        		z-index: 2;
        	}

        	.authority-image {
        		width: 100%px;
        		height: 300px;
        		object-fit: cover;
        		border-radius: 10px;
        		margin-right: 20px;
            	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.15)
        	}

        	.authority-info {
        		flex: 1;
        	}

        	.authority-info h5 {
        		font-size: 1.5rem;
        		font-weight: bold;
        		color: #1E3C91;
        	}

        	.authority-info p {
        		margin-bottom: 8px; 
        		font-size: 1.1rem;
        	}

        	.authority-info a {
        		font-size: 1rem;
        		font-weight: bold;
        		color: #FF6600;
        	}

        	.authority-info a:hover {
        		text-decoration: underline;
        	}

        	.authority-info .btn {
        		font-size: 1rem;
        		font-weight: bold;
        		text-transform: uppercase;
        		border-radius: 20px;
        		margin-top: 10px;
        	}
          	.contenedor {
        		overflow: hidden;
        		transition: all 0.3s ease; 
        	}

        	.contenedor:hover .imagen {
        		-webkit-transform: scale(1.05);
        		transform: scale(1.05);
        	}
          		
          	.hr {
        		display: block;
        		margin-block-start: 0.5em;
        		margin-block-end: 0.5em;
        		margin-inline-start: auto;
        		margin-inline-end: auto;
        		unicode-bidi: isolate;
        		overflow: hidden;
        		border-style: inset;
        		border-width: 1px;
        	}
          	
          	.card-header {
        		background: #1E3C91;
        	  	color: white;
        		text-align: center;
        		border: none;
        		border-radius: 10px 10px 0 0;
        		padding: 15px;
        		font-size: 1.8rem;
        		font-weight: bold;
        		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        	}

            .dir-group {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
            }

            .dir-group .dir-group-link {
                background-color: #f4f4f4;
                margin-right: 15px;
                padding: 10px 20px;
                border-radius: 5px;
                font-weight: bold;
                color: #000;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
             }

             .dir-group .dir-group-link.active {
                background-color: #1E3C91; 
                color: #fff;
             }

             .tab-pane {
                display: none;
             }

             .tab-pane.active {
                display: block; 
             }

             .tab-pane img {
                width: 100%;
                height: auto;
                border-radius: 15px;
                border: 2px solid black;
                margin-bottom: 15px;
             }

             .tab-pane h4 {
                font-size: 1.5rem;
                font-weight: bold;
                color: #1E3C91;
             }

             .tab-pane p {
                font-size: 1rem;
                color: #000;
                margin-bottom: 15px;
             }

             .tab-pane a {
                font-weight: bold;
                color: #1E3C91;
                text-decoration: none;
             }

             .tab-pane a:hover {
                text-decoration: underline;
             }
             
             .title-dir h2 {
                font-size: 1.8rem;
                font-weight: bold;
                color: #1E3C91;
                font-family: "Roboto Slab", "Times New Roman", serif;
             }

             .nav-btn {
                background-color: #f4f4f4;
                border: 1px solid #ddd;
                padding: 10px 20px;
                margin: 0 10px;
                border-radius: 5px;
                font-weight: bold;
                color: #000;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .nav-btn.active {
                background-color: #1E3C91;
                color: #fff;
                border-color: #1E3C91;
            }

            .nav-btn:hover {
                background-color: #fff;
                color: #000;
            }

            figure {
              margin:0;
            }
            #gallery {
                max-width: 900px;
                margin: auto;
                overflow: hidden;
                position: relative;
                height: 500px; 
            }

            .gallery-container {
                position: relative;
                width: 100%;
                height: 100%; 
            }

            .gallery-item {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%; 
                opacity: 0;
                transition: opacity 1s ease-in-out;
            }

            .gallery-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }

            .gallery-item.active {
                opacity: 1;
            }

            .gallery-navigation {
                display: flex;
                justify-content: space-between;
                width: calc(100% - 40px);
                margin: 0 20px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }

            .nav-button {
                background-color: rgba(0,0,0, .3);
                color: white;
                border: none;
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 5px;
            }
            .nav-button > span {
              font-size: 30px;
            }
            .nav-button:hover {
                background-color: #005f5f;
            }

        </style>

        <div class="container mt-5">
            <div class="row">
        		 <!-- Sidebar del miniíndice -->
        				<div class="col-lg-3">
        					<h3 class="title">NOSOTROS</h3>
        				  	<hr>
        					<div class="list-group">
        						<a href="#" class="list-group-item list-group-item-action active" id="link-sobre-vrin">
        							<i class="fa fa-search"></i> Sobre el VRIN
        						</a>
        					  <hr>
        						<a href="#" class="list-group-item list-group-item-action" id="link-autoridades">
        							<i class="fa fa-search"></i> Autoridades
        						</a>
        					  <hr>
        						<a href="#" class="list-group-item list-group-item-action" id="link-dependencias">
        							<i class="fa fa-search"></i> Direcciones del VRIN
        						</a>
        					  <hr>
        						<a href="#" class="list-group-item list-group-item-action" id="link-organigrama">
        							<i class="fa fa-search"></i> Organigrama
        						</a>
        					  <hr>
        					</div>
        				</div>  

                <!-- Contenido principal -->
                <div class="col-lg-9">
                    <!-- Sección Sobre el VRIN -->
                    <section id="sobre-vrin" class="content-section">
                        <div class="card">
        				  	<div class="section-header" style="color: white; text-align: center; margin-top: 10px;">
        						<h2 style="margin: 0; font-size: 1.8rem; font-weight: bold; color: #1E3C91;">Vicerrectorado de Investigación</h2>
        					</div>
                            <hr>
                            <div class="card-body">
                    
                    <!--Carrusel de imagenes para la pagina de VRIN -->
                    <section id="gallery">
                      <div class="gallery-container">
                          <figure class="gallery-item">
                              <img src="assets/fotos_vrin/mir_2175.jpg" alt="Imagen 1">
                  <!--             <figcaption>Descripción de la imagen 1</figcaption> -->
                          </figure>

                          <figure class="gallery-item">
                              <img src="assets/fotos_vrin/mir_2192.jpg" alt="Imagen 2">
                  <!--             <figcaption>Descripción de la imagen 2</figcaption> -->
                          </figure>

                          <figure class="gallery-item">
                              <img src="assets/fotos_vrin/mir_2236.jpg" alt="Imagen 3">
                  <!--             <figcaption>Descripción de la imagen 3</figcaption> -->
                          </figure>
                          
                          <figure class="gallery-item">
                              <img src="assets/fotos_vrin/mir_2249.jpg" alt="Imagen 4">
                  <!--             <figcaption>Descripción de la imagen 4</figcaption> -->
                          </figure>
                      </div>
                      <nav class="gallery-navigation">
                          <button class="nav-button prev-button"><span>&#60;</span></button>
                          <button class="nav-button next-button"><span>&#62;</span></button>
                      </nav>
                  </section>

        					  <h3 class="title" style="color: #1E3C91;">Presentación</h3>
        					  
        					  <p>
        						  El Vicerrectorado de Investigación es un órgano ejecutivo desconcentrado, de apoyo encargado de implementar y materializar los lineamientos de investigación, buscando el estímulo a la ciencia, investigación y creación. El Vicerrector de Investigación, reemplaza al Rector o al Vicerrector Académico en caso de ausencia, licencia, impedimento temporal o vacancia al rector y al Rector en casos de ausencia o impedimento temporal de ambos.
        					  	</p>
        					  	<p>
                                    El Vicerrectorado de Investigación (VRIN) es el organismo encargado de dirigir el sistema de investigación de la Universidad Nacional Micaela Bastidas de Apurímac (UNAMBA). Conduce, coordina y organiza las actividades de investigación que se desarrollan en la universidad.
                                </p>
                                <p>
                                    El VRIN fomenta la transferencia tecnológica, la innovación y la difusión de los resultados de las investigaciones, integrando a la universidad, la empresa y la sociedad.
                                </p>
        					 <h3 class="title" style="color: #1E3C91;">Funciones Generales</h3>
                                <p class="title h6">El Vicerrectorado de Investigación tiene las siguientes funciones:</p>
        					  	<hr>
                                <br>
                                <ol style="margin-left: 15px;">
                                <li>Dirigir y ejecutar la política general de investigación en la universidad.</li>
                                <li>Supervisar las actividades de investigación con la finalidad de garantizar la calidad de las mismas y su concordancia con la misión y metas establecidas por el estatuto de la Universidad.</li>
                                <li>Organizar la difusión del conocimiento y los resultados de las investigaciones.</li>
                                <li>Gestionar el financiamiento de la investigación ante las entidades y organismos públicos o privados.</li>
                                <li>Aprobar la realización y ejecución de programas de desarrollo de capacidades y de investigación en los trabajadores administrativos.</li>
                                <li>Promover la generación de recursos para la universidad a través de la producción de bienes y prestación de servicios derivados de las actividades de investigación y desarrollo, así como mediante la obtención de regalías por patentes u otros derechos de propiedad intelectual.</li>
                                </ol> 
                                <br>
                            </div>
                        </div>
                    </section>

        			<section id="autoridades" class="content-section" style="display: none; backgorund-color: #F2F2F2;">
        			  <div class="card">
        				  <div class="section-header" style="color: white; text-align: center; margin-top: 10px;">
        					  <h2 class="title" style="margin: 0; font-size: 1.8rem; font-weight: bold; color: #1E3C91;">Conoce nuestras Autoridades</h2>
        				  </div>
                          <hr>
        				  <div class="card-body" style="transition: all 2s;">
        					  <div class="row">
        						  <!-- Bucle dinámico para obtener las autoridades desde Statamic -->
        						  {{ collection:autoridades }}
        							  {{ if cargo == "Vicerrector" }}
        							  <!-- Sección del Vicerrector de Investigación -->
        							  <!-- Texto "Autoridades por Direcciones" -->
        						  <div class="col-md-12 mb-3">
        							  <h3 class="mt-4" style="color: #000; font-weight: bold; text-align:center; text-decoration: underline;">Vicerrector de Investigación</h3>
        						  </div>
        							  <div class="col-md-12 mb-4">
        								  <div class="authority-card shadow-sm rounded" style="">
        									  <img src="{{ foto }}" alt="{{ nombre }}" class="authority-image">
        									  <div class="authority-info">
        										  <h5 style="color: #000;">{{ nombre }}</h5>
        										  <p style="color: #60A127; font-weight: bold;">{{ cargo:label }}</p>
        										  <p>
        											  <i class="fa fa-envelope"></i> 
        											  <a href="mailto:{{ correo }}" style="color: #000;">{{ correo }}</a>
        										  </p>
                                                  <a href="{{ficha_cti_vitae}}" style="color: #1E3C91; text: primary; text-decoration: none;  font-weight: bold;" target="_blank">
                                                     Ver Ficha CTI Vitae <i class="fa fa-external-link"></i>
                                                  </a>
        									  </div>
        								  </div>
        							  </div>
        							  {{ /if }}
        						  {{ /collection:autoridades }}

        						  <!-- Texto "Autoridades por Direcciones" -->
        						  <div class="col-md-12 mb-3">
        							  <h3 class="mt-4" style="color: #000; font-weight: bold; text-align:center; text-decoration: underline;">Autoridades por Direcciones</h3>
        						  </div>

        						  <!-- Sección de los directores -->
        						  {{ collection:autoridades }}
        							  {{ if cargo != "Vicerrector" }}
        							  <div class="col-md-12 mb-4">
        								  <div class="authority-card shadow-sm rounded">
        									  <img src="{{ foto }}" alt="{{ nombre }}" class="authority-image">
        									  <div class="authority-info">
        										  <h5 style="color: #000;">{{ nombre }}</h5>
        										  <p style="color: #60A127; font-weight: bold;font-family: "Roboto Slab", "Times New Roman", serif;">{{ cargo:label }}</p>
        										  <p>
        											  <i class="fa fa-envelope"></i> 
        											  <a href="mailto:{{ correo }}" style="color: #000;">{{ correo }}</a>
        										  </p>
                                                  <a href="{{ficha_cti_vitae}}" style="color: #1E3C91; text: primary; text-decoration: none;  font-weight: bold;" target="_blank">
                                                     Ver Ficha CTI Vitae <i class="fa fa-external-link"></i>
                                                  </a>
        									  </div>
        								  </div>
        							  </div>
        							  {{ /if }}
        						  {{ /collection:autoridades }}
        					  </div>
        				  </div>
        			  </div>
        		  </section>

                  <section id="dependencias" class="content-section" style="display: none;">
                    <div class="container mt-5">
                      <div class="card" >
                      <div class="row" style="margin-left: 90px; margin-right: 90px;">
                        <div class="title-dir col-12 justify-content-center text-align-center">
                           <h2 style="text-align: center;">Direcciones del VRIN</h2>
                           <hr style="margin-left: -105px; margin-right: -105px;">                    
                        </div>
                        <div class="col-12">
                           <div class="dir-group-content d-flex justify-content-center">
                              <button class="btn nav-btn active" data-target="#ditt">DITT</button>
                              <button class="btn nav-btn" data-target="#die">DIE</button>
                              <button class="btn nav-btn" data-target="#diin">DIIN</button>
                              <button class="btn nav-btn" data-target="#dpbs">DPBS</button>
                           </div>
                        </div>
                      <!-- Contenido de las direcciones -->
                      <div class="col-12">
                        <div class="tab-content mt-4">
                        <!-- Dirección de Innovación y Transferencia Tecnológica -->
                          <div id="ditt" class="tab-pane active">
                            <img src="assets/fotos_vrin/mir_2188.jpg" alt="Innovación y Transferencia Tecnológica">
                            <h4 style="text-align: center;">Dirección de Innovación y Transferencia Tecnológica</h4>
                            <p>Esta dirección se encarga de promover la innovación y la transferencia de tecnología, fomentando la colaboración entre la universidad y el sector productivo.</p>
                            <a href="/innovación" target="_blank">Ir a la página de la dirección <i class="fa fa-external-link"></i></a>
                          </div>
                          
                      <!-- Dirección de Incubadora de Empresas -->
                        <div id="die" class="tab-pane">
                          <img src="assets/fotos_vrin/mir_2199.jpg" alt="Incubadora de Empresas">
                          <h4 style="text-align: center;">Dirección de Incubadora de Empresas</h4>
                          <p>La Dirección de Incubadora de Empresas apoya el emprendimiento y el desarrollo de nuevas empresas, brindando asesoría y recursos para su crecimiento.</p>
                          <a href="/incubadora" target="_blank">Ir a la página de la dirección <i class="fa fa-external-link"></i></a>
                        </div>
                        
                      <!-- Dirección de Institutos de Investigación -->
                        <div id="diin" class="tab-pane">
                          <img src="assets/fotos_vrin/mir_2183.jpg" alt="Institutos de Investigación">
                          <h4 style="text-align: center;">Dirección de Institutos de Investigación</h4>
                          <p>La Dirección de Institutos de Investigación coordina y supervisa las actividades de los diversos institutos de investigación de la universidad, fomentando la excelencia académica.</p>
                          <a href="/institutos" target="_blank">Ir a la página de la dirección <i class="fa fa-external-link"></i></a>
                        </div>
                        
                      <!-- Dirección de Producción de Bienes y Servicios -->
                        <div id="dpbs" class="tab-pane">
                          <img src="assets/fotos_vrin/mir_2203.jpg" alt="Producción de Bienes y Servicios">
                          <h4 style="text-align: center;">Dirección de Producción de Bienes y Servicios</h4>
                          <p>La Dirección de Producción de Bienes y Servicios se enfoca en la generación de productos y servicios de calidad, contribuyendo al desarrollo económico y social de la región.</p>
                          <a href="/produccion" target="_blank">Ir a la página de la dirección <i class="fa fa-external-link"></i></a>
                       </div>
                       <hr>
                   </div>
                   </div>
                </div>
            </div>
                  </section>
        		  	<section id="organigrama" class="content-section" style="display: none;">
        			  <div class="card">
        				
        				<div class="section-header" style="color: white; text-align: center; border: none;">
        				  <h2 class="title" style="margin: 0; font-size: 1.8rem; font-weight: bold; color: #1E3C91;">Organigrama de VRIN</h2>
        				</div>
                        <hr>
        				<div class="card-body text-center">
        				  <div class="contenedor">
        					<img src="assets/organigrama.png" class="imagen img-fluid" alt="Organigrama del VRIN" style="border-radius: 15px; border-width: 1px; border-style: solid; border-color: black; align-items: center;">
        				  </div>
        				</div>
        			  </div>
        			</section>
                </div>
            </div>
        </div>

        <script>
            document.addEventListener('DOMContentLoaded', () => {
                let currentIndex = 0;
                document.querySelector('.prev-button').addEventListener('click', () => {
                  navigate(-1);
                });

                document.querySelector('.next-button').addEventListener('click', () => {
                  navigate(1);
                });

                function navigate(direction) {
                  const items = document.querySelectorAll('.gallery-item');
                  const totalImages = items.length;

                  items[currentIndex].classList.remove('active');
                  currentIndex = (currentIndex + direction + totalImages) % totalImages;
                  items[currentIndex].classList.add('active');
                }

                // Inicializar la galería mostrando la primera imagen
                document.addEventListener('DOMContentLoaded', () => {
                  const items = document.querySelectorAll('.gallery-item');
                  if (items.length > 0) {
                    items[currentIndex].classList.add('active');
                  }
                });

                // AUTOPLAY
                let autoplayInterval = null;

                function startAutoplay(interval) {
                  stopAutoplay();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
                  autoplayInterval = setInterval(() => {
                    navigate(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
                  }, interval);
                }

                function stopAutoplay() {
                  clearInterval(autoplayInterval);
                }

                // Iniciar autoplay con un intervalo de 3 segundos.
                startAutoplay(3000);

                // Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
                document.querySelectorAll('.nav-button').forEach(button => {
                  button.addEventListener('click', stopAutoplay);
                });

                
                
                
                // Seleccionar todos los enlaces del índice
                const links = document.querySelectorAll('.list-group-item-action');
                // Seleccionar todas las secciones
                const sections = document.querySelectorAll('.content-section');

                // Añadir evento de clic a cada enlace
                links.forEach((link) => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();

                        // Quitar la clase "active" de todos los enlaces
                        links.forEach((l) => l.classList.remove('active'));
                        // Añadir la clase "active" al enlace clicado
                        link.classList.add('active');

                        // Ocultar todas las secciones
                        sections.forEach((section) => (section.style.display = 'none'));
                        // Mostrar la sección correspondiente
                        const targetId = link.id.replace('link-', ''); // Obtener el ID del enlace
                        document.getElementById(targetId).style.display = 'block';
                    });
                });
            });

            document.addEventListener('DOMContentLoaded', () => {
               const navButtons = document.querySelectorAll('.nav-btn'); // Seleccionar todos los botones
               const tabPanes = document.querySelectorAll('.tab-pane'); // Seleccionar todas las secciones

               navButtons.forEach((button) => {
                  button.addEventListener('click', () => {
                     // Remover la clase "active" de todos los botones
                     navButtons.forEach((btn) => btn.classList.remove('active'));

                     // Añadir la clase "active" al botón clicado
                     button.classList.add('active');

                     // Ocultar todas las secciones
                     tabPanes.forEach((pane) => pane.classList.remove('active'));

                     // Mostrar la sección correspondiente
                     const target = button.getAttribute('data-target');
                     document.querySelector(target).classList.add('active');
                  });
               });
            });

        </script>
      mode: htmlmixed
    type: template
    enabled: true
---
