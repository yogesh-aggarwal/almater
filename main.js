// Script for loding a new electron window
const { app, BrowserWindow } = require("electron");

let win;

function loadWindow() {
  win = new BrowserWindow({
    width: 1080,
    height: 760,

    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.title = "Almater";
  win.setMenuBarVisibility(false);
  win.loadURL(`http://localhost:4200`);

  // Open the DevTools.
  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", loadWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    loadWindow();
  }
});
