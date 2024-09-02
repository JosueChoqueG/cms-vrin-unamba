---
id: 1e240fc8-59d5-4701-aeab-d14dd9afe51c
blueprint: page
title: Produccion
texto_bienvenida: 'Dirección de Producción de Bienes y Servicios'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1725289836
titulo_pagina: 'Dirección de Producción de Bienes y Servicios - VRIN UNAMBA'
block_types:
  -
    id: lkdgq6ld
    imagen_director: direcciones/produccion/ernesto.jpeg
    nombre_director: 'Dr. Alex Muñoz Cáceres'
    direccion_oficina: 'AULA 305, PABELLÓN DE AULAS GENERALES.'
    imagen_ci: direcciones/produccion/idiomas.png
    nombre_ci: 'C.P.C. Dina E. Trujillo Huaysara'
    direccion_oficina_ci: 'Aula 305, Pabellón Aulas Generales'
    horario_ci: '8:00 a.m. – 1:00 pm. y 2:00 pm. – 3:30 pm.'
    imagen_cii: direcciones/produccion/informatica.png
    nombre_cii: 'Ing. Aurelio Antezana Matensio'
    direccion_oficina_cii: 'Aula 305, Pabellón Aulas Generales'
    horario_cii: '8:00 a.m. – 1:00 pm. y 2:00 pm. – 3:30 pm.'
    imagen_ce: direcciones/produccion/experimental.png
    nombre_ce: 'Luis Gregorio Ibañez Trelles'
    direccion_oficina_ce: '2° Piso Biblioteca General'
    horario_ce: '8:00 a.m. – 1:00 pm. y 2:00 pm. – 3:30 pm.'
    template:
      code: |-
        <div class="section">
            <div class="row justify-content-center">
                <div class="col-md-5 ">
                    <div class="card-profile ">
                        <div class=" card-header-image mr-auto ml-auto "><br>
                            <img class="img rounded-circle" src="{{imagen_director}}" style="max-width:40%; height: 30%;">
                        </div>
                        <br>
                        <div class="card-body ">
                            <h4 class="card-title">{{nombre_director}} <br>
                                {{cargo_director}}
                            </h4>
                            <br>
                            <b>Correo: <small class="text-muted h6">bienesyservicios@unamba.edu.pe</small> <br>
                            Oficina: <small class="text-muted h6">{{direccion_oficina}}</small><br>
                            Horario: <small class="text-muted h6">8:00 a.m. – 1:00 pm. y 2:00 pm. – 3:30 pm.</small>
                            </b>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-profile card-plain">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="description">
                                        La Dirección de Producción de Bienes y Servicios es el órgano de línea dependiente del
                                        Vicerrectorado de Investigación; responsable de dirigir, coordinar y apoyar la política
                                        productiva de bienes y servicios que están relacionados con sus especialidades, áreas
                                        académicas o trabajos de investigación; así también es responsable de la gestión de los
                                        centros de producción y los centros experimentales.
                                    </h5>
                                    <h4 class="card-title">Funciones Dirección de Producción de Bienes y Servicios.</h4>
                                    <button type="button" class="btn btn-primary" data-toggle="modal"
                                        data-target="#exampleModalScrollable2">
                                    VER FUNCIONES
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- seccion jefes de centros-->
                <div class="cd-section " id="teams">
                    <div class="team-2 " id="team-2">
                        <div class="container">
                            <h2 class="text-center">JEFES DE LOS CENTROS</h2>
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <div class="card card-profile ">
                                        <div class=" card-header-image mr-auto ml-auto">
                                            <img class="img rounded-circle" src="{{imagen_ci}}">
                                        </div>
                                        <div class="card-body ">
                                            <h5 class="card-title ">{{nombre_ci}}<br>
                                                Jefe Centro de Idiomas
                                            </h5>
                                            <b>
                                                Correo: 
                                                <short class="text-muted ">centrodeidiomas@unamba.edu.pe</short>
                                                <br>
                                                Oficina: 
                                                <short class="text-muted ">{{direccion_oficina_ci}}</short>
                                                <br>
                                                Horario: 
                                                <short class="text-muted ">{{horario_ci}}</short>
                                            </b>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-profile ">
                                        <div class=" card-header-image mr-auto ml-auto">
                                            <img class="img rounded-circle" src="{{imagen_cii}}">
                                        </div>
                                        <div class="card-body ">
                                            <h5 class="card-title ">{{nombre_cii}}<br>
                                                Jefe Centro de Informática e Internet
                                            </h5>
                                            <b>
                                                Correo: 
                                                <short class="text-muted ">cii@unamba.edu.pe</short>
                                                <br>
                                                Oficina: 
                                                <short class="text-muted ">{{direccion_oficina_cii}}</short>
                                                <br>
                                                Horario: 
                                                <short class="text-muted ">{{horario_cii}}</short>
                                            </b>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-profile ">
                                        <div class=" card-header-image mr-auto ml-auto">
                                            <img class="img rounded-circle" src="{{imagen_ce}}">
                                        </div>
                                        <div class="card-body ">
                                            <h5 class="card-title ">{{nombre_ce}}<br>
                                                Jefe Centros Experimentales
                                            </h5>
                                            <b>
                                                Correo: 
                                                <short class="text-muted ">centrosexperimentales@unamba.edu.pe</short>
                                                <br>
                                                Oficina: 
                                                <short class="text-muted ">{{direccion_oficina_ce}}</short>
                                                <br>
                                                Horario: 
                                                <short class="text-muted ">{{horario_ce}}</short>
                                            </b>
                                            </h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <!---fin seccion jefes de centros-->
                <h2>Paginas de los Centros de Producción de Bienes y Servicios</h2>
                <!---inicio seccion pagina de centros-->
                <div class="team">
                    <div class="row">
                        <div class="feat-item mb-md50 col-lg-3">
                            <div class="text-center">
                                <figure>
                                    <a href="https://idiomas.unamba.edu.pe/" target="_blank">
                                    <img src="/assets/direcciones/produccion/Centro-idiomas-logo.png" alt="">
                                    </a>
                                </figure>
                                <h5 class="card-title">Centro de Idiomas</h5>
                            </div>
                        </div>
                        <div class="feat-item active mb-md50 col-lg-3">
                            <div class="text-center">
                                <figure>
                                    <a href="https://centrodeinformatica.unamba.edu.pe/" target="_blank">
                                    <img src="/assets/direcciones/produccion/Centro-de-informatica-e.png" alt="">
                                    </a>
                                </figure>
                                <h5 class="card-title">Centro de Informática e Internet</h5>
                            </div>
                        </div>
                        <div class="feat-item mb-md50 col-lg-3">
                            <div class="text-center">
                                <figure>
                                    <a href="/centro-experimental">
                                    <img src="/assets/direcciones/produccion/Centro-experimental-logo.png" alt="">
                                    </a>
                                </figure>
                                <h5 class="card-title">Centros experimentales</h5>
                            </div>
                        </div>
                        <div class="feat-item mb-md50 col-lg-3">
                            <div class="text-center">
                                <figure>
                                    <a href="https://cpu.unamba.edu.pe/" target="_blank">
                                    <img src="/assets/direcciones/produccion/cpu-logo.png" alt="">
                                    </a>
                                </figure>
                                <h5 class="card-title">Centro Pre Universitario</h5>
                            </div>
                        </div>
                    </div>
                    <!---fin seccion pagina de centros-->
                </div>
            </div>
        </div>
      mode: htmlmixed
    type: Director_jefes_produccion_bienes_y_servicios
    enabled: true
    cargo_director: 'Director de Producción de Bienes y Servicios'
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter " data-parallax="true" style="background-image: url('/assets/direcciones/produccion/produccion1.jpg');">
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
    {{# Inicio Modal Produccion Bienes y Servicios #}}
    <div class="modal fade" id="exampleModalScrollable2" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <b class="modal-title h3" id="exampleModalScrollableTitle">Funciones Dirección de Producción de Bienes y Servicios</b>
                </div>
                <div class="modal-body">
                    <div id="global_modal">
                        <div id="mensajess">
                            <p class="h4">b) Gestionar el desarrollo de los Centros Experimentales de la universidad vinculados con la actividad agropecuaria de la región.</p>
                            <p class="h4">c) Proponer y recomendar al Vicerrectorado de Investigación alianzas estratégicas con Instituciones públicas y privadas, nacionales y extranjeras, para la producción de bienes y servicios que generen recursos económicos.</p>
                            <p class="h4">d) Planificar, organizar y ejecutar acciones de asesoramiento y asistencia técnica para generar recursos.</p>
                            <p class="h4">e) Coordinar acciones conjuntas con los docentes, a fin de desarrollar programas de producción.</p>
                            <p class="h4">f) Proponer al Vicerrectorado de Investigación las políticas, reglamentos y/o normas de funcionamiento de la Dirección de Producción de Bienes y Servicios.</p>
                            <p class="h4">g) Promover la capacitación y especialización docentes y de estudiantes de la Facultad para dirigir las labores de asesoramiento y consultoría profesional.</p>
                            <p class="h4">h) Proponer proyectos de investigación orientados a la producción de bienes y servicios rentables, que puedan ejecutarse con criterios empresariales a nivel de la UNAMBA en coordinación con el Vicerrectorado de Investigación.</p>
                            <p class="h4">i) Proponer la creación de Centros de Producción de Bienes y Servicios.</p>
                            <p class="h4">j) Elaborar y presentar al Vicerrectorado de Investigación la información de la Dirección, parala Memoria Anual.</p>
                            <p class="h4">k) Otras funciones que le asigne el Vicerrectorado de Investigación en el ámbito de su competencia.</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    {{# Fin Modal Produccion Bienes y Servicios #}}
  mode: htmlmixed
---
