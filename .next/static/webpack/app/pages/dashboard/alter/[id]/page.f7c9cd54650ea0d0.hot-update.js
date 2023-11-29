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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Alterar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _app_componentes_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/componentes/NavBar */ \"(app-pages-browser)/./src/app/componentes/NavBar.js\");\n/* harmony import */ var _app_functions_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/functions/handlerAcessAPI */ \"(app-pages-browser)/./src/app/functions/handlerAcessAPI.js\");\n/* harmony import */ var _estilo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./estilo.css */ \"(app-pages-browser)/./src/app/pages/dashboard/alter/[id]/estilo.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nasync function Alterar(param) {\n    let { params } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const userFind = await (0,_app_functions_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_6__.getOneUser)(params.id);\n                setUser({\n                    ...user,\n                    name: userFind.name,\n                    email: userFind.email,\n                    password: userFind.password\n                });\n            } catch (error) {\n                console.error(\"Erro ao buscar usu\\xe1rio\", error);\n            }\n        };\n        fetchData();\n    }, [\n        params.id\n    ]);\n    const handlerFormSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            await (0,_app_functions_handlerAcessAPI__WEBPACK_IMPORTED_MODULE_6__.putUser)(user, params.id);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Usu\\xe1rio atualizado com sucesso!!\");\n            setTimeout(()=>router.push(\"/pages/dashboard/\"), 5000);\n        } catch (error) {\n            console.error(\"Erro ao atualizar usu\\xe1rio\", error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao atualizar usu\\xe1rio!!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"alter\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_componentes_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"alter-form\",\n                        onSubmit: handlerFormSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Atualizar\"\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 47,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Nome\",\n                                type: \"text\",\n                                value: user.name,\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        name: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"E-mail\",\n                                type: \"email\",\n                                value: user.email,\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        email: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Senha\",\n                                type: \"password\",\n                                value: user.password,\n                                required: true,\n                                onChange: (e)=>{\n                                    setUser({\n                                        ...user,\n                                        password: e.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 62,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button-submit\",\n                                children: \"Atualizar\"\n                            }, void 0, false, {\n                                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/Aplication-Users/src/app/pages/dashboard/alter/[id]/page.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Alterar, \"aLNQJhKV1zcNZeViVx3/jbMHMm4=\");\n_c = Alterar;\nvar _c;\n$RefreshReg$(_c, \"Alterar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2FsdGVyL1tpZF0vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1g7QUFDZTtBQUNSO0FBQ0Q7QUFDd0I7QUFDaEQ7QUFFUCxlQUFlUyxRQUFRLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFDcEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO1FBQy9CWSxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBRUNiLGdEQUFTQSxDQUFDO1FBQ1QsTUFBTWMsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVQsMEVBQVVBLENBQUNFLE9BQU9RLEVBQUU7Z0JBQzNDTixRQUFRO29CQUFFLEdBQUdELElBQUk7b0JBQUVFLE1BQU1JLFNBQVNKLElBQUk7b0JBQUVDLE9BQU9HLFNBQVNILEtBQUs7b0JBQUVDLFVBQVVFLFNBQVNGLFFBQVE7Z0JBQUM7WUFDN0YsRUFBRSxPQUFPSSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTBCQTtZQUMxQztRQUNGO1FBRUFIO0lBQ0YsR0FBRztRQUFDTixPQUFPUSxFQUFFO0tBQUM7SUFFZCxNQUFNRyxvQkFBb0IsT0FBT0M7UUFDL0JBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSTtZQUNGLE1BQU1oQix1RUFBT0EsQ0FBQ0ksTUFBTUQsT0FBT1EsRUFBRTtZQUM3QmIsaURBQUtBLENBQUNtQixPQUFPLENBQUM7WUFDZEMsV0FBVyxJQUFNQyxPQUFPQyxJQUFJLENBQUMsc0JBQXNCO1FBQ3JELEVBQUUsT0FBT1IsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQTZCQTtZQUMzQ2QsaURBQUtBLENBQUNjLEtBQUssQ0FBQztRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN2QiwrREFBTUE7Ozs7OzBCQUNULDhEQUFDc0I7Z0JBQUlFLE9BQU07O2tDQUNULDhEQUFDQzt3QkFBS0YsV0FBVTt3QkFBYUcsVUFBVVg7OzBDQUN2Qyw4REFBQ1k7MENBQUc7Ozs7OzswQ0FDRiw4REFBQ0M7Z0NBQ0NDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xDLE9BQU8xQixLQUFLRSxJQUFJO2dDQUNoQnlCLFFBQVE7Z0NBQ1JDLFVBQVUsQ0FBQ0M7b0NBQVE1QixRQUFRO3dDQUFFLEdBQUdELElBQUk7d0NBQUVFLE1BQU0yQixFQUFFQyxNQUFNLENBQUNKLEtBQUs7b0NBQUM7Z0NBQUc7Ozs7OzswQ0FFaEUsOERBQUNIO2dDQUNDQyxhQUFZO2dDQUNaQyxNQUFLO2dDQUNMQyxPQUFPMUIsS0FBS0csS0FBSztnQ0FDakJ3QixRQUFRO2dDQUNSQyxVQUFVLENBQUNDO29DQUFRNUIsUUFBUTt3Q0FBRSxHQUFHRCxJQUFJO3dDQUFFRyxPQUFPMEIsRUFBRUMsTUFBTSxDQUFDSixLQUFLO29DQUFDO2dDQUFHOzs7Ozs7MENBRWpFLDhEQUFDSDtnQ0FDQ0MsYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTEMsT0FBTzFCLEtBQUtJLFFBQVE7Z0NBQ3BCdUIsUUFBUTtnQ0FDUkMsVUFBVSxDQUFDQztvQ0FBUTVCLFFBQVE7d0NBQUUsR0FBR0QsSUFBSTt3Q0FBRUksVUFBVXlCLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSztvQ0FBQztnQ0FBRzs7Ozs7OzBDQUVwRSw4REFBQ0s7Z0NBQU9iLFdBQVU7MENBQWdCOzs7Ozs7Ozs7Ozs7a0NBRXBDLDhEQUFDekIsMERBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtHQWpFOEJLO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2FsdGVyL1tpZF0vcGFnZS5qcz9kNTY5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCJAL2FwcC9jb21wb25lbnRlcy9OYXZCYXJcIjtcclxuaW1wb3J0IHsgcHV0VXNlciwgZ2V0T25lVXNlciB9IGZyb20gXCJAL2FwcC9mdW5jdGlvbnMvaGFuZGxlckFjZXNzQVBJXCI7XHJcbmltcG9ydCAnLi9lc3RpbG8uY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEFsdGVyYXIoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gIH0pO1xyXG5cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyRmluZCA9IGF3YWl0IGdldE9uZVVzZXIocGFyYW1zLmlkKTtcclxuICAgICAgICBzZXRVc2VyKHsgLi4udXNlciwgbmFtZTogdXNlckZpbmQubmFtZSwgZW1haWw6IHVzZXJGaW5kLmVtYWlsLCBwYXNzd29yZDogdXNlckZpbmQucGFzc3dvcmQgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYnVzY2FyIHVzdcOhcmlvXCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbcGFyYW1zLmlkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJGb3JtU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcHV0VXNlcih1c2VyLCBwYXJhbXMuaWQpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiVXN1w6FyaW8gYXR1YWxpemFkbyBjb20gc3VjZXNzbyEhXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJvdXRlci5wdXNoKFwiL3BhZ2VzL2Rhc2hib2FyZC9cIiksIDUwMDApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYXR1YWxpemFyIHVzdcOhcmlvXCIsIGVycm9yKTtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvIGFvIGF0dWFsaXphciB1c3XDoXJpbyEhXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWx0ZXJcIj5cclxuICAgICAgPE5hdkJhciAvPiAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhbHRlci1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZXJGb3JtU3VibWl0fT5cclxuICAgICAgPGgyPkF0dWFsaXphcjwvaDI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nTm9tZSdcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXt1c2VyLm5hbWV9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFVzZXIoeyAuLi51c2VyLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSB9fT5cclxuICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0UtbWFpbCdcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17dXNlci5lbWFpbH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0VXNlcih7IC4uLnVzZXIsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KSB9fT5cclxuICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbmhhJ1xyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICB2YWx1ZT17dXNlci5wYXNzd29yZH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0VXNlcih7IC4uLnVzZXIsIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KSB9fT5cclxuICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXN1Ym1pdFwiPkF0dWFsaXphcjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJOYXZCYXIiLCJwdXRVc2VyIiwiZ2V0T25lVXNlciIsIkFsdGVyYXIiLCJwYXJhbXMiLCJ1c2VyIiwic2V0VXNlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2hEYXRhIiwidXNlckZpbmQiLCJpZCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZXJGb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN1Y2Nlc3MiLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNsYXNzIiwiZm9ybSIsIm9uU3VibWl0IiwiaDIiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/dashboard/alter/[id]/page.js\n"));

/***/ })

});