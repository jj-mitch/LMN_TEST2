import { renderHeader } from '../components/Header.js';

export function renderMaterials() {
    return `
        <div class="card">
            <h2>Materials Catalog</h2>
            <p>Browse and manage your materials inventory.</p>
        </div>
        <div class="card">
            <h2>Recent Materials</h2>
            <ul>
                <li>Marble Slab A</li>
                <li>Granite Type B</li>
                <li>Quartz Sample C</li>
            </ul>
        </div>
        <a href="#" class="btn">Add New Material</a>
    `;
}
