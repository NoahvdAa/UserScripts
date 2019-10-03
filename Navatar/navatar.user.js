// ==UserScript==
// @name         Navatar
// @namespace    https://github.com/NoahvdAa/UserScripts/tree/master/Navatar
// @version      1.0
// @description  Use your own image as your Netflix avatar.
// @author       NoahvdAa
// @match        https://www.netflix.com/browse*
// @grant        none
// ==/UserScript==

window.profile_name = 'Noah';
window.profile_newpicture = 'https://via.placeholder.com/750x750';

(function() {
    'use strict';

    setInterval(function(){
        Array.from(document.querySelectorAll('.profile-name')).filter((p)=>p.innerText.toLowerCase() === window.profile_name.toLowerCase())[0].parentElement.children[0].children[0].style.backgroundImage = 'url("'+window.profile_newpicture+'")';
    }, 500);
})();