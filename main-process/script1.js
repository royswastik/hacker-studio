const ipc = require('electron').ipcMain;
const compiler= require('compilex')
var compileXoption = {stats : true};
compiler.init(compileXoption);


ipc.on('send-code',function(event,data){
  console.log('I am main');
  console.log(data);
  var code = data.code; 
  var input = data.input;
  var inputRadio = data.inputRadio;
  var lang = data.lang;
  if((lang === "C") || (lang === "C++"))
    {        
        if(inputRadio === "true")
        {    
          var envData = { OS : "windows" , cmd : "g++"};      
          compiler.compileCPPWithInput(envData , code ,input , function (data) {
            if(data.error)
            {
              var send_data = data
              console.log(send_data);
              event.sender.send('code-output',send_data);
            }     
            else
            {
              var send_data = data
              console.log(send_data);
              event.sender.send('code-output',send_data);
            }
          });
     }
     else
     {
      
      var envData = { OS : "windows" , cmd : "g++"};     
          compiler.compileCPP(envData , code , function (data) {
          if(data.error)
          {
            var send_data = data
            console.log(send_data);
            event.sender.send('code-output',send_data);
          }     
          else
          {
            var send_data = data
            console.log(send_data);
            event.sender.send('code-output',send_data);
          }
    
            });
     }
    }
    if(lang === "Java")
    {
        if(inputRadio === "true")
        {
            var envData = { OS : "windows" };     
            console.log(code);
            compiler.compileJavaWithInput( envData , code , function(data){
                var send_data = data
console.log(send_data);
event.sender.send('code-output',send_data);
            });
        }
        else
        {
            var envData = { OS : "windows" };     
            console.log(code);
            compiler.compileJavaWithInput( envData , code , input ,  function(data){
                var send_data = data
console.log(send_data);
event.sender.send('code-output',send_data);
            });

        }

    }
    if( lang === "Python")
    {   console.log('I am python')
        if(inputRadio === "true")
        {
            var envData = { OS : "windows"};
            compiler.compilePythonWithInput(envData , code , input , function(data){
                var send_data = data
console.log(send_data);
event.sender.send('code-output',send_data);
            });            
        }
        else
        {
            var envData = { OS : "windows"};
            compiler.compilePython(envData , code , function(data){
                var send_data = data
console.log(send_data);
event.sender.send('code-output',send_data);
            });
        }
    }
    if( lang === "CS")
    {
        if(inputRadio === "true")
        {
            var envData = { OS : "windows"};
            compiler.compileCSWithInput(envData , code , input , function(data){
                var send_data = data
console.log(send_data);
event.sender.send('code-output',send_data);
            });            
        }
        else
        {
            var envData = { OS : "windows"};
            compiler.compileCS(envData , code , function(data){
                var send_data = data
console.log(send_data);
event.sender.send('code-output',send_data);
            });
        }

    }
    if( lang === "VB")
    {
        if(inputRadio === "true")
        {
            var envData = { OS : "windows"};
            compiler.compileVBWithInput(envData , code , input , function(data){
                var send_data = data
                console.log(send_data);
                event.sender.send('code-output',send_data);;
            });            
        }
        else
        {
            var envData = { OS : "windows"};
            compiler.compileVB(envData , code , function(data){
                var send_data = data
                console.log(send_data);
                event.sender.send('code-output',send_data);;
            });
        }

    }

 
})