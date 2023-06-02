"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navbar.js




const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fixed transition-all glass md:p-5 p-2 h-15 w-full items-center justify-start bottom-0 md:h-20 flex right-2 space-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden sm:flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    alt: "MTS",
                                    src: "/logo/black-transparent.png",
                                    width: 100,
                                    height: 40
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "transition-all icon-parent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "glass text-center flex flex-col text-black fixed left-14 text-xl p-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/vnm",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "glass p-1 m-1",
                                                        children: "VISION AND MISSION"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/story",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "glass p-1 m-1",
                                                        children: "OUR STORY"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: " glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            alt: "photo",
                                            src: "/icons/about.png",
                                            width: 30,
                                            height: 30
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/addmission",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "transition-all icon-parent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "glass text-center flex flex-col text-black fixed left-14 text-xl p-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/process",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "glass p-1 m-1",
                                                        children: "ADMISSION PROCCESS AT MTS"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/addmission",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "glass p-1 m-1",
                                                        children: "ADMISSION ENQUIRY FORM"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: " glass-blur md:p-3 p-1 flex justify-center items-center z-50 cursor-pointer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            alt: "photo",
                                            src: "/icons/addmission.png",
                                            width: 30,
                                            height: 30
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/gallery",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "transition-all icon-parent",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " glass-blur md:p-3 p-1 flex justify-center z-50 items-center cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        alt: "photo",
                                        src: "/icons/gallery.png",
                                        width: 30,
                                        height: 30
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: " hover:scale-75 transition-all hover:rotate-12 z-50",
                        href: "tel:9983760244",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "photo",
                            src: "/icons/call.png",
                            width: 40,
                            height: 40
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: " hover:scale-75 transition-all hover:rotate-12 z-50",
                        href: "mailto:contactmtsschool@gmail.com",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "photo",
                            src: "/icons/mail.png",
                            width: 40,
                            height: 40
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                dangerouslySetInnerHTML: {
                    __html: `
           (function (w, d, s, u) {
             w.gbwawc = {
               url: u,
               options: {
                 waId: "+91 9024543045",
                 siteName: "MTS School",
                 siteTag: "Usually reply in 5 minutes",
                 siteLogo: "https://lh3.googleusercontent.com/pw/AJFCJaVW1f4pmUzdB4HMLPgq2neI9XCtQFPuHCFIuWv5qiI3Xg_N83XoXP84kjAHJqaQ86INRfLIbEnyoZQqkGGw8nZsDPvJpFmjSwqtHu5l1lh2RJR6GB_8aMrXRCQdoPBF8yzmFC-JYyVdBzYW55SL1XQuV1sLHhDPSUZJ6uQ_WVTBfwtQFUDVjXwvG0IPMaQiW0qKHTV7nZVPz86rcPEoUTu5Tfub75T7R_JQWvQtaxcMP_gjz5gWVmtfGle-cW38Ty4P3EtpplPfHSOSG2NqapW0HTgkNW3CkuMu_HqHg6Uy3v_I7DvR-aVDlnwlAbPIwZvzNxi9HoKsYRRazIgUM-K-axMD6nkfa4LJMtKNc0bq0jXXqP3ji1eD_m6RwSHTZz5N1p7jadbqWN_ySQSlo_vhgpgyCDjSXhOqOz0MJhlfyM9K0tLxVBJOOdYkDNgZnZ_XUi0CHdo6YAiMIokXTYeu8XA5PyWaeMY26L2Rr4udTQqld3hMAkKV9j1sdsbv5vtCBsAJkfTFXFfM42bD9_UWqfiq4cdKu2v5VWPL6shH6nfdRt9z4cmWmZZA87lBzhPozffmWHju6FdBPsCTqnsQVLcmhf_eAIKrthDhwxn_6S7AoGqCPg61Ny3cSmuuALYYtnCgegZvTLVS3caOeSB5Cvxo5sV65roTRIvMQHoPuiQMi0s5xWuxXcsBKMq3vl37c5kIKWVfc7a8IyA7tpEZthIVHqtvPfEgqDaK9qGDtiVJrUgdY4jigHpbM2e7AqwqnkQFQfLmvTU1q692K5iy63h86QlB30n9cE-0iWI503zpLl97Ow1hFfSfCRiKIR_tqODQXkOP9YwqAkBHdSAJTdNdu8s0BHdVncQ4NCXgHtvlGoU2q0n_KO2HZm2fDKSmRBkGpD1XpceSsqTRHw=w505-h503-s-no?authuser=0",
                 widgetPosition: "RIGHT",
                 triggerMessage: "",
                 welcomeMessage: "Welcome to Mother Teressa Sr. Sec. School Baharawanda Kalan",
                 brandColor: "#25D366",
                 messageText: "Please Submit Your Query",
                 replyOptions: ["Looking for Addmission","Looking for Job", "Just Exploring"],
               }
             };
             let h = d.getElementsByTagName(s)[0],
             j = d.createElement(s);
             j.async = true;
             j.src = u + "/whatsapp-widget.min.js?_=" + Math.random();
             h.parentNode.insertBefore(j, h);
           })(window, document, "script", "https://waw.gallabox.com");
         `
                }
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Top.js



const Top = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex space-y-2 lg:space-y-0 flex-col lg:flex-row bg-gray-900 text-white font-bold text-sm p-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "left",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-widget widget_text header-left-widget",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "textwidget",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-white text-sm",
                                        children: [
                                            "Call us: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:9983760244",
                                                children: "+91 9983760244"
                                            }),
                                            " | Mother Teressa Sr. Sec. School"
                                        ]
                                    })
                                })
                            ]
                        }),
                        " "
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:absolute lg:right-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex flex-wrap justify-end space-x-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/career",
                                "aria-current": "page",
                                children: "CAREER"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "|"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/facilities",
                                children: "FACILITIES"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "|"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/sitemap",
                                children: "SITEMAP"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: "|"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                children: "CONTACT US"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Top = (Top);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Top, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {})
        ]
    });
}
;
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,676,664], () => (__webpack_exec__(349)));
module.exports = __webpack_exports__;

})();