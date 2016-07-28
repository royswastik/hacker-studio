let jQuery = require("../assets/js/jquery.min.js");

module.exports = {
    loadPage : function (pageName,$elem) {
        $elem.load("./pages/"+pageName+".html")
    }
}