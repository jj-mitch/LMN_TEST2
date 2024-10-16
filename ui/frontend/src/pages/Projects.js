import { renderHeader } from '../components/Header.js';

export function renderProjects() {
    return `
        <div class="card">
            <h2>Active Projects</h2>
            <ul>
                <li>Kitchen Renovation - Smith</li>
                <li>Bathroom Remodel - Johnson</li>
                <li>Office Flooring - TechCorp</li>
            </ul>
        </div>
        <div class="card">
            <h2>Project Analytics</h2>
            <p>Total Projects: 15</p>
            <p>Completed: 10</p>
            <p>In Progress: 5</p>
        </div>
        <a href="#" class="btn">Create New Project</a>
    `;
}
