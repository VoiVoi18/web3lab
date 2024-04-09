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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/Map.js":
/*!**********************!*\
  !*** ./pages/Map.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pbe/react-yandex-maps */ \"@pbe/react-yandex-maps\");\n/* harmony import */ var _pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Mapp = ({ apiKey  })=>{\n    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [shops, setShops] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [newShop, setNewShop] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        lat: null,\n        lng: null,\n        address: \"\"\n    });\n    const [newLocation, setNewLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function LoadShops() {\n            try {\n                const response = await fetch(\"/api/getShops\");\n                response?.text().then((v)=>{\n                    setShops(JSON.parse(v));\n                });\n            } catch (error) {\n                console.error(\"Ошибка при загрузке магазинов:\", error);\n            }\n        }\n        LoadShops();\n    }, []);\n    console.log(shops);\n    const handleInputChange = (e)=>{\n        const { name , value  } = e.target;\n        setNewShop({\n            ...newShop,\n            [name]: value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!coordinate) return;\n        const location = {\n            name: e.target[0].value,\n            lat: coordinate[0],\n            lng: coordinate[1]\n        };\n        addShop(location);\n    };\n    const addShop = async (shop)=>{\n        try {\n            const response = await fetch(\"/api/Shops\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(shop)\n            });\n            setCoordinate(null);\n            setShops([\n                ...shops,\n                shop\n            ]);\n        } catch (error) {\n            console.error(\"Ошибка при добавлении зоо магазина:\", error);\n        }\n    };\n    const [coordinate, setCoordinate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__.YMaps, {\n                query: {\n                    apikey: \"c8e6b5c9-a3f4-4661-b3cf-19a98a30f154\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        height: \"400px\",\n                        width: \"1000px\",\n                        paddingLeft: \"200px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__.Map, {\n                        width: \"100%\",\n                        height: \"100%\",\n                        onClick: (e)=>{\n                            const coords = e.get(\"coords\");\n                            console.log(coords);\n                            setCoordinate(coords);\n                        },\n                        state: {\n                            center: [\n                                55.751574,\n                                37.573856\n                            ],\n                            zoom: 13\n                        },\n                        children: [\n                            shops.map((shop)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__.Placemark, {\n                                    geometry: [\n                                        shop.lat,\n                                        shop.lng\n                                    ]\n                                }, JSON.stringify([\n                                    shop.lat,\n                                    shop.lng\n                                ]), false, {\n                                    fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 43\n                                }, undefined)),\n                            coordinate && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pbe_react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__.Placemark, {\n                                geometry: coordinate,\n                                pinColor: \"#FFfff0\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n                                lineNumber: 85,\n                                columnNumber: 38\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                style: {\n                    paddingTop: \"50px\",\n                    paddingLeft: \"400px\"\n                },\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        placeholder: \"Название\",\n                        value: newShop.name,\n                        onChange: handleInputChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Добавить зоо магазин\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\Map.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mapp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtrQixTQUFTLENBQUM7b0NBQUNKLEtBQUt6QixHQUFHO29DQUFFeUIsS0FBS3hCLEdBQUc7aUNBQUM7Ozs7OzRCQUNwRXFCLDRCQUFZLDhEQUFDcEMsNkRBQVNBO2dDQUFDMEQsVUFBVXRCO2dDQUFZdUIsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbkUsOERBQUNDO2dCQUFLWixPQUFPO29CQUFDYSxZQUFXO29CQUFRVixhQUFZO2dCQUFPO2dCQUFHVyxVQUFVNUI7O2tDQUNqRSw4REFBQzZCO3dCQUFNQyxNQUFLO3dCQUFPbkQsTUFBSzt3QkFBT29ELGFBQVk7d0JBQVdqQyxPQUFPckIsUUFBUUUsSUFBSTt3QkFBRXFELFVBQVVwQzt3QkFDOUVxQyxRQUFROzs7Ozs7a0NBQ2YsOERBQUNDO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7QUFFQSxpRUFBZTNELElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLTEvLi9wYWdlcy9NYXAuanM/Y2IwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtNYXAsIFBsYWNlbWFyaywgWU1hcHN9IGZyb20gJ0BwYmUvcmVhY3QteWFuZGV4LW1hcHMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBNYXBwID0gKHsgYXBpS2V5IH0pID0+IHtcclxuICAgIGNvbnN0IFttYXAsIHNldE1hcF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzaG9wcywgc2V0U2hvcHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25ld1Nob3AsIHNldE5ld1Nob3BdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGxhdDogbnVsbCxcclxuICAgICAgICBsbmc6IG51bGwsXHJcbiAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtuZXdMb2NhdGlvbiwgc2V0TmV3TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBMb2FkU2hvcHMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dldFNob3BzJyk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZT8udGV4dCgpLnRoZW4odj0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG9wcyhKU09OLnBhcnNlKHYpKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0LzQsNCz0LDQt9C40L3QvtCyOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBMb2FkU2hvcHMoKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNob3BzKVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNldE5ld1Nob3Aoe1xyXG4gICAgICAgICAgICAuLi5uZXdTaG9wLFxyXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIWNvb3JkaW5hdGUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICBuYW1lOmUudGFyZ2V0WzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBsYXQgOiBjb29yZGluYXRlWzBdLFxyXG4gICAgICAgICAgICBsbmcgOiBjb29yZGluYXRlWzFdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZFNob3AobG9jYXRpb24pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkU2hvcCA9IGFzeW5jIChzaG9wKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9TaG9wcycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2hvcCksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29vcmRpbmF0ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvcHMoWy4uLnNob3BzLCBzaG9wXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQtNC+0LHQsNCy0LvQtdC90LjQuCDQt9C+0L4g0LzQsNCz0LDQt9C40L3QsDonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgW2Nvb3JkaW5hdGUsIHNldENvb3JkaW5hdGVdID0gdXNlU3RhdGUobnVsbClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFlNYXBzICBxdWVyeT17eyBhcGlrZXk6ICdjOGU2YjVjOS1hM2Y0LTQ2NjEtYjNjZi0xOWE5OGEzMGYxNTQnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonNDAwcHgnLCB3aWR0aDonMTAwMHB4JywgcGFkZGluZ0xlZnQ6JzIwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXAgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGUuZ2V0KFwiY29vcmRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb29yZGluYXRlKGNvb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3tjZW50ZXI6IFs1NS43NTE1NzQsIDM3LjU3Mzg1Nl0sIHpvb206IDEzfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG9wcy5tYXAoc2hvcD0+IDxQbGFjZW1hcmsga2V5PXtKU09OLnN0cmluZ2lmeShbc2hvcC5sYXQsIHNob3AubG5nXSl9IGdlb21ldHJ5PXtbc2hvcC5sYXQsIHNob3AubG5nXX0vPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb29yZGluYXRlJiY8UGxhY2VtYXJrIGdlb21ldHJ5PXtjb29yZGluYXRlfSBwaW5Db2xvcj0nI0ZGZmZmMCcvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L01hcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1lNYXBzPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gc3R5bGU9e3twYWRkaW5nVG9wOic1MHB4JywgcGFkZGluZ0xlZnQ6JzQwMHB4J319IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtVwiIHZhbHVlPXtuZXdTaG9wLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+0JTQvtCx0LDQstC40YLRjCDQt9C+0L4g0LzQsNCz0LDQt9C40L08L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG4pXHJcbiAgICA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBwOyJdLCJuYW1lcyI6WyJNYXAiLCJQbGFjZW1hcmsiLCJZTWFwcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYXBwIiwiYXBpS2V5IiwibWFwIiwic2V0TWFwIiwic2hvcHMiLCJzZXRTaG9wcyIsIm5ld1Nob3AiLCJzZXROZXdTaG9wIiwibmFtZSIsImxhdCIsImxuZyIsImFkZHJlc3MiLCJuZXdMb2NhdGlvbiIsInNldE5ld0xvY2F0aW9uIiwiTG9hZFNob3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsInRleHQiLCJ0aGVuIiwidiIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb29yZGluYXRlIiwibG9jYXRpb24iLCJhZGRTaG9wIiwic2hvcCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5Iiwic2V0Q29vcmRpbmF0ZSIsImRpdiIsInF1ZXJ5IiwiYXBpa2V5Iiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZGRpbmdMZWZ0Iiwib25DbGljayIsImNvb3JkcyIsImdldCIsInN0YXRlIiwiY2VudGVyIiwiem9vbSIsImdlb21ldHJ5IiwicGluQ29sb3IiLCJmb3JtIiwicGFkZGluZ1RvcCIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Map.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map */ \"./pages/Map.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);\naxios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Home() {\n    const apiKey = \"c8e6b5c9-a3f4-4661-b3cf-19a98a30f154\";\n    const [Shops, setShops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchShops = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/Shops\");\n                setShops(response.data);\n            } catch (error) {\n                console.error(\"Ошибка при загрузке данных о магазинах:\", error);\n            }\n        };\n        fetchShops();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    paddingLeft: \"400px\"\n                },\n                children: \"Зоо Магазины\"\n            }, void 0, false, {\n                fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                apiKey: apiKey,\n                Shops: Shops\n            }, void 0, false, {\n                fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\папка\\\\3.2metod\\\\3.2metod\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDMUI7QUFDQztBQUVYLFNBQVNLLE9BQU87SUFDM0IsTUFBTUMsU0FBUztJQUNmLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTVEsYUFBYSxVQUFZO1lBQzNCLElBQUk7Z0JBQ0EsTUFBTUMsV0FBVyxNQUFNTixpREFBUyxDQUFDO2dCQUNqQ0ksU0FBU0UsU0FBU0UsSUFBSTtZQUMxQixFQUFFLE9BQU9DLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQywyQ0FBMkNBO1lBQzdEO1FBQ0o7UUFDQUo7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ007OzBCQUNHLDhEQUFDQztnQkFBR0MsT0FBTztvQkFBQ0MsYUFBWTtnQkFBTzswQkFBRzs7Ozs7OzBCQUNsQyw4REFBQ2YsNENBQUlBO2dCQUFDRyxRQUFRQTtnQkFBUUMsT0FBT0E7Ozs7Ozs7Ozs7OztBQUd6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS0xLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYXBwIGZyb20gJy4vTWFwJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgYXBpS2V5ID0gJ2M4ZTZiNWM5LWEzZjQtNDY2MS1iM2NmLTE5YTk4YTMwZjE1NCc7XG4gICAgY29uc3QgW1Nob3BzLCBzZXRTaG9wc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFNob3BzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9TaG9wcycpO1xuICAgICAgICAgICAgICAgIHNldFNob3BzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0LTQsNC90L3Ri9GFINC+INC80LDQs9Cw0LfQuNC90LDRhTonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoU2hvcHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7cGFkZGluZ0xlZnQ6JzQwMHB4J319PtCX0L7QviDQnNCw0LPQsNC30LjQvdGLPC9oMT5cbiAgICAgICAgICAgIDxNYXBwIGFwaUtleT17YXBpS2V5fSBTaG9wcz17U2hvcHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1hcHAiLCJheGlvcyIsIkhvbWUiLCJhcGlLZXkiLCJTaG9wcyIsInNldFNob3BzIiwiZmV0Y2hTaG9wcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgxIiwic3R5bGUiLCJwYWRkaW5nTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@pbe/react-yandex-maps":
/*!*****************************************!*\
  !*** external "@pbe/react-yandex-maps" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@pbe/react-yandex-maps");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();