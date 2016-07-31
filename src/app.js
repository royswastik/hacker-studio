// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
var os = require('os'); // native node.js module
var remote  = require('electron').remote; // native electron module
var jetpack = require('fs-jetpack'); // module loaded from npm
var greet  = require('./hello_world/hello_world') ; // code authored by you in this project
var env = require('./env');


console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log('The author of this app is:', appDir.read('package.json', 'json').author);

document.addEventListener('DOMContentLoaded', function () {

  //  document.getElementById('app-name').innerHTML = greet();
  //  document.getElementById('platform-info').innerHTML = os.platform();
  //  document.getElementById('env-name').innerHTML = env.name;

    // bind ace component to the editor div
   // initAce();
});



/**
 * Binds the ace component to the editor div
 */
var editor;
function initAce() {
      var aceDir = './assets/js/ace-build'
         require(aceDir+'/ace.js');
	     require(aceDir+'/ext-language_tools.js');

            ace.require("ace/ext/language_tools");
            editor = ace.edit("editor");
            editor.setOptions({
                enableBasicAutocompletion: true,
                 enableSnippets: true,
               enableLiveAutocompletion: false
             });
             var session = editor.getSession();
             session.setUseWrapMode(true);
              editor.setShowPrintMargin(false);
              editor.setBehavioursEnabled(true);
             editor.setOption("showPrintMargin", false);
            editor.setTheme("ace/theme/monokai");
             editor.getSession().setMode("ace/mode/java");
}