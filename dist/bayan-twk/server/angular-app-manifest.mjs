
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/card-list/card-list.module.ts": [
    {
      "path": "chunk-6MV4BP5W.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 8360, hash: '33d8f30a9cdec692440b00725973d056e43bb6c394cecdae7628a898f79a6569', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2467, hash: '6a663ae6598aee9cfa12a670f7f9fc0c92c64f5ba05c7586d8bf288a544f15f3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U4VPPC4T.css': {size: 251726, hash: '3eMGx0uUDug', text: () => import('./assets-chunks/styles-U4VPPC4T_css.mjs').then(m => m.default)}
  },
};
