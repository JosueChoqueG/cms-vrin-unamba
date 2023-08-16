---
id: 639f2a72-3578-468c-9c9a-81b28496af66
blueprint: page
title: 'Grupos de Investigación'
titulo_pagina: 'Grupos de Investigación'
texto_bienvenida: 'Grupos de Investigación'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter clear-filter purple-filter header-small" data-parallax="true" style="background-image: url('assets/a_home_otros/font-grupos.jpeg');">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto ">
             <h1 class="title">{{texto_bienvenida}}</h1>
            </div>
          </div>
        </div>
      </div>
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1692202920
block_types:
  -
    id: ll8y8w9d
    template:
      code: |-
        <style type="text/css">
             
            h4{font-size: 14px;text-align: left;color: rgb(138, 43, 226);line-height: 3px;}
            p{ color: black; font-family: Verdana; text-align: left;font-size: 10px;line-height: 6px;}
            h5{font-size: 12px;text-align: left;line-height: 5px;color: #706e6e;font-style: normal;}
            
          </style>
        <div class="section text-centter">
            <div class="team">
        	
                <div class="row">
        		{{collection:grupos_inv}}
                    <div class="feat-item mb-md50 col-lg-4">
                        <div class="text-center">
                            <figure align="left">
                                <img src="/assets/a_home_otros/grupoicono.png {{img_grupos}}">
        					  <!--img src="{{img_grupos}}" imagen cp assets-->
                            </figure>
                            <h4>{{title}}</h4>
                            <p>{{nombre_grupo}}</p>
                            <h5><strong>Jefe:</strong>{{jefe_grupo}}</h5>
                        </div>
                    </div>
                   {{/collection:grupos_inv}}
                </div>
        	
            </div>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
---
