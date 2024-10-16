export function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = `
        <ul>
            <li><a href="#" data-link="home"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="#" data-link="materials"><i class="fas fa-layer-group"></i> Materials</a></li>
            <li><a href="#" data-link="projects"><i class="fas fa-project-diagram"></i> Projects</a></li>
            <li><a href="#" data-link="settings"><i class="fas fa-cog"></i> Settings</a></li>
        </ul>
    `;
}

