"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/pitch-ws/index.html","3d8a0af7608f96cdcc0b468ccfa9f935"],["/pitch-ws/static/css/main.c6b51f73.css","0e9ce8347603ae681f8199d9317f2575"],["/pitch-ws/static/media/batteries.ce429384.png","ce429384cce4ca50c7acaedcefbdf1d8"],["/pitch-ws/static/media/boring-line.50b56b0f.jpg","50b56b0fed7f91c96879258c9c599efd"],["/pitch-ws/static/media/countdown.fef87b1e.gif","fef87b1e47b18b0aad89fba3ec4909d5"],["/pitch-ws/static/media/doudou.48836562.png","48836562afac1ff1a1b1bd0d85ce8a99"],["/pitch-ws/static/media/elon-cover.26f7421a.jpg","26f7421aeda74586ba2af6685c5ecdcb"],["/pitch-ws/static/media/horse.80407895.gif","804078953669e4d6601347801ef65389"],["/pitch-ws/static/media/magic.9634c520.gif","9634c520c9a3cd4e7f23190bb2c96500"],["/pitch-ws/static/media/meme-morpheus.0746e0eb.jpg","0746e0eb05dff3ce5c5e3ccc1a7d0271"],["/pitch-ws/static/media/musk-teslawall.da72956f.jpg","da72956f6164b55f859e76ed6033f031"],["/pitch-ws/static/media/pika.8bcd50a3.gif","8bcd50a3be9a63b1327b9495206e93a6"],["/pitch-ws/static/media/problem.a7d84459.png","a7d844595e50f06a67ecdde8a3d34de9"],["/pitch-ws/static/media/promised-land.5a9875f5.jpg","5a9875f57d5f0368e9f3addf07b2e4b9"],["/pitch-ws/static/media/proof.4a351e5a.png","4a351e5a448545dc3f49a7aaf2eeff5b"],["/pitch-ws/static/media/r2d2.2e340b92.gif","2e340b9278358eb7d6b9437b720a48a5"],["/pitch-ws/static/media/show-back.4b3c9e89.jpg","4b3c9e8994762255dad3f21639837b82"],["/pitch-ws/static/media/sun.d928bbc4.png","d928bbc471f9ce24427d0fd83521819d"],["/pitch-ws/static/media/tesla-keynote.1ca7beca.png","1ca7becacfd81a00f0bfb02e4e03199b"],["/pitch-ws/static/media/the-move.63180d64.gif","63180d6435ec0a369f427b738398a64c"],["/pitch-ws/static/media/this-is-happening.09b5cec4.png","09b5cec44da0c536a9c1868c5c4dbab7"],["/pitch-ws/static/media/this-is-real.4cd5300e.png","4cd5300e97d2c77011830132c485a8fc"],["/pitch-ws/static/media/tweet.833ac0ca.png","833ac0ca982ebe4f75a318956249a953"],["/pitch-ws/static/media/ugly-batteries.fa355614.png","fa3556140b9f4cea841bb405702666b5"],["/pitch-ws/static/media/w3d-white.6044e0c0.png","6044e0c09e42d3ccf1f76e572081a171"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/pitch-ws/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});