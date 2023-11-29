"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_handlerAcess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/handlerAcess */ \"(app-pages-browser)/./src/app/functions/handlerAcess.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const { push, refresh } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handlerLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            console.log(user);\n            const userAuth = await (0,_functions_handlerAcess__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user);\n            if (userAuth.token === undefined) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Erro no e-mail ou senha!\");\n            }\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success();\n            push(\"/pages/dashboard\");\n        } catch (e) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Erro no servidor.\");\n            refresh(\"/\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"login-form\",\n                onSubmit: handlerLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"E-mail\",\n                        type: \"email\",\n                        required: true,\n                        onChange: (e)=>{\n                            setUser({\n                                ...user,\n                                email: e.target.value\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Senha\",\n                        type: \"password\",\n                        required: true,\n                        onChange: (e)=>{\n                            setUser({\n                                ...user,\n                                password: e.target.value\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button-login\",\n                        children: \"Entrar\"\n                    }, void 0, false, {\n                        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"0uvQgAHo742mrs9WtyoKmc1vlUc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDZTtBQUNYO0FBQ1c7QUFDUjtBQUN4QjtBQUVSLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7UUFDL0JRLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0EsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHVCwwREFBU0E7SUFFbkMsTUFBTVUsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0ZDLFFBQVFDLEdBQUcsQ0FBQ1Y7WUFDWixNQUFNVyxXQUFXLE1BQU1oQixtRUFBZ0JBLENBQUNLO1lBQ3hDLElBQUdXLFNBQVNDLEtBQUssS0FBS0MsV0FBVTtnQkFDOUJmLGlEQUFLQSxDQUFDZ0IsS0FBSyxDQUFDO1lBQ2Q7WUFDQWhCLGlEQUFLQSxDQUFDaUIsT0FBTztZQUNiWCxLQUFLO1FBQ1AsRUFBRSxVQUFNO1lBQ05OLGlEQUFLQSxDQUFDZ0IsS0FBSyxDQUFDO1lBQ1pULFFBQVE7UUFDVjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTtnQkFBYUUsVUFBVWI7O2tDQUN2Qyw4REFBQ2M7a0NBQUc7Ozs7OztrQ0FDRiw4REFBQ0M7d0JBQ0NDLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xDLFFBQVE7d0JBQ1JDLFVBQVUsQ0FBQ2xCOzRCQUFRTixRQUFRO2dDQUFFLEdBQUdELElBQUk7Z0NBQUVFLE9BQU9LLEVBQUVtQixNQUFNLENBQUNDLEtBQUs7NEJBQUM7d0JBQUc7Ozs7OztrQ0FFakUsOERBQUNOO3dCQUNDQyxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxVQUFVLENBQUNsQjs0QkFBUU4sUUFBUTtnQ0FBRSxHQUFHRCxJQUFJO2dDQUFFRyxVQUFVSSxFQUFFbUIsTUFBTSxDQUFDQyxLQUFLOzRCQUFDO3dCQUFHOzs7Ozs7a0NBRXBFLDhEQUFDQzt3QkFBT1gsV0FBVTtrQ0FBZTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ3BCLDBEQUFjQTs7Ozs7Ozs7Ozs7QUFHckI7R0EzQ3dCRTs7UUFLSUgsc0RBQVNBOzs7S0FMYkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaGFuZGxlckFjZXNzVXNlciBmcm9tIFwiLi9mdW5jdGlvbnMvaGFuZGxlckFjZXNzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KTtcclxuICBjb25zdCB7IHB1c2gsIHJlZnJlc2ggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVyTG9naW4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIGNvbnN0IHVzZXJBdXRoID0gYXdhaXQgaGFuZGxlckFjZXNzVXNlcih1c2VyKTtcclxuICAgICAgaWYodXNlckF1dGgudG9rZW4gPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvIG5vIGUtbWFpbCBvdSBzZW5oYSFcIik7XHJcbiAgICAgIH1cclxuICAgICAgdG9hc3Quc3VjY2VzcygpXHJcbiAgICAgIHB1c2goXCIvcGFnZXMvZGFzaGJvYXJkXCIpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJybyBubyBzZXJ2aWRvci5cIik7XHJcbiAgICAgIHJlZnJlc2goJy8nKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlckxvZ2lufT5cclxuICAgICAgPGgyPkxvZ2luPC9oMj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFLW1haWwnXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRVc2VyKHsgLi4udXNlciwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pIH19PlxyXG4gICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VuaGEnXHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0VXNlcih7IC4uLnVzZXIsIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KSB9fT5cclxuICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWxvZ2luXCI+RW50cmFyPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVyQWNlc3NVc2VyIiwidXNlUm91dGVyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIkxvZ2luIiwidXNlciIsInNldFVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicHVzaCIsInJlZnJlc2giLCJoYW5kbGVyTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXNlckF1dGgiLCJ0b2tlbiIsInVuZGVmaW5lZCIsImVycm9yIiwic3VjY2VzcyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImgyIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});