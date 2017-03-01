#
# packer (builder)
#

# if arg is build, run webpack
if [ $1 = "build" ]; then
    webpack ./main.js dist/us_before.user.js
fi

comment='\
// ==UserScript==
// @name        MisskeyTV Comment Extension
// @namespace   https://potato4d.me/
// @include     http://misskey.tk/live/*
// ==/UserScript=='
echo $comment > ./dist/us.user.js
cat ./dist/us_before.user.js >> ./dist/us.user.js