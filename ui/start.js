const { spawn } = require('child_process');
const path = require('path');

// Start the backend
const backend = spawn('npm', ['start'], { 
  stdio: 'inherit',
  shell: true,
  cwd: path.join(__dirname, 'backend')
});

// Start the frontend
const frontend = spawn('npm', ['start'], { 
  stdio: 'inherit',
  shell: true,
  cwd: path.join(__dirname, 'frontend')
});

frontend.on('exit', (code, signal) => {
  console.log(`Electron process exited with code ${code} and signal ${signal}`);
  backend.kill();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Caught interrupt signal. Shutting down...');
  backend.kill();
  frontend.kill();
  process.exit(0);
});
