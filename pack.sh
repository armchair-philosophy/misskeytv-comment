comment='\
// ==UserScript==
// @name        MisskeyTV Comment Extension
// @namespace   https://potato4d.me/
// @include     http://misskey.tk/live/*
// ==/UserScript=='
echo $comment > ./dist/us.user.js
cat ./dist/us_before.user.js >> ./dist/us.user.js