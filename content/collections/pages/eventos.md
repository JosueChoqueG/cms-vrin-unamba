---
id: 3a97b207-65ca-404e-beb8-4c582916489a
blueprint: page
title: Eventos
texto_bienvenida: Eventos
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1707699836
template: blog/index
titulo_pagina: 'Eventos - VRIN UNAMBA'
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter"  data-parallax="true" style="background-image: url('/assets/a_home_otros/eventos.webp');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto ">
                    <h1 class="title">Eventos</h1>
                </div>
            </div>
        </div>
      </div>
  mode: htmlmixed
block_types:
  -
    id: lkefs74w
    template:
      code: |-
        <div class="page-header header-filter  " data-parallax="true"  style="background-image: linear-gradient(195deg,#ff14b1,#550874,#ab26cf,#741a68,#c4b5c0,#420553);" ></div>
                    <div class="main main-raised">
                        <div class="profile-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8 ml-auto mr-auto">
                                        <h2 class="title">{{title}}</h2>
                                        <br>{{date}}
                                        <div class="card card-plain card-blog">
                                            <div class="card-header card-header-image">
                                                <img class="img img-raised" src="{{imagen_principal}}">
                                            </div>
                                            <div class="card-body">
                                                <h3 class="card-title">
                                                    {{direccion_o_vrin}}
                                                </h3>
                                                <h3 class="card-description p">
                                                    {{content}}
                                                </h3>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
      mode: htmlmixed
    type: template
    enabled: true
modal:
  code: null
  mode: htmlmixed
---
