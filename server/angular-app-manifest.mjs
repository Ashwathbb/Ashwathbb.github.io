
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Ashwathbb.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 520, hash: '06fa482d75b1342dcfb500bab8ffaa56eebac17e4da4f275ae7b1f5508b3baaf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: 'bc0d40a048bcb18e14bb96f27b9238c300c354b6529dfb5684ba39a892e3ffbc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1848, hash: 'd8fb2f7101d2bb01ffaafc0332be7abdf5b880dbe356ed54b5f6e1e6fb788e1f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 1848, hash: 'd8fb2f7101d2bb01ffaafc0332be7abdf5b880dbe356ed54b5f6e1e6fb788e1f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
