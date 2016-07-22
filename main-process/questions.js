const fs= require('fs');
const path=require('path');
const glob= require('glob');
const ipc = require('electron').ipcMain;
// This will work most of the time, but not always
const appDir = path.dirname(require.main.filename);
const queDir=path.join(appDir,'questions');
console.log(appDir);
console.log(path.join(appDir,'question/01'));
var questions={};

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

questions.loadAllQuestion= function(){
	// let folders=getDirectories(path.join(appDir,'questions'));
	let all_questions={};

	// folders.forEach(function(folder){
	// 	que_file=fs.readFileSync(path.join(queDir,folder,'problem.eq'));
	// });
	let all_prob_file=fs.readFileSync(path.join(queDir,'all_problems.json'));
	return all_prob_file.toString();
}

questions.loadQuestion= function(folder_id) {
	  console.log(path.join(appDir, 'questions',folder_id.toString(),'meta.eq'));
	  var file = fs.readFileSync(path.join(queDir,folder_id.toString(),'meta.eq'));
	  
	  	// let file_path=path.join(appDir, 'questions/'+folder_id.toString()+'/'+file));
	  	// file = file.replace("\\","/");  //This is for windows
	  	console.log(file);
	    var stream=fs.readFileSync(file);
	    var prob_data=stream.toString();
	    // try{
	    // 	var return_data=JSON.parse(prob_data);
	    // }
	    // catch(err){
	    // 	// DO nothing 
	    // 	var return_data='';
	    // }
	  
	console.log(prob_data)
	return prob_data;
}

ipc.on('loadQuestion',function(event,id){
	question=loadQuestion(id);
	event.sender.send('new-question',question);
});
questions.loadAllQuestion();

module.exports=questions