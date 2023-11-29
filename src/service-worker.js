// service-worker.js

const cacheName = 'my-app';
const filesToCache = [
  '/',
  '/App.vue',
  '/views/ListaView.vue',
  '/views/FormularioView.vue',
  '/views/HomeView.vue',
  '/img/logo.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', 
  'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(async (response) => {
      if (response) {
        return response; 
      }

      // Si la solicitud es para una imagen en la carpeta '/img/'
      if (event.request.url.includes('/img/')) {
        try {
          const clonedResponse = await fetch(event.request.clone());
          const cache = await caches.open(cacheName);
          cache.put(event.request, clonedResponse.clone());
          return clonedResponse;
        } catch (error) {
          console.error('Error al cachear la imagen:', error);
        }
      }

      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['my-app-cache-v1'];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cacheWhitelist.indexOf(cache) === -1) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
