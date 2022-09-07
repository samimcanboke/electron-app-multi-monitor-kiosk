const { app, BrowserWindow,screen } = require('electron')
const path = require('path')

const createWindow = async () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  await win.loadFile(path.join(__dirname, 'public/index.html'))
  return win
}

const createSecondWindow = async (externalDisplay) => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  await win.loadFile(path.join(__dirname, 'public/index2.html'))
  return win
}

app.whenReady().then(() => {
  createWindow().then(r => {
    let displays = screen.getAllDisplays()
    let externalDisplay = displays.find((display) => {
      return display.bounds.x !== 0 || display.bounds.y !== 0
    })
    createSecondWindow(externalDisplay).then((r) => {
        r.setBounds({
          x: externalDisplay.bounds.x + 100,
          y: externalDisplay.bounds.y + 100,
        })
        r.kiosk = true
    })
    r.kiosk = true
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

/*
let displays = screen.getAllDisplays()
console.log(displays)
let externalDisplay = displays.find((display) => {
  return display.bounds.x !== 0 || display.bounds.y !== 0
})

if (externalDisplay) {
  win = new BrowserWindow({
    x: externalDisplay.bounds.x + 50,
    y: externalDisplay.bounds.y + 50
  }).kiosk = true
  win.loadFile(path.join(__dirname, 'public/index2.html'))
}*/
