const CACHE_NAME = "highly-handy-cache-v1";

// List of assets to cache
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/assets/img/logo/logo.png",
  "/assets/css/vendor/et-line.css",
  "/assets/css/vendor/flaticon.min.css",
  "/assets/css/vendor/ionicons.min.css",
  "/assets/css/vendor/material-design-iconic-font.min.css",
  // Add more URLs of assets to cache here
];

// Event listener for install event
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => this.skipWaiting())
  );
});

// Event listener for fetch event
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone the request because it's a stream and can only be consumed once
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clone the response because it's a stream and can only be consumed once
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Event listener for activate event
this.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            // Delete old caches that are not in use anymore
            return cacheName !== CACHE_NAME;
          })
          .map((cacheName) => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
