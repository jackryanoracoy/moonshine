var CACHE = 'ServiceWorker-precache';
var precacheFiles = [
	'/',
  'index.html',
  'boilerplate/index.html',

	'scripts/jquery-3.3.1.min.js',
	'scripts/object-fit.min.js',
	'scripts/scripts.js',

  'styles/style.css',
	'styles/style.min.css',
	'styles/fontawesome.min.css',

	'assets/fonts/font-awesome/fa-brands-400.ttf',
	'assets/fonts/font-awesome/fa-brands-400.woff',
	'assets/fonts/font-awesome/fa-brands-400.woff2',
	'assets/fonts/font-awesome/fa-regular-400.ttf',
	'assets/fonts/font-awesome/fa-regular-400.woff',
	'assets/fonts/font-awesome/fa-regular-400.woff2',
	'assets/fonts/font-awesome/fa-solid-900.ttf',
	'assets/fonts/font-awesome/fa-solid-900.woff',
	'assets/fonts/font-awesome/fa-solid-900.woff2',
];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('ServiceWorker: The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('ServiceWorker: Skip waiting on install');
    return self.skipWaiting();
  }));
});


//allow sw to control of current page
self.addEventListener('activate', function(event) {
  console.log('ServiceWorker: Claiming clients for current page');
  return self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
  console.log('ServiceWorker: The service worker is serving the asset.'+ evt.request.url);
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});


function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  //this is where we call the server to get the newest version of the 
  //file to use the next time we show view
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

function fromServer(request){
  //this is the fallback if it is not in the cache to go to the server and get it
  return fetch(request).then(function(response){ return response});
}