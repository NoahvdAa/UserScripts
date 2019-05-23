// ==UserScript==
// @name         XenForoBanDetector
// @namespace    https://github.com/NoahvdAa/UserScripts/XenForoBanDetector
// @version      1.0
// @description  Shows when a XenForo forum user is banned. (In threads only).
// @author       NoahvdAa
// @match        https://xenforo.com/community/threads/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.forumPath = '/community/';
    window.bannedUsers = [];
    window.usersToCheck = [];
    window.bannedTag = '<em class="rank wrapped" style="background: #FF4136;"><span class="before"></span><strong>BANNED</strong><span class="after"></span></em>';

    $(".userText").each(function(){
        window.usersToCheck.push(this);
    });

    function checkNextUser(){
        var user = window.usersToCheck.shift();
        var id = $(user).find('a').attr('href').split('.');
        id = id[id.length-1].replace('/','');
        if(window.bannedUsers.indexOf(id) != -1){
            $(user).html($(user).html()+window.bannedTag);
        }else{
            $.ajax(window.forumPath+"members/"+id+"/", {
                type: "GET",
                statusCode: {
                    404: function (response) {
                        console.log('This 404 is normal because the user is banned!');
                        $(user).html($(user).html()+window.bannedTag);
                        if(window.bannedUsers.indexOf(id) == -1) bannedUsers.push(id);
                    }
                }
            });
        }

        if(window.usersToCheck.length != 0) setTimeout(checkNextUser, 250);
    }

    setTimeout(checkNextUser, 500);
})();
