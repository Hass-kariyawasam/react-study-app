const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  // මෙතනින් තමයි ඔයාගේ React App එක ලෝඩ් කරන්නේ
  // වැදගත්: ඔයා අනිත් පැත්තෙන් 'npm run dev' එක රන් කරලා තියෙන්න ඕන
  win.loadURL('http://localhost:5173');
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