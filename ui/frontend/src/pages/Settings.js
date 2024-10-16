import { renderHeader } from '../components/Header.js';

export function renderSettings() {
    return `
        <div class="card">
            <h2>Application Settings</h2>
            <form>
                <label for="theme">Theme:</label>
                <select id="theme" name="theme">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
                <br><br>
                <label for="notifications">Enable Notifications:</label>
                <input type="checkbox" id="notifications" name="notifications" checked>
                <br><br>
                <button type="submit" class="btn">Save Settings</button>
            </form>
        </div>
        <div class="card">
            <h2>Account Information</h2>
            <p>Email: user@example.com</p>
            <p>Last Login: 2023-10-15 14:30</p>
        </div>
    `;
}
