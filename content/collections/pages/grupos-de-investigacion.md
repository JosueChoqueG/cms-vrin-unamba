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
updated_at: 1692976578
block_types:
  -
    id: ll8y8w9d
    template:
      code: |-
        <!DOCTYPE html>
        <html lang="es">
        <head>
        	<link rel="stylesheet" href="estilos.css">
        </head>
        <div class="section justify-content-center">
            <div class="section col-md-12 ml-auto mr-auto">
                <div class="row ">
        			{{collection:grupos_inv}}
        		  <div class="col-md-3"><br>
              		<div class="card">
        				<figure>
        						<!--img src="/assets/a_home_otros/grupoicono.png"-->
        <img src="./assets/grupos-investigacion/grupo2.jpeg">
        				</figure>
        				<div class="contenido-card">
        				  <h4><b>{{nombre_grupo}}</b></h4>
        						<p><strong><b>Coordinador: </strong>{{jefe_grupo}}</b></p>
        				  	<p><strong><b>Integrantes:</strong></b></p>
        				  <a href="#">{{integrantes}}</a>
        				  </div>
        			</div>
        		   </div>
        		
        			{{/collection:grupos_inv}}
                 <div class="col-md-1"></div>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
---
