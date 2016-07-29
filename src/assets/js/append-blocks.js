function getQuestionItem(name, id){
    var item = '\
    	<div href="#" class="list-group-item">\
                        <div class="panel panel-default"  style="margin-bottom:0">\
                            <div class="panel-body">\
                                <div class="row">\
                                    <div class="col-xs-9">\
                                        <h4 data-problem-id="'+id+'" class="list-group-item-heading solve-btn" style="color:#2ec866;cursor:pointer;">'+name+'</h4>\
                                    </div>\
                                    <div class="col-xs-3">\
                                        <h4 class="list-group-item-heading" style="text-align:right; padding-right:20px;">A B C</h4>\
                                    </div>\
                                    \
                                </div>\
                                <div class="row" style="padding-top: 15px;">\
                                    <div class="col-xs-9" style="padding-top: 10px;">\
                                        <p>Success Rate: 98.10% Max Score: 1 Difficulty: Easy</p>\
                                    </div>\
                                    <div class="col-xs-3">\
                                        <button data-problem-id="'+id+'" class="solve-btn btn btn-default pull-right" style="margin-right:20px;color: #6e6e6e;font-size: 12pt;font-weight: 400;" type="submit">Solve</button>\
                                    </div>\
                                    \
                                </div>\
                                \
                                \
                            </div>\
                        </div>\
                    </div>\
    ';
    return item;
}