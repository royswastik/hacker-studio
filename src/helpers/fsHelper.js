/**
 * This module is used to connect to invisible BrowserWindow with html fsHelper.html which reads data from file system.
 * To start the background service , open a new Session/or exisiting session by fsHelper.open().
 * To stop the background service, call fsHelper.close()
 */

let win;
module.exports = {
    window: {
        "loading": false,
        "win": null,
        "open": false,
        "parentWindowId": null
    },
    open: function(){
        if(this.window.open == false){
            const windowID = BrowserWindow.getFocusedWindow().id;
            this.window.parentWindowId = windowID;
             // const invisPath = 'file://' + path.join(__dirname, './background/fsHelper.html');
           // let invisPath = 'file:///home/swastik/dev/hs/hacker_studio/src/background/fsHelper.html';
           let invisPath= 'file://' + path.join(__dirname, '../background/fsHelper.html');
        //    let invisPath = 'file:///D:/workspace/desktop/hacker-studio/src/background/fsHelper.html';
            this.window.win = new BrowserWindow({ width: 400, height: 400, show: false });
            this.window.win.loadURL(invisPath);
            this.window.loading = true;
            let winTemp = this.window;
            this.window.win.webContents.on('did-finish-load', function () {
                winTemp.loading = false;
                winTemp.open = true;
                const input = 100;
                console.log("Fs Helper Created");
            });
        }else{
            console.log("Window is already open");
        }
        
    },
    close: function(){
        if(this.window.open == true){
            const windowID = this.window.parentWindowId;
            this.window.win.webContents.send("close-fs-helper", windowID);
            this.window.open = false;
            this.window.win = null;
            console.log(windowID);
        }
        else{
            console.log("Window is already closed");
        }
        
    },
    getProblemsByCategoryId: function (categoryId) {
        const windowID = this.window.parentWindowId;
        if(this.window.open == true){
            this.window.win.webContents.send('get-problems-by-categoryId-fs', categoryId, windowID);
            return;
        }
        let winTemp = this.window.win;
        this.window.win.webContents.on('did-finish-load', function () {
            const input = 100;
            winTemp.webContents.send('get-problems-by-categoryId-fs', categoryId, windowID);
        });
    },
    getAllCategories: function () {
        const windowID = this.window.parentWindowId;
        if(this.window.open == true){
            const input = 100;
            this.window.win.webContents.send('get-categories-fs', input, windowID);
            return;
        }
        let winTemp = this.window.win;
        this.window.win.webContents.on('did-finish-load', function () {
            const input = 100;
            winTemp.webContents.send('get-categories-fs', input, windowID);
        });
    },
    getAllProblems : function (skip, limit) {
        const windowID = this.window.parentWindowId;
        if(this.window.open == true){
            this.window.win.webContents.send('get-all-problems-fs', input, windowID);
            return;
        }
        let winTemp = this.window.win;
        this.window.win.webContents.on('did-finish-load', function () {
            const input = 100;
            winTemp.webContents.send('get-all-problems-fs', input, windowID);
        });
    },
    getProblemById: function (problemId, categoryId) {
        const windowID = this.window.parentWindowId;
        if(this.window.open == true){
            this.window.win.webContents.send('get-problem-by-id-fs', problemId, categoryId, windowID);
            return;
        }
        let winTemp = this.window.win;
        this.window.win.webContents.on('did-finish-load', function () {
            const input = 100;
            winTemp.webContents.send('get-problem-by-id-fs', problemId, categoryId, windowID);
        });
    },
    getSolutionByName: function (problemId, categoryId, solutionName){
        const windowID = this.window.parentWindowId;
        if(this.window.open == true){
            this.window.win.webContents.send('get-solution-by-name-fs', problemId, categoryId,solutionName, windowID);
            return;
        }
        let winTemp = this.window.win;
        this.window.win.webContents.on('did-finish-load', function () {
            const input = 100;
            winTemp.webContents.send('get-solution-by-name-fs', problemId, categoryId, windowID);
        });
    },
    searchProblemsByName: function (text) {
    } 
    // ,
    // getContentFromFile: function(filePath){
    //     const windowID = this.window.parentWindowId;
    //     if(this.window.open == true){
    //         this.window.win.webContents.send('get-content-from-file-fs', filePath, windowID);
    //         return;
    //     }
    //     let winTemp = this.window.win;
    //     this.window.win.webContents.on('did-finish-load', function () {
    //         const input = 100;
    //         winTemp.webContents.send('get-content-from-file-fs', filePath, windowID);
    //     });
    // },
    // writeContentToFile: function(content, filePath){
    //     const windowID = this.window.parentWindowId;
    //     if(this.window.open == true){
    //         this.window.win.webContents.send('write-content-to-file-fs',content, filePath, windowID);
    //         return;
    //     }
    //     let winTemp = this.window.win;
    //     this.window.win.webContents.on('did-finish-load', function () {
    //         const input = 100;
    //         winTemp.webContents.send('write-content-to-file-fs',content, filePath, windowID);
    //     });
    // }
}