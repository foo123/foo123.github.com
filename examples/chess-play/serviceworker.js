"use strict";

var appName = "chess-play";
var cacheKey = appName + '-v0.9.9'; // Change value to force update
var nocache = 'sw_nocache';
var assets = [
"./",
"./android-chrome-192x192.png",
"./android-chrome-512x512.png",
"./apple-touch-icon.png",
"./browserconfig.xml",
"./favicon.ico",
"./favicon-16x16.png",
"./favicon-32x32.png",
"./manifest.json",
"./mstile-150x150.png",
"./safari-pinned-tab.svg",
"./screenshot.png",
"./index.html",
"./serviceworker.js",
"./img/hourglass.svg",
"./img/next-bt.svg",
"./img/play-bt.svg",
"./img/prev-bt.svg",
"./img/redo-bt.svg",
"./img/undo-bt.svg",
"./img/updown-arrows.svg",
"./pieceset/default/bishop_b.svg",
"./pieceset/default/bishop_w.svg",
"./pieceset/default/king_b.svg",
"./pieceset/default/king_w.svg",
"./pieceset/default/knight_b.svg",
"./pieceset/default/knight_w.svg",
"./pieceset/default/pawn_b.svg",
"./pieceset/default/pawn_w.svg",
"./pieceset/default/queen_b.svg",
"./pieceset/default/queen_w.svg",
"./pieceset/default/rook_b.svg",
"./pieceset/default/rook_w.svg",
"./chessapp.css",
"./chessapp.js",
"./chess.js",
"./chessworker.js",
"./stockfish/stockfish-16.1-lite-single.js",
"./stockfish/stockfish-16.1-lite-single.wasm",
"./sunfish/sunfish.js"
];
// large or rarely changed assets
var cached_first_assets = [
"./img/hourglass.svg",
"./img/next-bt.svg",
"./img/play-bt.svg",
"./img/prev-bt.svg",
"./img/redo-bt.svg",
"./img/undo-bt.svg",
"./img/updown-arrows.svg",
"./pieceset/default/bishop_b.svg",
"./pieceset/default/bishop_w.svg",
"./pieceset/default/king_b.svg",
"./pieceset/default/king_w.svg",
"./pieceset/default/knight_b.svg",
"./pieceset/default/knight_w.svg",
"./pieceset/default/pawn_b.svg",
"./pieceset/default/pawn_w.svg",
"./pieceset/default/queen_b.svg",
"./pieceset/default/queen_w.svg",
"./pieceset/default/rook_b.svg",
"./pieceset/default/rook_w.svg",
"./chessworker.js",
"./stockfish/stockfish-16.1-lite-single.js",
"./stockfish/stockfish-16.1-lite-single.wasm",
"./sunfish/sunfish.js"
];

self.addEventListener("install", function(event) {
    // Kick out the old service worker
    self.skipWaiting();

    event.waitUntil(
        caches.open(cacheKey).then(function(cache) {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener("activate", function(event) {
    // Delete any non-current cache of same app
    event.waitUntil(
        caches.keys().then(function(keys) {
            Promise.all(
                keys.map(function(key) {
                    if (appName === key.slice(0, appName.length) && cacheKey !== key)
                    {
                        return caches.delete(key);
                    }
                })
            )
        })
    );
});

function getRelativeUrl(absoluteUrl)
{
    var relativeUrl = absoluteUrl.split('?')[0],
        baseUrl = self.location.href.split('?')[0].split('/').slice(0, -1).join('/') + '/';
    if (baseUrl === relativeUrl.slice(0, baseUrl.length)) relativeUrl = './' + relativeUrl.slice(baseUrl.length);
    return relativeUrl;
}
function fetchFirstThenCache(request, cacheKey)
{
    return fetch(request).then(function(response) {
        if ('GET' === request.method && response.status < 400)
        {
            var responseCopy = response.clone();
            caches.open(cacheKey).then(function(cache) {
                cache.put(request, responseCopy);
            });
        }
        return response;
    }).catch(function() {
        return caches.open(cacheKey).then(function(cache) {
            return cache.match(request, {ignoreSearch:true,ignoreMethod:true});
        });
    });
}
function cacheFirstElseFetch(request, cacheKey)
{
    return caches.open(cacheKey).then(function(cache) {
        return cache.match(request, {ignoreSearch:true,ignoreMethod:true}).then(function(cachedResponse) {
            return cachedResponse || fetch(request).then(function(networkResponse) {
                if ('GET' === request.method && networkResponse.status < 400)
                {
                    cache.put(request, networkResponse.clone());
                }
                return networkResponse;
            });
        });
    }).catch(function() {
        return fetch(request).then(function(response) {
            if ('GET' === request.method && response.status < 400)
            {
                cache.put(request, response.clone());
            }
            return response;
        });
    });
}
self.addEventListener("fetch", function(event) {
    if (
        (-1 < ['GET','HEAD'].indexOf(event.request.method)) &&
        (!nocache || !(new URL(event.request.url)).searchParams.get(nocache))
    )
    {
        event.respondWith(
            -1 < cached_first_assets.indexOf(getRelativeUrl(event.request.url)) ? cacheFirstElseFetch(event.request, cacheKey) : fetchFirstThenCache(event.request, cacheKey)
        );
    }
});
