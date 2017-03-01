// ==UserScript==
// @name        MisskeyTV Comment Extension
// @namespace   https://potato4d.me/
// @include     http://misskey.tk/live/*
// ==/UserScript==

(function(){
  const namespace = location.href.split("/")[location.href.split("/").length-1];
  const $ = e=>document.querySelector(e);
  const $$ = e=>document.querySelectorAll(e);
  const plugins = [
    "https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.js",
    "https://www.gstatic.com/firebasejs/3.6.10/firebase.js"
  ];
  plugins.map((plugin)=>{
    const script = document.createElement("script");
    script.setAttribute("src", plugin);
    $("body").append(script);
  });

  alert(namespace);

}());
