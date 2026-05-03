"use strict";

var appName = "billiard";
var version = "v2"; // Change value to force update
var cacheKey = appName + "-" + version;
var nocache = 'sw_nocache';
var assets = [
"./",
"./apple-touch-icon.png",
"./web-app-manifest-192x192.png",
"./web-app-manifest-512x512.png",
"./favicon.ico",
"./favicon.svg",
"./favicon-96x96.png",
"./manifest.json",
"./index.html",
"./serviceworker.js",
"./assets/logo.png",
"./assets/billiardtable1.png",
"./assets/billiardtable2.png",
"./assets/white.png",
"./assets/black.png",
"./assets/yellow.png",
"./assets/red.png",
"./assets/taco.png",
"./NEngine.min.js",
"./Billiard.min.js"
];
// large or rarely changed assets
var cached_first_assets = [
"./assets/logo.png",
"./assets/billiardtable1.png",
"./assets/billiardtable2.png",
"./assets/white.png",
"./assets/black.png",
"./assets/yellow.png",
"./assets/red.png",
"./assets/taco.png"
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
                    else
                    {
                        return Promise.resolve();
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
