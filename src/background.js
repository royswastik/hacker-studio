
const electron = require('electron');
const compiler= require('compilex');
const glob = require('glob');
const path = require('path');
var compileXoption = {stats : true};
compiler.init(compileXoption);

// Module to control application life.
const app = electron.app;
// Module to create native browser window.

const BrowserWindow = electron.BrowserWindow
const ipc = require('electron').ipcMain;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
  let filePath = `${__dirname}`;
    console.log('file://'+filePath+'/app.html');
  filePath2 = filePath.replace(new RegExp("\\".replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), "/");

  mainWindow.loadURL('file://'+filePath2+'/app.html');
  console.log('file://'+filePath2+'/app.html');

  // Open the DevTools.

  mainWindow.webContents.openDevTools();


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  })
}

/*
function loadMainFiles () {
  var files = glob.sync(path.join(__dirname, 'main-process/*.js'))
  files.forEach(function (file) {
    require(file)
  })
}
function initialize () {
	loadMainFiles();
}

initialize();*/


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
