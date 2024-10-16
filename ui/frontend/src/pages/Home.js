import { renderHeader } from '../components/Header.js';

export function renderHome() {
    return `
        <div class="card">
            <h2>Welcome to LMN_TEST AI</h2>
            <p>This is your central hub for AI-powered material and project management.</p>
        </div>
        <div class="card">
            <h2>Quick Stats</h2>
            <p>Materials: 150</p>
            <p>Active Projects: 5</p>
            <p>AI Suggestions: 10</p>
        </div>
        <div class="card">
            <h2>Upload Marble Image</h2>
            <div id="drop-zone" class="drop-zone">
                <p>Drag & Drop your marble image here or click to select</p>
                <input type="file" id="file-input" accept="image/*" style="display: none;">
            </div>
        </div>
        <div class="card">
            <h2>AI-Assisted Camera Capture</h2>
            <video id="camera-feed" style="display: none;"></video>
            <canvas id="camera-canvas" style="display: none;"></canvas>
            <div id="camera-controls">
                <button id="start-camera" class="btn">Start Camera</button>
                <button id="capture-photo" class="btn" style="display: none;">Capture Photo</button>
            </div>
            <div id="ai-feedback"></div>
        </div>
        <a href="#" class="btn" data-link="projects">View Projects</a>
    `;
}
