self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'scripts/script.js',
        'scripts/morse_code_tables.js',
        // перечислите все другие CSS и JS файлы
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
