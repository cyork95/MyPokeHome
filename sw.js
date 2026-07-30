const CACHE_NAME = 'mypokehome-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event with Cache-First strategy for PokeAPI/CDN sprites, and Network-First for core assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Cache-First for external sprite/artwork APIs
  if (url.hostname.includes('pokeapi.co') || url.hostname.includes('raw.githubusercontent.com')) {
    event.respondWith(
      caches.open('poke-sprites-cache').then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }).catch(() => {
            // Offline fallback or silent fail
          });
        });
      })
    );
  } else {
    // Network-First for local code/assets
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => caches.match(event.request))
    );
  }
});
