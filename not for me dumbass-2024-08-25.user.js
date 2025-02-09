// ==UserScript==
// @name         not for me dumbass
// @namespace    http://tampermonkey.net/
// @version      2024-08-25
// @description  redirects away from the for you page
// @author       nicknonya
// @match        https://www.tumblr.com/***
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// ==/UserScript==

let redirectInt = null;
function forYouRedirect() {
  if (location.href.includes('dashboard/stuff_for_you')) {
    window.location.replace('https://www.tumblr.com/dashboard/following');
    clearInterval(redirectInt);
  }
}

redirectInt = setInterval(forYouRedirect, 100);
