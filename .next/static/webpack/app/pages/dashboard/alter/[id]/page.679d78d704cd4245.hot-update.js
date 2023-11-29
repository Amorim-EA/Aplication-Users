"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/dashboard/alter/[id]/page",{

/***/ "(app-pages-browser)/./src/app/pages/dashboard/alter/[id]/page.js":
/*!****************************************************!*\
  !*** ./src/app/pages/dashboard/alter/[id]/page.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Alterar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_componentes_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/componentes/NavBar */ \"(app-pages-browser)/./src/app/componentes/NavBar.js\");\n/* harmony import */ var _app_functions_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/functions/handlerAcessAPI */ \"(app-pages-browser)/./src/app/functions/handlerAcessAPI.js\");\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./estilo.css */ \"(app-pages-browser)/./src/app/pages/dashboard/alter/[id]/estilo.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Alterar(param) {\n    let { params } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    const userFind = async ()=>{\n        const userTaken = await (0,_app_functions_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_6__.getOneUser)(params.id);\n        setUser({\n            ...user,\n            name: userTaken.name,\n            email: userFind.email,\n            password: userFind.password\n        });\n    };\n    userFind();\n    const handlerFormSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            await (0,_app_functions_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_6__.putUser)(user, params.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Usu\\xe1rio atualizado com sucesso!!\");\n            setTimeout(()=>router.push(\"/pages/dashboard/\"), 5000);\n        } catch (error) {\n            console.error(\"Erro ao atualizar usu\\xe1rio\", error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao atualizar usu\\xe1rio!!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"alter\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_componentes_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"alter-form\",\n                        onSubmit: handlerFormSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Atualizar\"\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 41,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Nome\",\n                                type: \"text\",\n                                value: user.name,\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        name: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"E-mail\",\n                                type: \"email\",\n                                value: user.email,\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        email: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Senha\",\n                                type: \"password\",\n                                value: user.password,\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        password: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 56,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button-submit\",\n                                children: \"Atualizar\"\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 63,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Alterar, \"kKJ2fLQSImvRVX5VRo04C6Ytv+8=\");\n_c = Alterar;\nvar _c;\n$RefreshReg$(_c, \"Alterar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2FsdGVyL1tpZF0vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1g7QUFDZTtBQUNSO0FBQ0Q7QUFDd0I7QUFDaEQ7QUFFUCxTQUFTUyxRQUFRLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFDOUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO1FBQy9CWSxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBRUQsTUFBTUMsV0FBVztRQUNiLE1BQU1DLFlBQVksTUFBTVQsMEVBQVVBLENBQUNFLE9BQU9RLEVBQUU7UUFDNUNOLFFBQVE7WUFBRSxHQUFHRCxJQUFJO1lBQUVFLE1BQU1JLFVBQVVKLElBQUk7WUFBRUMsT0FBT0UsU0FBU0YsS0FBSztZQUFFQyxVQUFVQyxTQUFTRCxRQUFRO1FBQUM7SUFDaEc7SUFFREM7SUFFRSxNQUFNRyxvQkFBb0IsT0FBT0M7UUFDL0JBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSTtZQUNGLE1BQU1kLHVFQUFPQSxDQUFDSSxNQUFNRCxPQUFPUSxFQUFFO1lBQzdCYixpREFBS0EsQ0FBQ2lCLE9BQU8sQ0FBQztZQUNkQyxXQUFXLElBQU1DLE9BQU9DLElBQUksQ0FBQyxzQkFBc0I7UUFDckQsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBNkJBO1lBQzNDckIsaURBQUtBLENBQUNxQixLQUFLLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDdkIsK0RBQU1BOzs7OzswQkFDVCw4REFBQ3NCO2dCQUFJRSxPQUFNOztrQ0FDVCw4REFBQ0M7d0JBQUtGLFdBQVU7d0JBQWFHLFVBQVViOzswQ0FDdkMsOERBQUNjOzBDQUFHOzs7Ozs7MENBQ0YsOERBQUNDO2dDQUNDQyxhQUFZO2dDQUNaQyxNQUFLO2dDQUNMQyxPQUFPMUIsS0FBS0UsSUFBSTtnQ0FDaEJ5QixRQUFRO2dDQUNSQyxVQUFVLENBQUNDO29DQUFRNUIsUUFBUTt3Q0FBRSxHQUFHRCxJQUFJO3dDQUFFRSxNQUFNMkIsRUFBRUMsTUFBTSxDQUFDSixLQUFLO29DQUFDO2dDQUFHOzs7Ozs7MENBRWhFLDhEQUFDSDtnQ0FDQ0MsYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTEMsT0FBTzFCLEtBQUtHLEtBQUs7Z0NBQ2pCd0IsUUFBUTtnQ0FDUkMsVUFBVSxDQUFDQztvQ0FBUTVCLFFBQVE7d0NBQUUsR0FBR0QsSUFBSTt3Q0FBRUcsT0FBTzBCLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSztvQ0FBQztnQ0FBRzs7Ozs7OzBDQUVqRSw4REFBQ0g7Z0NBQ0NDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLE9BQU8xQixLQUFLSSxRQUFRO2dDQUNwQnVCLFFBQVE7Z0NBQ1JDLFVBQVUsQ0FBQ0M7b0NBQVE1QixRQUFRO3dDQUFFLEdBQUdELElBQUk7d0NBQUVJLFVBQVV5QixFQUFFQyxNQUFNLENBQUNKLEtBQUs7b0NBQUM7Z0NBQUc7Ozs7OzswQ0FFcEUsOERBQUNLO2dDQUFPYixXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7O2tDQUVwQyw4REFBQ3pCLDBEQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckI7R0EzRHdCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9hbHRlci9baWRdL3BhZ2UuanM/ZDU2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiQC9hcHAvY29tcG9uZW50ZXMvTmF2QmFyXCI7XHJcbmltcG9ydCB7IHB1dFVzZXIsIGdldE9uZVVzZXIgfSBmcm9tIFwiQC9hcHAvZnVuY3Rpb25zL2hhbmRsZXJBY2Vzc0FQSVwiO1xyXG5pbXBvcnQgJy4vZXN0aWxvLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbHRlcmFyKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KTtcclxuXHJcbiBjb25zdCB1c2VyRmluZCA9IGFzeW5jICgpID0+IHtcclxuICAgICBjb25zdCB1c2VyVGFrZW4gPSBhd2FpdCBnZXRPbmVVc2VyKHBhcmFtcy5pZCk7XHJcbiAgICAgc2V0VXNlcih7IC4uLnVzZXIsIG5hbWU6IHVzZXJUYWtlbi5uYW1lLCBlbWFpbDogdXNlckZpbmQuZW1haWwsIHBhc3N3b3JkOiB1c2VyRmluZC5wYXNzd29yZCB9KTtcclxuIH1cclxuIFxyXG51c2VyRmluZCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVyRm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHB1dFVzZXIodXNlciwgcGFyYW1zLmlkKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlVzdcOhcmlvIGF0dWFsaXphZG8gY29tIHN1Y2Vzc28hIVwiKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiByb3V0ZXIucHVzaChcIi9wYWdlcy9kYXNoYm9hcmQvXCIpLCA1MDAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGF0dWFsaXphciB1c3XDoXJpb1wiLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJybyBhbyBhdHVhbGl6YXIgdXN1w6FyaW8hIVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsdGVyXCI+XHJcbiAgICAgIDxOYXZCYXIgLz4gICBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYWx0ZXItZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVyRm9ybVN1Ym1pdH0+XHJcbiAgICAgIDxoMj5BdHVhbGl6YXI8L2gyPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J05vbWUnXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17dXNlci5uYW1lfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRVc2VyKHsgLi4udXNlciwgbmFtZTogZS50YXJnZXQudmFsdWUgfSkgfX0+XHJcbiAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFLW1haWwnXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXIuZW1haWx9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFVzZXIoeyAuLi51c2VyLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSkgfX0+XHJcbiAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZW5oYSdcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgdmFsdWU9e3VzZXIucGFzc3dvcmR9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFVzZXIoeyAuLi51c2VyLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSkgfX0+XHJcbiAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zdWJtaXRcIj5BdHVhbGl6YXI8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiTmF2QmFyIiwicHV0VXNlciIsImdldE9uZVVzZXIiLCJBbHRlcmFyIiwicGFyYW1zIiwidXNlciIsInNldFVzZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJGaW5kIiwidXNlclRha2VuIiwiaWQiLCJoYW5kbGVyRm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsInJvdXRlciIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzcyIsImZvcm0iLCJvblN1Ym1pdCIsImgyIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/dashboard/alter/[id]/page.js\n"));

/***/ })

});