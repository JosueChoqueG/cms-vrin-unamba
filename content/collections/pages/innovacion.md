---
id: 27710e9b-8865-48a8-a23d-1f44e115a480
blueprint: page
title: Innovacion
texto_bienvenida: 'Innovación y Transferencia Tecnológica'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1740041397
titulo_pagina: 'Dirección de Innovación y Transferencia Tecnológica - VRIN UNAMBA'
block_types:
  -
    id: lkc5xwy6
    nombre_completo: 'Ing. Ebert Gomez Aiquipa'
    cargo_direccion: 'Director de Innovación y Transferencia Tecnológica'
    correo: TRANSFERENCIATECNOLOGICA@UNAMBA.EDU.PE
    direccion_oficina: '2° PISO DE LA BIBLIOTECA GENERAL.'
    horario: '8:00 A.M. – 1:00 PM. Y 2:00 PM. – 3:30 PM.'
    imagen: fotos_vrin/mir_2079.jpg
    type: director_direcciones_vrin
    enabled: true
    template: |-
      <style>
            .news-carousel {
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                position: relative;
            }

            .news-carousel .carousel-container {
                display: flex;
                gap: 20px;
                transition: transform 0.5s ease-in-out;
            }

            .news-carousel .news-item{
                width: 400px;
                height: auto;
                flex: 0 0 30%; /* Mostrar 3 noticias */
                text-align: center;
                position: relative;
                transform: scale(1);
                transition: transform 0.3s ease;
                margin-bottom: 100px; /* Espacio extra para evitar superposición */
                margin-right: 10px;
                margin-left: 10px;
                margin-top: 30px;
            }

            .news-carousel .news-item:hover{
                transform: scale(1.1);
                z-index: 1; /* Asegurar que el elemento ampliado esté encima */
            }

            .news-item img-act {
                max-width: 1000px;
                height: auto;
                flex: 0 0 30%; /* Mostrar 3 noticias */
                text-align: center;
                position: relative;
                transform: scale(1);
                transition: transform 0.3s ease;
                margin-bottom: 100px; /* Espacio extra para evitar superposición */
                margin-right: 10px;
                margin-left: 10px;
                margin-top: 30px;    
            }

            .news-item img-act {
                transform: scale(1.1);
                z-index: 1; /* Asegurar que el elemento ampliado esté encima */
            }

            .news-carousel img {
                width: 100%;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .news-carousel .news-content {
                margin-top: 10px;
            }

            .news-carousel .news-content h4 {
                font-size: 18px;
                font-weight: bold;
                color: #2c3e50;
            }

            .news-carousel .news-content a {
                display: inline-block;
                margin-top: 10px;
                padding: 8px 15px;
                background-color: #2980b9;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
            }

            .news-carousel .news-content a:hover {
                background-color: #1a5276;
            }

            .news-carousel .arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 10px;
                border-radius: 50%;
                cursor: pointer;
                z-index: 10;
            }

            .news-carousel .arrow.left {
                left: 10px;
            }

            .news-carousel .arrow.right {
                right: 10px;
            }

            .news-carousel .bottom-button {
                text-align: center;
                margin-top: 30px; /* Más espacio para separar el botón */
            }

            .news-carousel .bottom-button a {
                padding: 10px 20px;
                background-color: #2980b9;
                color: white;
                text-decoration: none;
                border-radius: 5px;
            }
            
            /*TITULO*/
            .section-header {
                text-align: center;
                margin-bottom: 30px;
            }

            .section-header h2 {
                font-size: 2.5rem;
                color: #000;
                margin-bottom: 10px;
                margin-top: 30px;
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
              /* General Styles for the Carousel */
            .custom-carousel {
                overflow: hidden;
                position: relative;
                padding: 10px;
                max-width: 1100px;
                margin: auto;
            }

            .carousel-slide {
            display: flex;
            max-width: 1100px;

            }
            .carousel-slide img {
                width: 100%;
                height: 600px;
                object-fit: cover;
                margin-left: 100px
            }

            /* Navigation Buttons */
            .carousel-button {
                position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            }

            .custom-carousel .carousel-button.left {
                left: 15px;
            }

            .custom-carousel .carousel-button.right {
                right: 15px;
            }

            .custom-carousel .carousel-button:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }

            /* Indicators */
            .custom-carousel .carousel-indicators {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateY(-50%);                
                transform: translateX(-50%);
                display: flex;
                gap: 10px;
            }

            .custom-carousel .carousel-indicators button {
                width: 12px;
                height: 12px;
                background-color: rgba(255, 255, 255, 0.5);
                border: none;
                border-radius: 50%;
                cursor: pointer;
            }

            .custom-carousel .carousel-indicators button.active {
                background-color: white;
            }
            .section-header h2::after {
                content: '';
                display: block;
                width: 60px;
                height: 3px;
                background-color: #b22222;
                margin: 10px auto 0;
            }

            .direccion-section {
            padding: 40px 20px;
            /*background-color: #f9f9f9;*/
            background-color: #fff;
            }

            .direccion-container {
            max-width: 1200px;
            margin-top: 20px;;
            }

            .direccion-title {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 40px;
            }

            .direccion-row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            }

            .direccion-image-wrapper {
            position: relative;
            flex: 1;
            max-width: 40%;
            text-align: center;
            }

            .direccion-image-background {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 80%;
            height: 100%;
            background-color: #e6e6e6;
            border-radius: 8px;
            z-index: 1;
            }

            .direccion-image {
            position: relative;
            z-index: 2;
            /*max-width: 100%;
            height: auto;*/
            width: auto;
            max-height: 500px;
            border-radius: 8px;
            object-fit: cover;
            }

            .direccion-content {
            flex: 1;
            max-width: 55%;
            }

            .direccion-subtitle {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
            }

            .direccion-description {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
            margin-bottom: 20px;
            }

            .direccion-contact {
            font-size: 14px;
            color: #555;
            margin-bottom: 30px;
            }

            .direccion-button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #6a1b9a;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            }

            .direccion-button:hover {
            background-color: #4a148c;
            color: white;
            }

            body, html {
            margin: 0; /* Elimina cualquier margen del cuerpo y del HTML */
            padding: 0; /* Elimina cualquier padding del cuerpo y del HTML */
            overflow-x: hidden; /* Evita que se pueda desplazar horizontalmente */
            }
           

            /* Estilos generales */
            .unidades-section {
            padding: 40px 20px;
            /*background-color: #e6e6e6;*/
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            margin: 0 auto;
            }

            .unidades-title {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 40px;
            }

            .unidades-carousel {
            display: flex;
            align-items: center;
            position: relative;
            max-width: 100%;
            overflow: hidden;
            }

            .unidades-container {
            display: flex;
            transition: transform 0.5s ease-in-out;
            gap: 20px;
            }

            .unidad-item {
            margin-left: 20px;
            display: flex;
            flex: 0 0 100%;
            justify-content: space-between;
            align-items: center;
            /*background-color: #e6e6e6;*/
            border-radius: 8px;
            padding: 20px;

            }

            .unidad-content {
            flex: 0 0 50%;
            padding-right: 20px;
            }

            .unidad-title {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
            }

            .unidad-description {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
            }

            .unidad-contact {
            font-size: 14px;
            color: #555;
            margin-bottom: 20px;
            }

            .unidad-button {
            padding: 10px 20px;
            font-size: 14px;
            color: #fff;
            background-color: #6a1b9a;
            text-decoration: none;
            border-radius: 5px;
            }

            .unidad-button:hover {
            background-color: #4a148c;
            }

            .unidad-image-wrapper {
            flex: 0 0 50%;
            text-align: center;
            }

            .unidad-image {
            max-width: 100%;
            height: 400px;
            border-radius: 8px;
            object-fit: cover;
            box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.15);
            }

            /* Botones de navegación */
            .unidades-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 10;
            }

            .unidades-arrow.left {
            left: 10px;
            }

            .unidades-arrow.right {
            right: 10px;
            }

            .unidades-arrow:hover {
            background-color: rgba(0, 0, 0, 0.8);
            }

      </style>

      <div style="font-size: 1.5rem; color: #000; margin-top: 40px; font-family: "Roboto", "Helvetica", "Arial", sans-serif; text-align: center;">
        <h2 style="font-weight: bold; text-align: center; font-family: "Roboto", "Helvetica", "Arial", sans-serif;">Dirección de Innovación y Transferencia Tecnológica</h2>
      </div>
      <hr>
        <div class="custom-carousel">
            <div class="carousel-slide" id="carouselTrack">
            <img src="assets/fotos_vrin/mir_2188.jpg" alt="Slide 1">
            <img src="assets/fotos_vrin/mir_2052.jpg" alt="Slide 2" style="margin-left:180px;">
            <img src="assets/fotos_vrin/mir_2220.jpg" alt="Slide 3" style="margin-left:160px;">
            </div>
        <button class="carousel-button left" onclick="moveSlide(-1)">❮</button>
        <button class="carousel-button right" onclick="moveSlide(1)">❯</button>

        </div>

        <div class="direccion-section">
            <div class="direccion-container">
                
                <div class="direccion-row">
                <!-- Imagen del director -->
                <div class="direccion-image-wrapper">
                    <div class="direccion-image-background"></div>
                    <img src="{{imagen}}" alt="Director de Innovación" class="direccion-image">
                </div>
                <!-- Información textual -->
                <div class="direccion-content">
                    <h3 class="direccion-subtitle">{{cargo_direccion}}</h3>
                    <p class="direccion-description" style="font-size: 20px;">
                    La Dirección de Innovación y Transferencia Tecnológica es el órgano de línea responsable de la gestión, evaluación, seguimiento y monitoreo de las investigaciones, innovaciones y transferencias tecnológicas, teniendo en cuenta las líneas de investigación establecidas por la universidad.
                    </p>
                    <p class="direccion-contact" style="font-size: 16px;">
                    <b>Director:</b> {{ nombre_completo }} <br>
                    <b>Correo:</b> {{correo}}<br>
                    <b>Oficina:</b> {{direccion_oficina}}<br>
                    <b>Horario:</b> {{horario}}
                    </p>
                    <a href="#funciones" class="direccion-button" data-toggle="modal" data-target="#exampleModalScrollable1">Ver funciones</a>
                </div>
                </div>
            </div>
            </div>

            <h2 style="font-weight: bold; text-align: center; font-family: "Roboto", "Helvetica", "Arial", sans-serif;; font-size: 1.8rem;">Conoce nuestras Unidades</h2>
            <div class="unidades-section">
                
                <div class="unidades-carousel">
                    <button class="unidades-arrow left" onclick="moveUnidades(-1)">❮</button>
                        <div class="unidades-container">
                        <!-- Unidad 1 -->
                        <div class="unidad-item">
                            <div class="unidad-content">
                            <h3 class="unidad-title" style="margin-left: 20px; font-size: 24px;">Unidad de Repositorio Institucional</h3>
                            <p class="unidad-description" style="margin-left: 20px; font-size: 20px;">
                                Nos enfocamos en impulsar la gestión y preservación de los recursos académicos y científicos producidos en la universidad, garantizando el acceso abierto y la visibilidad global.
                            </p>
                            <p class="unidad-contact" style="margin-left: 20px; font-size: 16px;">
                                <b>Nombre:</b> Ing. Gleidy Sadith Segundo Gonzales <br>
                                <b>Correo:</b> repositorio@unamba.edu.pe<br>
                                <b>Oficina:</b> Biblioteca General, 2° Piso
                            </p>
                            
                            </div>
                            <div class="unidad-image-wrapper">
                            <img src="/assets/fotos_vrin/mir_2098.jpg" alt="Jefe Unidad" class="unidad-image">
                            </div>
                        </div>
                        <!-- Unidad 2 -->
                        <div class="unidad-item">
                            <div class="unidad-content">
                            <h3 class="unidad-title" style="font-size: 24px;">Unidad de Propiedad Intelectual</h3>
                            <p class="unidad-description" style="font-size: 20px;">
                                Nos enfocamos en promover el registro de patentes y protección de propiedad intelectual de los investigadores; gestionar la protección intelectual y registro de patentes que se originen como resultado de las investigaciones.
                            </p>
                            <p class="unidad-contact" style="font-size: 16px;">
                                <b>Nombre:</b> Ing. Rommel Sotomayor Felix <br>
                                <b>Correo:</b> patentes@unamba.edu.pe<br>
                                <b>Oficina:</b> Biblioteca General, 2° Piso
                            </p>
                            
                            </div>
                            <div class="unidad-image-wrapper">
                            <img src="/assets/fotos_vrin/mir_2091.jpg" alt="Jefe Unidad" class="unidad-image">
                            </div>
                        </div>
                        </div>
                        <button class="unidades-arrow right" onclick="moveUnidades(1)">❯</button>

                    
                    <!--<button class="unidades-arrow left" onclick="moveUnidades(-1)">❮</button>
                    <div class="unidades-container">

                    <div class="unidad-item">
                        <div class="unidad-content">
                        <h3 class="unidad-title" style="max-width: 70%; margin-left: 60px;">Unidad de Repositorio Institucional</h3>
                        <p class="unidad-description" style="max-width: 70%; margin-left: 60px;">
                            Nos enfocamos en impulsar la gestión y preservación de los recursos académicos y científicos producidos en la universidad, garantizando el acceso abierto y la visibilidad global.
                        </p>
                        
                        <p class="unidad-contact" style="max-width: 70%; margin-left: 60px;">
                            <b>Correo:</b> repositorio@unamba.edu.pe<br>
                            <b>Oficina:</b> Biblioteca General, 2° Piso
                        </p>
                        
                        </div>
                        <div class="unidad-image-wrapper"  style="box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);">
                        <img src="/assets/fotos_vrin/mir_2100.jpg" alt="Jefe Unidad" class="unidad-image" style="max-width: 60%; height: 300px;">
                        </div>
                    </div>-->
                    <!-- Más unidades aquí -->
                    <!--<div class="unidad-item">
                        <div class="unidad-content">
                        <h3 class="unidad-title" style="max-width: 70%; margin-left: 60px;">Unidad de Propiedad Intelectual</h3>
                        <p class="unidad-description" style="max-width: 70%; margin-left: 60px;">
                            Nos enfocamos en promover el registro de patentes y protección de propiedad intelectual de los investigadores; gestionar la protección intelectual y registro de patentes que se originen como resultado de las investigaciones.
                        </p>
                        <p class="unidad-contact" style="max-width: 70%; margin-left: 60px;">
                            <b>Correo:</b> patentes@unamba.edu.pe<br>
                            <b>Oficina:</b> Biblioteca General, 2° Piso
                        </p>
                        
                        </div>
                        <div class="unidad-image-wrapper"  style="">
                        <img src="/assets/fotos_vrin/mir_2090.jpg" alt="Jefe Unidad" class="unidad-image">
                        </div>
                    </div>
                    </div>
                    <button class="unidades-arrow right" onclick="moveUnidades(1)">❯</button>-->
                </div>
                </div>

            <!--servicios-->
            <div class="container text-center">
                <br>
                <h2 style="font-weight: bold; text-align: center; font-family: "Roboto", "Helvetica", "Arial", sans-serif;; font-size: 1.8rem;">Nuestros Servicios</h2>
                <!-- <div class="section ">
                    <div class="team">
                        <div class="row">
                            <div class="feat-item mb-md50 col-lg-4">
                                <div class="feat-item mb-md50 col-lg-4">
                                    <div class="text-center">
                                        <figure class="wp-block-image size-full">
                                            <a href="https://www.unamba.edu.pe/transparencia/transparencia-universitaria/cuerpo-docente/lista-de-docentes-investigadores.html" target="_blank" rel="noreferrer noopener">
                                            <img src="/assets/direcciones/innovacion/investigadores.png" alt="">
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div class="feat-item active mb-md50 col-lg-4">
                                <div class="text-center">
                                    <figure class="wp-block-image size-full">
                                        <a href="/reglamentos"target="_blank" rel="noreferrer noopener">
                                        <img src="/assets/direcciones/innovacion/normatividad.png" alt="">
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div class="feat-item mb-md50 col-lg-4">
                                <div class="text-center">
                                    <figure class="wp-block-image size-full is-resized">
                                        <a href="https://www.unamba.edu.pe/transparencia/transparencia-universitaria/proyectos-de-investigacion.html" target="_blank" rel="noreferrer noopener">
                                        <img src="/assets/direcciones/innovacion/project-investigacion.png" alt="">
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>-->

                <!--  herramientas de Busqueda unamba -->
                              <div class="row">
                                  <div class="col-md-4 ml-auto mr-auto text-center">
                                      <div class="card card-profile">
                                          <br>
                                          <div class=" mr-auto ml-auto ">
                                              <img class="img" src="./assets/informacion-docente/nube.png">
                                          </div>
                                          <div class="card-body ">
                                              <h2 style="font-weight: bold; text-align: center; font-family: "Roboto", "Helvetica", "Arial", sans-serif; font-size: 1.8rem;">
                                              Turnitin</h4>
                                              <p class="Tim-note">
                                                  Turnitin es una herramienta antiplagio. Permite al profesorado revisar los trabajos de sus alumnos y detectar citas incorrectas o posibilidades de plagio, al comparar el trabajo con una amplia base de datos de recursos. 

                                              </p>
                                              <a class="unidad-button" href="https://www.turnitin.com/" target="_blank" style="background-color: #6a1b9a; border-radius: 5px;">Ver Página</a>
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
                                              <h2 style="font-weight: bold; text-align: center; font-family: "Roboto", "Helvetica", "Arial", sans-serif;; font-size: 1.8rem;">
                                              My Loft</h4>
                                              <p class="Tim-note">
                                                  MyLOFT es tu biblioteca personal. Es un lugar para acceder, organizar y compartir contenido electrónico y recursos académicos suscritos a la biblioteca de sus intereses profesionales y personales.
                                              </p>
                                              <a class="unidad-button" href="https://app.myloft.xyz/user/login" target="_blank" style="background-color: #6a1b9a; border-radius: 5px;">Ver Página</a>
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
                                              <h2 style="font-weight: bold; text-align: center; font-family: "Roboto", "Helvetica", "Arial", sans-serif;; font-size: 1.8rem;">
                                              Fondo Editorial</h4>
                                              <p class="Tim-note">
                                                  Fondo Editorial se encarga de la difusión de sus publicaciones (comunicación, distribución y participación en ferias del libro) a través de la Dirección de Innovación y Transferencia Tecnológica.
                                              </p>
                                              <a class="unidad-button" href="/fondo-editorials" target="_blank" style="background-color: #6a1b9a; border-radius: 5px;">Ver Página</a>
                                          </div>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>



                <!-- REPOSITORIO-->
                <!--<div class="container text-center">
                    <br>
                    <h2 class="title">Revisa nuestros Repositorios</h2>
                    <div class="section ">
                        <div class="team">
                            <div class="row">
                                <div class="feat-item mb-md50 col-lg-4">
                                    <div class="feat-item mb-md50 col-lg-4">
                                        <div class="text-center">
                                            <figure class="wp-block-image size-full">
                                                <a href="https://repositorio.unamba.edu.pe/" target="_blank" rel="noreferrer noopener">
                                                <img src="/assets/direcciones/innovacion/repositorio-insti.png" alt="repositorio">
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="feat-item active mb-md50 col-lg-4">
                                    <div class="text-center">
                                        <figure class="wp-block-image size-full">
                                            <a href="https://revistas.unamba.edu.pe/" target="_blank" rel="noreferrer noopener">
                                            <img src="/assets/direcciones/innovacion/revista-cientifica.png" alt="revista">
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                                <div class="feat-item mb-md50 col-lg-4">
                                    <div class="text-center">
                                        <figure class="wp-block-image size-full">
                                            <a href="https://sites.google.com/unamba.edu.pe/vrin/fondo-editorial" target="_blank" rel="noreferrer noopener">
                                            <img src="/assets/direcciones/innovacion/fondo-editorial.png" alt="fondo-editorial">
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <hr>
                <div>
                    <h2 style="font-weight: bold; text-align: center; font-family: "Roboto", "Helvetica", "Arial", sans-serif;; font-size: 1.8rem;">Actividades de la Dirección</h2>
                    <p style="text-align: center;">Conoce todas las actividades realizadas por la Dirección de Innovación y Transferencia Tecnológica de la UNAMBA.</p>
                </div>  
              <div class="news-carousel" id="news-carousel">
                <button class="arrow left" onclick="moveCarousel(-1)">❮</button>
                <div class="carousel-container">
                    {{ collection:noticias }}
                    {{ if direccion_o_vrin == 'Dirección de Innovación y Transferencia Tecnológica' }}
                    <div class="news-item">
                        <img src="{{ imagen_principal | url }}" alt="{{ title }} class="img-act">
                        <div class="news-content">
                            <h4>{{ title }}</h4>
                            <a href="{{ link }}" target="_blank">Ir a la publicación</a>
                        </div>
                    </div>
                    {{ /if }}
                    {{ /collection:noticias }}
                </div>
                <button class="arrow right" onclick="moveCarousel(1)">❯</button>
            </div>

        </div>
       </div>

        <script>
        /*let currentUnidadIndex = 0;

        function moveUnidades(direction) {
        const unidadesContainer = document.querySelector('.unidades-container');
        const unidadItems = document.querySelectorAll('.unidad-item');
        const totalUnidades = unidadItems.length;

        currentUnidadIndex = (currentUnidadIndex + direction + totalUnidades) % totalUnidades;

        unidadesContainer.style.transform = `translateX(-${currentUnidadIndex * 100}%)`;
        }
        */
        
        let currentUnidadIndex = 0;

        // Función para mover el carrusel
        function moveUnidades(direction) {
        const unidadesContainer = document.querySelector('.unidades-container');
        const unidadItems = document.querySelectorAll('.unidad-item');
        const totalUnidades = unidadItems.length;

        // Calcula el nuevo índice
        currentUnidadIndex = (currentUnidadIndex + direction + totalUnidades) % totalUnidades;

        // Cambia la posición del contenedor
        unidadesContainer.style.transform = `translateX(-${currentUnidadIndex * 100}%)`;
        }

        // Desplazamiento automático cada 5 segundos
        setInterval(() => {
        moveUnidades(1);
        }, 5000);
        

        const carouselSlide = document.querySelector('.carousel-slide');
        const slides = document.querySelectorAll('.carousel-slide img');
        const indicators = document.querySelectorAll('.carousel-indicators button');

        let currentIndex = 0;

        function updateIndicators() {
            indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function moveSlide(direction) {
            currentIndex = (currentIndex + direction + slides.length) % slides.length;
            carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateIndicators();
        }

        function goToSlide(index) {
            currentIndex = index;
            carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateIndicators();
        }

        // Optional: Auto-slide every 5 seconds
        /*setInterval(() => {
            moveSlide(1);
        }, 5000);*/
        
        /*const carousel = document.querySelector('.carousel-container');
        let currentIndex = 0;
        const itemsToShow = 3;
        const totalItems = document.querySelectorAll('.news-item').length;

        function moveCarousel(direction) {
            const itemWidth = document.querySelector('.news-item').offsetWidth + 20; // Width + gap
            const maxIndex = Math.ceil(totalItems / itemsToShow) - 1;

            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = maxIndex;
            } else if (currentIndex > maxIndex) {
                currentIndex = 0;
            }

            carousel.style.transform = `translateX(-${currentIndex * itemWidth * itemsToShow}px)`;
        }
        // Slide Functionality
            let currentIndex = 0;

            function moveSlide(direction) {
                const slides = document.querySelectorAll('.image-carousel img');
                const totalSlides = slides.length;

                currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

                slides.forEach((slide, index) => {
                slide.style.transform = `translateX(-${currentIndex * 100}%)`;
                });
            }*/
        </script>
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/direcciones/innovacion/innovacion.jpg');">
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
modal:
  code: |-
    {{# Inicio Modal Innovacion y Transferencia Tecnológica #}}
    <div class="modal fade" id="exampleModalScrollable1" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <b class="modal-title h3" id="exampleModalScrollableTitle">Funciones de la Dirección de Innovación y Transferencia Tecnológica</b>
                </div>
                <div class="modal-body">
                    <div id="global_modal">
                        <div id="mensajess">
                            <p class="h4">a) Diseñar y proponer al Vicerrectorado de Investigación las normas, reglamentos y directivas para el cumplimiento de los objetivos del Sistema Nacional de Ciencia, Tecnología e Innovación.</p>
                            <p class="h4">b) Promover la producción intelectual y cultural generada en el proceso de innovación y transferencia tecnológica.</p>
                            <p class="h4">c) Generar capacidades para la innovación y transferencia tecnológica; orientadas a la atención de las necesidades y oportunidades del sector productivo de la región y del país.</p>
                            <p class="h4">d) Prestar a todo el personal de la Universidad, servicios relacionados con la propiedad intelectual.</p>
                            <p class="h4">e) Gestionar y administrar el software de similitud de la UNAMBA.</p>
                            <p class="h4">f) Gestionar y administrar el banco del acceso a las revistas y libros de investigación.</p>
                            <p class="h4">g) Monitorear al repositorio Institucional.</p>
                            <p class="h4">h) Sistematizar la información transferible generada por las unidades de investigación y promover su difusión.</p>
                            <p class="h4">i) Otras funciones que le asigne el Vicerrectorado de Investigación.</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    {{# Fin Modal Innovacion y Transferencia Tecnológica #}}
  mode: htmlmixed
---
