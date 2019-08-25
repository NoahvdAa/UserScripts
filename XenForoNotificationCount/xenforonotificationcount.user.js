// ==UserScript==
// @name         XenForoNotificationCount
// @namespace    https://github.com/NoahvdAa/UserScripts/tree/master/XenForoNotificationCount
// @version      1.0.0
// @description  Shows the amount of alert + conversation notifications you have in the page title.
// @author       NoahvdAa
// @match        https://xenforo.com/community/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    window.originaltitle = document.title;

    setInterval(function() {
        var alerts = parseInt(document.querySelector('#AlertsMenu_Counter>.Total').innerText);
        var conversations = parseInt(document.querySelector('#ConversationsMenu_Counter>.Total').innerText);

        var total = alerts + conversations;

        if (total === 0) {
            document.title = window.originaltitle;
        } else {
            document.title = '(' + total + ') ' + window.originaltitle;
        }

    }, 1000);

})();
