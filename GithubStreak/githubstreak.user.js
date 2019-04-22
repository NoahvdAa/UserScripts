// ==UserScript==
// @name         GithubStreak
// @namespace    https://github.com/NoahvdAa/UserScripts/GithubStreak
// @version      1.0.3
// @description  Show you someones "Github Streak".
// @author       NoahvdAa
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Page is not a profile.
    if(window.location.pathname.split('/').length != 2 || document.querySelectorAll(".orghead").length != 0) return;
   
    setInterval(updateStreakCount,250);
})();

function updateStreakCount(){
    var cText = document.querySelector(".js-yearly-contributions").children[0].querySelector(".f4.text-normal.mb-2");

    if(cText.innerHTML.indexOf('last year') == -1 || cText.innerHTML.indexOf('🔥') != -1) return;

    var streak = 0;
    var elements = [];
    var stop = false;

    document.querySelectorAll("rect.day").forEach(e=>{
        elements.push(e);
    });

    elements.reverse().forEach(r=>{
        if(stop) return;
        if(r.attributes.fill.value == '#ebedf0') return stop = true;
        streak++;
    });


    cText.innerHTML += ' 🔥'+streak;
}
