// ==UserScript==
// @name         YouTubePercentages
// @namespace    https://github.com/NoahvdAa/UserScripts/tree/master/YouTubePercentages
// @version      1.0.3
// @description  Shows like/dislike percentages.
// @author       NoahvdAa
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    calculatePercentages();

    setInterval(function(){
        if(!window.location.pathname.startsWith('/watch')) return;
        calculatePercentages();
    },500);
})();

function calculatePercentages(){
    var likePercentage = '%';
    var dislikePercentage = '%';

    var buttons = document.querySelectorAll("yt-formatted-string.style-scope.ytd-toggle-button-renderer");

    if(buttons.length < 2) return setTimeout(calculatePercentages,500);

    var toolTipCount = document.querySelector("#like-bar").parentElement.parentElement.children[1].children[0].innerHTML.split("/");

    var likes = parseInt(toolTipCount[0].replace(/[^0-9]/g,"")) || 0;
    var dislikes = parseInt(toolTipCount[1].replace(/[^0-9]/g,"")) || 0;

    if(likes == 0 && dislikes== 0){
        likePercentage = '50%';
        dislikePercentage = '50%';
    }else{
        var total = likes+dislikes;
        var onelike = 100/total;

        likePercentage = (likes*onelike).toFixed(2)+'%';
        dislikePercentage = (dislikes*onelike).toFixed(2)+'%';

        if(isNaN(likes)) likePercentage = '0%';
        if(isNaN(dislikes)) dislikePercentage = '0%';
    }

    buttons[0].innerHTML = likePercentage;
    buttons[1].innerHTML = dislikePercentage;
}
