const compiler= require('compilex');
var compileXoption = {stats : true};
compiler.init(compileXoption);
module.exports = {
    basePath: "",
    compileForTestCase: function (inputObj, callback) {
       
        let code = inputObj["code"];
        let lang  = inputObj["lang"];
        let inputRadio  = inputObj["inputRadio"];
        let input  = inputObj["input"];
        let testCase = inputObj["testCase"];
         console.log("Input"+input);
         console.log("inputRadio"+inputRadio);
         console.log("code"+code);
         console.log("lang"+lang);
        console.log("Callback function");
        console.log(callback);
        if((lang === "C") || (lang === "C++"))
        {        
            console.log("Compiling C, C++");
            if(inputRadio === "true")
            {    
            var envData = { OS : "windows" , cmd : "g++"};      
            compiler.compileCPPWithInput(envData , code ,input , function (data) {
                if(data.error)
                {
                var send_data = data
                console.log(send_data);
                inputObj["output"] = send_data;
                callback(inputObj);
                }     
                else
                {
                var send_data = data
                inputObj["output"] = send_data;
                callback(inputObj);
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
                        inputObj["output"] = send_data;
                        callback(inputObj);
                    }     
                    else
                    {
                        var send_data = data
                        inputObj["output"] = send_data;
                        callback(inputObj);
                    }
            
                });
            }
        }
        if(lang === "Java")
        {
            console.log("Compiling Java");
            if(inputRadio === "true")
            {
                var envData = { OS : "windows" };     
                //console.log(code);
                compiler.compileJavaWithInput( envData , code , function(data){
                    var send_data = data
                    inputObj["output"] = send_data;
                    callback(inputObj);
                });
            }
            else
            {
                var envData = { OS : "windows" };     
                console.log(code);
                compiler.compileJavaWithInput( envData , code , input ,  function(data){
                    var send_data = data
                    console.log(send_data);
                    inputObj["output"] = send_data;
                    callback(inputObj);
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
                    inputObj["output"] = send_data;
                    callback(inputObj);
                });            
            }
            else
            {
                var envData = { OS : "windows"};
                compiler.compilePython(envData , code , function(data){
                    var send_data = data
                    console.log(send_data);
                    inputObj["output"] = send_data;
                    callback(inputObj);
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
                    inputObj["output"] = send_data;
                    callback(inputObj);
                });            
            }
            else
            {
                var envData = { OS : "windows"};
                compiler.compileCS(envData , code , function(data){
                    var send_data = data
                    console.log(send_data);
                    inputObj["output"] = send_data;
                    callback(inputObj);
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
                    inputObj["output"] = send_data;
                    callback(inputObj);
                });            
            }
            else
            {
                var envData = { OS : "windows"};
                compiler.compileVB(envData , code , function(data){
                    var send_data = data
                    console.log(send_data);
                    inputObj["output"] = send_data;
                    callback(inputObj);
                });
            }

        }
    },
    compile: function (lang, code, inputRadio, input,callback) {
        console.log("Input"+input);
         console.log("inputRadio"+inputRadio);
         console.log("code"+code);
         console.log("lang"+lang);
        console.log("Callback function");
        console.log(callback);
        if((lang === "C") || (lang === "C++"))
        {        
            console.log("Compiling C, C++");
            if(inputRadio === "true")
            {    
            var envData = { OS : "windows" , cmd : "g++"};      
            compiler.compileCPPWithInput(envData , code ,input , function (data) {
                if(data.error)
                {
                var send_data = data
                console.log(send_data);
                callback(send_data);
                }     
                else
                {
                var send_data = data
                console.log(send_data);
                callback(send_data);
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
                        callback(send_data);
                    }     
                    else
                    {
                        var send_data = data
                        console.log(send_data);
                        callback(send_data);
                    }
            
                });
            }
        }
        if(lang === "Java")
        {
            console.log("Compiling Java");
            if(inputRadio === "true")
            {
                var envData = { OS : "windows" };     
                //console.log(code);
                compiler.compileJavaWithInput( envData , code , function(data){
                    var send_data = data
                    //console.log(send_data);
                    callback(send_data);
                });
            }
            else
            {
                var envData = { OS : "windows" };     
                console.log(code);
                compiler.compileJavaWithInput( envData , code , input ,  function(data){
                    var send_data = data
                    console.log(send_data);
                    callback(send_data);
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
                    callback(send_data);
                });            
            }
            else
            {
                var envData = { OS : "windows"};
                compiler.compilePython(envData , code , function(data){
                    var send_data = data
                    console.log(send_data);
                    callback(send_data);
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
                    callback(send_data);
                });            
            }
            else
            {
                var envData = { OS : "windows"};
                compiler.compileCS(envData , code , function(data){
                    var send_data = data
                    console.log(send_data);
                    callback(send_data);
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
                    callback(send_data);
                });            
            }
            else
            {
                var envData = { OS : "windows"};
                compiler.compileVB(envData , code , function(data){
                    var send_data = data
                    console.log(send_data);
                    callback(send_data);
                });
            }

        }
    }
}