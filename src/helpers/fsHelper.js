module.exports = {
    getProblemsByCategoryId: function (categoryId) {
        const windowID = BrowserWindow.getFocusedWindow().id;
        const invisPath = 'file://' + path.join(__dirname, './background/fsHelper.html');
        let win = new BrowserWindow({ width: 400, height: 400, show: false });
        win.loadURL(invisPath);

        win.webContents.on('did-finish-load', function () {
            const input = 100;
            win.webContents.send('get-problem-by-categoryId-fs', categoryId, windowID);
        });
    },
    getAllCategories: function () {
        const windowID = BrowserWindow.getFocusedWindow().id;
        let invisPath = 'file:///D:/workspace/desktop/hacker-studio/src/background/fsHelper.html';
        console.log(invisPath);
        invisPath2 = invisPath.replace(new RegExp("\\".replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), "/");
        console.log(invisPath);
        let win = new BrowserWindow({ width: 400, height: 400, show: false });
        win.loadURL(invisPath2);
        console.log("getAllCategories");
        win.webContents.on('did-finish-load', function () {
            console.log("DID finish load");
            const input = 100;
            win.webContents.send('get-categories-fs', input, windowID);
        });
    },
    getAllProblems : function (skip, limit) {
        const windowID = BrowserWindow.getFocusedWindow().id;
        const invisPath = 'file://' + path.join(__dirname, './background/fsHelper.html');
        let win = new BrowserWindow({ width: 400, height: 400, show: false });
        win.loadURL(invisPath);

        win.webContents.on('did-finish-load', function () {
            const input = 100;
            win.webContents.send('get-all-problems-fs', input, windowID);
        });
    },
    getProblemById: function (id) {
        const windowID = BrowserWindow.getFocusedWindow().id;
        const invisPath = 'file://' + path.join(__dirname, './background/fsHelper.html');
        let win = new BrowserWindow({ width: 400, height: 400, show: false });
        win.loadURL(invisPath);

        win.webContents.on('did-finish-load', function () {
            const input = 100;
            win.webContents.send('get-problem-by-id-fs', problemId, windowID);
        });
    },
    searchProblemsByName: function (text) {
        
    }
}