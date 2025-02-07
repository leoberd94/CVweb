
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cvWeb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cvWeb"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2124, hash: 'c2df666290d75e873b4ab80aebb34771e313a254a11cfb34be9d18951a4a1ffc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: '063c4e656b71cf741bf37c8a428a7e308e375ed70edec897deca93413b7bfbd7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38671, hash: '614b25a1a97ea8b9cdc8b8b507f3ea352aa4cf7c13334aae18945469966a0509', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H42BXDNQ.css': {size: 8999, hash: '9dIqSJ7guhM', text: () => import('./assets-chunks/styles-H42BXDNQ_css.mjs').then(m => m.default)}
  },
};
