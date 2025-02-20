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
    <!--<div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/a_home_otros/bg4.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand">
                        <h1 class="title">{{title}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
  mode: htmlmixed
block_types:
  -
    id: lkf8qzde
    template:
      code: |-
        <style>
                /* Contenedor del checkbox */
                .form-check {
                    background: #ffffff; 
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    border: 1px solid #1E3C91;
                    padding: 2px;
                    border-radius: 4px;
                    transition: background-color 0.3s ease, border-color 0.3s ease;
                }

                .form-check-input {
                    cursor: pointer;
                    width: auto;
                    height: auto;
                    border: 5px solid #1E3C91;
                    border-radius: 4px;
                    background-color: #ffffff;
                }

                .form-check-label {
                    font-size: 16px;
                    color: #1E3C91; 
                    cursor: pointer;
                    transition: color 0.3s ease; 
                }

                .form-check:hover {
                    background-color: #1E3C91;
                    border-color: #ffffff;
                }

                .form-check-label:hover {
                    color: #ffffff;
                }

                .form-check.active {
                    background-color: #1E3C91 !important; 
                    border-color: #1E3C91; 
                }

                .form-check.active .form-check-label {
                    color: #ffffff !important; 
                }

                .input-group {
                    display: flex;
                    width: 400px;
                    height: 45px;
                    align-items: center;
                    border: 2px solid #1E3C91; 
                    border-radius: 25px; 
                    overflow: hidden;
                    background-color: #ffffff;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease; 
                }

                /* Campo de entrada del buscador */
                .input-group input.form-control {
                    border: none; 
                    box-shadow: none; 
                    font-size: 18px; 
                    padding: 15px 20px; 
                    color: #1E3C91; 
                    flex-grow: 1; 
                    border-radius: 0; 
                }

                .input-group input.form-control:focus {
                    outline: none; 
                    box-shadow: 0 0 10px rgba(30, 60, 145, 0.5);
                    border-color: #1E3C91; 
                }

                .input-group:hover {
                    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
                }

                .title-container {
                    display: inline-block;
                    padding: 10px 20px;
                    border: 2px solid #2980b9;
                    border-radius: 10px; 
                    background: #f0f8ff; 
                    color: #2c3e50; 
                    font-weight: bold;
                    font-size: 1.25rem;
                    text-align: center;
                    margin: 0 auto 25px auto; 
                }

                .pagination-simple {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }

                .pagination-simple .arrow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border: 1px solid #ccc;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }

                .pagination-simple .arrow:hover {
                    background-color: #1E3C91;
                    color: #ffffff;
                }

                .pagination-simple .current-page {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    background-color: #1E3C91; 
                    color: #ffffff;
                    font-weight: bold;
                    border-radius: 50%;
                    font-size: 16px;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }

                .pagination-simple .disabled {
                    pointer-events: none;
                    opacity: 0.5;
                }

        </style>



        <div class="row">
            <div class="col-md-12 text-center">
                <h1 class="title-container">En este espacio encontrarás a los docentes investigadores reconocidos por su aporte al desarrollo académico y científico. Conoce a quienes, desde su especialidad, contribuyen al progreso de nuestra región y del país.</h1>
            </div>
        </div>
        <div class="section justify-content-center">
            <div class="container">
                <div class="row">
                    <!-- Filtros (Carreras) -->
                    <div class="col-md-3">
                        <h5 class="font-weight-bold text-primary mb-3"  style="color: #183074;">
                            <i class="fa fa-filter"  style="color: #183074;"></i> 
                            <span style="color: #1E3C91;">Filtros</span>
                        </h5>
                        <div class="border p-3 rounded shadow-sm">
                            <h6 class="font-weight-bold text-muted">Carreras UNAMBA</h6>
                            <ul class="list-unstyled" id="filter-list">
                                <!-- Las opciones de filtro se generarán dinámicamente -->
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-9"> 
                        <div class="row mb-4">
                            <div class="col-md-6 d-flex align-items-center">
                                <p id="pagination-info" style="font-size: 14px; color: #183074; margin: 0;">
                                    <!-- El texto de la paginación se actualizará dinámicamente -->
                                </p>
                            </div>

                            <div class="col-md-6 d-flex justify-content-end">
                                <div class="input-group shadow-sm">
                                    <input 
                                        type="text" 
                                        id="search-docentes" 
                                        class="form-control rounded-start-blue" 
                                        style="padding: 10px; font-size: 16px;"
                                        placeholder="Buscar docente por nombre, correo o carrera" 
                                        onkeyup="filterDocentes()"
                                        >
                                </div>
                            </div>
                        </div>
                    
                        <div class="row" id="docentes-list">
                            {{collection:doc_renacyt}}
                            <div class="col-md-6 mb-4 docente-item" data-carrera="{{carrera:label}}">
                                <div class="d-flex align-items-start border p-3 rounded shadow-sm">
                                    <!-- Imagen del docente -->
                                    <img class="img-fluid rounded mr-3" alt="Imagen del docente" src="{{imagen_docente}}" style="width: 120px; height: 150px; object-fit: cover;">
                                    
                                    <!-- Información del docente -->
                                    <div>
                                        <!-- Nombre del docente -->
                                        <h5 class="mb-1" style="color: #1E3C91; font-weight: bold;">{{nombre}}</h5>
                                        
                                        <!-- Facultad o carrera -->
                                        <p class="mb-1" style="color: #317ABD;">{{carrera:label}}</p>
                                        
                                        <!-- Correo -->
                                        <p class="mb-1">
                                            <i class="fa fa-envelope" style="color: #042354;"></i>
                                            <a href="mailto:{{gmail}}" style="color: #183074; text-decoration: none; text: dark;">{{gmail}}</a>
                                        </p>
                                        
                                        <!-- Enlace al perfil -->
                                        <a href="{{link}}" style="color: #0A78BD; text: primary; text-decoration: none;  font-weight: bold;" target="_blank">
                                            Ver Ficha CTI Vitae <i class="fa fa-external-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {{/collection:doc_renacyt}}
                        </div>

                        <div class="row mt-4">
                            <div class="col-md-12 d-flex justify-content-start align-items-center">
                                <p id="pagination-info-bottom" style="font-size: 14px; color: #183074; margin: 0;">
                                    <!-- El texto de la paginación se actualizará dinámicamente -->
                                </p>
                            </div>
                            <div id="pagination-controls" class="pagination-simple col-md-12 justify-content-end align-items-center" style="color: #1E3C91">
                                <!-- Los controles de paginación se generarán dinámicamente -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div> 
        

        <script>
                document.addEventListener('DOMContentLoaded', () => {
                    const docentes = [...document.querySelectorAll('.docente-item')]; // Todos los docentes
                    const itemsPerPage = 12; // Número de docentes por página
                    let currentPage = 1; // Página actual

                    function renderPagination() {
                        const totalItems = docentes.length;
                        const totalPages = Math.ceil(totalItems / itemsPerPage);

                        // Actualizar texto de información
                        const paginationInfo = `Página ${currentPage} de ${totalPages} / ${totalItems} docentes en total`;
                        document.getElementById('pagination-info').innerText = paginationInfo;
                        document.getElementById('pagination-info-bottom').innerText = paginationInfo;


                        // Generar controles de paginación
                        const paginationControls = document.getElementById('pagination-controls');
                        paginationControls.innerHTML = '';

                        // Flecha "Anterior"
                        const prevArrow = document.createElement('div');
                        prevArrow.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>`;
                        prevArrow.classList.add('arrow');
                        if (currentPage === 1) {
                            prevArrow.classList.add('disabled');
                        }
                        prevArrow.addEventListener('click', () => {
                            if (currentPage > 1) {
                                currentPage--;
                                renderPage();
                            }
                        });
                        paginationControls.appendChild(prevArrow);

                        // Número de página actual
                        const currentPageIndicator = document.createElement('div');
                        currentPageIndicator.textContent = currentPage;
                        currentPageIndicator.classList.add('current-page');
                        paginationControls.appendChild(currentPageIndicator);

                        // Flecha "Siguiente"
                        const nextArrow = document.createElement('div');
                        nextArrow.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>`;
                        nextArrow.classList.add('arrow');
                        if (currentPage === totalPages) {
                            nextArrow.classList.add('disabled');
                        }
                        nextArrow.addEventListener('click', () => {
                            if (currentPage < totalPages) {
                                currentPage++;
                                renderPage();
                            }
                        });
                        paginationControls.appendChild(nextArrow);
                    }

                    function renderPage() {
                        const start = (currentPage - 1) * itemsPerPage;
                        const end = start + itemsPerPage;

                        // Mostrar solo los docentes de la página actual
                        docentes.forEach((docente, index) => {
                            if (index >= start && index < end) {
                                docente.style.display = '';
                            } else {
                                docente.style.display = 'none';
                            }
                        });

                        // Actualizar controles de paginación
                        renderPagination();
                    }

                    // Inicializar la paginación
                    renderPage();
                });

            document.addEventListener('DOMContentLoaded', () => {
                const docentes = document.querySelectorAll('.docente-item');
                const filterList = document.getElementById('filter-list');
                const carreras = new Set();

                // Recopilar todas las carreras únicas
                docentes.forEach(docente => {
                    const carrera = docente.getAttribute('data-carrera');
                    if (carrera) carreras.add(carrera.trim());
                });

                // Crear elementos de filtro
                carreras.forEach(carrera => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <div class="form-check">
                            <input class="form-check-input filter-checkbox" type="checkbox" value="${carrera}" id="filter-${carrera}">
                            <label class="form-check-label" for="filter-${carrera}">${carrera}</label>
                        </div>
                    `;
                    filterList.appendChild(li);
                });

                // Agregar evento para manejar el cambio de estado del checkbox
                const checkboxes = document.querySelectorAll('.filter-checkbox');
                checkboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', (e) => {
                        const formCheck = e.target.closest('.form-check'); // Contenedor del checkbox
                        if (checkbox.checked) {
                            formCheck.classList.add('active'); // Agregar clase activa
                        } else {
                            formCheck.classList.remove('active'); // Eliminar clase activa
                        }
                        filterByCarrera(); // Llamar a la función de filtrado
                    });
                });
            });

            // Filtrar docentes por carrera
            function filterByCarrera() {
                const selectedCarreras = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value);
                const docentes = document.querySelectorAll('.docente-item');

                docentes.forEach(docente => {
                    const carrera = docente.getAttribute('data-carrera');
                    if (selectedCarreras.length === 0 || selectedCarreras.includes(carrera)) {
                        docente.style.display = '';
                    } else {
                        docente.style.display = 'none';
                    }
                });
            }

            // Filtrar docentes por búsqueda de texto
            function filterDocentes() {
                const input = document.getElementById('search-docentes');
                const filter = input.value.toLowerCase();
                const items = document.querySelectorAll('.docente-item');

                items.forEach(item => {
                    const text = item.innerText.toLowerCase();
                    if (text.includes(filter)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        </script>
      mode: htmlmixed
    type: template
    enabled: true
modal:
  code: null
  mode: htmlmixed
---
