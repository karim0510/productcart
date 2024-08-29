(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 7029:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: fetch failed\n    at node:internal/deps/undici/undici:12502:13");

/***/ }),

/***/ 2524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ product)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/octopus-logo.svg
/* harmony default export */ const octopus_logo = ({"src":"/_next/static/media/octopus-logo.50faffa9.svg","height":67,"width":470});
;// CONCATENATED MODULE: ./public/basket.svg
/* harmony default export */ const basket = ({"src":"/_next/static/media/basket.c8d74380.svg","height":512,"width":576});
// EXTERNAL MODULE: ./public/philips-plumen.jpg
var philips_plumen = __webpack_require__(7029);
var philips_plumen_default = /*#__PURE__*/__webpack_require__.n(philips_plumen);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/button.tsx

// This is a basic button component for this project.

const Button = (props)=>{
    const { content , backgroundColor , width , height , onClick  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: `inline-block rounded-lg bg-${backgroundColor} w-${width} h-${height} text-center text-lg font-medium text-black transition duration-150 hover:opacity-90 focus:outline-none active:bg-plum motion-reduce:transition-none`,
        onClick: onClick,
        children: content
    });
};
/* harmony default export */ const components_button = (Button);

;// CONCATENATED MODULE: ./components/specificationList.tsx

const SpecificationsList = (props)=>{
    const { title , content  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[50%]",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: content
            })
        ]
    });
};
/* harmony default export */ const specificationList = (SpecificationsList);

;// CONCATENATED MODULE: ./productdata/productData.json
const productData_namespaceObject = JSON.parse('[{"u2":"Energy saving light bulb","qu":"25W","WL":"Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb","nt":12.99,"UQ":"Philips","jQ":77,"Cb":12.6,"bf":6.2,"kE":6.2,"Wf":"E27 ES","Ys":"Cool daylight"}]');
;// CONCATENATED MODULE: ./components/upDownButtonGroup.tsx

// This is increase and decrease button group component

const upDownButtonGroup = (props)=>{
    const { itemCount , handleDecrement , handleIncrement  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row items-center gap-2",
        children: [
            itemCount > 1 ? /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                content: "-",
                backgroundColor: "sohoLights",
                width: "6",
                height: "6",
                onClick: handleDecrement
            }) : /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                content: "-",
                backgroundColor: "plum",
                width: "6",
                height: "6",
                onClick: handleDecrement
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: itemCount
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                content: "+",
                backgroundColor: "sohoLights",
                width: "6",
                height: "6",
                onClick: handleIncrement
            })
        ]
    });
};
/* harmony default export */ const components_upDownButtonGroup = (upDownButtonGroup);

;// CONCATENATED MODULE: ./components/modal.tsx

// This is Modal component

const Modal = (props)=>{
    const { isOpen , onClose , children  } = props;
    if (!isOpen) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-hemocyanin p-4 rounded-lg shadow-lg w-[350px]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Cart"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: onClose,
                            className: "text-white text-xl",
                            children: "\xd7"
                        })
                    ]
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const modal = (Modal);

;// CONCATENATED MODULE: ./pages/product.tsx











const Product = ()=>{
    const { 0: itemCount , 1: setItemCount  } = (0,external_react_.useState)(1);
    const { 0: cartFlag , 1: setCartFlag  } = (0,external_react_.useState)(false);
    const { 0: cartCount , 1: setCartCount  } = (0,external_react_.useState)(0);
    const { 0: checkoutMessage , 1: setCheckoutMessage  } = (0,external_react_.useState)("");
    const { 0: isModalOpen , 1: setIsModalOpen  } = (0,external_react_.useState)(false);
    //Increase count button
    const handleIncrement = ()=>{
        if (isModalOpen) {
            setCartCount((preCount)=>preCount + 1);
        } else {
            setItemCount((prevCount)=>prevCount + 1);
        }
    };
    const handleDecrement = ()=>{
        if (isModalOpen) {
            if (cartCount == 1) {
                setCartCount(1);
            } else {
                setCartCount((preCount)=>preCount - 1);
            }
        } else {
            if (itemCount == 1) {
                setItemCount(1);
            } else {
                setItemCount((prevCount)=>prevCount - 1);
            }
        }
    };
    const handleAddToCart = ()=>{
        setCartCount(itemCount);
        setItemCount(1);
        setCartFlag(true);
    };
    const handleModalOpen = ()=>{
        setIsModalOpen(true);
    };
    const handleModalClose = ()=>{
        setIsModalOpen(false);
        setCheckoutMessage("");
    };
    const handleCheckout = ()=>{
        setCheckoutMessage("\u2714 You have checked out");
        setCartCount(0);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "flex flex-col min-h-screen ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                id: "header",
                className: "flex flex-row justify-between mx-4 fixed top-0 left-0 right-0 bg-siphon z-10 pt-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: octopus_logo.src,
                            width: 200,
                            height: 50
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: basket.src,
                                width: 25,
                                height: 25,
                                onClick: handleModalOpen,
                                style: {
                                    cursor: "pointer"
                                }
                            }),
                            cartFlag && cartCount > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "absolute top-4 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white",
                                children: cartCount
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "content",
                className: "flex-grow pt-[72px] flex justify-center p-4 sm:pb-[100px] pb-[130px]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col md:flex-row xl:w-[50%] gap-6 lg:w-[80%]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full md:w-[50%] flex flex-col gap-2 sm:px-[20%] md:px-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative w-full h-0 pb-[100%]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: (philips_plumen_default()).src,
                                        layout: "fill",
                                        objectFit: "cover",
                                        className: "rounded-xl",
                                        alt: "Product Image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "font-bold text-3xl",
                                            children: productData_namespaceObject[0].u2
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                productData_namespaceObject[0].qu,
                                                " // Packet of 4"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full md:w-[50%] flex flex-col gap-2 mt-2 sm:px-[20%] md:px-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row justify-between font-bold text-2xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                "\xa3",
                                                productData_namespaceObject[0].nt
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_upDownButtonGroup, {
                                            itemCount: itemCount,
                                            handleDecrement: handleDecrement,
                                            handleIncrement: handleIncrement
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-black h-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                                        content: "Add to cart",
                                        backgroundColor: "sohoLights",
                                        width: "full",
                                        height: "12",
                                        onClick: handleAddToCart
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-hemocyanin p-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-2xl my-4 font-bold",
                                            children: "Description"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: productData_namespaceObject[0].WL
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col gap-2 p-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-2xl my-2 mt-4 font-bold",
                                            children: "Specifications"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(specificationList, {
                                            title: "Brand",
                                            content: productData_namespaceObject[0].UQ
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(specificationList, {
                                            title: "Item weight (g)",
                                            content: productData_namespaceObject[0].jQ.toString()
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(specificationList, {
                                            title: "Dimensions",
                                            content: `${productData_namespaceObject[0].Cb} x ${productData_namespaceObject[0].bf} x ${productData_namespaceObject[0].kE}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(specificationList, {
                                            title: "Item Model number",
                                            content: productData_namespaceObject[0].Wf
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(specificationList, {
                                            title: "Colour",
                                            content: productData_namespaceObject[0].Ys
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "flex items-center justify-center bg-hemocyanin px-4 py-2 fixed bottom-0 left-0 right-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-sm",
                    children: "Octopus Energy Ltd is a company registered in England and Wales. Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modal, {
                isOpen: isModalOpen,
                onClose: handleModalClose,
                children: cartCount < 1 && !checkoutMessage ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center m-4",
                    children: "There is no product in your cart!"
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-4 mt-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row justify-around px-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: basket.src,
                                    width: 50,
                                    height: 50
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_upDownButtonGroup, {
                                    itemCount: cartCount,
                                    handleDecrement: handleDecrement,
                                    handleIncrement: handleIncrement
                                })
                            ]
                        }),
                        checkoutMessage ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center",
                            children: checkoutMessage
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-black h-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_button, {
                                content: "Checkout",
                                backgroundColor: "sohoLights",
                                width: "full",
                                height: "12",
                                onClick: handleCheckout
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const product = (Product);


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,910,675], () => (__webpack_exec__(2524)));
module.exports = __webpack_exports__;

})();