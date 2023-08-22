(() => {
var exports = {};
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 17160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 12336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 60120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 70982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 78423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 27764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'titulos',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64050)), "G:\\desarrollo\\nodeJS\\BrandonMRT.github.io\\src\\app\\titulos\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64127)), "G:\\desarrollo\\nodeJS\\BrandonMRT.github.io\\src\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["G:\\desarrollo\\nodeJS\\BrandonMRT.github.io\\src\\app\\titulos\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/titulos/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/titulos/page",
        pathname: "/titulos",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 474:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 85868:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 33987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 23613, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 76267, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16614, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1853, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43872));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 26566, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 39966, 23))

/***/ }),

/***/ 64050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarredPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62947);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85232);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58811);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48476);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11692);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MediaCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94323);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72964);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);








const Credly = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 472).then(__webpack_require__.bind(__webpack_require__, 38472)), {
    loadableGenerated: {
        modules: [
            "G:\\desarrollo\\nodeJS\\BrandonMRT.github.io\\src\\app\\titulos\\page.tsx -> " + "@/components/Credly"
        ]
    },
    ssr: false
});
const CredlyLib = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 805).then(__webpack_require__.bind(__webpack_require__, 21805)), {
    loadableGenerated: {
        modules: [
            "G:\\desarrollo\\nodeJS\\BrandonMRT.github.io\\src\\app\\titulos\\page.tsx -> " + "@/components/CredlyLib"
        ]
    },
    ssr: false
});
function StarredPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                        variant: "body1",
                        gutterBottom: true,
                        children: "Durante a\xf1os me he capacitado en distintas ramas del desarrollo, tanto front-end como back-end"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                        container: true,
                        rowSpacing: 3,
                        columnSpacing: 3,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Ingenieria en sistemas computacionales (2017-2020)",
                                    text: "Egresado de la universidad tecnologica en linea con promedio de 8.3, cedula profesional #12208637",
                                    url: "pdfs/013986.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Tecnico en computacion (2010-2012)",
                                    text: "Egresado como tecnico en computaci\xf3n en la Escuela Nacional Preparatoria Plantel 9 con mencion honorifica",
                                    url: ""
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Certificaciones y medallas"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                        container: true,
                        rowSpacing: 3,
                        columnSpacing: 3,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "c49c5623-de2a-4f85-a8f1-33be52a18783"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "aff7860e-5bb2-4aa9-a4b7-6e91565d3ab4"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "8736f500-bec7-4f95-8b53-3677eb4c1f27"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "db8ec3a8-32ca-4535-bfbf-3c2c766a9838"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "41c5aa21-f027-4f13-bce9-61ae04516d88"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "256d984a-5ed9-4e00-8452-d3d313004ac0"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "0336d5e3-6c7e-47ca-86a3-9cff69e9e78d"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "aff7860e-5bb2-4aa9-a4b7-6e91565d3ab4"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "aff7860e-5bb2-4aa9-a4b7-6e91565d3ab4"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "46996678-6ae1-4020-a755-37048bafbf1c"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 2,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Credly, {
                                    badgeId: "543fb99f-1624-4e85-a92b-619279d11e57"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                        container: true,
                        rowSpacing: 3,
                        columnSpacing: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                heading: "ITILv3 Foundations",
                                text: "Manejo del ciclo de vida con buenas practicas",
                                url: "https://www.axelos.com/successful-candidates-register/"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Cursos platzi"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                        container: true,
                        rowSpacing: 3,
                        columnSpacing: 3,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Curso basica de Javascript",
                                    text: "",
                                    url: "pdfs/diploma-basico-javascript.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Bases de datos",
                                    text: "",
                                    url: "pdfs/diploma-bd.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Dise\xf1o web para programadores",
                                    text: "",
                                    url: "pdfs/diploma-diseno-programadores.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Fundamentos javascript",
                                    text: "",
                                    url: "pdfs/diploma-fundamentos-javascript-2018.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Fundamentos nodejs",
                                    text: "",
                                    url: "pdfs/diploma-fundamentos-node.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Git",
                                    text: "",
                                    url: "pdfs/diploma-git-github.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Laravel",
                                    text: "",
                                    url: "pdfs/diploma-intro-laravel-2020.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "PHP",
                                    text: "",
                                    url: "pdfs/diploma-introduccion-php-2018.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Programaci\xf3n orientada a objetos",
                                    text: "",
                                    url: "pdfs/diploma-oop.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Frameworks PHP",
                                    text: "",
                                    url: "pdfs/diploma-php-frameworks.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Programaci\xf3n orientada a objetos con python",
                                    text: "",
                                    url: "pdfs/diploma-poo-python.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Prework con windows",
                                    text: "",
                                    url: "pdfs/diploma-prework-windows.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "SQL y MySQL",
                                    text: "",
                                    url: "pdfs/diploma-sql-mysql.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Terminal",
                                    text: "",
                                    url: "pdfs/diploma-terminal.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Complejidad algoritmica con python",
                                    text: "",
                                    url: "pdfs/diploma-algoritmos-python.pdf"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_7___default()), {
                                xs: 3,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MediaCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    heading: "Introduccion a java",
                                    text: "",
                                    url: "pdfs/diploma-java-basico.pdf"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CredlyLib, {})
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [623,941,142,964,935,323], () => (__webpack_exec__(27764)));
module.exports = __webpack_exports__;

})();