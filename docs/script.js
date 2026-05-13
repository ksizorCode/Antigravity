/* ==============================================
   SCRIPT PRINCIPAL — Dashboard IA Práctica
   ============================================== */

// --- Variables globales ---
let projects_data = [];       // Datos cargados desde datos.json
let current_view = 'cards';   // Vista activa: cards | lista | kanban | tabla | calendar
let filters = { search: '', cat: 'all', tech: 'all', ia: 'all' };

// ==============================================
// INICIALIZACIÓN — Carga de datos y arranque
// ==============================================

/**
 * Carga los datos del archivo datos.json y arranca la app
 */
async function load_data() {
    try {
        const response = await fetch('datos.json');
        projects_data = await response.json();
        init();
    } catch (error) {
        console.error('Error al cargar datos.json:', error);
    }
}

/**
 * Inicializa filtros, eventos y renderiza la vista
 */
function init() {
    populate_filters();
    setup_event_listeners();
    render();
}

// ==============================================
// FILTROS — Poblar los selects dinámicamente
// ==============================================

/**
 * Rellena los desplegables de categoría, tecnología e IA
 * con los valores únicos extraídos de los datos
 */
function populate_filters() {
    const cat_select = document.getElementById('cat-select');
    const tech_select = document.getElementById('tech-select');
    const ia_select = document.getElementById('ia-select');

    // Extraer valores únicos
    const cats = [...new Set(projects_data.map(p => p.categoria))];
    const techs = [...new Set(projects_data.flatMap(p => p.tecnologías))];
    const ias = [...new Set(projects_data.map(p => p.iA))];

    // Añadir opciones a cada select
    cats.forEach(c => cat_select.innerHTML += `<option value="${c}">${c}</option>`);
    techs.forEach(t => tech_select.innerHTML += `<option value="${t}">${t}</option>`);
    ias.forEach(ia => ia_select.innerHTML += `<option value="${ia}">${ia}</option>`);
}

// ==============================================
// EVENTOS — Listeners de interacción
// ==============================================

/**
 * Configura todos los event listeners de la interfaz:
 * búsqueda, filtros, cambio de vista, tema y modal
 */
function setup_event_listeners() {
    // Búsqueda en tiempo real
    document.getElementById('search-input').addEventListener('input', e => {
        filters.search = e.target.value;
        render();
    });

    // Filtros por categoría, tecnología e IA
    document.getElementById('cat-select').addEventListener('change', e => {
        filters.cat = e.target.value;
        render();
    });
    document.getElementById('tech-select').addEventListener('change', e => {
        filters.tech = e.target.value;
        render();
    });
    document.getElementById('ia-select').addEventListener('change', e => {
        filters.ia = e.target.value;
        render();
    });

    // Botones de cambio de vista
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.toggle-btn.active').classList.remove('active');
            btn.classList.add('active');
            current_view = btn.dataset.view;
            render();
        });
    });

    // Toggle de tema claro/oscuro
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const is_light = document.body.classList.contains('light-mode');
        document.getElementById('theme-toggle').textContent = is_light ? '☀️' : '🌙';
    });

    // Cerrar modal
    document.querySelector('.close-modal').onclick = () => {
        document.getElementById('project-modal').style.display = 'none';
    };
}

// ==============================================
// FILTRADO — Lógica de filtros combinados
// ==============================================

/**
 * Devuelve los proyectos que coinciden con todos los filtros activos
 * @returns {Array} Proyectos filtrados
 */
function get_filtered() {
    return projects_data.filter(p => {
        const s = filters.search.toLowerCase();
        const match_search = p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s);
        const match_cat = filters.cat === 'all' || p.categoria === filters.cat;
        const match_tech = filters.tech === 'all' || p.tecnologías.includes(filters.tech);
        const match_ia = filters.ia === 'all' || p.iA === filters.ia;
        return match_search && match_cat && match_tech && match_ia;
    });
}

// ==============================================
// MODAL — Detalle del proyecto
// ==============================================

/**
 * Muestra el modal con los detalles completos de un proyecto
 * @param {string} title - Título del proyecto a mostrar
 */
function show_modal(title) {
    const p = projects_data.find(x => x.title === title);
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <div class="project-header" style="margin-bottom: 20px;">
            <span style="font-size: 3rem;">${p.emoji}</span>
            <div>
                <h2>${p.title}</h2>
                <p style="color: var(--text-muted);">${p.subtitulo}</p>
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <h4 style="color: var(--primary-light); margin-bottom: 5px; font-size: 0.8rem; text-transform: uppercase;">Descripción Detallada</h4>
            <p style="line-height: 1.6;">${p.longdesk}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h4 style="color: var(--primary-light); margin-bottom: 5px; font-size: 0.8rem; text-transform: uppercase;">Inteligencia Artificial (${p.iA})</h4>
            <div class="prompt-box">${p.prompt}</div>
        </div>
        <div style="display:flex; gap: 10px; margin-top: 30px;">
            <a href="${p.url}" class="btn btn-primary" target="_blank">Abrir Proyecto</a>
            <a href="${p.doc}" class="btn btn-secondary" target="_blank">Repositorio</a>
        </div>
    `;
    document.getElementById('project-modal').style.display = 'flex';
}

// ==============================================
// RENDER — Generación dinámica de vistas
// ==============================================

/**
 * Renderiza la vista activa (cards, lista, kanban, tabla o calendario)
 * según los filtros aplicados
 */
function render() {
    const data = get_filtered();
    const container = document.getElementById('main-container');
    container.className = `dashboard-container view-${current_view}`;
    container.innerHTML = '';

    // --- Vista: Tarjetas o Lista ---
    if (current_view === 'cards' || current_view === 'lista') {
        const ul = document.createElement('ul');
        ul.className = 'project-list';
        ul.innerHTML = data.map(p => `
            <li class="project-item">
                <div class="project-info">
                    <div class="project-meta">
                        <span class="category-badge">${p.categoria}</span>
                        ${p.tecnologías.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                        <span class="tech-pill" style="border-color: var(--accent); color: var(--accent)">${p.iA}</span>
                    </div>
                    <div class="project-header">
                        <span>${p.emoji}</span>
                        <h2>${p.title}</h2>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 5px;">${p.description}</p>
                </div>
                <div class="actions">
                    <button class="btn btn-secondary" onclick="show_modal('${p.title}')">Saber Más</button>
                    <a href="${p.url}" class="btn btn-primary">Ver Proyecto</a>
                </div>
            </li>
        `).join('');
        container.appendChild(ul);
    }

    // --- Vista: Kanban ---
    else if (current_view === 'kanban') {
        const board = document.createElement('div');
        board.className = 'kanban-board';
        const groups = [...new Set(projects_data.map(p => p.categoria))];
        groups.forEach(cat => {
            const col = document.createElement('div');
            col.className = 'kanban-column';
            const items = data.filter(p => p.categoria === cat);
            col.innerHTML = `<h3>${cat}</h3>`;
            items.forEach(p => {
                col.innerHTML += `
                    <div class="project-item" style="margin-bottom: 15px; padding: 15px;">
                        <div class="project-header"><span>${p.emoji}</span> <h2>${p.title}</h2></div>
                        <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 5px;">${p.iA}</div>
                        <button class="btn btn-secondary" style="width: 100%; margin-top: 10px;" onclick="show_modal('${p.title}')">Detalles</button>
                    </div>
                `;
            });
            board.appendChild(col);
        });
        container.appendChild(board);
    }

    // --- Vista: Tabla ---
    else if (current_view === 'tabla') {
        const table_wrap = document.createElement('div');
        table_wrap.className = 'table-container';
        table_wrap.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Proyecto</th>
                        <th>Categoría</th>
                        <th>Tecnologías</th>
                        <th>IA Utilizada</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(p => `
                        <tr>
                            <td><strong>${p.emoji} ${p.title}</strong></td>
                            <td><span class="category-badge">${p.categoria}</span></td>
                            <td>${p.tecnologías.join(', ')}</td>
                            <td style="color: var(--accent)">${p.iA}</td>
                            <td style="font-size: 0.8rem;">${p.date}</td>
                            <td><button class="btn btn-secondary" onclick="show_modal('${p.title}')">Ver</button></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        container.appendChild(table_wrap);
    }

    // --- Vista: Calendario ---
    else if (current_view === 'calendar') {
        const cal = document.createElement('div');
        cal.className = 'calendar-view';
        const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        let html = `<div class="calendar-grid">`;

        // Cabeceras de día
        html += days.map(d => `<div class="calendar-day header-day">${d}</div>`).join('');

        // Offset: Abril 2026 empieza en Miércoles (índice 3)
        const offset = 3;
        for (let i = 0; i < offset; i++) {
            html += `<div class="calendar-day" style="opacity:0.2"></div>`;
        }

        // Días del mes (Abril = 30 días)
        for (let d = 1; d <= 30; d++) {
            const date_str = `2026-04-${d.toString().padStart(2, '0')}`;
            const events = data.filter(p => p.date === date_str);
            html += `
                <div class="calendar-day">
                    <strong>${d}</strong>
                    ${events.map(e => `<div class="calendar-event" onclick="show_modal('${e.title}')">${e.emoji} ${e.title}</div>`).join('')}
                </div>
            `;
        }

        html += `</div>`;
        cal.innerHTML = html;
        container.appendChild(cal);
    }
}

// ==============================================
// ARRANQUE — Cargar datos al abrir la página
// ==============================================
window.onload = load_data;
