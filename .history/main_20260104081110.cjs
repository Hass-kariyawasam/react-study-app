const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'public/vite.svg'), // ඔයාට icon එකක් තියෙනවා නම් මෙතනට path එක දෙන්න
    webPreferences: {
      nodeIntegration: true,
    }
  });

  // Software එක හැදුවට පස්සේ (Packaged) වැඩ කරන්නේ මෙහෙමයි
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  } else {
    // Development එකේදි (npm run electron) වැඩ කරන්නේ මෙහෙමයි
    win.loadURL('http://localhost:5173');
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});