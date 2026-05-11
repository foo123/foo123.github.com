"use strict";

const appName = "billiard";
const version = "v1-sw-6"; // Change value to force update
const cacheKey = appName + "-" + version;
const assets = [
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
"./assets/tablepockets.png",
"./assets/tablenopockets.png",
/*"./assets/white.png",
"./assets/black.png",
"./assets/yellow.png",
"./assets/red.png",*/
"./assets/taco.png",
"./NEngine.min.js",
"./Billiard.min.js"
];
// large or rarely changed assets
const cached_first_assets = [
"./assets/logo.png",
"./assets/tablepockets.png",
"./assets/tablenopockets.png",
/*"./assets/white.png",
"./assets/black.png",
"./assets/yellow.png",
"./assets/red.png",*/
"./assets/taco.png"
];
const options = {
    nocache: true,
    deletefirst: true,
    ignorefailed: true,
    request: {
        credentials: 'omit',
        mode: 'cors'
    }
};

self.addEventListener('install', function(event) {
    // kick out the old service worker
    if (self.skipWaiting) self.skipWaiting();
    // cache necessary assets
    event.waitUntil(caches.open(cacheKey).then(function(cache) {
        return cacheAll(cache, assets, options);
    }));
});
self.addEventListener('activate', function(event) {
    event.waitUntil(
        // delete any non-current cache of same app
        caches.keys().then(function(keys) {
            return Promise.all(keys.map(function(key) {
                if (appName === key.slice(0, appName.length) && cacheKey !== key)
                {
                    return caches.delete(key);
                }
            }));
        }).then(function() {
            // take control of current app clients
            if (self.clients && self.clients.claim)
            {
                return self.clients.claim();
            }
        })
    );
});
self.addEventListener("fetch", function(event) {
    // handle only GET requests
    if ("GET" !== event.request.method) return;

    // prevent some weird issue with Chrome DevTools and 'only-if-cached'
    if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") return;

    const url = getRelativeUrl(event.request.url);
    if (-1 < assets.indexOf(url))
    {
        event.respondWith(
            -1 < cached_first_assets.indexOf(url) ? cacheFirstResponse(event, url, cacheKey) : networkFirstResponse(event, url, cacheKey)
        );
    }
});

function cacheFirstResponse(event, url, cacheKey)
{
    return cachesMatch(url, cacheKey).then(function(response) {
        return response ? response : (fetch(event.request).then(function(response) {
            if (!response.ok) return response;

            const responseCopy = response.clone();
            event.waitUntil(
                caches.open(cacheKey).then(function(cache) {
                    return cache.put(url, responseCopy);
                })
            );

            return response;
        }));
    });
}
function networkFirstResponse(event, url, cacheKey)
{
    return fetchWithPreload(event).then(function(response) {
        if (response.ok) return response;
        // reach the code in the catch
        throw response;
    }).catch(function(errResponse) {
        // if network is down fetch will throw
        return cachesMatch(url, cacheKey).then(function(response) {
            if (response) return response;
            if (errResponse instanceof Response) return errResponse;
            throw errResponse;
        });
    });
}

// utils --------------------------
function cacheAll(cache, requests, options)
{
    requests = requests.slice();

    return Promise.all(requests.map(function(request) {
        return fetch(options.nocache ? cacheBust(request) : request, options.request).then(
            fixRedirectedResponse
        ).then(
            function(response) {
                return !response.ok ? {error: true} : {response: response};
            },
            function() {
                return {error: true};
            }
        );
    })).then(function(responses) {
        if (!options.ignorefailed && responses.filter(res => res.error).length)
        {
            return Promise.reject(new Error('Some responses failed'));
        }

        for (let i=responses.length-1; i>=0; --i)
        {
            if (responses[i].error)
            {
                responses.splice(i, 1);
                requests.splice(i, 1);
            }
        }

        return (options.deletefirst ? (
            Promise.all(requests.map(function(request) {return cache.delete(request).catch(nop);}))
        ) : (
            Promise.resolve()
        )).then(function() {
            return Promise.all(requests.map(function(request, i) {
                return cache.put(request, responses[i].response);
            }));
        });
    });
}
function cachesMatch(request, cacheName)
{
    return caches.match(request, {cacheName: cacheName}).then(function(response) {
        return isNotRedirectedResponse(response) ? response : (fixRedirectedResponse(response).then(function(response) {
            return caches.open(cacheName).then(function(cache) {
                return cache.put(request, response);
            }).then(function() {
                return response;
            });
        }));
    }).catch(nop);
}
function fetchWithPreload(event)
{
    return event.preloadResponse ? (event.preloadResponse.then(function(response) {
        return response || fetch(event.request);
    })) : fetch(event.request);
}
function getRelativeUrl(absoluteUrl)
{
    var relativeUrl = absoluteUrl.split('#')[0].split('?')[0],
        baseUrl = self.location.href.split('#')[0].split('?')[0].split('/').slice(0, -1).join('/') + '/';
    if (baseUrl === relativeUrl.slice(0, baseUrl.length)) relativeUrl = './' + relativeUrl.slice(baseUrl.length);
    return relativeUrl;
}
function cacheBust(url)
{
    return url + (-1 < url.indexOf('?') ? '&' : '?') + '__nocache__=' + encodeURIComponent(Date.now());
}
function isNotRedirectedResponse(response)
{
    return (
        !response || !response.redirected ||
        !response.ok || (response.type === 'opaqueredirect')
    );
}
function fixRedirectedResponse(response)
{
    return isNotRedirectedResponse(response) ? Promise.resolve(response) : ((body = 'body' in response ? Promise.resolve(response.body) : response.blob()).then(function(data) {
        return new Response(data, {
            headers: response.headers,
            status: response.status
        });
    }));
}
function nop() {}
