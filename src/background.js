const electron = require('electron');
const compiler = require('./helpers/compiler');
const glob = require('glob');
const path = require('path');


// Module to control application life.
const app = electron.app;
// Module to create native browser window.

const BrowserWindow = electron.BrowserWindow
const ipc = require('electron').ipcMain;



let splashWindow;

function createWindow(){


             // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // and load the index.html of the app.
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
    let filePath = `${__dirname}`;
    console.log('file://' + filePath + '/app.html');
    filePath2 = filePath.replace(new RegExp("\\".replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), "/");

    mainWindow.loadURL('file://' + filePath2 + '/app.html');
    console.log('file://' + filePath2 + '/app.html');

    // Open the DevTools.

    mainWindow.webContents.openDevTools();


    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    })
}


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function openSplash() {
     let winPath = 'file://' + path.join(__dirname, 'splash.html');
            let configWin = new BrowserWindow({
                width: 612,
                height: 267,
                show: true,
                frame: false,
                resizable:false
            });
            configWin.loadURL(winPath);
            configWin.webContents.on('did-finish-load', function() {
                setTimeout(function(){
                  createWindow();
                    configWin.close();
                    
                },5000);
            });
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
app.on('ready', openSplash);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
})

ipc.on('send-code', function(event, data) {
    console.log(data);
    var code = data.code;
    var lang = data.lang;
    var input = data.input;
    var inputRadio = data.inputRadio;
    compiler.compile(lang, code, inputRadio, input, function(data) {
        event.sender.send('recieve-code-output', {
            code_output: data
        });
    });

});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.