"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fruben%2FDesktop%2Fprojects%2Fsuscription-template%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fruben%2FDesktop%2Fprojects%2Fsuscription-template&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fruben%2FDesktop%2Fprojects%2Fsuscription-template%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fruben%2FDesktop%2Fprojects%2Fsuscription-template&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ruben_Desktop_projects_suscription_template_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/ruben/Desktop/projects/suscription-template/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ruben_Desktop_projects_suscription_template_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJ1YmVuJTJGRGVza3RvcCUyRnByb2plY3RzJTJGc3VzY3JpcHRpb24tdGVtcGxhdGUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcnViZW4lMkZEZXNrdG9wJTJGcHJvamVjdHMlMkZzdXNjcmlwdGlvbi10ZW1wbGF0ZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMwQztBQUN2SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL3N1c2NyaXB0aW9uLXRlbXBsYXRlLz84NzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9ydWJlbi9EZXNrdG9wL3Byb2plY3RzL3N1c2NyaXB0aW9uLXRlbXBsYXRlL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvcnViZW4vRGVza3RvcC9wcm9qZWN0cy9zdXNjcmlwdGlvbi10ZW1wbGF0ZS9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fruben%2FDesktop%2Fprojects%2Fsuscription-template%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fruben%2FDesktop%2Fprojects%2Fsuscription-template&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/auth */ \"(rsc)/./src/server/auth.ts\");\n\n\n// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_server_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFVztBQUU1QyxtRUFBbUU7QUFDbkUsTUFBTUUsVUFBVUYsZ0RBQVFBLENBQUNDLHFEQUFXQTtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VzY3JpcHRpb24tdGVtcGxhdGUvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJ+L3NlcnZlci9hdXRoXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/server/db */ \"(rsc)/./src/server/db.ts\");\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            }),\n        async redirect ({ url, baseUrl }) {\n            // Allows relative callback URLs\n            if (url.startsWith(\"/\")) return `${baseUrl}${url}`;\n            else if (new URL(url).origin === baseUrl) return url;\n            return baseUrl;\n        }\n    },\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_4__.db),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: _env__WEBPACK_IMPORTED_MODULE_3__.env.GOOGLE_CLIENT_ID,\n            clientSecret: _env__WEBPACK_IMPORTED_MODULE_3__.env.GOOGLE_CLIENT_SECRET\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFLbEM7QUFHcUM7QUFFNUI7QUFDSztBQXVCakM7Ozs7Q0FJQyxHQUNNLE1BQU1LLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RDLFNBQVMsQ0FBQyxFQUFFQSxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFNO2dCQUMvQixHQUFHRCxPQUFPO2dCQUNWQyxNQUFNO29CQUNKLEdBQUdELFFBQVFDLElBQUk7b0JBQ2ZDLElBQUlELEtBQUtDLEVBQUU7Z0JBQ2I7WUFDRjtRQUNBLE1BQU1DLFVBQVMsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7WUFDN0IsZ0NBQWdDO1lBQ2hDLElBQUlELElBQUlFLFVBQVUsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxFQUFFRCxRQUFRLEVBQUVELElBQUksQ0FBQztpQkFFN0MsSUFBSSxJQUFJRyxJQUFJSCxLQUFLSSxNQUFNLEtBQUtILFNBQVMsT0FBT0Q7WUFDakQsT0FBT0M7UUFDVDtJQUNGO0lBQ0FJLFNBQVNoQixtRUFBYUEsQ0FBQ0ksMENBQUVBO0lBQ3pCYSxXQUFXO1FBQ1RmLHNFQUFjQSxDQUFDO1lBQ2JnQixVQUFVZixxQ0FBR0EsQ0FBQ2dCLGdCQUFnQjtZQUM5QkMsY0FBY2pCLHFDQUFHQSxDQUFDa0Isb0JBQW9CO1FBQ3hDO0tBY0Q7QUFDSCxFQUFFO0FBRUY7Ozs7Q0FJQyxHQUNNLE1BQU1DLHVCQUF1QixJQUFNckIsMkRBQWdCQSxDQUFDSSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VzY3JpcHRpb24tdGVtcGxhdGUvLi9zcmMvc2VydmVyL2F1dGgudHM/MjJiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQge1xuICBnZXRTZXJ2ZXJTZXNzaW9uLFxuICB0eXBlIERlZmF1bHRTZXNzaW9uLFxuICB0eXBlIE5leHRBdXRoT3B0aW9ucyxcbn0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgdHlwZSBBZGFwdGVyIH0gZnJvbSBcIm5leHQtYXV0aC9hZGFwdGVyc1wiO1xuaW1wb3J0IERpc2NvcmRQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9kaXNjb3JkXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmltcG9ydCB7IGVudiB9IGZyb20gXCJ+L2VudlwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9zZXJ2ZXIvZGJcIjtcblxuLyoqXG4gKiBNb2R1bGUgYXVnbWVudGF0aW9uIGZvciBgbmV4dC1hdXRoYCB0eXBlcy4gQWxsb3dzIHVzIHRvIGFkZCBjdXN0b20gcHJvcGVydGllcyB0byB0aGUgYHNlc3Npb25gXG4gKiBvYmplY3QgYW5kIGtlZXAgdHlwZSBzYWZldHkuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvZ2V0dGluZy1zdGFydGVkL3R5cGVzY3JpcHQjbW9kdWxlLWF1Z21lbnRhdGlvblxuICovXG5kZWNsYXJlIG1vZHVsZSBcIm5leHQtYXV0aFwiIHtcbiAgaW50ZXJmYWNlIFNlc3Npb24gZXh0ZW5kcyBEZWZhdWx0U2Vzc2lvbiB7XG4gICAgdXNlcjoge1xuICAgICAgaWQ6IHN0cmluZztcbiAgICAgIC8vIC4uLm90aGVyIHByb3BlcnRpZXNcbiAgICAgIC8vIHJvbGU6IFVzZXJSb2xlO1xuICAgIH0gJiBEZWZhdWx0U2Vzc2lvbltcInVzZXJcIl07XG4gIH1cblxuICAvLyBpbnRlcmZhY2UgVXNlciB7XG4gIC8vICAgLy8gLi4ub3RoZXIgcHJvcGVydGllc1xuICAvLyAgIC8vIHJvbGU6IFVzZXJSb2xlO1xuICAvLyB9XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgTmV4dEF1dGguanMgdXNlZCB0byBjb25maWd1cmUgYWRhcHRlcnMsIHByb3ZpZGVycywgY2FsbGJhY2tzLCBldGMuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB1c2VyIH0pID0+ICh7XG4gICAgICAuLi5zZXNzaW9uLFxuICAgICAgdXNlcjoge1xuICAgICAgICAuLi5zZXNzaW9uLnVzZXIsXG4gICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgYmFzZVVybCB9KSB7XG4gICAgICAvLyBBbGxvd3MgcmVsYXRpdmUgY2FsbGJhY2sgVVJMc1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiL1wiKSkgcmV0dXJuIGAke2Jhc2VVcmx9JHt1cmx9YDtcbiAgICAgIC8vIEFsbG93cyBjYWxsYmFjayBVUkxzIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgZWxzZSBpZiAobmV3IFVSTCh1cmwpLm9yaWdpbiA9PT0gYmFzZVVybCkgcmV0dXJuIHVybDtcbiAgICAgIHJldHVybiBiYXNlVXJsO1xuICAgIH0sXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIpIGFzIEFkYXB0ZXIsXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBlbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIC8vIERpc2NvcmRQcm92aWRlcih7XG4gICAgLy8gICBjbGllbnRJZDogZW52LkRJU0NPUkRfQ0xJRU5UX0lELFxuICAgIC8vICAgY2xpZW50U2VjcmV0OiBlbnYuRElTQ09SRF9DTElFTlRfU0VDUkVULFxuICAgIC8vIH0pLFxuICAgIC8qKlxuICAgICAqIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlLlxuICAgICAqXG4gICAgICogTW9zdCBvdGhlciBwcm92aWRlcnMgcmVxdWlyZSBhIGJpdCBtb3JlIHdvcmsgdGhhbiB0aGUgRGlzY29yZCBwcm92aWRlci4gRm9yIGV4YW1wbGUsIHRoZVxuICAgICAqIEdpdEh1YiBwcm92aWRlciByZXF1aXJlcyB5b3UgdG8gYWRkIHRoZSBgcmVmcmVzaF90b2tlbl9leHBpcmVzX2luYCBmaWVsZCB0byB0aGUgQWNjb3VudFxuICAgICAqIG1vZGVsLiBSZWZlciB0byB0aGUgTmV4dEF1dGguanMgZG9jcyBmb3IgdGhlIHByb3ZpZGVyIHlvdSB3YW50IHRvIHVzZS4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3Byb3ZpZGVycy9naXRodWJcbiAgICAgKi9cbiAgXSxcbn07XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYGdldFNlcnZlclNlc3Npb25gIHNvIHRoYXQgeW91IGRvbid0IG5lZWQgdG8gaW1wb3J0IHRoZSBgYXV0aE9wdGlvbnNgIGluIGV2ZXJ5IGZpbGUuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9uZXh0anNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlckF1dGhTZXNzaW9uID0gKCkgPT4gZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsImdldFNlcnZlclNlc3Npb24iLCJHb29nbGVQcm92aWRlciIsImVudiIsImRiIiwiYXV0aE9wdGlvbnMiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlciIsImlkIiwicmVkaXJlY3QiLCJ1cmwiLCJiYXNlVXJsIiwic3RhcnRzV2l0aCIsIlVSTCIsIm9yaWdpbiIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImdldFNlcnZlckF1dGhTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/server/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n\n\nconst createPrismaClient = ()=>new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        log: _env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n            \"query\",\n            \"error\",\n            \"warn\"\n        ] : [\n            \"error\"\n        ]\n    });\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? createPrismaClient();\nif (_env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFbEI7QUFFNUIsTUFBTUUscUJBQXFCLElBQ3pCLElBQUlGLHdEQUFZQSxDQUFDO1FBQ2ZHLEtBQ0VGLHFDQUFHQSxDQUFDRyxRQUFRLEtBQUssZ0JBQWdCO1lBQUM7WUFBUztZQUFTO1NBQU8sR0FBRztZQUFDO1NBQVE7SUFDM0U7QUFFRixNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLEtBQUtGLGdCQUFnQkcsTUFBTSxJQUFJTixxQkFBcUI7QUFFakUsSUFBSUQscUNBQUdBLENBQUNHLFFBQVEsS0FBSyxjQUFjQyxnQkFBZ0JHLE1BQU0sR0FBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXNjcmlwdGlvbi10ZW1wbGF0ZS8uL3NyYy9zZXJ2ZXIvZGIudHM/YWE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IHsgZW52IH0gZnJvbSBcIn4vZW52XCI7XG5cbmNvbnN0IGNyZWF0ZVByaXNtYUNsaWVudCA9ICgpID0+XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzpcbiAgICAgIGVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gW1wicXVlcnlcIiwgXCJlcnJvclwiLCBcIndhcm5cIl0gOiBbXCJlcnJvclwiXSxcbiAgfSk7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUHJpc21hQ2xpZW50PiB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBkYiA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gY3JlYXRlUHJpc21hQ2xpZW50KCk7XG5cbmlmIChlbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZW52IiwiY3JlYXRlUHJpc21hQ2xpZW50IiwibG9nIiwiTk9ERV9FTlYiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwiZGIiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/server/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"(rsc)/./node_modules/@t3-oss/env-nextjs/dist/index.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().refine((str)=>!str.includes(\"YOUR_MYSQL_URL_HERE\"), \"You forgot to change the default URL\"),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([\n            \"development\",\n            \"test\",\n            \"production\"\n        ]).default(\"development\"),\n        NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n        // Since NextAuth.js automatically uses the VERCEL_URL if present.\n        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string() : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()),\n        GOOGLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GOOGLE_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        STRIPE_SECRET_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        STRIPE_WEBHOOK_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        STRIPE_PRICE_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n        // NEXT_PUBLIC_CLIENTVAR: z.string(),\n        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\",\n        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n        NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,\n        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,\n        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,\n        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,\n        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: \"pk_test_51LHu3MJQBv2UWQgIUZADIrbPTknxj6EnbeVPQrUhwrbTSCEqkMYzfhyDcp24SQacXDHk55g4KV1d2DHdE0cmbwTy00ySOf6s6l\",\n        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,\n        STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID,\n        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially\n   * useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION,\n    /**\n   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and\n   * `SOME_VAR=''` will throw an error.\n   */ emptyStringAsUndefined: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZW52LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUN2QjtBQUVqQixNQUFNRSxNQUFNRiw2REFBU0EsQ0FBQztJQUMzQjs7O0dBR0MsR0FDREcsUUFBUTtRQUNOQyxjQUFjSCxrQ0FBQ0EsQ0FDWkksTUFBTSxHQUNOQyxHQUFHLEdBQ0hDLE1BQU0sQ0FDTCxDQUFDQyxNQUFRLENBQUNBLElBQUlDLFFBQVEsQ0FBQyx3QkFDdkI7UUFFSkMsVUFBVVQsa0NBQUNBLENBQ1JVLElBQUksQ0FBQztZQUFDO1lBQWU7WUFBUTtTQUFhLEVBQzFDQyxPQUFPLENBQUM7UUFDWEMsaUJBQ0VDLE1BQXFDLEdBQ2pDYixDQUFVLEdBQ1ZBLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdVLFFBQVE7UUFDekJDLGNBQWNmLGtDQUFDQSxDQUFDZ0IsVUFBVSxDQUN4Qix1RUFBdUU7UUFDdkUsa0VBQWtFO1FBQ2xFLENBQUNULE1BQVFNLFFBQVFaLEdBQUcsQ0FBQ2dCLFVBQVUsSUFBSVYsS0FDbkMsc0VBQXNFO1FBQ3RFTSxRQUFRWixHQUFHLENBQUNpQixNQUFNLEdBQUdsQixrQ0FBQ0EsQ0FBQ0ksTUFBTSxLQUFLSixrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHO1FBRWxEYyxrQkFBa0JuQixrQ0FBQ0EsQ0FBQ0ksTUFBTTtRQUMxQmdCLHNCQUFzQnBCLGtDQUFDQSxDQUFDSSxNQUFNO1FBQzlCaUIsbUJBQW1CckIsa0NBQUNBLENBQUNJLE1BQU07UUFDM0JrQix1QkFBdUJ0QixrQ0FBQ0EsQ0FBQ0ksTUFBTTtRQUMvQm1CLG1CQUFtQnZCLGtDQUFDQSxDQUFDSSxNQUFNO1FBQzNCb0IsdUJBQXVCeEIsa0NBQUNBLENBQUNJLE1BQU07UUFDL0JxQixpQkFBaUJ6QixrQ0FBQ0EsQ0FBQ0ksTUFBTTtJQUMzQjtJQUVBOzs7O0dBSUMsR0FDRHNCLFFBQVE7UUFDTixxQ0FBcUM7UUFDckNDLG9DQUFvQzNCLGtDQUFDQSxDQUFDSSxNQUFNO0lBQzlDO0lBRUE7OztHQUdDLEdBQ0R3QixZQUFZO1FBQ1Z6QixjQUFjVSxRQUFRWixHQUFHLENBQUNFLFlBQVk7UUFDdENNLFVBdkRKO1FBd0RJRyxpQkFBaUJDLFFBQVFaLEdBQUcsQ0FBQ1csZUFBZTtRQUM1Q0csY0FBY0YsUUFBUVosR0FBRyxDQUFDYyxZQUFZO1FBQ3RDSSxrQkFBa0JOLFFBQVFaLEdBQUcsQ0FBQ2tCLGdCQUFnQjtRQUM5Q0Msc0JBQXNCUCxRQUFRWixHQUFHLENBQUNtQixvQkFBb0I7UUFDdERDLG1CQUFtQlIsUUFBUVosR0FBRyxDQUFDb0IsaUJBQWlCO1FBQ2hEQyx1QkFBdUJULFFBQVFaLEdBQUcsQ0FBQ3FCLHFCQUFxQjtRQUN4REssb0NBQ0VkLDZHQUE4QztRQUNoRFcsdUJBQXVCWCxRQUFRWixHQUFHLENBQUN1QixxQkFBcUI7UUFDeERDLGlCQUFpQlosUUFBUVosR0FBRyxDQUFDd0IsZUFBZTtRQUM1Q0YsbUJBQW1CVixRQUFRWixHQUFHLENBQUNzQixpQkFBaUI7SUFDbEQ7SUFDQTs7O0dBR0MsR0FDRE0sZ0JBQWdCLENBQUMsQ0FBQ2hCLFFBQVFaLEdBQUcsQ0FBQzZCLG1CQUFtQjtJQUNqRDs7O0dBR0MsR0FDREMsd0JBQXdCO0FBQzFCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXNjcmlwdGlvbi10ZW1wbGF0ZS8uL3NyYy9lbnYuanM/MTBiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnYgfSBmcm9tIFwiQHQzLW9zcy9lbnYtbmV4dGpzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgZW52ID0gY3JlYXRlRW52KHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICAgKi9cbiAgc2VydmVyOiB7XG4gICAgREFUQUJBU0VfVVJMOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC51cmwoKVxuICAgICAgLnJlZmluZShcbiAgICAgICAgKHN0cikgPT4gIXN0ci5pbmNsdWRlcyhcIllPVVJfTVlTUUxfVVJMX0hFUkVcIiksXG4gICAgICAgIFwiWW91IGZvcmdvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgVVJMXCIsXG4gICAgICApLFxuICAgIE5PREVfRU5WOiB6XG4gICAgICAuZW51bShbXCJkZXZlbG9wbWVudFwiLCBcInRlc3RcIiwgXCJwcm9kdWN0aW9uXCJdKVxuICAgICAgLmRlZmF1bHQoXCJkZXZlbG9wbWVudFwiKSxcbiAgICBORVhUQVVUSF9TRUNSRVQ6XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgPyB6LnN0cmluZygpXG4gICAgICAgIDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIE5FWFRBVVRIX1VSTDogei5wcmVwcm9jZXNzKFxuICAgICAgLy8gVGhpcyBtYWtlcyBWZXJjZWwgZGVwbG95bWVudHMgbm90IGZhaWwgaWYgeW91IGRvbid0IHNldCBORVhUQVVUSF9VUkxcbiAgICAgIC8vIFNpbmNlIE5leHRBdXRoLmpzIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGUgVkVSQ0VMX1VSTCBpZiBwcmVzZW50LlxuICAgICAgKHN0cikgPT4gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA/PyBzdHIsXG4gICAgICAvLyBWRVJDRUxfVVJMIGRvZXNuJ3QgaW5jbHVkZSBgaHR0cHNgIHNvIGl0IGNhbnQgYmUgdmFsaWRhdGVkIGFzIGEgVVJMXG4gICAgICBwcm9jZXNzLmVudi5WRVJDRUwgPyB6LnN0cmluZygpIDogei5zdHJpbmcoKS51cmwoKSxcbiAgICApLFxuICAgIEdPT0dMRV9DTElFTlRfSUQ6IHouc3RyaW5nKCksXG4gICAgR09PR0xFX0NMSUVOVF9TRUNSRVQ6IHouc3RyaW5nKCksXG4gICAgRElTQ09SRF9DTElFTlRfSUQ6IHouc3RyaW5nKCksXG4gICAgRElTQ09SRF9DTElFTlRfU0VDUkVUOiB6LnN0cmluZygpLFxuICAgIFNUUklQRV9TRUNSRVRfS0VZOiB6LnN0cmluZygpLFxuICAgIFNUUklQRV9XRUJIT09LX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgICBTVFJJUEVfUFJJQ0VfSUQ6IHouc3RyaW5nKCksXG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBjbGllbnQtc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLiBUbyBleHBvc2UgdGhlbSB0byB0aGUgY2xpZW50LCBwcmVmaXggdGhlbSB3aXRoXG4gICAqIGBORVhUX1BVQkxJQ19gLlxuICAgKi9cbiAgY2xpZW50OiB7XG4gICAgLy8gTkVYVF9QVUJMSUNfQ0xJRU5UVkFSOiB6LnN0cmluZygpLFxuICAgIE5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVk6IHouc3RyaW5nKCksXG4gIH0sXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4ndCBkZXN0cnVjdCBgcHJvY2Vzcy5lbnZgIGFzIGEgcmVndWxhciBvYmplY3QgaW4gdGhlIE5leHQuanMgZWRnZSBydW50aW1lcyAoZS5nLlxuICAgKiBtaWRkbGV3YXJlcykgb3IgY2xpZW50LXNpZGUgc28gd2UgbmVlZCB0byBkZXN0cnVjdCBtYW51YWxseS5cbiAgICovXG4gIHJ1bnRpbWVFbnY6IHtcbiAgICBEQVRBQkFTRV9VUkw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgICBOT0RFX0VOVjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgTkVYVEFVVEhfU0VDUkVUOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gICAgTkVYVEFVVEhfVVJMOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwsXG4gICAgR09PR0xFX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICBHT09HTEVfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgRElTQ09SRF9DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX0lELFxuICAgIERJU0NPUkRfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfU0VDUkVULFxuICAgIE5FWFRfUFVCTElDX1NUUklQRV9QVUJMSVNIQUJMRV9LRVk6XG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZLFxuICAgIFNUUklQRV9XRUJIT09LX1NFQ1JFVDogcHJvY2Vzcy5lbnYuU1RSSVBFX1dFQkhPT0tfU0VDUkVULFxuICAgIFNUUklQRV9QUklDRV9JRDogcHJvY2Vzcy5lbnYuU1RSSVBFX1BSSUNFX0lELFxuICAgIFNUUklQRV9TRUNSRVRfS0VZOiBwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSxcbiAgfSxcbiAgLyoqXG4gICAqIFJ1biBgYnVpbGRgIG9yIGBkZXZgIHdpdGggYFNLSVBfRU5WX1ZBTElEQVRJT05gIHRvIHNraXAgZW52IHZhbGlkYXRpb24uIFRoaXMgaXMgZXNwZWNpYWxseVxuICAgKiB1c2VmdWwgZm9yIERvY2tlciBidWlsZHMuXG4gICAqL1xuICBza2lwVmFsaWRhdGlvbjogISFwcm9jZXNzLmVudi5TS0lQX0VOVl9WQUxJREFUSU9OLFxuICAvKipcbiAgICogTWFrZXMgaXQgc28gdGhhdCBlbXB0eSBzdHJpbmdzIGFyZSB0cmVhdGVkIGFzIHVuZGVmaW5lZC4gYFNPTUVfVkFSOiB6LnN0cmluZygpYCBhbmRcbiAgICogYFNPTUVfVkFSPScnYCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgKi9cbiAgZW1wdHlTdHJpbmdBc1VuZGVmaW5lZDogdHJ1ZSxcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUVudiIsInoiLCJlbnYiLCJzZXJ2ZXIiLCJEQVRBQkFTRV9VUkwiLCJzdHJpbmciLCJ1cmwiLCJyZWZpbmUiLCJzdHIiLCJpbmNsdWRlcyIsIk5PREVfRU5WIiwiZW51bSIsImRlZmF1bHQiLCJORVhUQVVUSF9TRUNSRVQiLCJwcm9jZXNzIiwib3B0aW9uYWwiLCJORVhUQVVUSF9VUkwiLCJwcmVwcm9jZXNzIiwiVkVSQ0VMX1VSTCIsIlZFUkNFTCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkRJU0NPUkRfQ0xJRU5UX0lEIiwiRElTQ09SRF9DTElFTlRfU0VDUkVUIiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJTVFJJUEVfV0VCSE9PS19TRUNSRVQiLCJTVFJJUEVfUFJJQ0VfSUQiLCJjbGllbnQiLCJORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEFCTEVfS0VZIiwicnVudGltZUVudiIsInNraXBWYWxpZGF0aW9uIiwiU0tJUF9FTlZfVkFMSURBVElPTiIsImVtcHR5U3RyaW5nQXNVbmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/env.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/zod","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/@auth","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@t3-oss","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fruben%2FDesktop%2Fprojects%2Fsuscription-template%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fruben%2FDesktop%2Fprojects%2Fsuscription-template&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();