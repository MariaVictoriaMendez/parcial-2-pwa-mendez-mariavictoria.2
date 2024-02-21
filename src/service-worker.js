const cacheName = 'my-app';
const filesToCache = [
  '/',
  '/index.html',  
  '/main.js',
  '/router/index.js',
  '/registerServiceWorker.js',
  '/service-worker.js',
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

      if (event.request.url.startsWith('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')) {
        try {
          const apiResponse = await fetch(event.request.clone());
          const cache = await caches.open(cacheName);
          cache.put(event.request, apiResponse.clone());
          return apiResponse;
        } catch (error) {
          console.error('Error al cachear la respuesta de la API:', error);
          return new Response('No hay conexión a Internet'); 
        }
      }

     
      if (event.request.url.includes('/img/')) {
        try {
          const clonedResponse = await fetch(event.request.clone());
          const cache = await caches.open(cacheName);
          cache.put(event.request, clonedResponse.clone());
          return clonedResponse;
        } catch (error) {
          console.error('Error al cachear la imagen:', error);
          return new Response('No hay conexión a Internet'); // Devuelve una respuesta alternativa
        }
      }

      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [cacheName];

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
