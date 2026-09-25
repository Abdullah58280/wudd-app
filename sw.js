// يخلي الموقع قابل للتثبيت كتطبيق على الجوال. ما يخزن أي بيانات.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
