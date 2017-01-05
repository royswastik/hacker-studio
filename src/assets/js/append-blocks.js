function getQuestionItem(name, id) {
    let description = "If you were following a documentation link, you can sign in and create the page. Otherwise, please file a bug. Thanks!";
    var item = '\
    	<div class="problem-item">\
                        <div class="panel panel-default"  style="margin-bottom:0;border-top: none;">\
                            <div class="panel-body">\
                                <div class="row">\
                                    <div class="col-xs-9">\
                                        <h4 data-problem-id="' + id + '" class="list-group-item-heading solve-btn" style="color:#00A79D;cursor:pointer;    font-size: 14pt;">' + name + '</h4>\
                                        <p style="color: #7d7d7d;font-size: 9pt;">'+description+'</p>\
                                    </div>\
                                    <div class="col-xs-3" style="text-align:right; padding-right:40px;">\
                                        <p style="font-size: 8pt;font-weight: bold;margin-bottom: 2px;">Level - Hard</p>\
                                        <button data-problem-id="' + id + '" class="attempt-btn solve-btn">Attempt</button>\
                                    </div>\
                                    \
                                </div>\
                                \
                            </div>\
                        </div>\
                    </div>\
    ';
    return item;
}