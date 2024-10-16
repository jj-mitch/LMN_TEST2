console.log('renderer.js loaded');

import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';
import { renderHome } from './pages/Home.js';
import { renderMaterials } from './pages/Materials.js';
import { renderProjects } from './pages/Projects.js';
import { renderSettings } from './pages/Settings.js';
import { initializeHomeInteractions } from './utils/homeInteractions.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
    renderHeader();
    renderSidebar();
    navigateTo('home');

    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.dataset.link);
        }
    });
});

function navigateTo(page) {
    console.log('Navigating to:', page);
    const content = document.getElementById('content');
    switch(page) {
        case 'home':
            content.innerHTML = renderHome();
            initializeHomeInteractions();
            break;
        case 'materials':
            content.innerHTML = renderMaterials();
            break;
        case 'projects':
            content.innerHTML = renderProjects();
            break;
        case 'settings':
            content.innerHTML = renderSettings();
            break;
        default:
            console.error('Page not found');
    }
}
