// ==UserScript==
// @name         Bangs4Google
// @namespace    https://github.com/NoahvdAa/UserScripts/Bangs4Google
// @version      1.0
// @description  Adds DuckDuckGo !bangs to google!
// @author       NoahvdAa
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.validBangs = {
        "github": "https://github.com/search?q=%args%",
        "twitter": "https://twitter.com/search?q=",
        "youtube": "https://www.youtube.com/results?search_query=%args%"
    };

    window.bangAliases = {
        "gh": "github",
        "yt": "youtube"
    }

    if(window.location.pathname != '/search') return;

    var domain = window.location.hostname.toLowerCase().split('.');
    if(domain.length != 3 || domain[0] != 'www' || domain[1] != 'google') return;

    var queryValues = window.location.search.slice(1).replace(/\+/g, '%20').split('&');
    var queriesByKey = {};
    queryValues.forEach(q=>{
        var objects = decodeURI(q).split('=');
        queriesByKey[objects[0]] = decodeURI(objects[1]);
    });

    if(typeof(queriesByKey.q) == 'undefined') return;
    if(!queriesByKey.q.startsWith('!')) return;

    var bangArguments = queriesByKey.q.split(' ');
    if(bangArguments.length == 1) return;
    var bang = bangArguments.shift().toLowerCase().slice(1);

    if(typeof(window.validBangs[bang]) == 'undefined'){
        if(typeof(window.bangAliases[bang]) == 'undefined') return;
        bang = window.bangAliases[bang];
    }

    var bangUrl = window.validBangs[bang].replace(/\%args\%/g, encodeURI(bangArguments.join(' '))).replace(/%252f/gi, '/');

    window.location.replace(bangUrl);

    document.body.innerHTML = '<img src="https://duckduckgo.com/assets/bang/bang.svg"><br>You should get redirected to your bang. If you are not, click <a href="'+bangUrl+'">here</a>!';
})();
