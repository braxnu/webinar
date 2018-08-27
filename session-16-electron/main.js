const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

const fs = require('fs')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false
  })

  win.loadFile('index.html')

  ipcMain.on('ready', event => {
    const content = fs.readFileSync(
      'package.json',
      'utf8'
    )

    event.sender.send('file', content)
  })
}

app.on('ready', createWindow)
