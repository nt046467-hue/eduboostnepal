/**
 * sw.js — Service Worker Killer
 * This stub immediately unregisters itself so any stale/cached service worker
 * that previously enforced a restrictive CSP gets evicted from the browser.
 * No caching, no interception — all requests flow directly to the network.
 */
self.addEventListener("install", () => {
  // Skip waiting so the new SW activates immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    // Unregister this service worker after clearing old caches
    caches
      .keys()
      .then((cacheNames) => Promise.all(cacheNames.map((c) => caches.delete(c))))
      .then(() => self.registration.unregister())
  );
});
