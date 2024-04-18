// ==UserScript==
// @name            ytb-turn-off-reply
// @namespace       npm/vite-plugin-monkey
// @version         0.0.0
// @author          monkey
// @description:ja  Youtubeのコメント返信欄を非表示にする
// @license         MIT
// @icon            https://vitejs.dev/logo.svg
// @match           https://www.youtube.com/*
// ==/UserScript==

(function () {
  'use strict';

  const COMMENT = "#simple-box";
  const ACTION_BUTTONS_SELECTOR = "#toolbar";
  function main() {
    const observer = new MutationObserver(() => {
      Array.from(document.querySelectorAll(COMMENT)).forEach((el) => el.remove());
      const comments = document.querySelectorAll(ACTION_BUTTONS_SELECTOR);
      Array.from(comments).forEach((el) => el.remove());
    });
    const target = document.body;
    observer.observe(target, {
      childList: true,
      subtree: true
    });
  }
  main();

})();