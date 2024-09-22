"use strict";

var appName = "rubik3";
var cacheKey = appName + "-v2"; // Change value to force update
var nocache = 'sw_nocache';

self.addEventListener("install", function(event) {
    // Kick out the old service worker
    self.skipWaiting();

    event.waitUntil(
        caches.open(cacheKey).then(function(cache) {
            return cache.addAll([
            "/",
            "/android-chrome-192x192.png",
            "/android-chrome-384x384.png",
            "/android-chrome-512x512.png",
            "/apple-touch-icon.png",
            "/apple-touch-icon-60x60.png",
            "/apple-touch-icon-76x76.png",
            "/apple-touch-icon-120x120.png",
            "/apple-touch-icon-152x152.png",
            "/browserconfig.xml",
            "/favicon.ico",
            "/favicon-16x16.png",
            "/favicon-32x32.png",
            "/manifest.json",
            "/mstile-150x150.png",
            "/safari-pinned-tab.svg",
            "/index.html",
            "/serviceworker.js",
            "/common/css/common.min.css",
            "/assets/back.png",
            "/assets/cross.png",
            "/assets/pad.jpg",
            "/assets/rubik3.png",
            "/assets/select.png",
            "/common/js/three_old.js",
            "/common/js/Tween.js",
            "/Rubik.js",
            "/RubikApplication.js"
            ]);
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

self.addEventListener("fetch", function(event) {
    if (
        (-1 < ['GET','HEAD'].indexOf(event.request.method)) &&
        (!nocache || !(new URL(event.request.url)).searchParams.get(nocache))
    )
    {
        event.respondWith(
            fetch(event.request).then(function(response) {
                if ('GET' === event.request.method && response.status < 400)
                {
                    var responseCopy = response.clone();
                    caches.open(cacheKey).then(function(cache) {
                        cache.put(event.request, responseCopy);
                    });
                }
                return response;
            }).catch(function() {
                return caches.open(cacheKey).then(function(cache) {
                    return cache.match(event.request, {ignoreSearch:true,ignoreMethod:true});
                });
            })
        );
    }
});
