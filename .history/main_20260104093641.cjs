const { app, BrowserWindow } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater'); // 1. Updater එක import කළා

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'public/vite.svg'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // nodeIntegration true නිසා මෙය false කළ යුතුයි
    }
  });

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  } else {
    win.loadURL('http://localhost:5173');
  }

  // 2. App එක පෙන්වන්න ලෑස්ති වුණාම Update Check කරන්න
  win.once('ready-to-show', () => {
    win.show();
    // Development එකේදි update check කරන එක නවත්තන්න ඕන නම් පහත පේළිය comment කරන්න
    autoUpdater.checkForUpdatesAndNotify();
  });
};

// 3. Update එකක් Download වුණාම App එක restart වෙලා install වෙන්න කියනවා
autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});