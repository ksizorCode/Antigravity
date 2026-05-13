import client from './supabase.js';

const clientsList = document.getElementById('clients-list');
const searchInput = document.getElementById('search-input');
const addButton = document.getElementById('add-button');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const addClientForm = document.getElementById('add-client-form');

let allClients = [];

// Fetch clients from Supabase
async function fetchClients() {
    clientsList.innerHTML = '<div class="loader"></div>';
    
    const { data, error } = await client
        .from('lista_clientes')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching clients:', error);
        clientsList.innerHTML = '<p style="color: #ef4444; text-align: center;">Error al cargar los clientes</p>';
        return;
    }

    allClients = data;
    renderClients(allClients);
}

// Render client cards
function renderClients(clients) {
    if (clients.length === 0) {
        clientsList.innerHTML = '<p style="color: var(--text-muted); text-align: center; margin-top: 2rem;">No se encontraron clientes</p>';
        return;
    }

    clientsList.innerHTML = '';
    clients.forEach(client => {
        const card = document.createElement('div');
        card.className = 'client-card';
        card.innerHTML = `
            <div class="client-header">
                <div>
                    <h3 class="client-name">${client.nombre}</h3>
                    <span class="client-company">${client.empresa || 'Empresa no especificada'}</span>
                </div>
            </div>
            <div class="client-info">
                <div class="info-item">📧 ${client.email || 'N/A'}</div>
                <div class="info-item">📱 ${client.telefono || 'N/A'}</div>
                ${client.notas ? `<div class="info-item" style="margin-top: 0.5rem; font-style: italic;">"${client.notas}"</div>` : ''}
            </div>
        `;
        clientsList.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allClients.filter(c => 
        c.nombre.toLowerCase().includes(term) || 
        (c.empresa && c.empresa.toLowerCase().includes(term))
    );
    renderClients(filtered);
});

// Modal handlers
addButton.addEventListener('click', () => modal.classList.add('active'));
closeModal.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// Form submission
addClientForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.innerText = 'Guardando...';
    submitBtn.disabled = true;

    const newClient = {
        nombre: document.getElementById('nombre').value,
        empresa: document.getElementById('empresa').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        notas: document.getElementById('notas').value
    };

    const { error } = await client
        .from('lista_clientes')
        .insert([newClient]);

    if (error) {
        alert('Error al añadir cliente: ' + error.message);
    } else {
        addClientForm.reset();
        modal.classList.remove('active');
        fetchClients();
    }
    
    submitBtn.innerText = 'Guardar Cliente';
    submitBtn.disabled = false;
});

// Initial load
document.addEventListener('DOMContentLoaded', fetchClients);
