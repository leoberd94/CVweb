
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CVweb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/CVweb"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2124, hash: 'c78329118a4160cc8d5d884c4a43901cf44cfd12a90f2411b6245d069fec2f55', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: '2f3bd5b0e3fd5be27bf2084b8556e02939658f8d659bfd4215d7f771a35fceab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38671, hash: 'be41890a241d8c155ba1052f9cb90623d60f124b23f2633eb8bb09461f813811', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H42BXDNQ.css': {size: 8999, hash: '9dIqSJ7guhM', text: () => import('./assets-chunks/styles-H42BXDNQ_css.mjs').then(m => m.default)}
  },
};
