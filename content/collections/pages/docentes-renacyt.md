---
id: ebd9a7db-b27e-4ec7-9daf-021719964f20
blueprint: page
title: 'Docentes RENACYT'
texto_bienvenida: 'Docentes RENACYT'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1692722354
titulo_pagina: 'Docentes RENACYT - VRIN UNAMBA'
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/a_home_otros/bg4.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand">
                        <h1 class="title">{{title}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  mode: htmlmixed
block_types:
  -
    id: lkf8qzde
    template:
      code: |-
        <div class="section justify-content-center">
            <div class="section col-md-12 ml-auto mr-auto">
                <div class="row ">
        			{{collection:doc_renacyt}}
                    <div class="col-md-3"><br>
                        <a href="{{link}}" target="_blank">
                        <img class="img-raised rounded img-fluid" alt="Raised Image"
                            src="{{imagen_docente}}">
                        </a> 
                    </div>
        			{{/collection:doc_renacyt}}
                    <div class="col-md-1"></div>
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
