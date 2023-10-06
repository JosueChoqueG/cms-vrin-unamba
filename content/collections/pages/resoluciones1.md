---
id: cd2268be-2153-4f27-9a2b-ae938b8cef96
blueprint: page
title: resoluciones
titulo_pagina: 'VRIN UNAMBA'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
block_types:
  -
    id: ln4sd7gj
    nombre_completo: Resoluciones
    cargo_direccion: Vrin
    titulo_documento: 'RESOLUCIÓN Nº 199-2023-CU-UNAMBA'
    documento: blog/resolucion-no-199-2023-cu-unamba.pdf
    type: director_direcciones_vrin
    enabled: true
    template: |-
      <!--pdf-->
              <div class="pdf-container">
                  <h4 class="pdf-title h4">{{titulo_documento}}
                  </h4>
                  <div class="pdf-wrapper">
                      <iframe
                          src="{{documento}}"
                          width="100%" height="960px"></iframe>
                  </div>
              </div>
          </div>
      </div>
template_imagen_fondo:
  code: |-
    <div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/blog/black.jpg');">
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
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1696604226
texto_bienvenida: 'VRIN UNAMBA'
---
