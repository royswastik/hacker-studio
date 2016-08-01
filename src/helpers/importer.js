module.exports = {
    /**
     * File paths is an array of file paths
     */
    importFromFiles: function(filePaths, windowID){
        console.log(filePaths);
        console.log(BrowserWindow);
     //   const windowID = BrowserWindow.getFocusedWindow().id;
        // const invisPath = 'file://' + path.join(__dirname, './background/fsHelper.html');
        // let invisPath = 'file:///home/swastik/dev/hs/hacker_studio/src/background/fsHelper.html';
    //    let invisPath = 'file:///D:/workspace/desktop/hacker-studio/src/background/problemImporter.html';
        let invisPath= 'file://' + path.join(__dirname, '../background/problemImporter.html');
        let win = new BrowserWindow({ width: 400, height: 400, show: true });
        win.loadURL(invisPath);
        win.webContents.on('did-finish-load', function () {
            win.webContents.send('import-problems', filePaths, windowID);
            console.log("Importing Problems");
        });
    }
}