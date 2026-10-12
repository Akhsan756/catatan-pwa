const CACHE_NAME = 'catatan-pwa-v1';
const ASSETS_TO_CACHE = [
  './catatan.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/2965/2965358.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetching Assets (Mendukung Akses Offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
