// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.



// const ipc = require('electron').ipcRenderer;
// // window.location.href='http://google.com';
// const formSerialize= require('form-serialize');
// const sendCodeBtn = document.getElementById('submit-code-btn');
// console.log('hello');

// sendCodeBtn.addEventListener('click',function () {
// 	// window.location.href="http://google.com";
// 	console.log('hello');
//     var form= document.getElementById('my-code-form');
//     var serialData=formSerialize(form,{'hash':true});
//     ipc.send('send-code',serialData);
//     console.log(serialData);
// });

// ipc.on('code-output',function (event,data) {
//     const msg=data;
//     var outputElem=document.getElementById('input');
//     console.log('I am rendered');
//     console.log(data);
//     outputElem.value=data.output;
// })

