"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _app_functions_validateToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/functions/validateToken */ \"(middleware)/./src/app/functions/validateToken.js\");\n\"use server\";\n\n\nconst middleware = (request)=>{\n    const token = request.cookies.get(\"token\")?.value;\n    const urlLogin = new URL(\"/\", request.url);\n    const urlDashboard = new URL(\"/pages/dashboard\", request.url);\n    const isTokenValidated = (0,_app_functions_validateToken__WEBPACK_IMPORTED_MODULE_1__.validateToken)(token);\n    if (!isTokenValidated || !token) {\n        if (request.nextUrl.pathname === \"/pages/dashboard\" || request.nextUrl.pathname === \"/pages/register\" || request.nextUrl.pathname === \"/pages/alter\") {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(urlLogin);\n        }\n    }\n    if (true) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(urlDashboard);\n    }\n    next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n};\nconst config = {\n    matcher: [\n        \"/\",\n        \"/pages/dashboard\",\n        \"/pages/register\",\n        \"/pages/alter\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRTJDO0FBQ21CO0FBRXZELE1BQU1FLGFBQWEsQ0FBQ0M7SUFFdkIsTUFBTUMsUUFBUUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUM7SUFDNUMsTUFBTUMsV0FBVyxJQUFJQyxJQUFJLEtBQUtOLFFBQVFPLEdBQUc7SUFDekMsTUFBTUMsZUFBZSxJQUFJRixJQUFJLG9CQUFvQk4sUUFBUU8sR0FBRztJQUM1RCxNQUFNRSxtQkFBbUJYLDJFQUFhQSxDQUFDRztJQUV2QyxJQUFJLENBQUNRLG9CQUFvQixDQUFDUixPQUFPO1FBQzdCLElBQUlELFFBQVFVLE9BQU8sQ0FBQ0MsUUFBUSxLQUFLLHNCQUFzQlgsUUFBUVUsT0FBTyxDQUFDQyxRQUFRLEtBQUsscUJBQXFCWCxRQUFRVSxPQUFPLENBQUNDLFFBQVEsS0FBSyxnQkFBZ0I7WUFDbEosT0FBT2Qsa0ZBQVlBLENBQUNlLFFBQVEsQ0FBQ1A7UUFDakM7SUFDSjtJQUNBLElBQUcsSUFBSSxFQUFFO1FBQ0wsT0FBT1Isa0ZBQVlBLENBQUNlLFFBQVEsQ0FBQ0o7SUFDakM7SUFDQVgsa0ZBQVlBLENBQUNnQixJQUFJO0FBQ3JCLEVBQUU7QUFDSyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQUM7UUFBSztRQUFvQjtRQUFtQjtLQUFlO0FBQ3pFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUuanM/YTQ5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVRva2VuIH0gZnJvbSBcIi4vYXBwL2Z1bmN0aW9ucy92YWxpZGF0ZVRva2VuXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZSA9IChyZXF1ZXN0KSA9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCd0b2tlbicpPy52YWx1ZTtcclxuICAgIGNvbnN0IHVybExvZ2luID0gbmV3IFVSTCgnLycsIHJlcXVlc3QudXJsKTtcclxuICAgIGNvbnN0IHVybERhc2hib2FyZCA9IG5ldyBVUkwoJy9wYWdlcy9kYXNoYm9hcmQnLCByZXF1ZXN0LnVybCk7XHJcbiAgICBjb25zdCBpc1Rva2VuVmFsaWRhdGVkID0gdmFsaWRhdGVUb2tlbih0b2tlbik7XHJcblxyXG4gICAgaWYgKCFpc1Rva2VuVmFsaWRhdGVkIHx8ICF0b2tlbikge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09ICcvcGFnZXMvZGFzaGJvYXJkJyB8fCByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09ICcvcGFnZXMvcmVnaXN0ZXInIHx8IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gJy9wYWdlcy9hbHRlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdCh1cmxMb2dpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QodXJsRGFzaGJvYXJkKTtcclxuICAgIH1cclxuICAgIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBbJy8nLCAnL3BhZ2VzL2Rhc2hib2FyZCcsICcvcGFnZXMvcmVnaXN0ZXInLCAnL3BhZ2VzL2FsdGVyJ11cclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJ2YWxpZGF0ZVRva2VuIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInVybExvZ2luIiwiVVJMIiwidXJsIiwidXJsRGFzaGJvYXJkIiwiaXNUb2tlblZhbGlkYXRlZCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInJlZGlyZWN0IiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});