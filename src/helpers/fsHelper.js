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
            let invisPath = 'file:///D:/workspace/desktop/hacker-studio/src/background/fsHelper.html';
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
    searchProblemsByName: function (text) {
        
    }
}