---
id: 92237a10-50fa-4751-b0aa-f50edaf4ae32
blueprint: page
title: 'Noticias VRIN'
titulo_pagina: 'Noticias VRIN'
texto_bienvenida: 'Explora las últimas noticias y actualizaciones.'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: noticia
parent: home
block_types:
  -
    id: m4x1hu6g
    template:
      code: |-
        # {{collection:noticias}}

        #   {{title}}

        # {{/collection:noticias}}

        <!-- Sección de noticias -->
        # <div class="container">
        # <div class="section">
        #     <!-- Colección de noticias con paginación -->
        #     {{ collections:noticias paginate="9" as="noticia" }}
        #     <div class="row">
        #     <!-- Noticias en diseño de 3 columnas -->
        #     {{ noticia }}
        #     <div class="col-md-4">
        #         <div class="card card-plain card-blog">
        #         <div class="card-header card-header-image" id="zoom">
        #             <a href="{{ url }}">
        #             <img class="img img-raised" src="{{ imagen_principal }}" alt="">
        #             </a>
        #         </div>
        #         <div class="card-body">
        #             <h6 class="card-category text-info">{{ direccion_o_vrin }}</h6>
        #             <h4 class="card-title">
        #             <a href="{{ url }}">{{ title }}</a>
        #             </h4>
        #             <p class="card-description">
        #             {{ content | truncate: 100 }}<a href="{{ url }}"> Leer más </a>
        #             </p>
        #         </div>
        #         </div>
        #     </div>
        #     {{ /noticia }}
        #     </div>

        #     <!-- Paginación -->
        #     {{ paginate }}
        #     <nav aria-label="Page navigation">
        #     <ul class="pagination justify-content-center">
        #         <!-- Botón para página anterior -->
        #         {{ if prev_page }}
        #         <li class="page-item">
        #         <a class="page-link" href="{{ prev_page }}" aria-label="Anterior">
        #             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
        #             <polyline points="15 18 9 12 15 6"></polyline>
        #             </svg>
        #         </a>
        #         </li>
        #         {{ /if }}

        #         <!-- Números de página -->
        #         {{ for page in pages }}
        #         <li class="page-item {{ if page.current }}active{{ /if }}">
        #         <a class="page-link" href="{{ page.url }}">{{ page.number }}</a>
        #         </li>
        #         {{ /for }}

        #         <!-- Botón para página siguiente -->
        #         {{ if next_page }}
        #         <li class="page-item">
        #         <a class="page-link" href="{{ next_page }}" aria-label="Siguiente">
        #             <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
        #             <polyline points="9 18 15 12 9 6"></polyline>
        #             </svg>
        #         </a>
        #         </li>
        #         {{ /if }}
        #     </ul>
        #     </nav>
        #     {{ /paginate }}
        #     {{ /collections:noticias }}
        # </div>
        # </div>
      mode: htmlmixed
    type: template
    enabled: true
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter"  data-parallax="true" style="background-image: url('/assets/a_home_otros/eventos.webp');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto ">
                    <h1 class="title">Noticias VRIN</h1>
                </div>
            </div>
        </div>
      </div>-->
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1737955310
---
