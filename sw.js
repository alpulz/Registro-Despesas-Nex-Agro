// Service worker mínimo — necessário para o Chrome permitir instalar o app
// como PWA de verdade (com ícone próprio) em vez de um atalho simples.
const CACHE_NAME = "despesas-nexagro-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Estratégia simples: tenta a rede, cai pro cache se offline.
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
