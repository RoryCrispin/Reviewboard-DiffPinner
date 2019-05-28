// ==UserScript==
// @name         RBT DiffEasy
// @namespace    http://rorycrispin.co.uk/
// @version      0.1
// @description  Reviwboard pin diff viewer to side of screen
// @author       Rory Crispin
// @match        http://reviewboard/r/*/diff*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var node = document.createElement('style');
node.innerHTML = `
  .review-request {
    position: fixed;
    z-index: 3;
    height: 300px;
    overflow: scroll;
    width: 50%;
    top: 0;
    right: 0;
}`;
document.body.appendChild(node);

})();
