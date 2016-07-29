let jQuery = require("../assets/js/jquery.min.js");

module.exports = {
    loadPage : function (pageName,$elem, options) {
        $elem.load("./pages/"+pageName+".html");
        if(pageName == "problem"){
            if(!(options["problemId"]) || !(options["categoryId"])){
                console.log("Please provide both problemId and categoryId");
            }
            let problemId = options["problemId"];
            let categoryId = options["categoryId"];
            fsHelper.open();
            console.log(problemId);
            fsHelper.getProblemById(problemId, categoryId);
            fsHelper.close();
        }
    }
}