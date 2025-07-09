self.addEventListener('install', function(e) {
  console.log('Service Worker: Terpasang');
});

self.addEventListener('fetch', function(e) {
  console.log('Service Worker: Mengambil', e.request.url);
});