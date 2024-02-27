---
id: 154d77aa-1c4a-40dd-9cc3-b92c08c7af8d
blueprint: page
title: 'Fondo Editorials'
titulo_pagina: 'Fondo Editorial'
texto_bienvenida: 'Fondo Editorial'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter clear-filter purple-filter header-small" data-parallax="true" style="background-image: url('./assets/a_home_otros/dondo_editorial_pluma.jpg');">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto ">
             <h1>FONDO EDITORIAL</h1>
            </div>
          </div>
        </div>
      </div>
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1709060160
block_types:
  -
    id: lsi9492e
    template:
      code: |-
        <div class="section ">
                <div class="team">
                  <div class="team-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto text-center">
                                <h2 class="title">{{title}}</h2>
                            </div>
                        </div>
                        <div class="row"><!--/div-->
        				  {{collection:fondo_editorial_unamba}}
                            <div class="col-md-6">
                                <div class="card card-profile card-plain">
                                    <div class="row">
        							  <h4 class="title">{{title}}</h4>
                                        <div class="col-md-5">
                                            <div class="card-header card-header-image">
                                                <a href="#pablo">
                                                <img class="img" src="{{caratula_libro}}" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h4 class="card-title">Autor</h4>
                                                <h6 class="card-category text-muted">{{autor_libro}}</h6>
                                                <p class="card-description">
                                                    {{content}}
                                                </p>
                                            </div>
                                            <div class="card-footer">
                                                <a href="{{contacto}}" class="btn btn-just-icon btn-dribbble btn-round"><i class="fa fa-dribbble"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  <!--/div-->
        				  {{/collection:fondo_editorial_unamba}}
                        </div>
                      </div>
                  </div> 
                </div>
              </div>
      mode: htmlmixed
    type: template
    enabled: true
---
