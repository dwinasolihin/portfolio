// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/dwinasolihin/Desktop/portfolio/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-404-js": () => import("/Users/dwinasolihin/Desktop/portfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/dwinasolihin/Desktop/portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/dwinasolihin/Desktop/portfolio/.cache/data.json")

