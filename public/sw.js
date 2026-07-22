const CACHE_NAME = "quiet-light-daily-light-v1";
const APP_SHELL_URLS = [
  "/daily-light/app",
  "/daily-light",
  "/api/daily-light/today",
  "/images/brand/quiet-light-icon.webp",
  "/images/brand/lantern-mark.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL_URLS))
      .catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => Promise.all(cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName))))
  );
  self.clients.claim();
});

function shouldCacheRequest(request) {
  if (request.method !== "GET") return false;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return false;

  return (
    requestUrl.pathname === "/daily-light" ||
    requestUrl.pathname.startsWith("/daily-light/") ||
    requestUrl.pathname.startsWith("/api/daily-light") ||
    requestUrl.pathname.startsWith("/images/") ||
    requestUrl.pathname === "/favicon.ico" ||
    requestUrl.pathname === "/apple-touch-icon.png" ||
    requestUrl.pathname === "/manifest.webmanifest"
  );
}

self.addEventListener("fetch", (event) => {
  if (!shouldCacheRequest(event.request)) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse && networkResponse.ok) {
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) return cachedResponse;

        const appShell = await cache.match("/daily-light/app");
        if (appShell) return appShell;

        return new Response("The Daily Light is offline and no cached reading is available yet.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      }
    })
  );
});
