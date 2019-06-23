// ==UserScript==
// @name         XenForoPresetMessages
// @namespace    https://github.com/NoahvdAa/UserScripts/XenForoPresetMessages
// @version      1.0.0
// @description  Reply with pre-set messages on XenForo forums.
// @author       NoahvdAa
// @match        https://xenforo.com/community/threads/*
// @grant        none
// ==/UserScript==

var XFPMOptions = {
    "Simple Example": "Example 1 :)",
    "Example BBCode": "[b]BBCode[/b] is supported.",
    "Link Example": "[URL='http://example.com']example link[/URL]"
};

(function() {
    'use strict';

    $(function(){
        var html = '<select onchange="setMessage(this.value);"><option value="_empty_">Custom Message</option>';
        Object.keys(XFPMOptions).forEach(option=>{
            html += '<option value="'+option+'">'+option+'</option>';
        });
        document.getElementsByClassName("draftUpdate")[0].parentElement.innerHTML += html+'</select>';
    });
})();

window.setMessage = function(option){
    var valueToSet = '';
    if(typeof(XFPMOptions[option]) == 'string') valueToSet = XFPMOptions[option];
    $(".redactor_btn_container_switchmode").children()[0].click();
    setTimeout(function(){$(".bbCodeEditorContainer>textarea").val(valueToSet);},500);
    setTimeout(function(){$(".bbCodeEditorContainer>div>a").click();},1500);

}