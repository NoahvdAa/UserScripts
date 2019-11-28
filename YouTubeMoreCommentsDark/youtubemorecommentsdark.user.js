// ==UserScript==
// @name         YoutubeMoreCommentsDark
// @namespace    https://github.com/NoahvdAa/UserScripts/tree/master/YouTubeMoreCommentsDark
// @version      1.0.2
// @description  Makes the "More Comments" button on YouTube grey (instead of blue).
// @author       NoahvdAa
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var style = document.createElement('style');
    style.innerHTML = '.ytd-comment-replies-renderer { color: #909090 !important; }';
    document.head.appendChild(style);
})();
