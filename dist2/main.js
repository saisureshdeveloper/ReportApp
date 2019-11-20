(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../Adventsuitsfrontend/node_modules/@angular/core/fesm5 lazy recursive":
/*!*************************************************************************************!*\
  !*** ../Adventsuitsfrontend/node_modules/@angular/core/fesm5 lazy namespace object ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../Adventsuitsfrontend/node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ "../Adventsuitsfrontend/src/app/pipe/filterUnique.pipe.ts":
/*!****************************************************************!*\
  !*** ../Adventsuitsfrontend/src/app/pipe/filterUnique.pipe.ts ***!
  \****************************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../Adventsuitsfrontend/node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        // Remove the duplicate elements
        var uniqueArray = value.filter(function (el, index, array) {
            return array.indexOf(el) == index;
        });
        return uniqueArray;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterUnique',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    background: #fff;\r\n    color: #424242;\r\n    margin-left: 2px;\r\n    margin-top: 30px;\r\n    margin-bottom: 40px;\r\n}\r\n.previous-btn button{\r\n    background: transparent;\r\n    border: white;\r\n}\r\n.previous-btn i{\r\n    font-size: -webkit-xxx-large;\r\n    margin-top: 60px;\r\n    position: absolute;\r\n    color: #6c757d;\r\n}\r\n.next-btn button{\r\n   \r\n    background: transparent;\r\n    border: white;\r\n}\r\n.next-btn i{\r\n    font-size: -webkit-xxx-large;\r\n    margin-top: 60px;\r\n    position: absolute;\r\n    color: #6c757d;\r\n}\r\n.owl-carousel.owl-drag .owl-item {\r\n    width: 424px!important;\r\n}\r\n.perf-graph-navigation {\r\n    margin: 10px 0 0 0;\r\n    width: 100%;\r\n}\r\n.perf-graph-navigation .prev, .perf-graph-navigation .next {\r\n    width: 51px;\r\n}\r\n.perf-graph-navigation div {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 7px 0 1px 0;\r\n    margin: 0 5px 0 0;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    background: #fa6d4f;\r\n    background: linear-gradient(to bottom, #fa6d4f 0%,#f55f40 100%);\r\n    border: 0px solid #b94c35;\r\n    border-width: 0 0 2px 0;\r\n    border-radius: 2px;\r\n}\r\n.perf-graph-navigation .prev span, .perf-graph-navigation .next span {\r\n    /* background-image: url(../Images/chart-prev.png); */\r\n    position: absolute;\r\n    color: #6c757d;\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    background-size: 16px 16px;\r\n    background-repeat: no-repeat;\r\n}\r\nperf-graph-navigation div {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 7px 0 1px 0;\r\n    margin: 0 5px 0 0;\r\n    height: 22px;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    background: #fa6d4f;\r\n    background: linear-gradient(to bottom, #fa6d4f 0%,#f55f40 100%);\r\n    border: 0px solid #b94c35;\r\n    border-width: 0 0 2px 0;\r\n    border-radius: 2px;\r\n}\r\n.mat-card {\r\n    background: #fff;\r\n    color: #424242;\r\n    margin-left: 2px;\r\n    margin-top: 30px;\r\n    margin-bottom: 40px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AccountreceivableDemo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/sidemenu/sidemenu.component */ "./src/app/shared/sidemenu/sidemenu.component.ts");
/* harmony import */ var _kpi_order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kpi/order/order.component */ "./src/app/kpi/order/order.component.ts");
/* harmony import */ var _kpi_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kpi/invoice/invoice.component */ "./src/app/kpi/invoice/invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Import your library




var appRoutes = [
    {
        path: 'main',
        component: _shared_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_13__["SidemenuComponent"],
        children: [
            {
                path: 'dash',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            },
            {
                path: 'kpi',
                children: [
                    {
                        path: 'order',
                        component: _kpi_order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
                    },
                    {
                        path: 'invoice',
                        component: _kpi_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_15__["InvoiceComponent"],
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'dash',
                pathMatch: "full"
            }
        ]
    },
    {
        path: '',
        redirectTo: '/main/dash',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _kpi_order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
                _kpi_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_15__["InvoiceComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents(null),
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { useHash: true, enableTracing: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".previous-btn button{\r\n    background: transparent;\r\n    border: white;\r\n}\r\n.previous-btn i{\r\n    font-size: -webkit-xxx-large;\r\n    margin-top: 60px;\r\n    position: absolute;\r\n    color: #6c757d;\r\n}\r\n.next-btn button{\r\n   \r\n    background: transparent;\r\n    border: white;\r\n}\r\n.next-btn i{\r\n    font-size: -webkit-xxx-large;\r\n    margin-top: 60px;\r\n    position: absolute;\r\n    color: #6c757d;\r\n}\r\n.owl-carousel.owl-drag .owl-item {\r\n    width: 424px!important;\r\n}\r\n.perf-graph-navigation {\r\n    margin: 10px 0 0 0;\r\n    width: 100%;\r\n}\r\n.perf-graph-navigation .prev, .perf-graph-navigation .next {\r\n    width: 51px;\r\n}\r\n.perf-graph-navigation div {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 7px 0 1px 0;\r\n    margin: 0 5px 0 0;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    background: #fa6d4f;\r\n    background: linear-gradient(to bottom, #fa6d4f 0%,#f55f40 100%);\r\n    border: 0px solid #b94c35;\r\n    border-width: 0 0 2px 0;\r\n    border-radius: 2px;\r\n}\r\n.perf-graph-navigation .prev span, .perf-graph-navigation .next span {\r\n    /* background-image: url(../Images/chart-prev.png); */\r\n    position: absolute;\r\n    color: #6c757d;\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    background-size: 16px 16px;\r\n    background-repeat: no-repeat;\r\n}\r\nperf-graph-navigation div {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 7px 0 1px 0;\r\n    margin: 0 5px 0 0;\r\n    height: 22px;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    background: #fa6d4f;\r\n    background: linear-gradient(to bottom, #fa6d4f 0%,#f55f40 100%);\r\n    border: 0px solid #b94c35;\r\n    border-width: 0 0 2px 0;\r\n    border-radius: 2px;\r\n}\r\n.mat-card {\r\n    /* width: 139%; */\r\n\r\n    background: #fff;\r\n    color: #424242;\r\n    /* margin-left: 2px;\r\n    margin-top: 30px;\r\n    margin-bottom: 40px; */\r\n}\r\n.owl-carousel:after {\r\n   \r\n  }\r\nh4{\r\n    font-size: xx-large!important;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin: inherit;\">\n    <div class=\"page-title-box\">\n        <div class=\"row align-items-center\">\n            \n            <div class=\"col-sm-12\">\n                <h4 class=\"page-title\">Dashboard</h4>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Account Recviables</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Dashboard</a></li>\n                    <!-- <li class=\"breadcrumb-item active\">Invoice</li> -->\n                </ol>\n\n            </div>\n           \n        </div>\n    </div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-1 previous-btn\" >\n                <button  (click)=\"previous()\"> <i class=\"typcn typcn-chevron-left \"></i></button>\n    \n        </div>\n        <div class=\"col-10\" >\n                <owl-carousel   #owlElement class=\"carousel slide\" [options]=\"{margin:170,\n    \n    autoWidth:true,\n    items:2, dots: true, navigation: false}\" [items]=\"loadwigetsdata\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                        <!-- <div class=\"item\" *ngFor=\"let image of images;let i= index\"> -->\n\n                          \n                        <div  class=\"item\" style=\"width:550px\">            \n                            <mat-card class=\"thumbnail-image\">\n                                <div style=\"display: block\">\n                                <canvas baseChart\n                                    [datasets]=\"barChartData\"\n                                    [labels]=\"barChartLabels\"\n                                    [options]=\"barChartOptions\"\n                                    [plugins]=\"barChartPlugins\"\n                                    [legend]=\"barChartLegend\"\n                                    [chartType]=\"barChartType\"\n                                    ></canvas>\n                                </div>\n                            </mat-card>\n                        </div>\n\n\n                        <div  class=\"item\" style=\"width:550px\">            \n                            <mat-card class=\"thumbnail-image\">\n                                <div style=\"display: block\">\n                              <canvas baseChart \n              \n                              [datasets]=\"[{\n                                data:[1064682,\n                                3985265,\n                                7240968,\n                                124293816\n                                \n                                ],\n                                label:'Total',\n                                backgroundColor:'#fbd072',\n                                hoverBackgroundColor: '#fbd072'\n                              }]\"\n                              [labels]=\"['15-30 DAYS',' 31-60 DAYS','61-90 DAYS','90+ DAYS']\"\n                              [chartType]=\"barChartType\"\n                              [options]=\"widgets2\"\n                                   >\n                              </canvas>\n                            </div>\n                            </mat-card>\n                        </div>\n        <div  class=\"item\" style=\"width:550px\">            \n                            <mat-card class=\"thumbnail-image\">\n                    <div style=\"display: block\">\n                            <canvas baseChart \n    \n                            [datasets]=\"[{\n                              data:[\n                              9704073.00,\n                              13671517.00,\n                              5545292.00,\n                              4945140.00,\n                              5854114.00,\n                              1390426.00,\n                              4340560.00,\n                              8817665.00,\n                              25368389.00,\n                              8675235.00,\n                              1963309.00,\n                              205621.00,\n                              13905035.00,\n                              11975544.00,\n                              15054333.00,\n                              8965427.00,\n                              14462147.00,\n                              3190145.00,\n                              5220415.00,\n                              1665760.00,\n                              12900713.00,\n                              7230007.00,\n                              3801139.00,\n                              564373.00,\n                              15736705.00,\n                              10098080.00,\n                              27358601.00\n                              ],\n                              label:'Total',\n                              backgroundColor:'#5d7192',\n                              hoverBackgroundColor: '#5d7192'\n                            }]\"\n                            [labels]=\"[\n                            '1',\n                                    '2',\n                                    '3',\n                                    '4',\n                                    '5',\n                                    '6',\n                                    '8',\n                                    '9',\n                                    '10',\n                                    '11',\n                                    '12',\n                                    '13',\n                                    '15',\n                                    '16',\n                                    '17',\n                                    '18',\n                                    '19',\n                                    '20',\n                                    '22',\n                                    '23',\n                                    '24',\n                                    '25',\n                                    '26',\n                                    '27',\n                                    '29',\n                                    '30',\n                                    '31'\n                            ]\"\n                    \n                    [chartType]=\"barChartType\"\n                    [options]=\"widgets8\"\n                                  >\n                            </canvas>\n                          </div>\n                           </mat-card>\n                        </div>\n                        <div  class=\"item\" style=\"width:550px\">            \n                            <mat-card class=\"thumbnail-image\">\n                             <div style=\"display: block\">\n                            <canvas baseChart \n    \n                            [datasets]=\"[{\n                              data:[\n                             203912988.89,\n                              193358021.49,\n                              216083051.16,\n                              172971664.23,\n                              185560276.91,\n                              204969337.23,\n                              193994210.95\n                             \n                              ],\n                              label:'Total Sales',\n                              backgroundColor:'#5d7192',\n                              hoverBackgroundColor: '#5d7192'\n                            },\n                            {\n                              data:[\n                              244769349.00,\n                              220082915.00,\n                              216923099.00,\n                              202367995.00,\n                              225404785.00,\n                              227498329.00,\n                              242609765.00\n                             \n                              ],\n                              label:'Total Collections',\n                              backgroundColor:'#fbd072',\n                              hoverBackgroundColor: '#fbd072'\n                            },\n                            {\n                              data:[\n                              245356093.00,\n                              228547070.00,\n                              224058971.00,\n                              211088193.00,\n                              231693924.00,\n                              235877957.00,\n                              248716226.00\n                             \n                              ],\n                              label:'Target Collections',\n                              backgroundColor:'#9E9E9E',\n                              hoverBackgroundColor: '#9E9E9E'\n                            }\n                            \n                            ]\"\n                            [labels]=\"[\n                            'JAN',\n                                    'FEB',\n                                    'MAR',\n                                    'APR',\n                                    'MAY',\n                                    'JUN',\n                                    'JUl'\n                            ]\"\n                    \n                    [chartType]=\"barChartType\"\n                                  [options]=\"widgets7\"\n                                  >\n                            </canvas>\n                          </div>\n                            </mat-card>\n                        </div>\n\n                        <div class=\"item\" style=\"width:550px\"  *ngFor=\"let item of loadwigetsdata;let i= index\">\n                                <mat-card class=\"thumbnail-image\"   >\n                                <div (click)=\"showtable(item.key)\">\n                                        <app-barchart [data]=\"item.dataset\" [options]=\"item.options\" [type]=\"item.Type\"></app-barchart>\n                                        \n                                </div>\n                            </mat-card>\n                        </div>\n\n        \n                </owl-carousel>\n        \n                      \n            </div>\n            <div class=\"col-1 next-btn\">\n                    <button (click)=\"next()\"> <i class=\"typcn typcn-chevron-right\"></i></button>\n    \n    \n                </div>\n    </div>\n</div>\n    <!-- <div class=\"row\" style=\"    height: 400px;\n    width: 840px;\">\n      <div class=\"col-12\" style=\"margin-left: 30%;\">\n          <mat-card>\n        <app-barchart   [data]=\"widgetActionDetails\" [options]=\"widgetDisplayDetails\" [type]=\"widgetType\"></app-barchart>\n\n          </mat-card>\n\n      </div>\n    </div>\n    <div class=\"row\" style=\"    height: 400px;\n    width: 840px;\">\n      <div class=\"col-12\" style=\"margin-left: 30%;\">\n          <mat-card>\n              <ag-grid-angular \n              style=\"width: 500px; height: 500px;\" \n              class=\"ag-theme-balham\"\n              [rowData]=\"rowData\" \n              [columnDefs]=\"columnDefs\">\n          </ag-grid-angular>\n          </mat-card>\n\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-8\">\n            <div class=\"card\">\n                <mat-card>\n                    <ag-grid-angular \n                    style=\"width: 500px; height: 500px;\" \n                    class=\"ag-theme-balham\"\n                    [rowData]=\"rowData\" \n                    [columnDefs]=\"columnDefs\">\n                </ag-grid-angular>\n                </mat-card>\n            </div>\n        </div>\n        <div class=\"col-xl-4\">\n            <div class=\"card\">\n                <mat-card>\n                    <app-barchart   [data]=\"widgetActionDetails\" [options]=\"widgetDisplayDetails\" [type]=\"widgetType\"></app-barchart>\n            \n                      </mat-card>\n            </div>\n        </div>\n    </div> -->\n\n     <div  class=\"page-title-box\" >\n   <div class=\"page-title-box\">\n        <div class=\"row \">\n            \n            <div class=\"col\">\n            \n                <app-banktable [month]=\"'month-6'\"  [defaultoption]=\"keyval\"></app-banktable>\n            </div>\n        </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dialog) {
        this.dialog = dialog;
        this.columnDefs = [
            { headerName: 'Make', field: 'make' },
            { headerName: 'Model', field: 'model' },
            { headerName: 'Price', field: 'price' }
        ];
        this.rowData = [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Porsche', model: 'Boxter', price: 72000 }
        ];
        this.listOfGridValue = [];
        this.title = "Alert";
        this.description = "This operation is unpredicatable";
        this.options = {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#333'
                }
            }
        };
        this.mySlideOptions = {
            items: 1,
            dots: false,
            nav: true,
            navigation: true,
            // navigationText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"]
            navigationText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        };
        this.myCarouselOptions = {
            items: 1,
            dots: true,
            nav: true
        };
        this.carouselOptions = {
            margin: 7,
            nav: true,
            navigation: true,
            navigationText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                },
                1500: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        };
        this.keyval = "Open Invoice (By Count)";
        /*End - filter options onChange*/
        this.barChartOptions = {
            title: {
                display: true,
                text: 'Invoice Ageing',
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            },
            scales: {
                xAxes: [{
                        gridLines: {
                            lineWidth: 0
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'No of Delay (Days)'
                        }
                    }]
            }
        };
        this.barChartLabels = ['2', '3', '5', '6', '7', '8'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        // public barChartPlugins = [pluginDataLabels];
        this.barChartData = [{
                data: [7, 1, 7, 1, 2, 1],
                label: '0-15 days',
                backgroundColor: '#2E86C1',
                hoverBackgroundColor: '#2E86C1'
            }, {
                data: [0, 0, 4, 0, 0, 0],
                label: '16-30 days',
                backgroundColor: '#E67E22  ',
                hoverBackgroundColor: '#E67E22  '
            }];
        this.widgets2 = {
            title: {
                display: true,
                text: 'Invoices Due (2019) By Value',
                fontSize: 14
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true,
            },
            scales: {
                xAxes: [{
                        gridLines: {
                            lineWidth: 0
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function (val) {
                                if (val >= 10000000)
                                    val = '₹' + (val / 10000000).toFixed(2) + ' Cr';
                                else if (val >= 100000)
                                    val = '₹' + (val / 100000).toFixed(2) + ' Lac';
                                else if (val >= 1000)
                                    val = '₹' + (val / 1000).toFixed(2) + ' K';
                                return val;
                            }
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'No of Delay (Days)'
                        }
                    }]
            }
        };
        this.widgets8 = {
            title: {
                display: true,
                text: 'Collections (2019) Daily - July Month',
                fontSize: 14
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            },
            scales: {
                xAxes: [{
                        gridLines: {
                            lineWidth: 0
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function (val) {
                                if (val >= 10000000)
                                    val = '₹' + (val / 10000000).toFixed(2) + ' Cr';
                                else if (val >= 100000)
                                    val = '₹' + (val / 100000).toFixed(2) + ' Lac';
                                else if (val >= 1000)
                                    val = '₹' + (val / 1000).toFixed(2) + ' K';
                                return val;
                            }
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'No of Delay (Days)'
                        }
                    }]
            }
        };
        this.widgets7 = {
            title: {
                display: true,
                text: 'Total Sales V/S Total Collections V/S Target Collections (2019)',
                fontSize: 14
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            },
            scales: {
                xAxes: [{
                        gridLines: {
                            lineWidth: 0
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function (val) {
                                if (val >= 10000000)
                                    val = '₹' + (val / 10000000).toFixed(2) + ' Cr';
                                else if (val >= 100000)
                                    val = '₹' + (val / 100000).toFixed(2) + ' Lac';
                                else if (val >= 1000)
                                    val = '₹' + (val / 1000).toFixed(2) + ' K';
                                return val;
                            }
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'No of Delay (Days)'
                        }
                    }]
            }
        };
    }
    DashboardComponent.prototype.next = function () {
        this.owlElement.next([200]);
    };
    DashboardComponent.prototype.previous = function () {
        this.owlElement.previous([200]);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.flag = true;
        this.loadwidgets(0);
    };
    DashboardComponent.prototype.loadwidgets = function (val) {
        this.listOfGridValue = [];
        this.loadwigetsdata = [
            {
                dataset: {
                    data: [5.81,
                        5.26,
                        7.03,
                        8.49,
                        5.85,
                        5.53,
                        47.80
                    ],
                    label: [
                        "Jan-19",
                        "Feb-19",
                        "Mar-19",
                        "Apr-19",
                        "May-19",
                        "Jun-19",
                        "Jul-19"
                    ]
                },
                Type: "bar",
                options: "Invoices Issued (By Value)",
                key: "Open Invoice (By Count)"
            },
            {
                dataset: {
                    data: [534,
                        479,
                        519,
                        582,
                        569,
                        575,
                        655
                    ],
                    label: [
                        "Jan-19",
                        "Feb-19",
                        "Mar-19",
                        "Apr-19",
                        "May-19",
                        "Jun-19",
                        "Jul-19"
                    ]
                },
                Type: "bar",
                options: "Invoices Issued (By Count)",
                key: "Open Invoice (By Count)"
            },
            {
                dataset: {
                    data: [20,
                        316,
                        577
                    ],
                    label: [
                        "Fulfilled",
                        "New",
                        "Partially Fulfilled"
                    ]
                },
                Type: "pie",
                options: "Order Fulfillment Status - 2019",
                key: "Open Order (By Count)"
            },
            {
                dataset: {
                    data: [88,
                        108,
                        168,
                        129,
                        140,
                        122,
                        100,
                        57
                    ],
                    label: [
                        "Jan-19",
                        "Feb-19",
                        "Mar-19",
                        "Apr-19",
                        "May-19",
                        "Jun-19",
                        "Jul-19",
                        "Aug-19"
                    ]
                },
                Type: "bar",
                options: "  Orders Raised/Month - 2019    ",
                key: "Open Order (By Count)"
            },
            {
                dataset: {
                    data: [10,
                        326,
                        576, 1,
                    ],
                    label: [
                        "Completed Shipping",
                        "Not Shipped",
                        "Partially Shipped",
                        "NA"
                    ]
                },
                Type: "pie",
                options: "Order Shipment Status",
                key: "Open Order (By Count)"
            },
            {
                dataset: {
                    data: [49,
                        681,
                        556,
                        216,
                        78,
                        855,
                        296,
                        337,
                        186,
                        202,
                        1448,
                        1429,
                        1313,
                        1232,
                        1636,
                        1805,
                        1609,
                        1561,
                        1327,
                        1155,
                        1023,
                        1922
                    ],
                    label: [
                        "Feb-10",
                        "Jul-17",
                        "Aug-17",
                        "Sep-17",
                        "Oct-17",
                        "Nov-17",
                        "Dec-17",
                        "Jan-18",
                        "Feb-18",
                        "Mar-18",
                        "Apr-18",
                        "May-18",
                        "Jun-18",
                        "Jul-18",
                        "Aug-18",
                        "Sep-18",
                        "Oct-18",
                        "Nov-18",
                        "Dec-18",
                        "Jan-19",
                        "Feb-19",
                        "Mar-19"
                    ]
                },
                Type: "line",
                options: "Orders Per Month (By Count)",
                key: "Open Order (By Count)"
            },
            {
                dataset: {
                    data: [
                        0.026531,
                        11.6479883,
                        12.2259215,
                        4.3523439,
                        0.468867,
                        14.4180294,
                        6.566679,
                        9.0602194,
                        3.2093468,
                        2.4592495,
                        20.5933348,
                        10.4504357,
                        5.0104404,
                        6.9369014,
                        21.5565855,
                        25.513817,
                        21.1834081,
                        19.5063785,
                        11.7550118,
                        9.8018788,
                        6.288276,
                        10.0849817
                    ],
                    label: [
                        " Feb-10",
                        " Jul-17",
                        " Aug-17",
                        " Sep-17",
                        " Oct-17",
                        " Nov-17",
                        " Dec-17",
                        " Jan-18",
                        " Feb-18",
                        " Mar-18",
                        " Apr-18",
                        " May-18",
                        " Jun-18",
                        " Jul-18",
                        " Aug-18",
                        " Sep-18",
                        " Oct-18",
                        " Nov-18",
                        " Dec-18",
                        " Jan-19",
                        " Feb-19",
                        " Mar-19"
                    ]
                },
                Type: "line",
                options: "Orders Per Month (By Value - In Crores) "
            }
        ];
        console.log('this.loadwigetsdata', this.loadwigetsdata);
        // for (let i = 0; i < this.loadwigetsdata.length; i++) {
        //   this.gettingGridValue(val);
        // }
    };
    DashboardComponent.prototype.showtable = function (key) {
        this.flag = false;
        this.keyval = key;
        this.flag = true;
    };
    DashboardComponent.prototype.hidetable = function () {
        this.flag = false;
    };
    /* Start -Fetching data for gird to display */
    DashboardComponent.prototype.gettingGridValue = function (val) {
    };
    /* End -Fetching data for gird to display */
    /*Start - filter options onChange*/
    DashboardComponent.prototype.onChange = function (e) {
        console.log("event trigger", e);
        this.hidetable();
        this.loadwidgets(e);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('owlElement'),
        __metadata("design:type", ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"])
    ], DashboardComponent.prototype, "owlElement", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/expand-menu.directive.ts":
/*!******************************************!*\
  !*** ./src/app/expand-menu.directive.ts ***!
  \******************************************/
/*! exports provided: ExpandMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandMenuDirective", function() { return ExpandMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandMenuDirective = /** @class */ (function () {
    function ExpandMenuDirective() {
        this.isOpen = false;
    }
    ExpandMenuDirective.prototype.toggleOpen = function ($event) {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.active'),
        __metadata("design:type", Object)
    ], ExpandMenuDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ExpandMenuDirective.prototype, "toggleOpen", null);
    ExpandMenuDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appExpandMenu]'
        }),
        __metadata("design:paramtypes", [])
    ], ExpandMenuDirective);
    return ExpandMenuDirective;
}());



/***/ }),

/***/ "./src/app/kpi/invoice/invoice.component.css":
/*!***************************************************!*\
  !*** ./src/app/kpi/invoice/invoice.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh3{\r\n    text-align: center;\r\n    height: 35px;\r\n    color: #e6f2ff;\r\n    font-weight: bold;\r\n    /* background: #062e42;\r\n    border-left: 1px solid rgb(255, 255, 255)!important;\r\n    font-size: 18px; */\r\n}\r\na {\r\n    text-decoration: none !important;\r\n}\r\n/* unvisited link */\r\n/* selected link */\r\na {\r\n    color: #fff;\r\n  }\r\na:focus {\r\n    color: #fff;\r\n\r\n  }\r\n.content2{\r\n    padding: initial;\r\n}\r\ntable{\r\n    color: #fff;\r\n    /* margin-top: 120px; */\r\n    font-size: 18px;\r\n}\r\ntr{\r\n    /* border-bottom: 1px solid rgb(255, 255, 255)!important; */\r\n}\r\ntd{\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    border-style: solid;\r\n    border-width: 4px;\r\n    border-radius: 39px;\r\n    /* padding: 53px; */\r\n    background: #8397ad;\r\n    border: 5px solid rgb(255, 255, 255)!important;\r\n\r\n\r\n}\r\n.highlight{\r\n    font-size: large;\r\n    background: #86c7f3;\r\n}\r\ntd:focus,\r\ntd:hover {\r\n    font-size: large;\r\n    background: #86c7f3;\r\n  }\r\ntd a span{\r\n    margin-left: 8px;\r\n}\r\ni{\r\n    font-size: larger;\r\n}\r\n/* td a#row0:focus,a#row1:focus,a#row2:focus,a#row3:focus,a#row4:focus,a#row5:focus,a#row6:focus,a#row7:focus\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: block;\r\n    background: #b1babf;\r\n    padding: inherit;\r\n    font-size: large;\r\n  \r\n}\r\ntd a#row0:visited,a#row1:visited,a#row2:visited,a#row3:visited,a#row4:visited,a#row5:visited,a#row6:visited,a#row7:visited\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: block;\r\n    background: #b1babf;\r\n    padding: inherit;\r\n    font-size: large;\r\n  \r\n} */\r\n.chartjs-render-monitor {\r\n   \r\n    height: 470px!important;\r\n}\r\nbutton\r\n{\r\n    background: #95a3ab;\r\n    color: aliceblue;\r\n}\r\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\r\n    color: #f2f1f5;\r\n    margin: 2px;\r\n    width: 180px;\r\n    border-radius: 32px;\r\n}\r\n.mat-button:hover\r\n{\r\n    height: 42px;\r\n    background: #333547;\r\n}\r\n.mat-button:focus\r\n{\r\n    height: 42px;\r\n    background: #333547;\r\n}\r\n.btnhighlight{\r\n    height: 42px;\r\n    background: #333547;\r\n}\r\n.mat-radio-button {\r\n   \r\n    margin-right: 10px!important;\r\n}\r\n.bg-primary {\r\n    background-color: #626ed4 !important;\r\n  }\r\n/************ Custome Carousal ***************/\r\n.previous-btn button{\r\n    background: transparent;\r\n    border: white;\r\n}\r\n.previous-btn i{\r\n    font-size: -webkit-xxx-large;\r\n    margin-top: 60px;\r\n    position: absolute;\r\n    color: #6c757d;\r\n}\r\n.next-btn button{\r\n   \r\n    background: transparent;\r\n    border: white;\r\n}\r\n.next-btn i{\r\n    font-size: -webkit-xxx-large;\r\n    margin-top: 60px;\r\n    position: absolute;\r\n    color: #6c757d;\r\n}\r\n.owl-carousel.owl-drag .owl-item {\r\n    width: 424px!important;\r\n}\r\n.perf-graph-navigation {\r\n    margin: 10px 0 0 0;\r\n    width: 100%;\r\n}\r\n.perf-graph-navigation .prev, .perf-graph-navigation .next {\r\n    width: 51px;\r\n}\r\n.perf-graph-navigation div {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 7px 0 1px 0;\r\n    margin: 0 5px 0 0;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    background: #fa6d4f;\r\n    background: linear-gradient(to bottom, #fa6d4f 0%,#f55f40 100%);\r\n    border: 0px solid #b94c35;\r\n    border-width: 0 0 2px 0;\r\n    border-radius: 2px;\r\n}\r\n.perf-graph-navigation .prev span, .perf-graph-navigation .next span {\r\n    /* background-image: url(../Images/chart-prev.png); */\r\n    position: absolute;\r\n    color: #6c757d;\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    background-size: 16px 16px;\r\n    background-repeat: no-repeat;\r\n}\r\nperf-graph-navigation div {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 7px 0 1px 0;\r\n    margin: 0 5px 0 0;\r\n    height: 22px;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    background: #fa6d4f;\r\n    background: linear-gradient(to bottom, #fa6d4f 0%,#f55f40 100%);\r\n    border: 0px solid #b94c35;\r\n    border-width: 0 0 2px 0;\r\n    border-radius: 2px;\r\n}\r\n.mat-card {\r\n    background: #fff;\r\n    color: #424242;\r\n    margin-left: 2px;\r\n    margin-top: 30px;\r\n    margin-bottom: 40px;\r\n}\r\nh4{\r\n    font-size: xx-large!important;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/kpi/invoice/invoice.component.html":
/*!****************************************************!*\
  !*** ./src/app/kpi/invoice/invoice.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n    <div class=\"page-title-box\" #start>\n        <div class=\"row align-items-center\">\n            \n            <div class=\"col-sm-6\">\n                <h4 class=\"page-title\">Invoice Issued</h4>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Account Recviables</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">KPI</a></li>\n                    <li class=\"breadcrumb-item active\">Invoice</li>\n                </ol>\n  \n            </div>\n           \n        </div>\n    </div>\n  <div class=\"row\">\n        <div class=\"col-1 previous-btn\" >\n                <button  (click)=\"previous()\"> <i class=\"typcn typcn-chevron-left \"></i></button>\n    \n        </div>\n        <div class=\"col-10\" >\n                <owl-carousel   #owlElement class=\"carousel slide\" [options]=\"{margin:180,\n    \n    autoWidth:true,\n    items:2, dots: false, navigation: false}\" [items]=\"loadwigetsdata\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                        <!-- <div class=\"item\" *ngFor=\"let image of images;let i= index\"> -->\n    <div class=\"item\" style=\"width:550px\"> \n         <mat-card  (click)=\"showpanel(first)\">\n        <div style=\"\">\n          <app-barchart   [data]=\"defaultData.month_3\" [options]=\"'Invoice Issued'\" [type]=\"type\" [color]=\"color[0]\"></app-barchart>\n          <!-- <app-barchart [data]=\"item.dataset\" [options]=\"item.options\" [type]=\"item.Type\"></app-barchart> -->\n                \n        </div>\n    </mat-card>\n    </div>\n    <div class=\"item\" style=\"width:550px\"> \n         <mat-card  (click)=\"showpanel(first)\">\n        <div style=\"\">\n          <app-barchart   [data]=\"defaultData.month_6\" [options]=\"'Invoice Ageing'\" [type]=\"type\" [color]=\"color[1]\"></app-barchart>\n          <!-- <app-barchart [data]=\"item.dataset\" [options]=\"item.options\" [type]=\"item.Type\"></app-barchart> -->\n               \n        </div>\n    </mat-card>\n    </div>\n    <div class=\"item\" style=\"width:550px\"> \n         <mat-card  (click)=\"showpanel(first)\">\n        <div style=\"\">\n          <app-barchart   [data]=\"defaultData.year_1\" [options]=\"'Invoice Status'\" [type]=\"type\" [color]=\"color[2]\"></app-barchart>\n          <!-- <app-barchart [data]=\"item.dataset\" [options]=\"item.options\" [type]=\"item.Type\"></app-barchart> -->\n                \n        </div>\n    </mat-card>\n    </div>\n  \n       </owl-carousel>\n        \n                      \n            </div>\n            <div class=\"col-1 next-btn\">\n                    <button (click)=\"next()\"> <i class=\"typcn typcn-chevron-right\"></i></button>\n    \n    \n                </div>\n    <!-- </div> -->\n     \n  </div>\n    <!-- <div class=\"row\">\n      <div class=\"col-xl-3 col-md-6\" (click)=\"scroll(first)\">\n          <div class=\"card mini-stat bg-primary text-white\">\n              <div class=\"card-body\">\n                  <div class=\"mb-4\">\n                      <div class=\"float-left mini-stat-img mr-4\">\n                          <img src=\"assets/images/services-icon/01.png\" alt=\"\">\n                      </div>\n                      <h5 class=\"font-16 text-uppercase mt-0 text-white-50\">Open Invoice</h5>\n                      <h4 class=\"font-500\">1,685 <i class=\"mdi mdi-arrow-up text-success ml-2\"></i></h4>\n                      <app-barchart  [data]=\"data\" [options]=\"options\" [type]=\"type\"></app-barchart>\n                      <div class=\"mini-stat-label bg-success\">\n                          <p class=\"mb-0\">+ 12%</p>\n                      </div>\n                  </div>\n                  <div class=\"pt-2\">\n                      <div class=\"float-right\">\n                          <a href=\"#\" class=\"text-white-50\"><i class=\"mdi mdi-arrow-right h5\"></i></a>\n                      </div>\n\n                      <p class=\"text-white-50 mb-0\">Since last 3 month</p>\n                  </div>\n              </div>\n          </div>\n      </div>\n      </div> -->\n    \n     \n      \n \n    <section #first id =\"first\" class=\"page-title-box\" >\n\n    <div class=\"row\"   style=\"\n    border: 1px solid rgb(0, 119, 179)!important;\n     \">\n      <div class=\"col-sm-12\" >\n        <div class=\"row\" style=\"\" >\n          <div class=\"col-3\" style=\" padding: initial  \">\n            <div>\n            <div style=\"    display: block;\n    height: 60px;\n    background: #062e42;\">\n            <h3>Dimensions</h3>\n\n            </div>\n            \n            <table class=\"table col-sm-9\" style=\"    margin-left: 54px;\n    margin-top: 30px;\">\n                <tbody>\n                    <tr (click)=\"changeType('row8')\">\n                       \n                        <td  [ngClass]=\"{ highlight:(currentpage === 'row8') }\"><a tabindex=\"8\" id=\"row8\"><i class=\"ti-pie-chart\"></i><span> Date Wise</span> </a> </td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row0')\">\n                       \n                        <td width=\"30%\"  [ngClass]=\"{ highlight:(currentpage === 'row0') }\"><a tabindex=\"1\" id=\"row0\"><i class=\"ti-pie-chart\"></i><span> Customer Name</span> </a> </td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row1')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row1') }\"><a tabindex=\"2\" id=\"row1\"><i class=\"ti-pie-chart\"></i><span> Customer Type</span> </a></td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row2')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row2') }\"><a tabindex=\"3\" id=\"row2\"><i class=\"ti-pie-chart\"></i><span> Customer Region </span></a></td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row3')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row3') }\"><a tabindex=\"4\" id=\"row3\"><i class=\"ti-pie-chart\"></i><span> Site</span></a></td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row4')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row4') }\"><a tabindex=\"5\" id=\"row4\"><i class=\"ti-pie-chart\"></i><span> Product Group</span></a></td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row5')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row5') }\"><a tabindex=\"6\" id=\"row5\"><i class=\"ti-pie-chart\"></i><span> Product Category</span></a></td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row6')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row6') }\"><a tabindex=\"7\" id=\"row6\"><i class=\"ti-pie-chart\"></i><span>  Product </span></a></td>\n                       \n                    </tr>\n                   \n                </tbody>\n            </table>\n            </div>\n          </div>\n                   <div class=\"col-9 content2\" style=\"background: #fff;  \">\n            <div>\n              <div class=\"row\">\n                <div class=\"col\">\n                <div style=\"    display: block;\n    height: 60px;\n    background: #062e42;\">\n                    <h3 >Invoice Issued KPI</h3>\n                </div>\n                </div>\n              </div>\n              <div class=\"row\" >\n                  <div class=\"col\" >\n                      <div class=\"container\"   >\n                        <div class=\"row\">\n                          <div class=\"col\">\n                              <mat-radio-group aria-label=\"Select an option\" (change)=\"radioChange($event)\" [(ngModel)]=\"category\" style=\"margin-left: 45%;\n    font-size: 17px;\">\n                                  <mat-radio-button [checked]=\"category == 'count'\" value=\"count\"> Count</mat-radio-button>\n                                  <mat-radio-button  [checked]=\"category == 'val'\" value=\"val\"> Value</mat-radio-button>\n                                </mat-radio-group>\n                          </div>\n                          \n                         \n                           \n                        </div>\n                        <div class=\"row\" >\n                            <div class=\"col\"  >\n                                <app-barchart   [data]=\"data\" [options]=\"options\" [type]=\"type\"></app-barchart>\n\n                             </div>\n                        </div>\n                        </div>  \n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin: 3px;\">\n                    <div class=\"col\">\n                      <button id=\"btn1\" [ngClass]=\"{ btnhighlight:(currentdate === 'year_2') }\" (click)=\"filter('year_2')\" mat-button color=\"primary\">2 YEARS</button>\n                      <button id=\"btn2\" [ngClass]=\"{ btnhighlight:(currentdate === 'year_1') }\" (click)=\"filter('year_1')\" mat-button color=\"primary\">1 YEAR</button>\n                      <button id=\"btn3\" [ngClass]=\"{ btnhighlight:(currentdate === 'month_6') }\" (click)=\"filter('month_6')\" mat-button color=\"primary\">6 MONTHS</button>\n                      <button id=\"btn4\" [ngClass]=\"{ btnhighlight:(currentdate === 'month_3') }\" (click)=\"filter('month_3')\" mat-button color=\"primary\" routerLinkActive=\"mat-accent\">3 MONTH</button>\n                      <button id=\"btn5\" [ngClass]=\"{ btnhighlight:(currentdate === 'false') }\" (click)=\"filter(false)\" mat-button color=\"primary\">CURRENT MONTH</button>\n                      <button id=\"btn6\" [ngClass]=\"{ btnhighlight:(currentdate === 'fale') }\" (click)=\"filter(fale)\" mat-button color=\"primary\">TODAY</button>\n                      \n                    </div>\n                    \n                     \n                  </div>\n                   <button style=\"background: #FFC107;\n    float: right;\" (click)=\"Clear()\" mat-button color=\"primary\">Clear</button>\n                    \n\n                </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div #second  id =\"second\" class=\"page-title-box\" >\n   <div class=\"page-title-box\">\n        <div class=\"row \" >\n            \n            <div class=\"col\">\n            \n                <app-banktable [month]=\"currentdate\"  [defaultoption]=\"defaultoption\"></app-banktable>\n            </div>\n        </div>\n    </div>\n\n  </div>\n    \n</div>\n\n\n\n\n<!-- <div class=\"container-fluid\" >\n    <div class=\"page-title-box\">\n        <div class=\"row align-items-center\">\n            \n            <div class=\"col-sm-6\">\n                <h4 class=\"page-title\">Invoice</h4>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Account Recviables</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">KPI's</a></li>\n                    <li class=\"breadcrumb-item active\">Invoice</li>\n                </ol>\n  \n            </div>\n           \n        </div>\n    </div>\n    <div class=\"\" style=\"margin-top:0px\">\n        <div class=\"\"  style=\"\n        margin-left: 46px;\n        margin-top: -31px;\">\n          <div class=\"row\" >\n            <div class=\"col-3\" style=\" padding: initial  \">\n              <div style=\"    height: 800px;\n              background:#0077b3\">\n              <h3>Dimensions</h3>\n              \n              <table class=\"table mb-0\">\n                  <tbody>\n                      <tr (click)=\"changeType('row8')\">\n                         \n                          <td  [ngClass]=\"{ highlight:(currentpage === 'row8') }\"><a tabindex=\"8\" id=\"row8\"><span> Date Wise</span> </a> </td>\n                         \n                      </tr>\n                      <tr (click)=\"changeType('row0')\">\n                         \n                          <td  [ngClass]=\"{ highlight:(currentpage === 'row0') }\"><a tabindex=\"1\" id=\"row0\"><span> Customer Name</span> </a> </td>\n                         \n                      </tr>\n                      <tr (click)=\"changeType('row1')\">\n                         \n                          <td [ngClass]=\"{ highlight:(currentpage === 'row1') }\"><a tabindex=\"2\" id=\"row1\"><span> Customer Type</span> </a></td>\n                         \n                      </tr>\n                      <tr (click)=\"changeType('row2')\">\n                         \n                          <td [ngClass]=\"{ highlight:(currentpage === 'row2') }\"><a tabindex=\"3\" id=\"row2\"><span> Customer Region </span></a></td>\n                         \n                      </tr>\n                      <tr (click)=\"changeType('row3')\">\n                         \n                          <td [ngClass]=\"{ highlight:(currentpage === 'row3') }\"><a tabindex=\"4\" id=\"row3\"><span> Site</span></a></td>\n                         \n                      </tr>\n                      <tr>\n                         \n                          <td><a tabindex=\"5\" id=\"row4\"><span> Product line</span></a></td>\n                         \n                      </tr>\n                      <tr>\n                         \n                          <td><a tabindex=\"6\" id=\"row5\"><span> Product Category</span></a></td>\n                         \n                      </tr>\n                      <tr>\n                         \n                          <td><a tabindex=\"7\" id=\"row6\"><span>  Product </span></a></td>\n                         \n                      </tr>\n                     \n                  </tbody>\n              </table>\n              </div>\n            </div>\n            <div class=\"col-9 content2\" style=\"background: #fff;  \">\n              <div>\n                <div class=\"row\">\n                  <div class=\"col\">\n                      <h3>Open Invoice KPI</h3>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"container\" >\n                          <div class=\"row\">\n                              <div class=\"col\">\n                                  <mat-radio-group aria-label=\"Select an option\" (change)=\"radioChange($event)\" [(ngModel)]=\"category\" style=\"margin-left: 440px;\">\n                                      <mat-radio-button [checked]=\"category == 'count'\" value=\"count\"> Count</mat-radio-button>\n                                      <mat-radio-button  [checked]=\"category == 'val'\" value=\"val\"> Value</mat-radio-button>\n                                    </mat-radio-group>\n                              </div>\n                            \n                           \n                             \n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col\">\n                                  <app-barchart   [data]=\"data\" [options]=\"options\" [type]=\"type\"></app-barchart>\n \n                               </div>\n                          </div>\n                          </div>  \n                    </div>\n                  </div>\n                  <div class=\"row\" style=\"margin: 3px;\">\n                      <div class=\"col\">\n                        <button id=\"btn1\" [ngClass]=\"{ btnhighlight:(currentdate === 'year_2') }\" (click)=\"filter('year_2')\" mat-button color=\"primary\">2 YEARS</button>\n                        <button id=\"btn2\" [ngClass]=\"{ btnhighlight:(currentdate === 'year_1') }\" (click)=\"filter('year_1')\" mat-button color=\"primary\">1 YEAR</button>\n                        <button id=\"btn3\" [ngClass]=\"{ btnhighlight:(currentdate === 'month_6') }\" (click)=\"filter('month_6')\" mat-button color=\"primary\">6 MONTHS</button>\n                        <button id=\"btn4\" [ngClass]=\"{ btnhighlight:(currentdate === 'month_3') }\" (click)=\"filter('month_3')\" mat-button color=\"primary\" routerLinkActive=\"mat-accent\">3 MONTH</button>\n                        <button id=\"btn5\" [ngClass]=\"{ btnhighlight:(currentdate === 'false') }\" (click)=\"filter(false)\" mat-button color=\"primary\">CURRENT MONTH</button>\n                        <button id=\"btn6\" [ngClass]=\"{ btnhighlight:(currentdate === 'fale') }\" (click)=\"filter(fale)\" mat-button color=\"primary\">TODAY</button>\n                        \n                      </div>\n                      \n                      \n                    </div>\n\n                  </div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/kpi/invoice/invoice.component.ts":
/*!**************************************************!*\
  !*** ./src/app/kpi/invoice/invoice.component.ts ***!
  \**************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceComponent = /** @class */ (function () {
    // category;
    function InvoiceComponent() {
        this.carouselOptions = {
            margin: 7,
            nav: true,
            navigation: true,
            navigationText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                1500: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        };
        this.type = "bar";
        this.OpenInvoiceByCount = {
            count: {
                month_3: {
                    data: [605, 1813, 0, 0, 0],
                    label: ["Jul-19", "Jun-19", "May-19", "Apr-19", "Mar-19"
                    ]
                },
                month_6: {
                    data: [
                        605,
                        1888,
                        1890,
                        1519,
                        2234
                    ],
                    label: [
                        "Jul-19",
                        "Jun-19",
                        "May-19",
                        "Apr-19",
                        "Mar-19"
                    ]
                },
                year_1: {
                    data: [
                        605,
                        1888,
                        1890,
                        1519,
                        2334,
                        1358,
                        1510,
                        1530,
                        1417,
                        1353,
                        1236
                    ],
                    label: [
                        " Jul-19",
                        "Jun-19",
                        "May-19",
                        "Apr-19",
                        "Mar-19",
                        "Feb-19",
                        "Jan-19",
                        "Dec-18",
                        "Nov-18",
                        "Oct-18",
                        "Sep-18"
                    ]
                },
                year_2: {
                    data: [],
                    label: []
                }
            },
            val: {
                month_3: {
                    data: [605, 1813, 0, 0, 0],
                    label: ["Jul-19", "Jun-19", "May-19", "Apr-19", "Mar-19"
                    ]
                },
                month_6: {
                    data: [],
                    label: []
                },
                year_1: {
                    data: [],
                    label: []
                },
                year_2: {
                    data: [],
                    label: []
                }
            }
        };
        this.CustomerNameOpenInvoice = {
            count: {
                month_3: {
                    data: [
                        280,
                        204,
                        162,
                        92,
                        91,
                        75,
                        72,
                        70,
                        50,
                        49,
                        39,
                        39,
                        38,
                        35,
                        34,
                        33,
                        31,
                        31,
                        30,
                        28,
                        28,
                        24,
                        23,
                        22,
                        22,
                        21,
                        20,
                        20,
                        19,
                        19,
                        18,
                        18,
                        17,
                        17,
                        17,
                        16,
                        16,
                        16,
                        16,
                        15,
                        14,
                        14,
                        13,
                        13,
                        12,
                        12,
                        12,
                        11,
                        11,
                        11,
                        11,
                        10,
                        10,
                        9,
                        9,
                        9,
                        8,
                        8,
                        8,
                        8,
                        8,
                        8,
                        8,
                        7,
                        7,
                        7,
                        7,
                        7,
                        6,
                        6,
                        6,
                        6,
                        6,
                        6,
                        6,
                        6,
                        5,
                        5,
                        5,
                        5,
                        5,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ],
                    label: [
                        "DYNAMATIC TECHNOLOGIES LTD",
                        "MAHINDRA & MAHINDRA LTD",
                        "MAHINDRA AND MAHINDRA LTD",
                        "TAFE MOTORS AND TRACTORS LTD",
                        "SAME DEUTZ-FAHR INDIA P LTD",
                        "MICKY AUTOMOBILES",
                        "SYKA TRACTOR PARTS",
                        "CNH INDUSTRIAL INDIA PVT LTD",
                        "KHANDELWAL AUTOMOBILES",
                        "DEVI ENTERPRISES",
                        "HI-FLEX HYDRAULICS PVT LTD",
                        "VNM HYDROTEK",
                        "MAHINDRA & MAHINDRA LTD.",
                        "SRI RAM ENTERPRISES",
                        "GROW WEL HYDRAULICS",
                        "FLUID SYSTEMS & HYDRAULIC SO",
                        "SAWHNEY TRADING CORPORATION",
                        "ADVANCE ENGINEERS",
                        "JOHNDEERE INDIA PVT LTD",
                        "KIRTI TRADERS",
                        "SHIVAJI GEARS (INDIA)",
                        "NEW HYDRO CONTROLS",
                        "NEW KISHAN TRACTOR PARTS",
                        "VIJAI AGRO SPARES",
                        "RATNA ENTERPRISES",
                        "EXCELLENT HYDRAULICS",
                        "COIMBATORE AERATION ACCESSOR",
                        "A N HUSSUNALLY AND COMPANY",
                        "HARI ENTERPRISES",
                        "RATTAN HOSE & ENG WORK P Ltd",
                        "HANDLEY TECHNOLOGIES LTD",
                        "ARUN HYDRAULICS",
                        "ANH HYDRAULICS PVT LTD",
                        "DYNAMATIC LIMITED UK.",
                        "LINCOLN HELIOS INDIA LTD",
                        "JOHN DEERE INDIA PVT LTD",
                        "CORE HYDRAULICS PVT LTD",
                        "DHARI INDUSTRIAL SPARES AND",
                        "SANDEEP BEARINGS & MILL STOR",
                        "GODREJ AND BOYCE MFG CO P L",
                        "SANJAY HYDRAULIK PVT LTD",
                        "TRIPET AGENCIES",
                        "KION INDIA PVT LTD",
                        "JASHRA ENTERPRISES",
                        "ESCORTS LTD",
                        "CHOUDHARY MOTOR AGENCY",
                        "PADMAVATI HYDRAULICS",
                        "JUBBAL HYDRO",
                        "JOHNDEERE INDIA PVT LTD-NGPR",
                        "S.BOSS & CO.",
                        "SONA HYDROTECH",
                        "CUMMINS ASIA PACIFIC PTE LTD",
                        "MAHAVIR HYDRAULICS PVT LTD",
                        "SCHWING STETTER INDIA PVT LT",
                        "KION INDIA PVT. LTD.",
                        "DIESEL AUTOMOBILES",
                        "ASSOCIATED AGENCIES",
                        "SCHWING STETTER INDIA P LTD",
                        "PRASHANT GAMATEX PVT LTD.",
                        "BULL MACHINES PVT.LTD.",
                        "AMMANN INDIA PVT LTD",
                        "EPIROC MINING INDIA LIMITED",
                        "SHANTHI AUTO & TRACTORS",
                        "S.VAIDYA & COMPANY",
                        "RAMESH AUTOMOBILES",
                        "SRI RAGHAVENDRA AGENCIES",
                        "CUMMINS TECHNOLOGIES INDIA P",
                        "INTERNATIONAL TRACTORS LTD",
                        "CUMMINS KOMATSU ENGINE COMPA",
                        "GODREJ & BOYCE MFG CO.LTD",
                        "ARIHANT AUTO TRADERS",
                        "CUMMINS LTD (DAV)",
                        "TEERUPATI CORPORATION INDIA",
                        "MICRO HYDROTECHNIC P. LTD",
                        "RANBA CASTINGS LIMITED",
                        "MAHADEV TRACTOR PARTS CENTRE",
                        "PARANTHAMAN EXPORTERS",
                        "SIMPSON & CO LIMITED",
                        "TATA HITACHI CONSTRUCTION",
                        "KALIKAMBA ENTERPRISES",
                        "CATERPILLAR INDIA PVT LTD",
                        "DYNAMATIC TECHNOLOGIES LTD.",
                        "LAKSHMI ENTERPRISES",
                        "SHALINI ENTERPRISES",
                        "S R TECHNOLOGIES",
                        "CUMMINS BUSINESS SERVICES",
                        "GROMAX AGRI EQUIPMENT LTD",
                        "ORIENTAL ENGG. WORKS P. LTD",
                        "M/S DEEP TRACTORS",
                        "MAXX HYDRAULICS",
                        "MEHTA  ENTERPRISES",
                        "SEDAN ENGINEERING ENTERPRISE",
                        "INDIA EARTHMOVING SPARE CORP",
                        "BEML LTD",
                        "ACCURATE CNC ENGINEERING",
                        "CAPTAIN TRACTORS PVT LTD",
                        "THE BANGALORE TRACTOR SPARES",
                        "PREET TRACTORS PVT LTD",
                        "TRACTORS &FARM EQUIPMENT LTD",
                        "UMA ENTERPRISE",
                        "R R ENGINEERING AND EXPORTS",
                        "MANKU AGRO TECH PVT LTD",
                        "ASHISH ENGINEERING SERVICES",
                        "CLAAS INDIA PVT LTD",
                        "KARNATAKA DIE CASTING",
                        "SAFARI CONSTRUCTION EQPMENTS",
                        "V R Foundries (Unit - II)",
                        "PRD RIGS INDIA PVT LTD",
                        "JOHN DEERE US AG.",
                        "MOTHERS TECHNOLOGY",
                        "NANDA TRACTORS",
                        "SOUTHERN AUTO AGENCIES",
                        "UGC SUPPLY CHAIN SOLUTIONS",
                        "DYNATECH ENTERPRISES",
                        "KIRLOSKAR OIL ENGINES LTD",
                        "INDO FARM EQUIPMENTS LTD",
                        "APOLLO INFRATECH PVT LTD",
                        "SCA HEAVY EQUIPMENT PVT LTD",
                        "MachineToolPrototypeFactory",
                        "HARK ENGINEERING",
                        "JAICHAMUNDI TECH PVT LTD",
                        "PELICAN SPARES CO.",
                        "MEHTA ENTERPRISES",
                        "WIRTGEN INDIA PVT LTD",
                        "TEREX GLOBAL GmbH",
                        "MASTER HANDLERS PVT LTD.",
                        "SEKO BEC PVT LTD",
                        "DURGAPUR FORLIFT",
                        "CLAAS SERVICE & PARTS Gmbh",
                        "SHERLEKAR INTERNATIONAL",
                        "KALPATARU POWER TRANSMISSION",
                        "OMEGA CONSTRUCTION EQUIPMENT",
                        "PITTI CASTINGS PVT LTD",
                        "PRAGATI POWER CORPORATION L",
                        "TRANS-MECH SYSTEMS",
                        "BALAJI MATERIAL HANDLING P L",
                        "HPCL-MITTAL ENERGY LIMITED",
                        "DRIVE PRODUCTS INC",
                        "F4 INDUSTRIAL & PIPELINE",
                        "FENWICK AND RAVI",
                        "FERRO FOUNDRIES PVT LTD",
                        "WELSPUN CORP LTD",
                        "SHRI RAM TRACTORS",
                        "SIGMA ENTERPRISES",
                        "STANDARD CORPORATION IND LTD",
                        "TEREX WASHINGTON  INC",
                        "DM3S TECHNOLOGIES LLP",
                        "JAYPEE INDIA LIMITED",
                        "CUMMINS INDIA LTD (AT2)",
                        "ACTION CONSTRUCTION EQUPTS",
                        "ALTIUS EQUIPMENTS",
                        "CANARA HYDRAULICS PVT LTD",
                        "REX TECH HYDRAULICS",
                        "WABCO INDIA LIMITED",
                        "WIZTECH INDIA",
                        "ACTION CONSTRUCTION EQIPMENT",
                        "SAN ENGG & LOCOMOTIVE CO LTD",
                        "SEMANTRA NO-DIG ENGG SDN BHD",
                        "SHRI JAGADHAMBA ENTERPRISES",
                        "MICRO HYDRAULICS",
                        "ORIENT ENTERPRISES",
                        "TRIVENI TURBINE LIMITED",
                        "UFLEX LIMITED",
                        "MADHAV VENTURES PVT LTD",
                        "KARTAR AGRO INDUSTRIES PVT L",
                        "GREENPLY INDUSTRIES LIMITED",
                        "HAILSTONE INNOVATIONS PVT LT",
                        "ACTION CONSTRUCTION EQPMT L",
                        "BULL MACHINES PVT LTD-UNIT 2",
                        "SERVEL ENGINEERS",
                        "ASHOK LEYLAND LTD",
                        "BALAJI KERAMOS PVT. LTD.",
                        "Action Construction Equipmt",
                        "ADICO ESCORTS AGRI EQUIPMENT",
                        "UNIMARK MACHINES PVT LTD",
                        "UT PUMPS & SYSTEMS PVT. LTD.",
                        "VE COMMERCIAL VEHICLES LTD",
                        "CASE NEW HOLLANDCONSTRUCTION",
                        "ESCORTS CONSTRUCTION EQ LTD.",
                        "CUMMINS INDIA LTD (AM1)",
                        "JOHN DEERE GmbH And Co KG",
                        "FLUID POWER ENGINEERS",
                        "GLOBAL AUTO PARTS",
                        "KGR RIGS AND MINING EQPMENT"
                    ]
                },
                month_6: {
                    data: [],
                    label: []
                },
                year_1: {
                    data: [],
                    label: []
                },
                year_2: {
                    data: [],
                    label: []
                }
            },
            val: {
                month_3: {
                    data: [
                        4.27,
                        4.09,
                        2.55,
                        2.27,
                        2.07,
                        2.04,
                        1.1,
                        1.08,
                        1.03,
                        0.96,
                        0.53,
                        0.45,
                        0.44,
                        0.36,
                        0.33,
                        0.32,
                        0.3,
                        0.27,
                        0.26,
                        0.26,
                        0.23,
                        0.22,
                        0.21,
                        0.19,
                        0.19,
                        0.19,
                        0.18,
                        0.17,
                        0.17,
                        0.17,
                        0.16,
                        0.15,
                        0.15,
                        0.15,
                        0.15,
                        0.14,
                        0.14,
                        0.14,
                        0.14,
                        0.13,
                        0.12,
                        0.12,
                        0.12,
                        0.11,
                        0.1,
                        0.1,
                        0.1,
                        0.1,
                        0.09,
                        0.09,
                        0.08,
                        0.08,
                        0.08,
                        0.07,
                        0.07,
                        0.07,
                        0.07,
                        0.06,
                        0.06,
                        0.06,
                        0.05,
                        0.05,
                        0.05,
                        0.05,
                        0.05,
                        0.05,
                        0.05,
                        0.05,
                        0.05,
                        0.05,
                        0.04,
                        0.04,
                        0.04,
                        0.04,
                        0.04,
                        0.04,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.03,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.02,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0.01,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    label: [
                        "MAHINDRA & MAHINDRA LTD",
                        "MAHINDRA AND MAHINDRA LTD",
                        "SAME DEUTZ-FAHR INDIA P LTD",
                        "CNH INDUSTRIAL INDIA PVT LTD",
                        "DYNAMATIC TECHNOLOGIES LTD",
                        "TAFE MOTORS AND TRACTORS LTD",
                        "MICKY AUTOMOBILES",
                        "SYKA TRACTOR PARTS",
                        "MAHINDRA & MAHINDRA LTD.",
                        "HANDLEY TECHNOLOGIES LTD",
                        "CUMMINS ASIA PACIFIC PTE LTD",
                        "JOHNDEERE INDIA PVT LTD",
                        "CUMMINS LTD (DAV)",
                        "BEML LTD",
                        "CUMMINS KOMATSU ENGINE COMPA",
                        "JOHN DEERE INDIA PVT LTD",
                        "KHANDELWAL AUTOMOBILES",
                        "CUMMINS BUSINESS SERVICES",
                        "UGC SUPPLY CHAIN SOLUTIONS",
                        "DYNAMATIC LIMITED UK.",
                        "VNM HYDROTEK",
                        "SAWHNEY TRADING CORPORATION",
                        "DEVI ENTERPRISES",
                        "HI-FLEX HYDRAULICS PVT LTD",
                        "ADVANCE ENGINEERS",
                        "JOHNDEERE INDIA PVT LTD-NGPR",
                        "NEW HYDRO CONTROLS",
                        "SANJAY HYDRAULIK PVT LTD",
                        "NEW KISHAN TRACTOR PARTS",
                        "GROW WEL HYDRAULICS",
                        "KARNATAKA DIE CASTING",
                        "RATNA ENTERPRISES",
                        "ESCORTS LTD",
                        "SHIVAJI GEARS (INDIA)",
                        "RATTAN HOSE & ENG WORK P Ltd",
                        "ARUN HYDRAULICS",
                        "INTERNATIONAL TRACTORS LTD",
                        "KION INDIA PVT. LTD.",
                        "JOHN DEERE US AG.",
                        "A N HUSSUNALLY AND COMPANY",
                        "CUMMINS TECHNOLOGIES INDIA P",
                        "KIRTI TRADERS",
                        "COIMBATORE AERATION ACCESSOR",
                        "VIJAI AGRO SPARES",
                        "TRACTORS &FARM EQUIPMENT LTD",
                        "PADMAVATI HYDRAULICS",
                        "DHARI INDUSTRIAL SPARES AND",
                        "CORE HYDRAULICS PVT LTD",
                        "FLUID SYSTEMS & HYDRAULIC SO",
                        "CLAAS SERVICE & PARTS Gmbh",
                        "ANH HYDRAULICS PVT LTD",
                        "SANDEEP BEARINGS & MILL STOR",
                        "EXCELLENT HYDRAULICS",
                        "MANKU AGRO TECH PVT LTD",
                        "HARI ENTERPRISES",
                        "TRIPET AGENCIES",
                        "BULL MACHINES PVT.LTD.",
                        "SRI RAM ENTERPRISES",
                        "SEMANTRA NO-DIG ENGG SDN BHD",
                        "CHOUDHARY MOTOR AGENCY",
                        "GODREJ AND BOYCE MFG CO P L",
                        "JASHRA ENTERPRISES",
                        "SIMPSON & CO LIMITED",
                        "JUBBAL HYDRO",
                        "S.BOSS & CO.",
                        "DIESEL AUTOMOBILES",
                        "ASSOCIATED AGENCIES",
                        "MAHAVIR HYDRAULICS PVT LTD",
                        "SHANTHI AUTO & TRACTORS",
                        "V R Foundries (Unit - II)",
                        "NANDA TRACTORS",
                        "KION INDIA PVT LTD",
                        "SCHWING STETTER INDIA PVT LT",
                        "PARANTHAMAN EXPORTERS",
                        "MAHADEV TRACTOR PARTS CENTRE",
                        "PREET TRACTORS PVT LTD",
                        "ARIHANT AUTO TRADERS",
                        "MEHTA  ENTERPRISES",
                        "SRI RAGHAVENDRA AGENCIES",
                        "LINCOLN HELIOS INDIA LTD",
                        "PRASHANT GAMATEX PVT LTD.",
                        "GODREJ & BOYCE MFG CO.LTD",
                        "CUMMINS INDIA LTD (AM1)",
                        "LAKSHMI ENTERPRISES",
                        "SONA HYDROTECH",
                        "WIRTGEN INDIA PVT LTD",
                        "S.VAIDYA & COMPANY",
                        "MICRO HYDROTECHNIC P. LTD",
                        "CATERPILLAR INDIA PVT LTD",
                        "RAMESH AUTOMOBILES",
                        "SHRI RAM TRACTORS",
                        "SEDAN ENGINEERING ENTERPRISE",
                        "GROMAX AGRI EQUIPMENT LTD",
                        "CLAAS INDIA PVT LTD",
                        "PRD RIGS INDIA PVT LTD",
                        "ACTION CONSTRUCTION EQIPMENT",
                        "TEERUPATI CORPORATION INDIA",
                        "INDO FARM EQUIPMENTS LTD",
                        "TATA HITACHI CONSTRUCTION",
                        "MAXX HYDRAULICS",
                        "ACTION CONSTRUCTION EQUPTS",
                        "ORIENTAL ENGG. WORKS P. LTD",
                        "CAPTAIN TRACTORS PVT LTD",
                        "DYNATECH ENTERPRISES",
                        "ACCURATE CNC ENGINEERING",
                        "KIRLOSKAR OIL ENGINES LTD",
                        "EPIROC MINING INDIA LIMITED",
                        "PELICAN SPARES CO.",
                        "JAYPEE INDIA LIMITED",
                        "MOTHERS TECHNOLOGY",
                        "M/S DEEP TRACTORS",
                        "SEKO BEC PVT LTD",
                        "DRIVE PRODUCTS INC",
                        "SOUTHERN AUTO AGENCIES",
                        "KARTAR AGRO INDUSTRIES PVT L",
                        "SAFARI CONSTRUCTION EQPMENTS",
                        "R R ENGINEERING AND EXPORTS",
                        "UMA ENTERPRISE",
                        "STANDARD CORPORATION IND LTD",
                        "INDIA EARTHMOVING SPARE CORP",
                        "JOHN DEERE GmbH And Co KG",
                        "ASHISH ENGINEERING SERVICES",
                        "DYNAMATIC TECHNOLOGIES LTD.",
                        "KGR RIGS AND MINING EQPMENT",
                        "SCHWING STETTER INDIA P LTD",
                        "THE BANGALORE TRACTOR SPARES",
                        "JAICHAMUNDI TECH PVT LTD",
                        "PITTI CASTINGS PVT LTD",
                        "AMMANN INDIA PVT LTD",
                        "OMEGA CONSTRUCTION EQUIPMENT",
                        "HARK ENGINEERING",
                        "UNIMARK MACHINES PVT LTD",
                        "MADHAV VENTURES PVT LTD",
                        "SCA HEAVY EQUIPMENT PVT LTD",
                        "TRANS-MECH SYSTEMS",
                        "CUMMINS INDIA LTD (AT2)",
                        "BALAJI MATERIAL HANDLING P L",
                        "DURGAPUR FORLIFT",
                        "S R TECHNOLOGIES",
                        "FLUID POWER ENGINEERS",
                        "CANARA HYDRAULICS PVT LTD",
                        "ADICO ESCORTS AGRI EQUIPMENT",
                        "MICRO HYDRAULICS",
                        "VE COMMERCIAL VEHICLES LTD",
                        "BULL MACHINES PVT LTD-UNIT 2",
                        "FENWICK AND RAVI",
                        "ASHOK LEYLAND LTD",
                        "UFLEX LIMITED",
                        "SHRI JAGADHAMBA ENTERPRISES",
                        "HAILSTONE INNOVATIONS PVT LT",
                        "ALTIUS EQUIPMENTS",
                        "TEREX WASHINGTON  INC",
                        "REX TECH HYDRAULICS",
                        "KALIKAMBA ENTERPRISES",
                        "ESCORTS CONSTRUCTION EQ LTD.",
                        "SERVEL ENGINEERS",
                        "FERRO FOUNDRIES PVT LTD",
                        "ACTION CONSTRUCTION EQPMT L",
                        "CASE NEW HOLLANDCONSTRUCTION",
                        "MASTER HANDLERS PVT LTD.",
                        "GLOBAL AUTO PARTS",
                        "MEHTA ENTERPRISES",
                        "ORIENT ENTERPRISES",
                        "GREENPLY INDUSTRIES LIMITED",
                        "APOLLO INFRATECH PVT LTD",
                        "F4 INDUSTRIAL & PIPELINE",
                        "UT PUMPS & SYSTEMS PVT. LTD.",
                        "PRAGATI POWER CORPORATION L",
                        "WIZTECH INDIA",
                        "SHALINI ENTERPRISES",
                        "BALAJI KERAMOS PVT. LTD.",
                        "WELSPUN CORP LTD",
                        "HPCL-MITTAL ENERGY LIMITED",
                        "SAN ENGG & LOCOMOTIVE CO LTD",
                        "SIGMA ENTERPRISES",
                        "KALPATARU POWER TRANSMISSION",
                        "WABCO INDIA LIMITED",
                        "DM3S TECHNOLOGIES LLP",
                        "TRIVENI TURBINE LIMITED",
                        "TEREX GLOBAL GmbH",
                        "SHERLEKAR INTERNATIONAL",
                        "MachineToolPrototypeFactory",
                        "RANBA CASTINGS LIMITED",
                        "Action Construction Equipmt"
                    ]
                },
                month_6: {
                    data: [],
                    label: []
                },
                year_1: {
                    data: [],
                    label: []
                },
                year_2: {
                    data: [],
                    label: []
                }
            }
        };
        this.CustomerTypeOpenInvoice = {
            count: {
                month_3: {
                    data: [
                        639,
                        436,
                        405,
                        264,
                        198,
                        140,
                        122,
                        64,
                        28,
                        19,
                        3,
                        1
                    ],
                    label: [
                        "TOE",
                        "SDLR",
                        "TDLR",
                        "BRN",
                        "SOE",
                        "OTHR",
                        "SOTH",
                        "EXP",
                        "INAC",
                        "SCRP",
                        "OTHERS",
                        "TOTH"
                    ]
                },
                month_6: {
                    data: [
                        2648,
                        1522,
                        1059,
                        941,
                        728,
                        478,
                        386,
                        161,
                        66,
                        56,
                        13,
                        1
                    ],
                    label: [
                        "TOE",
                        "SDLR",
                        "TDLR",
                        "BRN",
                        "SOE",
                        "OTHR",
                        "SOTH",
                        "EXP",
                        "INAC",
                        "SCRP",
                        "OTHERS",
                        "TOTH"
                    ]
                },
                year_1: {
                    data: [
                        5337,
                        3280,
                        2022,
                        1813,
                        1576,
                        1067,
                        817,
                        339,
                        164,
                        108,
                        28,
                        4,
                        2
                    ],
                    label: [
                        "TOE",
                        "SDLR",
                        "TDLR",
                        "BRN",
                        "SOE",
                        "OTHR",
                        "SOTH",
                        "EXP",
                        "INAC",
                        "SCRP",
                        "OTHERS",
                        "TOTH"
                    ]
                },
                year_2: {
                    data: [
                        10545,
                        6651,
                        5660,
                        3857,
                        3733,
                        2217,
                        1527,
                        799,
                        380,
                        271,
                        56,
                        24,
                        8
                    ],
                    label: [
                        "TOE",
                        "SDLR",
                        "TDLR",
                        "BRN",
                        "SOE",
                        "OTHR",
                        "SOTH",
                        "EXP",
                        "INAC",
                        "SCRP",
                        "OTHERS",
                        "TOTH"
                    ]
                }
            },
            val: {
                month_3: {
                    data: [
                        17,
                        2.94,
                        4.25,
                        2.36,
                        4.77,
                        0.96,
                        0.6,
                        2.33,
                        0.17,
                        0.24,
                        0.01,
                        0.02
                    ],
                    label: [
                        "TOE",
                        "SDLR",
                        "TDLR",
                        "BRN",
                        "SOE",
                        "OTHR",
                        "SOTH",
                        "EXP",
                        "INAC",
                        "SCRP",
                        "OTHERS",
                        "TOTH"
                    ]
                },
                month_6: {
                    data: [
                        54.21,
                        11.44,
                        10.92,
                        7.68,
                        13.97,
                        3.43,
                        3.19,
                        7.17,
                        0.56,
                        1.36,
                        0.06,
                        0.02
                    ],
                    label: [
                        "TOE",
                        "SDLR",
                        "TDLR",
                        "BRN",
                        "SOE",
                        "OTHR",
                        "SOTH",
                        "EXP",
                        "INAC",
                        "SCRP",
                        "OTHERS",
                        "TOTH"
                    ]
                },
                year_1: {
                    data: [
                        130.42,
                        27.16,
                        21.84,
                        16.8,
                        39.49,
                        7.35,
                        8.74,
                        14.53,
                        4.08,
                        0.8,
                        0.1,
                        0.03,
                        0.67
                    ],
                    label: [
                        "TOE",
                        "SDLR",
                        "TDLR",
                        "BRN",
                        "SOE",
                        "OTHR",
                        "SOTH",
                        "EXP",
                        "INAC",
                        "SCRP",
                        "OTHERS",
                        "TOTH"
                    ]
                },
                year_2: {
                    data: [
                        270.57,
                        52.05,
                        49.71,
                        40.49,
                        103.12,
                        15.96,
                        17.06,
                        34.77,
                        9.3,
                        1.64,
                        0.17,
                        0.13,
                        1.17
                    ],
                    label: [
                        "TOE",
                        "SDLR",
                        "TDLR",
                        "BRN",
                        "SOE",
                        "OTHR",
                        "SOTH",
                        "EXP",
                        "INAC",
                        "SCRP",
                        "OTHERS",
                        "TOTH"
                    ]
                }
            }
        };
        this.CustomerRegionOpenInvoice = {
            count: { month_3: {
                    data: [
                        671,
                        573,
                        347,
                        205,
                        155,
                        135,
                        102,
                        70,
                        32,
                        29
                    ],
                    label: [
                        "BMUM",
                        "BDEL",
                        "HB01",
                        "BABD",
                        "BCHN",
                        "BHYD",
                        "BKLK",
                        "BPUN",
                        "BCAL",
                        "BIND"
                    ]
                },
                month_6: {
                    data: [
                        2639,
                        1777,
                        1089,
                        655,
                        553,
                        544,
                        386,
                        292,
                        93,
                        31
                    ],
                    label: [
                        "BMUM",
                        "BDEL",
                        "HB01",
                        "BABD",
                        "BCHN",
                        "BHYD",
                        "BKLK",
                        "BPUN",
                        "BCAL",
                        "BIND"
                    ]
                },
                year_1: {
                    data: [
                        5014,
                        3890,
                        2383,
                        1503,
                        1100,
                        968,
                        797,
                        634,
                        223,
                        44
                    ],
                    label: [
                        "BMUM",
                        "BDEL",
                        "HB01",
                        "BABD",
                        "BCHN",
                        "BHYD",
                        "BKLK",
                        "BPUN",
                        "BCAL",
                        "BIND"
                    ]
                },
                year_2: {
                    data: [
                        10228,
                        8347,
                        5712,
                        3450,
                        2458,
                        1881,
                        1659,
                        1408,
                        495,
                        88
                    ],
                    label: [
                        "BMUM",
                        "BDEL",
                        "HB01",
                        "BABD",
                        "BCHN",
                        "BHYD",
                        "BKLK",
                        "BPUN",
                        "BCAL",
                        "BIND"
                    ]
                }
            },
            val: {
                month_3: {
                    data: [
                        10.77,
                        9.19,
                        7.31,
                        1.24,
                        1.12,
                        0.76,
                        3.34,
                        1.53,
                        0.23,
                        0.15
                    ],
                    label: [
                        "BMUM",
                        "BDEL",
                        "HB01",
                        "BABD",
                        "BCHN",
                        "BHYD",
                        "BKLK",
                        "BPUN",
                        "BCAL",
                        "BIND"
                    ]
                },
                month_6: {
                    data: [
                        36.17,
                        26.71,
                        22.18,
                        4.77,
                        9.22,
                        4.25,
                        2.65,
                        7.16,
                        0.71,
                        0.19
                    ],
                    label: [
                        "BMUM",
                        "BDEL",
                        "HB01",
                        "BABD",
                        "BCHN",
                        "BHYD",
                        "BKLK",
                        "BPUN",
                        "BCAL",
                        "BIND"
                    ]
                },
                year_1: {
                    data: [
                        80.98,
                        63.37,
                        55.44,
                        12.26,
                        8.46,
                        21.14,
                        23.32,
                        4.71,
                        1.99,
                        0.33
                    ],
                    label: [
                        "BMUM",
                        "BDEL",
                        "HB01",
                        "BABD",
                        "BCHN",
                        "BHYD",
                        "BKLK",
                        "BPUN",
                        "BCAL",
                        "BIND"
                    ]
                },
                year_2: {
                    data: [
                        167.91,
                        129.92,
                        139.22,
                        29.49,
                        21.57,
                        55.09,
                        37.82,
                        10.43,
                        4,
                        0.69
                    ],
                    label: [
                        "BMUM",
                        "BDEL",
                        "HB01",
                        "BABD",
                        "BCHN",
                        "BHYD",
                        "BKLK",
                        "BPUN",
                        "BCAL",
                        "BIND"
                    ]
                }
            }
        };
        this.CustomerShippingOpenInvoice = {
            month_3: {
                data: [],
                label: []
            },
            month_6: {
                data: [],
                label: []
            },
            year_1: {
                data: [],
                label: []
            },
            year_2: {
                data: [],
                label: []
            }
        };
        this.ProductGroupOpenInvoice = {
            count: {
                month_3: {
                    data: [
                        1628,
                        131,
                        85,
                        48,
                        30,
                        22,
                        12,
                        8,
                        7,
                        7,
                        4,
                        1,
                        1
                    ],
                    label: [
                        "F100",
                        "F400",
                        "F200",
                        "F160",
                        "F150",
                        "C125",
                        "C100",
                        "C325",
                        "C250",
                        "C300",
                        "C380",
                        "C375",
                        "C175"
                    ]
                },
                month_6: {
                    data: [
                        5329,
                        415,
                        273,
                        95,
                        63,
                        45,
                        24,
                        23,
                        16,
                        15,
                        10,
                        8,
                        6,
                        4,
                        3,
                        2,
                        1
                    ],
                    label: [
                        "F100",
                        "F400",
                        "F200",
                        "F160",
                        "F150",
                        "C125",
                        "C100",
                        "C325",
                        "C250",
                        "C300",
                        "C380",
                        "C375",
                        "C175"
                    ]
                },
                year_1: {
                    data: [
                        5329,
                        415,
                        273,
                        95,
                        63,
                        45,
                        24,
                        23,
                        16,
                        15,
                        10,
                        8,
                        6,
                        4,
                        3,
                        2,
                        1
                    ],
                    label: [
                        "F100",
                        "F400",
                        "F200",
                        "F160",
                        "F150",
                        "C125",
                        "C100",
                        "C325",
                        "C250",
                        "C300",
                        "C380",
                        "C375",
                        "C175"
                    ]
                },
                year_2: {
                    data: [
                        26109,
                        2295,
                        1528,
                        481,
                        339,
                        222,
                        116,
                        112,
                        88,
                        78,
                        49,
                        45,
                        33,
                        20,
                        16,
                        16,
                        3,
                        2,
                        1
                    ],
                    label: [
                        "F100",
                        "F400",
                        "F200",
                        "F160",
                        "F150",
                        "C125",
                        "C100",
                        "C325",
                        "C250",
                        "C300",
                        "C380",
                        "C375",
                        "C175"
                    ]
                }
            },
            val: {
                month_3: {
                    data: [
                        24.11,
                        0.62,
                        3.85,
                        0.09,
                        1.65,
                        0.21,
                        0.1,
                        0.02,
                        0.03,
                        0.1,
                        0.05,
                        0.01,
                        0
                    ],
                    label: [
                        "F100",
                        "F400",
                        "F200",
                        "F160",
                        "F150",
                        "C125",
                        "C100",
                        "C325",
                        "C250",
                        "C300",
                        "C380",
                        "C375",
                        "C175"
                    ]
                },
                month_6: {
                    data: [
                        78.62,
                        2.48,
                        11,
                        0.14,
                        4.08,
                        0.33,
                        0.27,
                        0.12,
                        0.05,
                        0.19,
                        0.15,
                        0.12,
                        0.01,
                        0.02,
                        0.29,
                        0.02,
                        0
                    ],
                    label: [
                        "F100",
                        "F400",
                        "F200",
                        "F160",
                        "F150",
                        "C125",
                        "C100",
                        "C325",
                        "C250",
                        "C300",
                        "C380",
                        "C375",
                        "C175"
                    ]
                },
                year_1: {
                    data: [
                        185.84,
                        6.81,
                        27.7,
                        11.89,
                        0.21,
                        0.66,
                        0.23,
                        0.63,
                        0.21,
                        0.35,
                        0.35,
                        0.21,
                        0.13,
                        0.02,
                        0.07,
                        0.29,
                        0
                    ],
                    label: [
                        "F100",
                        "F400",
                        "F200",
                        "F160",
                        "F150",
                        "C125",
                        "C100",
                        "C325",
                        "C250",
                        "C300",
                        "C380",
                        "C375",
                        "C175"
                    ]
                },
                year_2: {
                    data: [
                        398.87,
                        15.03,
                        74.4,
                        29.7,
                        0.37,
                        1.47,
                        0.54,
                        1.21,
                        1.25,
                        0.87,
                        0.5,
                        0.26,
                        0.06,
                        0.16,
                        1.75,
                        0.15,
                        0.08,
                        0.01,
                        0
                    ],
                    label: [
                        "F100",
                        "F400",
                        "F200",
                        "F160",
                        "F150",
                        "C125",
                        "C100",
                        "C325",
                        "C250",
                        "C300",
                        "C380",
                        "C375",
                        "C175"
                    ]
                }
            }
        };
        this.flag1 = false;
        this.flag2 = false;
        // color=["#707139","#db2e3e","#9c5ba0","#fb9f8c"]
        this.color = ["#ff5757", "#2b546a", "#f2d9bb", "#fb9f8c"];
    }
    InvoiceComponent.prototype.next = function () {
        this.owlElement.next([200]);
    };
    InvoiceComponent.prototype.previous = function () {
        this.owlElement.previous([200]);
    };
    InvoiceComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    InvoiceComponent.prototype.ngOnInit = function () {
        this.start.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.defaultData = this.OpenInvoiceByCount.count;
        this.defaultoption = "Open Invoice (By Count)";
        this.options = "Invoice Issued (By Count) ";
        this.currentpage = "row8";
        this.currentdate = "month_3";
        this.category = "count";
        this.data = this.OpenInvoiceByCount.count.month_3;
    };
    InvoiceComponent.prototype.filter = function (dt) {
        this.category = 'count';
        this.currentdate = dt;
        switch (this.currentpage) {
            case 'row8':
                this.data = this.OpenInvoiceByCount[this.category][dt];
                break;
            case 'row0':
                this.data = this.CustomerNameOpenInvoice[dt];
                break;
            case 'row1':
                this.data = this.CustomerTypeOpenInvoice[this.category][dt];
                break;
            case 'row2':
                this.data = this.CustomerRegionOpenInvoice[this.category][dt];
                break;
            case 'row3':
                this.data = this.CustomerShippingOpenInvoice[dt];
                break;
            case 'row4':
                this.data = this.ProductGroupOpenInvoice[this.category][dt];
                break;
            case 'row8':
                this.data = this.OpenInvoiceByCount[dt];
                break;
            default:
                break;
        }
        // this.data=this.OpenInvoiceByCount[dt]
    };
    InvoiceComponent.prototype.changeType = function (key) {
        this.category = 'count';
        this.currentdate = "month_3";
        this.options = "Invoice Issued (By Count) ";
        switch (key) {
            case 'row0':
                this.data = this.CustomerNameOpenInvoice[this.category]["month_3"];
                this.currentpage = "row0";
                break;
            case 'row1':
                this.data = this.CustomerTypeOpenInvoice[this.category]["month_3"];
                this.currentpage = "row1";
                break;
            case 'row2':
                this.data = this.CustomerRegionOpenInvoice[this.category]["month_3"];
                this.currentpage = "row2";
                break;
            case 'row3':
                this.data = this.CustomerShippingOpenInvoice.month_3;
                this.currentpage = "row3";
                break;
            case 'row4':
                this.data = this.ProductGroupOpenInvoice[this.category]["month_3"];
                this.currentpage = "row4";
                break;
            case 'row8':
                this.data = this.OpenInvoiceByCount[this.category]["month_3"];
                this.currentpage = "row8";
                break;
            default:
                break;
        }
    };
    InvoiceComponent.prototype.radioChange = function (e) {
        console.log("event", e.value, this.category, this.currentdate);
        if (e.value == 'count') {
            this.options = "Invoice Issued ( By Count)";
            switch (this.currentpage) {
                case 'row8':
                    this.data = this.OpenInvoiceByCount[this.currentdate];
                    break;
                case 'row0':
                    // this.data=this.CustomerNameOpenInvoice[this.category]?this.CustomerNameOpenInvoice[this.category][this.currentdate]:{data:[],label:[]};
                    this.data = this.CustomerNameOpenInvoice[this.category][this.currentdate];
                    break;
                case 'row1':
                    this.data = this.CustomerTypeOpenInvoice[this.category][this.currentdate];
                    break;
                case 'row2':
                    this.data = this.CustomerRegionOpenInvoice[this.category][this.currentdate];
                    break;
                case 'row3':
                    this.data = this.CustomerShippingOpenInvoice[this.currentdate];
                    break;
                case 'row4':
                    this.data = this.ProductGroupOpenInvoice[this.category][this.currentdate];
                    break;
                case 'row8':
                    this.data = this.OpenInvoiceByCount[this.category][this.currentdate];
                    break;
                default:
                    this.data = { data: [], label: [] };
                    break;
            }
        }
        else if (e.value == 'val') {
            this.options = "Total Invoice Value (in Crores)";
            switch (this.currentpage) {
                case 'row8':
                    this.data = { data: [], label: [] };
                    break;
                case 'row0':
                    this.data = this.CustomerNameOpenInvoice['val']["month_3"];
                    break;
                case 'row1':
                    this.data = this.CustomerTypeOpenInvoice['val'][this.currentdate];
                    break;
                case 'row2':
                    this.data = this.CustomerRegionOpenInvoice['val'][this.currentdate];
                    break;
                case 'row3':
                    this.data = { data: [], label: [] };
                    break;
                case 'row4':
                    this.data = this.ProductGroupOpenInvoice['val'][this.currentdate];
                    break;
                case 'row8':
                    this.data = { data: [], label: [] };
                    break;
                default:
                    this.data = { data: [], label: [] };
                    break;
            }
        }
    };
    InvoiceComponent.prototype.showpanel = function (e) {
        var _this = this;
        this.flag1 = true;
        setTimeout(function () {
            _this.scroll(e);
        }, 1000);
    };
    InvoiceComponent.prototype.showTable = function (e) {
        var _this = this;
        this.flag2 = true;
        this.second.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        //  this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        //  console.log( e1)
        setTimeout(function () {
            _this.second.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            // this.scroll(e: HTMLElement);
        }, 1000);
    };
    InvoiceComponent.prototype.Clear = function () {
        this.ngOnInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('second'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InvoiceComponent.prototype, "second", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('start'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InvoiceComponent.prototype, "start", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('owlElement'),
        __metadata("design:type", ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlCarousel"])
    ], InvoiceComponent.prototype, "owlElement", void 0);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/kpi/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.css */ "./src/app/kpi/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/kpi/order/order.component.css":
/*!***********************************************!*\
  !*** ./src/app/kpi/order/order.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh3{\r\n    text-align: center;\r\n    height: 35px;\r\n    color: #e6f2ff;\r\n    font-weight: bold;\r\n    /* background: #062e42;\r\n    border-left: 1px solid rgb(255, 255, 255)!important;\r\n    font-size: 18px; */\r\n}\r\na {\r\n    text-decoration: none !important;\r\n}\r\n/* unvisited link */\r\n/* selected link */\r\na {\r\n    color: #fff;\r\n  }\r\na:focus {\r\n    color: #fff;\r\n\r\n  }\r\n.content2{\r\n    padding: initial;\r\n}\r\ntable{\r\n    color: #fff;\r\n    /* margin-top: 120px; */\r\n    font-size: 18px;\r\n}\r\ntr{\r\n    /* border-bottom: 1px solid rgb(255, 255, 255)!important; */\r\n}\r\ntd{\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    border-style: solid;\r\n    border-width: 4px;\r\n    border-radius: 39px;\r\n    /* padding: 53px; */\r\n    background: #8397ad;\r\n    border: 5px solid rgb(255, 255, 255)!important;\r\n\r\n\r\n}\r\n.highlight{\r\n    font-size: large;\r\n    background: #86c7f3;\r\n}\r\ntd:focus,\r\ntd:hover {\r\n    font-size: large;\r\n    background: #86c7f3;\r\n  }\r\ntd a span{\r\n    margin-left: 8px;\r\n}\r\ni{\r\n    font-size: larger;\r\n}\r\n/* td a#row0:focus,a#row1:focus,a#row2:focus,a#row3:focus,a#row4:focus,a#row5:focus,a#row6:focus,a#row7:focus\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: block;\r\n    background: #b1babf;\r\n    padding: inherit;\r\n    font-size: large;\r\n  \r\n}\r\ntd a#row0:visited,a#row1:visited,a#row2:visited,a#row3:visited,a#row4:visited,a#row5:visited,a#row6:visited,a#row7:visited\r\n{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: block;\r\n    background: #b1babf;\r\n    padding: inherit;\r\n    font-size: large;\r\n  \r\n} */\r\n.chartjs-render-monitor {\r\n   \r\n    height: 470px!important;\r\n}\r\nbutton\r\n{\r\n    background: #95a3ab;\r\n    color: aliceblue;\r\n}\r\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\r\n    color: #f2f1f5;\r\n    margin: 2px;\r\n    width: 180px;\r\n    border-radius: 32px;\r\n}\r\n.mat-button:hover\r\n{\r\n    height: 42px;\r\n    background: #333547;\r\n}\r\n.mat-button:focus\r\n{\r\n    height: 42px;\r\n    background: #333547;\r\n}\r\n.btnhighlight{\r\n    height: 42px;\r\n    background: #333547;\r\n}\r\n.mat-radio-button {\r\n   \r\n    margin-right: 10px!important;\r\n}\r\n.bg-primary {\r\n    background-color: #626ed4 !important;\r\n  }\r\n/************ Custome Carousal ***************/\r\n.previous-btn button{\r\n    background: transparent;\r\n    border: white;\r\n}\r\n.previous-btn i{\r\n    font-size: -webkit-xxx-large;\r\n    margin-top: 60px;\r\n    position: absolute;\r\n    color: #6c757d;\r\n}\r\n.next-btn button{\r\n   \r\n    background: transparent;\r\n    border: white;\r\n}\r\n.next-btn i{\r\n    font-size: -webkit-xxx-large;\r\n    margin-top: 60px;\r\n    position: absolute;\r\n    color: #6c757d;\r\n}\r\n.owl-carousel.owl-drag .owl-item {\r\n    width: 424px!important;\r\n}\r\n.perf-graph-navigation {\r\n    margin: 10px 0 0 0;\r\n    width: 100%;\r\n}\r\n.perf-graph-navigation .prev, .perf-graph-navigation .next {\r\n    width: 51px;\r\n}\r\n.perf-graph-navigation div {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 7px 0 1px 0;\r\n    margin: 0 5px 0 0;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    background: #fa6d4f;\r\n    background: linear-gradient(to bottom, #fa6d4f 0%,#f55f40 100%);\r\n    border: 0px solid #b94c35;\r\n    border-width: 0 0 2px 0;\r\n    border-radius: 2px;\r\n}\r\n.perf-graph-navigation .prev span, .perf-graph-navigation .next span {\r\n    /* background-image: url(../Images/chart-prev.png); */\r\n    position: absolute;\r\n    color: #6c757d;\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    background-size: 16px 16px;\r\n    background-repeat: no-repeat;\r\n}\r\nperf-graph-navigation div {\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 7px 0 1px 0;\r\n    margin: 0 5px 0 0;\r\n    height: 22px;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    background: #fa6d4f;\r\n    background: linear-gradient(to bottom, #fa6d4f 0%,#f55f40 100%);\r\n    border: 0px solid #b94c35;\r\n    border-width: 0 0 2px 0;\r\n    border-radius: 2px;\r\n}\r\n.mat-card {\r\n    background: #fff;\r\n    color: #424242;\r\n    margin-left: 2px;\r\n    margin-top: 30px;\r\n    margin-bottom: 40px;\r\n}\r\nh4{\r\n    font-size: xx-large!important;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/kpi/order/order.component.html":
/*!************************************************!*\
  !*** ./src/app/kpi/order/order.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n    <div class=\"page-title-box\" #start>\n        <div class=\"row align-items-center\">\n            \n            <div class=\"col-sm-6\">\n                <h4 class=\"page-title\">Orders Analysis</h4>\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">Account Recviables</a></li>\n                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">KPI</a></li>\n                    <li class=\"breadcrumb-item active\">Orders</li>\n                </ol>\n  \n            </div>\n           \n        </div>\n    </div>\n     <div class=\"row\" style=\"    height: 350px;\n    \">\n        <div class=\"col-1 previous-btn\" >\n                <button  (click)=\"previous()\"> <i class=\"typcn typcn-chevron-left \"></i></button>\n    \n        </div>\n        <div class=\"col-xl-10\" >\n                <owl-carousel   #owlElement class=\"carousel slide\" [options]=\"{margin:180,\n    \n    autoWidth:true,\n    items:2, dots: false, navigation: false}\" [items]=\"[1,2,3]\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                        <!-- <div class=\"item\" *ngFor=\"let image of images;let i= index\"> -->\n    <div class=\"item\" style=\"width:550px\"> \n         <mat-card (click)=\"showpanel(first)\">\n        <div style=\"\">\n          <app-barchart   [data]=\"defaultData.month_3\" [options]=\"'Open Orders'\" [type]=\"type\" [color]=\"color[0]\"></app-barchart>\n          <!-- <app-barchart [data]=\"item.dataset\" [options]=\"item.options\" [type]=\"item.Type\"></app-barchart> -->\n       </div>  \n        </mat-card>\n    \n    </div>\n    <div class=\"item\" style=\"width:550px\"> \n         <mat-card (click)=\"showpanel(first)\">\n        <div style=\"\">\n          <app-barchart   [data]=\"defaultData.month_6\" [options]=\"'Order Ageing'\" [type]=\"type\" [color]=\"color[1]\"></app-barchart>\n          <!-- <app-barchart [data]=\"item.dataset\" [options]=\"item.options\" [type]=\"item.Type\"></app-barchart> -->\n               \n        </div>\n    </mat-card>\n    </div>\n    <div class=\"item\" style=\"width:550px\"> \n         <mat-card (click)=\"showpanel(first)\">\n        <div style=\"\">\n          <app-barchart   [data]=\"defaultData.year_1\" [options]=\"'Order Fulfillment'\" [type]=\"type\" [color]=\"color[2]\"></app-barchart>\n          <!-- <app-barchart [data]=\"item.dataset\" [options]=\"item.options\" [type]=\"item.Type\"></app-barchart> -->\n                \n        </div>\n    </mat-card>\n    </div>\n  \n       </owl-carousel>\n        \n                      \n            </div>\n            <div class=\"col-1 next-btn\">\n                    <button (click)=\"next()\"> <i class=\"typcn typcn-chevron-right\"></i></button>\n    \n    \n                </div>\n    <!-- </div> -->\n     \n  </div>\n    <!-- <div class=\"row\">\n      <div class=\"col-xl-3 col-md-6\" (click)=\"scroll(first)\">\n          <div class=\"card mini-stat bg-primary text-white\">\n              <div class=\"card-body\">\n                  <div class=\"mb-4\">\n                      <div class=\"float-left mini-stat-img mr-4\">\n                          <img src=\"assets/images/services-icon/01.png\" alt=\"\">\n                      </div>\n                      <h5 class=\"font-16 text-uppercase mt-0 text-white-50\">Open Orders</h5>\n                      <h4 class=\"font-500\">1,685 <i class=\"mdi mdi-arrow-up text-success ml-2\"></i></h4>\n                      <app-barchart  [data]=\"data\" [options]=\"options\" [type]=\"type\"></app-barchart>\n                      <div class=\"mini-stat-label bg-success\">\n                          <p class=\"mb-0\">+ 12%</p>\n                      </div>\n                  </div>\n                  <div class=\"pt-2\">\n                      <div class=\"float-right\">\n                          <a href=\"#\" class=\"text-white-50\"><i class=\"mdi mdi-arrow-right h5\"></i></a>\n                      </div>\n\n                      <p class=\"text-white-50 mb-0\">Since last 3 month</p>\n                  </div>\n              </div>\n          </div>\n      </div>\n      </div> -->\n    \n     \n      \n \n    <section #first id =\"first\" class=\"page-title-box\" >\n\n    <div class=\"row\"   style=\"\n    border: 1px solid rgb(0, 119, 179)!important;\n     \">\n      <div class=\"col-sm-12\" >\n        <div class=\"row\" style=\"\" >\n          <div class=\"col-3\" style=\" padding: initial  \">\n            <div>\n            <div style=\"    display: block;\n    height: 60px;\n    background: #062e42;\">\n            <h3>Dimensions</h3>\n\n            </div>\n            \n            <table class=\"table col-sm-9\" style=\"    margin-left: 54px;\n    margin-top: 30px;\">\n                <tbody>\n                    <tr (click)=\"changeType('row8')\">\n                       \n                        <td  [ngClass]=\"{ highlight:(currentpage === 'row8') }\"><a tabindex=\"8\" id=\"row8\"><i class=\"ti-pie-chart\"></i><span> Date Wise</span> </a> </td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row0')\">\n                       \n                        <td  [ngClass]=\"{ highlight:(currentpage === 'row0') }\"><a tabindex=\"1\" id=\"row0\"><i class=\"ti-pie-chart\"></i><span> Customer Name</span> </a> </td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row1')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row1') }\"><a tabindex=\"2\" id=\"row1\"><i class=\"ti-pie-chart\"></i><span> Customer Type</span> </a></td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row2')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row2') }\"><a tabindex=\"3\" id=\"row2\"><i class=\"ti-pie-chart\"></i><span> Customer Region </span></a></td>\n                       \n                    </tr>\n                    <tr (click)=\"changeType('row3')\">\n                       \n                        <td [ngClass]=\"{ highlight:(currentpage === 'row3') }\"><a tabindex=\"4\" id=\"row3\"><i class=\"ti-pie-chart\"></i><span> Site</span></a></td>\n                       \n                    </tr>\n                    <tr>\n                       \n                        <td><a tabindex=\"5\" id=\"row4\"><i class=\"ti-pie-chart\"></i><span> Product line</span></a></td>\n                       \n                    </tr>\n                    <tr>\n                       \n                        <td><a tabindex=\"6\" id=\"row5\"><i class=\"ti-pie-chart\"></i><span> Product Category</span></a></td>\n                       \n                    </tr>\n                    <tr>\n                       \n                        <td><a tabindex=\"7\" id=\"row6\"><i class=\"ti-pie-chart\"></i><span>  Product </span></a></td>\n                       \n                    </tr>\n                   \n                </tbody>\n            </table>\n            </div>\n          </div>\n          <div class=\"col-9 content2\" style=\"background: #fff;  \">\n            <div>\n              <div class=\"row\">\n                <div class=\"col\">\n                <div style=\"    display: block;\n    height: 60px;\n    background: #062e42;\">\n                    <h3 >Open Orders KPI</h3>\n                </div>\n                </div>\n              </div>\n              <div class=\"row\" >\n                  <div class=\"col\" >\n                      <div class=\"container\"   >\n                        <div class=\"row\">\n                          <div class=\"col\">\n                              <mat-radio-group aria-label=\"Select an option\" (change)=\"radioChange($event)\" [(ngModel)]=\"category\" style=\"margin-left: 45%;\n    font-size: 17px;\">\n                                  <mat-radio-button [checked]=\"category == 'count'\" value=\"count\"> Count</mat-radio-button>\n                                  <mat-radio-button  [checked]=\"category == 'val'\" value=\"val\"> Value</mat-radio-button>\n                                </mat-radio-group>\n                          </div>\n                          \n                         \n                           \n                        </div>\n                        <div class=\"row\" (click)=\"showTable(second)\">\n                            <div class=\"col\"  >\n                                <app-barchart   [data]=\"data\" [options]=\"options\" [type]=\"type\"></app-barchart>\n\n                             </div>\n                        </div>\n                        </div>  \n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin: 3px;\">\n                    <div class=\"col\">\n                      <button id=\"btn1\" [ngClass]=\"{ btnhighlight:(currentdate === 'year_2') }\" (click)=\"filter('year_2')\" mat-button color=\"primary\">2 YEARS</button>\n                      <button id=\"btn2\" [ngClass]=\"{ btnhighlight:(currentdate === 'year_1') }\" (click)=\"filter('year_1')\" mat-button color=\"primary\">1 YEAR</button>\n                      <button id=\"btn3\" [ngClass]=\"{ btnhighlight:(currentdate === 'month_6') }\" (click)=\"filter('month_6')\" mat-button color=\"primary\">6 MONTHS</button>\n                      <button id=\"btn4\" [ngClass]=\"{ btnhighlight:(currentdate === 'month_3') }\" (click)=\"filter('month_3')\" mat-button color=\"primary\" routerLinkActive=\"mat-accent\">3 MONTH</button>\n                      <button id=\"btn5\" [ngClass]=\"{ btnhighlight:(currentdate === 'false') }\" (click)=\"filter(false)\" mat-button color=\"primary\">CURRENT MONTH</button>\n                      <button id=\"btn6\" [ngClass]=\"{ btnhighlight:(currentdate === 'fale') }\" (click)=\"filter(fale)\" mat-button color=\"primary\">TODAY</button>\n                      \n                    </div>\n                    \n                    \n                  </div>\n                   <button style=\"background: #FFC107;\n    float: right;\" (click)=\"Clear()\" mat-button color=\"primary\">Clear</button>\n                    \n\n                </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div #second  id =\"second\" class=\"page-title-box\" >\n   <div class=\"page-title-box\">\n        <div class=\"row \">\n            \n            <div class=\"col\">\n            \n                <app-banktable [month]=\"currentdate\"  [defaultoption]=\"defaultoption\"></app-banktable>\n            </div>\n        </div>\n    </div>\n\n  </div>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/kpi/order/order.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kpi/order/order.component.ts ***!
  \**********************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
        this.carouselOptions = {
            margin: 7,
            nav: true,
            navigation: true,
            navigationText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                1500: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        };
        this.OpenOrderByCount = {
            month_3: {
                data: [
                    97,
                    100,
                    57,
                    0, 0
                ],
                label: [
                    'Jun-19',
                    'Jul-19',
                    'Aug-19',
                    'sep-19',
                    'Oct-19'
                ]
            },
            month_6: {
                data: [
                    57,
                    100,
                    122,
                    140,
                    129,
                    131
                ],
                label: [
                    'Aug-19',
                    'Jul-19',
                    'Jun-19',
                    'May-19',
                    'Apr-19',
                    'Mar-19'
                ]
            },
            year_1: {
                data: [
                    57,
                    100,
                    122,
                    140,
                    129,
                    168,
                    108,
                    88,
                    103,
                    85,
                    102,
                    138
                ],
                label: [
                    'Aug-19',
                    'Jul-19',
                    'Jun-19',
                    'May-19',
                    'Apr-19',
                    'Mar-19',
                    'Feb-19',
                    'Jan-19',
                    'Dec-18',
                    'Nov-18',
                    'Oct-18',
                    'Sep-18'
                ]
            },
            year_2: {
                data: [
                    57,
                    100,
                    122,
                    140,
                    129,
                    168,
                    108,
                    88,
                    103,
                    85,
                    102,
                    146,
                    45,
                    18,
                    10,
                    13,
                    6,
                    9,
                    5,
                    11,
                    10,
                    19,
                    8,
                    5
                ],
                label: [
                    'Aug-19',
                    'Jul-19',
                    'Jun-19',
                    'May-19',
                    'Apr-19',
                    'Mar-19',
                    'Feb-19',
                    'Jan-19',
                    'Dec-18',
                    'Nov-18',
                    'Oct-18',
                    'Sep-18',
                    'Aug-18',
                    'Jul-18',
                    'Jun-18',
                    'May-18',
                    'Apr-18',
                    'Mar-18',
                    'Feb-18',
                    'Jan-18',
                    'Dec-17',
                    'Nov-17',
                    'Oct-17',
                    'Sep-17'
                ]
            }
        };
        this.CustomerNameOpenOrder = {
            month_3: {
                label: [
                    "DEVI ENTERPRISES",
                    "MICKY AUTOMOBILES",
                    "MAHINDRA & MAHINDRA LTD",
                    "SYKA TRACTOR PARTS",
                    "ADVANCE ENGINEERS",
                    "NEW KISHAN TRACTOR PARTS",
                    "LINCOLN HELIOS INDIA LTD",
                    "A N HUSSUNALLY AND COMPANY",
                    "CORE HYDRAULICS PVT LTD",
                    "FLUID SYSTEMS & HYDRAULIC SO",
                    "HANDLEY TECHNOLOGIES LTD",
                    "JOHNDEERE INDIA PVT LTD-NGPR",
                    "NEW HYDRO CONTROLS",
                    "KHANDELWAL AUTOMOBILES",
                    "SANJAY HYDRAULIK PVT LTD",
                    "SAWHNEY TRADING CORPORATION",
                    "HI-FLEX HYDRAULICS PVT LTD",
                    "GODREJ AND BOYCE MFG CO P L",
                    "GROW WEL HYDRAULICS",
                    "ALLOY TECH",
                    "VIRAJ PROFILES LTD-II",
                    "SRI RAM ENTERPRISES",
                    "ANH HYDRAULICS PVT LTD",
                    "ASSOCIATED AGENCIES",
                    "CAPTAIN TRACTORS PVT LTD",
                    "GODREJ & BOYCE MFG CO.LTD",
                    "COIMBATORE AERATION ACCESSOR",
                    "HARI ENTERPRISES",
                    "TATA HITACHI CONSTRUCTION",
                    "TRIPET AGENCIES",
                    "RANBA CASTINGS LIMITED",
                    "RATNA ENTERPRISES",
                    "RATTAN HOSE & ENG WORK P Ltd",
                    "SCHWING STETTER INDIA PVT LT",
                    "SHANTHI AUTO & TRACTORS",
                    "LAKSHMI ENTERPRISES",
                    "RAMESH AUTOMOBILES",
                    "PADMAVATI HYDRAULICS",
                    "M/S DEEP TRACTORS",
                    "MAHADEV TRACTOR PARTS CENTRE",
                    "JAICHAMUNDI TECH PVT LTD",
                    "MAHINDRA AND MAHINDRA LTD",
                    "V R Foundries (Unit - II)",
                    "VIJAI AGRO SPARES",
                    "SCHWING STETTER INDIA P LTD",
                    "JUBBAL HYDRO",
                    "AVINASH CARGO PVT LTD",
                    "BEML LIMITED",
                    "VNM HYDROTEK",
                    "WIZTECH INDIA",
                    "BEML LTD",
                    "BOSCH REXROTH INDIA PVT LTD",
                    "CANARA HYDRAULICS PVT LTD",
                    "CASE NEWHOLLAND CONSTRUCTION",
                    "CHOUDHARY MOTOR AGENCY",
                    "CLAAS INDIA PVT LTD",
                    "ARIHANT AUTO TRADERS",
                    "ARUN HYDRAULICS",
                    "ASHOK LEYLAND LTD",
                    "AMMANN INDIA PVT LTD",
                    "ACCURATE CNC ENGINEERING",
                    "KARNATAKA DIE CASTING",
                    "KARTAR AGRO INDUSTRIES PVT L",
                    "KGR RIGS AND MINING EQPMENT",
                    "HINDUSTAN AERONAUTICS LIMITE",
                    "INDO FARM EQUIPMENTS LTD",
                    "ESCORTS LTD",
                    "TAFE MOTORS AND TRACTORS LTD",
                    "TRACTORS & FARM EQUIPMENT",
                    "TRACTORS &FARM EQUIPMENT LTD",
                    "SHIVAJI GEARS (INDIA)",
                    "SONA HYDROTECH",
                    "SRI RAGHAVENDRA AGENCIES",
                    "S.VAIDYA & COMPANY",
                    "MASTER HANDLERS PVT LTD.",
                    "MEHTA  ENTERPRISES",
                    "MEHTA ENTERPRISES",
                    "JASHRA ENTERPRISES",
                    "KIRLOSKAR OIL ENGINES LTD",
                    "KIRTI TRADERS",
                    "PREET TRACTORS PVT LTD"
                ],
                data: [
                    17,
                    14,
                    9,
                    8,
                    8,
                    7,
                    6,
                    6,
                    5,
                    5,
                    5,
                    5,
                    5,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            },
            month_6: {
                data: [
                    48,
                    39,
                    25,
                    21,
                    20,
                    18,
                    18,
                    17,
                    16,
                    14,
                    13,
                    12,
                    12,
                    12,
                    12,
                    11,
                    10,
                    9,
                    9,
                    9,
                    9,
                    8,
                    8,
                    8,
                    8,
                    8,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    6,
                    6,
                    6,
                    6,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                label: [
                    "MICKY AUTOMOBILES",
                    "MAHINDRA & MAHINDRA LTD",
                    "DEVI ENTERPRISES",
                    "VNM HYDROTEK",
                    "GROW WEL HYDRAULICS",
                    "SYKA TRACTOR PARTS",
                    "MAHINDRA AND MAHINDRA LTD",
                    "A N HUSSUNALLY AND COMPANY",
                    "ADVANCE ENGINEERS",
                    "KHANDELWAL AUTOMOBILES",
                    "LINCOLN HELIOS INDIA LTD",
                    "FLUID SYSTEMS & HYDRAULIC SO",
                    "HI-FLEX HYDRAULICS PVT LTD",
                    "ANH HYDRAULICS PVT LTD",
                    "SANJAY HYDRAULIK PVT LTD",
                    "NEW KISHAN TRACTOR PARTS",
                    "GODREJ AND BOYCE MFG CO P L",
                    "ARUN HYDRAULICS",
                    "COIMBATORE AERATION ACCESSOR",
                    "CORE HYDRAULICS PVT LTD",
                    "NEW HYDRO CONTROLS",
                    "SAWHNEY TRADING CORPORATION",
                    "SOUTHERN AUTO AGENCIES",
                    "SRI RAGHAVENDRA AGENCIES",
                    "DIESEL AUTOMOBILES",
                    "GODREJ & BOYCE MFG CO.LTD",
                    "HANDLEY TECHNOLOGIES LTD",
                    "ARIHANT AUTO TRADERS",
                    "ASSOCIATED AGENCIES",
                    "PADMAVATI HYDRAULICS",
                    "RATNA ENTERPRISES",
                    "RATTAN HOSE & ENG WORK P Ltd",
                    "TRIPET AGENCIES",
                    "VIJAI AGRO SPARES",
                    "HARI ENTERPRISES",
                    "DHARI INDUSTRIAL SPARES AND",
                    "MAHINDRA & MAHINDRA LTD.",
                    "JOHNDEERE INDIA PVT LTD-NGPR",
                    "JUBBAL HYDRO",
                    "KION INDIA PVT. LTD.",
                    "M/S DEEP TRACTORS",
                    "EXCELLENT HYDRAULICS",
                    "SHANTHI AUTO & TRACTORS",
                    "SHIVAJI GEARS (INDIA)",
                    "TATA HITACHI CONSTRUCTION",
                    "LAKSHMI ENTERPRISES",
                    "SRI RAM ENTERPRISES",
                    "SCHWING STETTER INDIA P LTD",
                    "SCHWING STETTER INDIA PVT LT",
                    "RAMESH AUTOMOBILES",
                    "MEHTA ENTERPRISES",
                    "TRACTORS &FARM EQUIPMENT LTD",
                    "VIRAJ PROFILES LTD-II",
                    "KIRTI TRADERS",
                    "MAHADEV TRACTOR PARTS CENTRE",
                    "MAHAVIR HYDRAULICS PVT LTD",
                    "ALLOY TECH",
                    "AMMANN INDIA PVT LTD",
                    "CAPTAIN TRACTORS PVT LTD",
                    "CHOUDHARY MOTOR AGENCY",
                    "DYNATECH INDUSTRIES PVT.LTD",
                    "JOHN DEERE INDIA PVT LTD",
                    "KARNATAKA DIE CASTING",
                    "KARTAR AGRO INDUSTRIES PVT L",
                    "JAICHAMUNDI TECH PVT LTD",
                    "RANBA CASTINGS LIMITED",
                    "SANDEEP BEARINGS & MILL STOR",
                    "S.VAIDYA & COMPANY",
                    "SABARI AGENCIES",
                    "RAJA MOTORS",
                    "MEHTA  ENTERPRISES",
                    "PELICAN SPARES CO.",
                    "SONA HYDROTECH",
                    "V R Foundries (Unit - II)",
                    "WIENERBERGER INDIA PVT LTD",
                    "TEERUPATI CORPORATION INDIA",
                    "TAFE MOTORS AND TRACTORS LTD",
                    "JASHRA ENTERPRISES",
                    "HIMALAYA MACHINERY PVT. LTD",
                    "KGR RIGS AND MINING EQPMENT",
                    "JOHN DEERE US AG.",
                    "JOHNDEERE INDIA PVT LTD",
                    "AVINASH CARGO PVT LTD",
                    "BEML LIMITED",
                    "BEML LTD",
                    "BOSCH REXROTH INDIA PVT LTD",
                    "BULL MACHINES PVT LTD-UNIT 2",
                    "BULL MACHINES PVT.LTD.",
                    "CANARA HYDRAULICS PVT LTD",
                    "AJAX ENGINEERING PVT LTD",
                    "ACCURATE CNC ENGINEERING",
                    "ACCURATE ENGINEERING INDUSTR",
                    "ADICO ESCORTS AGRI EQUIPMENT",
                    "ENNEM EXCEL ENGINEERING PVT",
                    "EPIROC MINING INDIA LIMITED",
                    "ESCORTS LTD",
                    "CUMMINS ASIA PACIFIC PTE LTD",
                    "CUMMINS BUSINESS SERVICES",
                    "CUMMINS INDIA LTD",
                    "CUMMINS LTD (DAV)",
                    "CLAAS INDIA PVT LTD",
                    "CNH INDUSTRIAL INDIA PVT LTD",
                    "CASE NEWHOLLAND CONSTRUCTION",
                    "CATERPILLAR INDIA PVT LTD",
                    "ASHOK LEYLAND LTD",
                    "KIRLOSKAR OIL ENGINES LTD",
                    "MachineToolPrototypeFactory",
                    "HINDUSTAN AERONAUTICS LIMITE",
                    "HYDRO TECH INDUSTRIES",
                    "INDIA EARTHMOVING SPARE CORP",
                    "INDO FARM EQUIPMENTS LTD",
                    "JOHN DEERE GmbH And Co KG",
                    "GROMAX AGRI EQUIPMENT LTD",
                    "HAILSTONE INNOVATIONS PVT LT",
                    "SHRI RAM TRACTORS",
                    "THE BANGALORE TRACTOR SPARES",
                    "TRACTORS & FARM EQUIPMENT",
                    "WIRTGEN INDIA PVT LTD",
                    "WIZTECH INDIA",
                    "PRASHANT GAMATEX PVT LTD.",
                    "PREET TRACTORS PVT LTD",
                    "S S R ENTERPRISESS",
                    "S.BOSS & CO.",
                    "MASTER HANDLERS PVT LTD.",
                    "MICRO HYDROTECHNIC P. LTD",
                    "SAFARI CONSTRUCTION EQPMENTS",
                    "SAME DEUTZ-FAHR INDIA P LTD",
                    "SHALINI ENTERPRISES",
                    "STANDARD CORPORATION I LTD"
                ]
            },
            year_1: {
                data: [
                    92,
                    73,
                    56,
                    51,
                    39,
                    39,
                    37,
                    35,
                    34,
                    27,
                    26,
                    26,
                    26,
                    21,
                    21,
                    19,
                    19,
                    19,
                    18,
                    16,
                    16,
                    15,
                    15,
                    15,
                    14,
                    14,
                    13,
                    12,
                    12,
                    12,
                    12,
                    12,
                    11,
                    11,
                    11,
                    11,
                    11,
                    10,
                    10,
                    10,
                    10,
                    9,
                    9,
                    9,
                    8,
                    8,
                    8,
                    8,
                    8,
                    8,
                    8,
                    8,
                    7,
                    7,
                    7,
                    7,
                    7,
                    6,
                    6,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                label: [
                    "MAHINDRA & MAHINDRA LTD",
                    "MICKY AUTOMOBILES",
                    "SYKA TRACTOR PARTS",
                    "MAHINDRA AND MAHINDRA LTD",
                    "KHANDELWAL AUTOMOBILES",
                    "VNM HYDROTEK",
                    "DEVI ENTERPRISES",
                    "A N HUSSUNALLY AND COMPANY",
                    "GROW WEL HYDRAULICS",
                    "ADVANCE ENGINEERS",
                    "ANH HYDRAULICS PVT LTD",
                    "NEW KISHAN TRACTOR PARTS",
                    "SANJAY HYDRAULIK PVT LTD",
                    "CORE HYDRAULICS PVT LTD",
                    "HI-FLEX HYDRAULICS PVT LTD",
                    "FLUID SYSTEMS & HYDRAULIC SO",
                    "ASSOCIATED AGENCIES",
                    "ARUN HYDRAULICS",
                    "SAWHNEY TRADING CORPORATION",
                    "DHARI INDUSTRIAL SPARES AND",
                    "DIESEL AUTOMOBILES",
                    "COIMBATORE AERATION ACCESSOR",
                    "GODREJ AND BOYCE MFG CO P L",
                    "LINCOLN HELIOS INDIA LTD",
                    "RATTAN HOSE & ENG WORK P Ltd",
                    "GODREJ & BOYCE MFG CO.LTD",
                    "VIJAI AGRO SPARES",
                    "SHIVAJI GEARS (INDIA)",
                    "SOUTHERN AUTO AGENCIES",
                    "MAHAVIR HYDRAULICS PVT LTD",
                    "HANDLEY TECHNOLOGIES LTD",
                    "HARI ENTERPRISES",
                    "MAHINDRA & MAHINDRA LTD.",
                    "NEW HYDRO CONTROLS",
                    "PADMAVATI HYDRAULICS",
                    "EXCELLENT HYDRAULICS",
                    "CNH INDUSTRIAL INDIA PVT LTD",
                    "SCHWING STETTER INDIA PVT LT",
                    "M/S DEEP TRACTORS",
                    "SRI RAGHAVENDRA AGENCIES",
                    "TRIPET AGENCIES",
                    "JOHNDEERE INDIA PVT LTD-NGPR",
                    "SANDEEP BEARINGS & MILL STOR",
                    "RATNA ENTERPRISES",
                    "RAMESH AUTOMOBILES",
                    "JUBBAL HYDRO",
                    "MAHADEV TRACTOR PARTS CENTRE",
                    "JOHNDEERE INDIA PVT LTD",
                    "LAKSHMI ENTERPRISES",
                    "ARIHANT AUTO TRADERS",
                    "CHOUDHARY MOTOR AGENCY",
                    "SONA HYDROTECH",
                    "SCHWING STETTER INDIA P LTD",
                    "KION INDIA PVT. LTD.",
                    "KIRTI TRADERS",
                    "JOHN DEERE US AG.",
                    "SAME DEUTZ-FAHR INDIA P LTD",
                    "MEHTA ENTERPRISES",
                    "TEERUPATI CORPORATION INDIA",
                    "SRI RAM ENTERPRISES",
                    "SHALINI ENTERPRISES",
                    "SHANTHI AUTO & TRACTORS",
                    "TAFE MOTORS AND TRACTORS LTD",
                    "TATA HITACHI CONSTRUCTION",
                    "SCHWING STETTER (I) PVT LTD",
                    "JOHN DEERE INDIA PVT LTD",
                    "KARNATAKA DIE CASTING",
                    "KARTAR AGRO INDUSTRIES PVT L",
                    "KGR RIGS AND MINING EQPMENT",
                    "AMMANN INDIA PVT LTD",
                    "CUMMINS ASIA PACIFIC PTE LTD",
                    "DYNATECH INDUSTRIES PVT.LTD",
                    "CAPTAIN TRACTORS PVT LTD",
                    "ALLOY TECH",
                    "KALIKAMBA ENTERPRISES",
                    "S.VAIDYA & COMPANY",
                    "SABARI AGENCIES",
                    "RAJA MOTORS",
                    "REGA MOTORS",
                    "MOTHERS TECHNOLOGY",
                    "TRACTORS &FARM EQUIPMENT LTD",
                    "VIRAJ PROFILES LTD-II",
                    "V R Foundries (Unit - II)",
                    "MEHTA  ENTERPRISES",
                    "RANBA CASTINGS LIMITED",
                    "PRASHANT GAMATEX PVT LTD.",
                    "GROMAX AGRI EQUIPMENT LTD",
                    "JAICHAMUNDI TECH PVT LTD",
                    "CUMMINS BUSINESS SERVICES",
                    "CUMMINS INDIA LTD",
                    "CLAAS TRACTOR SAS USINE",
                    "CUMMINS LTD (DAV)",
                    "ESCORTS LTD",
                    "CUMMINS KOMATSU ENGINE COMPA",
                    "HIMALAYA MACHINERY PVT. LTD",
                    "DYNAPAC ROAD CONSTRUCTION",
                    "EPIROC MINING INDIA LIMITED",
                    "CASE NEWHOLLAND CONSTRUCTION",
                    "BULL MACHINES PVT.LTD.",
                    "CANARA HYDRAULICS PVT LTD",
                    "AVINASH CARGO PVT LTD",
                    "BEML LIMITED",
                    "BEML LTD",
                    "AJAX ENGINEERING PVT LTD",
                    "AJAX FIORI ENGG (I) PVT LTD",
                    "INTERNATIONAL TRACTORS LTD",
                    "HAILSTONE INNOVATIONS PVT LT",
                    "JASHRA ENTERPRISES",
                    "M R INDUSTRIES",
                    "PELICAN SPARES CO.",
                    "SAFARI CONSTRUCTION EQPMENTS",
                    "S.BOSS & CO.",
                    "TRANS-MECH SYSTEMS",
                    "WIENERBERGER INDIA PVT LTD",
                    "WIRTGEN INDIA PVT LTD",
                    "SIMPSON & CO LIMITED",
                    "SHRI RAM TRACTORS",
                    "SHRI SHYAM HYDRAULICS",
                    "SHYAM SEL & POWER LTD",
                    "SHRI BALAJI SALES & SERVICES",
                    "STANDARD CORPORATION I LTD",
                    "STANDARD CORPORATION IND LTD",
                    "THE BANGALORE TRACTOR SPARES",
                    "TPS INFRASTRUCTURE LTD",
                    "TRACTORS & FARM EQUIPMENT",
                    "WIZTECH INDIA",
                    "YAIMS TRACTOR TRAILORS",
                    "VOLVO INDIA LTD",
                    "V S T TILLERS TRACTORS LTD",
                    "VARSHA FORKLIFT SERVICES",
                    "TRIVENI TURBINE LIMITED",
                    "S S R ENTERPRISESS",
                    "SEC RJMT ENGINEERING PVT.LTD",
                    "SEKO BEC PVT LTD",
                    "SCA HEAVY EQUIPMENT PVT LTD",
                    "SAURER TEXTILE SOLUTIONS P L",
                    "PREET TRACTORS PVT LTD",
                    "PREMIUM TRANSMISSION PVT LTD",
                    "R V ENGINEERING WORKS",
                    "MICRO HYDROTECHNIC P. LTD",
                    "P.M.DIESELS PVT LTD",
                    "KOLBEN HYDRAULICS LTD",
                    "KIRLOSKAR OIL ENGINES LTD",
                    "MachineToolPrototypeFactory",
                    "MANUGRAPH INDIA LTD",
                    "MASTER HANDLERS PVT LTD.",
                    "JOHN DEERE GmbH And Co KG",
                    "Jain Industrial Products",
                    "AMBAL TRACTOR PARTS",
                    "ACCURATE CNC ENGINEERING",
                    "ACCURATE ENGINEERING INDUSTR",
                    "Action ConstructionEquipment",
                    "ADICO ESCORTS AGRI EQUIPMENT",
                    "ATLAS SALES CORPORATION",
                    "ASHAPURA HYDRAULICS AND",
                    "ASHISH ENGINEERING SERVICES",
                    "ASHOK LEYLAND LTD",
                    "BHARAT ELECTRONICS LTD",
                    "BOSCH LIMITED",
                    "BOSCH REXROTH INDIA PVT LTD",
                    "BULL MACHINES PVT LTD-UNIT 2",
                    "CATERPILLAR INDIA PVT LTD",
                    "CLAAS INDIA PVT LTD",
                    "CUMMINS INDIA LTD (AT2)",
                    "ESCORT LTD",
                    "DYNATECH ENTERPRISES",
                    "EFCO MASCHINENBAU INDIA P L",
                    "ELGI EQUIPMENTS LTD",
                    "ENNEM EXCEL ENGINEERING PVT",
                    "CUMMINS TECHNOLOGIES INDIA P",
                    "DYNAMATIC TECHNOLOGIES LTD",
                    "HINDUSTAN AERONAUTICS LIMITE",
                    "HINDUSTAN HYDRAULICS P LTD",
                    "HYDRO TECH INDUSTRIES",
                    "HYDROMECH ENGINEERS",
                    "INDIA EARTHMOVING SPARE CORP",
                    "INDO FARM EQUIPMENTS LTD",
                    "INDUSTRIAL AND FLUID POWER",
                    "GANGA INDUSTRIES",
                    "GLOBAL HYDRAULICS PVT LTD",
                    "GOVERNMENT OF INDIA"
                ]
            },
            year_2: {
                data: [],
                label: []
            },
        };
        this.CustomerTypeOpenOrder = {
            month_3: {
                label: [
                    "TDLR",
                    "SDLR",
                    "TOE",
                    "SOE",
                    "OTHR",
                    "SOTH",
                    "SCRP",
                    "EXP",
                    "INAC"
                ],
                data: [63,
                    62,
                    25,
                    19,
                    15,
                    13,
                    9,
                    5,
                    1
                ]
            },
            month_6: {
                label: [
                    "SDLR",
                    "TDLR",
                    "TOE",
                    "SOE",
                    "SOTH",
                    "OTHR",
                    "SCRP",
                    "EXP",
                    "INAC",
                    "OTHERS"
                ],
                data: [
                    203,
                    174,
                    88,
                    58,
                    42,
                    36,
                    14,
                    11,
                    6,
                    1,
                ]
            },
            year_1: {
                label: [
                    "SDLR",
                    "TDLR",
                    "TOE",
                    "SOE",
                    "SOTH",
                    "OTHR",
                    "SCRP",
                    "EXP",
                    "INAC",
                    "OTHERS",
                    "DEF"
                ],
                data: [
                    382,
                    330,
                    208,
                    106,
                    96,
                    76,
                    26,
                    25,
                    14,
                    2,
                    1
                ]
            },
            year_2: {
                label: [],
                data: []
            }
        };
        this.CustomerRegionOpenOrder = {
            month_3: {
                data: [54,
                    52,
                    39,
                    24,
                    16,
                    11,
                    9,
                    6,
                    1
                ],
                label: [
                    "HB01",
                    "BDEL",
                    "BMUM",
                    "BABD",
                    "BHYD",
                    "BCHN",
                    "BCAL",
                    "BPUN",
                    "BIND"
                ]
            },
            month_6: {
                data: [
                    155,
                    152,
                    116,
                    67,
                    56,
                    27,
                    25,
                    18,
                    13,
                    4
                ],
                label: [
                    "BMUM",
                    "BDEL",
                    "HB01",
                    "BABD",
                    "BHYD",
                    "BCHN",
                    "BCAL",
                    "BKLK",
                    "BPUN",
                    "BIND"
                ]
            },
            year_1: {
                data: [
                    358,
                    289,
                    215,
                    120,
                    100,
                    56,
                    55,
                    36,
                    30,
                    7
                ],
                label: [
                    "BMUM",
                    "BDEL",
                    "HB01",
                    "BABD",
                    "BHYD",
                    "BCHN",
                    "BCAL",
                    "BKLK",
                    "BPUN",
                    "BIND"
                ]
            },
            year_2: {
                data: [],
                label: []
            }
        };
        this.CustomerShippingOpenOrder = {
            month_3: {
                data: [196,
                    9,
                    7,
                    7,
                    5,
                    5,
                    5,
                    1,
                ],
                label: [
                    "HB04",
                    "HX02",
                    "HVLV",
                    "BABD",
                    "BDEL",
                    "BMUM",
                    "HJ01",
                    "HX01"
                ]
            },
            month_6: {
                data: [
                    590,
                    23,
                    17,
                    11,
                    10,
                    9,
                    9,
                    1,
                    1
                ],
                label: [
                    "HB04",
                    "HX02",
                    "HVLV",
                    "BDEL",
                    "BMUM",
                    "BABD",
                    "HJ01",
                    "HX01",
                    "BHYD",
                ]
            },
            year_1: {
                data: [
                    1145,
                    70,
                    37,
                    28,
                    23,
                    20,
                    13,
                    2,
                    1,
                    1
                ],
                label: [
                    "HB04",
                    "HX02",
                    "HVLV",
                    "HJ01",
                    "BDEL",
                    "BMUM",
                    "BABD",
                    "HX01",
                    "BCHN",
                    "BHYD"
                ]
            },
            year_2: {
                data: [],
                label: []
            }
        };
        this.type = "bar";
        this.flag1 = false;
        this.flag2 = false;
        this.color = ["#ff5757", "#2b546a", "#f2d9bb", "#fb9f8c"];
    }
    OrderComponent.prototype.next = function () {
        this.owlElement.next([200]);
    };
    OrderComponent.prototype.previous = function () {
        this.owlElement.previous([200]);
    };
    OrderComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    OrderComponent.prototype.ngOnInit = function () {
        this.start.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.defaultData = this.OpenOrderByCount;
        this.defaultoption = "Open Order (By Count)";
        this.data = this.OpenOrderByCount.month_3;
        this.options = "Open Order (By Count)";
        this.currentpage = "row8";
        this.currentdate = "month_3";
        this.category = "count";
    };
    OrderComponent.prototype.filter = function (dt) {
        this.currentdate = dt;
        switch (this.currentpage) {
            case 'row8':
                this.data = this.OpenOrderByCount[dt];
                break;
            case 'row0':
                this.data = this.CustomerNameOpenOrder[dt];
                break;
            case 'row1':
                this.data = this.CustomerTypeOpenOrder[dt];
                break;
            case 'row2':
                this.data = this.CustomerRegionOpenOrder[dt];
                break;
            case 'row3':
                this.data = this.CustomerShippingOpenOrder[dt];
                break;
            case 'row8':
                this.data = this.OpenOrderByCount[dt];
                break;
            default:
                break;
        }
        // this.data=this.OpenOrderByCount[dt]
    };
    OrderComponent.prototype.changeType = function (key) {
        this.flag2 = false;
        this.currentdate = "month_3";
        this.options = "Open Order (By Count)";
        switch (key) {
            case 'row0':
                this.data = this.CustomerNameOpenOrder.month_3;
                this.currentpage = "row0";
                break;
            case 'row1':
                this.data = this.CustomerTypeOpenOrder.month_3;
                this.currentpage = "row1";
                break;
            case 'row2':
                this.data = this.CustomerRegionOpenOrder.month_3;
                this.currentpage = "row2";
                break;
            case 'row3':
                this.data = this.CustomerShippingOpenOrder.month_3;
                this.currentpage = "row3";
                break;
            case 'row8':
                this.data = this.OpenOrderByCount.month_3;
                this.currentpage = "row8";
                break;
            default:
                break;
        }
    };
    OrderComponent.prototype.radioChange = function (e) {
        console.log("event", e.value);
        if (e.value == 'count') {
            this.options = "Open Order ( By Count)";
            switch (this.currentpage) {
                case 'row8':
                    this.data = this.OpenOrderByCount[this.currentdate];
                    break;
                case 'row0':
                    this.data = this.CustomerNameOpenOrder[this.currentdate];
                    break;
                case 'row1':
                    this.data = this.CustomerTypeOpenOrder[this.currentdate];
                    break;
                case 'row2':
                    this.data = this.CustomerRegionOpenOrder[this.currentdate];
                    break;
                case 'row3':
                    this.data = this.CustomerShippingOpenOrder[this.currentdate];
                    break;
                case 'row8':
                    this.data = this.OpenOrderByCount[this.currentdate];
                    break;
                default:
                    break;
            }
        }
        else if (e.value == 'val') {
            this.options = "Open Order ( By Value)";
            console.log(this.options);
            this.data = {
                data: [],
                label: []
            };
        }
    };
    OrderComponent.prototype.showpanel = function (e) {
        var _this = this;
        this.flag1 = true;
        setTimeout(function () {
            _this.scroll(e);
        }, 1000);
    };
    OrderComponent.prototype.showTable = function (e) {
        var _this = this;
        this.flag2 = true;
        this.second.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        //  this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        //  console.log( e1)
        setTimeout(function () {
            _this.second.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            // this.scroll(e: HTMLElement);
        }, 1000);
    };
    OrderComponent.prototype.Clear = function () {
        this.ngOnInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('second'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderComponent.prototype, "second", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('start'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderComponent.prototype, "start", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('owlElement'),
        __metadata("design:type", ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlCarousel"])
    ], OrderComponent.prototype, "owlElement", void 0);
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/kpi/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/kpi/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/services/reco.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/reco.service.ts ***!
  \******************************************/
/*! exports provided: RecoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoService", function() { return RecoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecoService = /** @class */ (function () {
    function RecoService(_http) {
        this._http = _http;
        //Http Headers Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
                'BrowserToken': 'auth_Token' })
        };
    }
    RecoService.prototype.gettingERP = function (data) {
        var obj = {
            relationshipId: data
        };
        // return this._http.put('http://localhost:3000/api/web/signin',data)
        return this._http.put('http://localhost:6001/api/web/getWidgetsData', obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var label = [];
            var data = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                // console.log(item); // 9,2,5moment().format("MMM Do YY");
                label.push(moment__WEBPACK_IMPORTED_MODULE_3__(item.referenceDateTime_1).format("MMM Do YY"));
                data.push(item.DateCount);
            }
            var obj = {
                label: label,
                data: data
            };
            return obj;
        }));
    };
    RecoService.prototype.ERP = function (obj) {
        // let obj={
        //   offset:offset,
        //   limit:limit
        // };
        // return this._http.put('http://localhost:3000/api/web/signin',data)
        return this._http.post("http://localhost:6001/api/web/ERP", obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    RecoService.prototype.ERPTotalCount = function (obj) {
        // 
        return this._http.post("http://localhost:6001/api/web/Erpvolume", obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var temp = res;
            var pager = Math.round(temp.COUNT / 25);
            return temp.COUNT;
        }));
    };
    RecoService.prototype.gettingQueryValues = function (query) {
        var currentUser = localStorage.getItem('currentUser');
        var obj = {
            userId: currentUser.userId,
            moduleId: currentUser.moduleId,
            query: query
        };
        return this._http.put('http://localhost:6001/api/web/query', obj);
    };
    RecoService.prototype.ListBankName = function () {
        return this._http.get("http://localhost:6001/api/web/listrelationship")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    RecoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecoService);
    return RecoService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        //Http Headers Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
                'BrowserToken': 'auth_Token' })
        };
    }
    //   getAll() {
    //       return this.http.get<User[]>(`${config.apiUrl}/users`);
    //   }
    //   getById(id: number) {
    //       return this.http.get(`${config.apiUrl}/users/` + id);
    //   }
    //   register(user: User) {
    //       return this.http.post(`${config.apiUrl}/users/register`, user);
    //   }
    //   update(user: User) {
    //       return this.http.put(`${config.apiUrl}/users/` + user.id, user);
    //   }
    //   delete(id: number) {
    //       return this.http.delete(`${config.apiUrl}/users/` + id);
    //   }
    UserService.prototype.listsite = function () {
        return this._http.get('http://localhost:3000/api/web/listsite');
    };
    UserService.prototype.loadModules = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var obj = {
            orgId: currentUser.data.organizationId,
            siteId: currentUser.data.siteId
        };
        return this._http.put('http://localhost:3000/api/web/listmodule', obj);
    };
    UserService.prototype.loadmenuitems = function (id) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var obj = {
            moduleId: id
        };
        return this._http.put('http://localhost:3000/api/web/listmenuDetails', obj);
    };
    UserService.prototype.login = function (data) {
        var obj = {};
        // return this._http.put('http://localhost:3000/api/web/signin',data)
        return this._http.put('http://localhost:3000/api/web/signin', { username: data.username, password: data.password, siteId: data.siteId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('TOKEN', user.token);
                localStorage.setItem('WIDGETS', JSON.stringify(user.data.Roles.Modules.widgets));
                for (var _i = 0, _a = user.data.UserPerferance; _i < _a.length; _i++) {
                    var list = _a[_i];
                    localStorage.setItem(list.userPreferenceKey, list.userPreferenceValue);
                }
            }
            return user;
        }));
    };
    UserService.prototype.loadwigets = function () {
        var currentUser = localStorage.getItem('currentUser');
        var obj = {
            userId: currentUser.userId,
            moduleId: currentUser.moduleId
        };
        return this._http.put('http://localhost:3000/api/web/listwidgets', obj);
    };
    UserService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.clear();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/chart/barchart/barchart.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/chart/barchart/barchart.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/chart/barchart/barchart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/chart/barchart/barchart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12\">  \n  <div *ngIf=\"type == 'line'\">\n    <div style=\"display: block\">\n      <canvas baseChart\n        [datasets]=\"barChartData\"\n        [labels]=\"barChartLabels\"\n        [options]=\"barChartOptions\"\n        [plugins]=\"barChartPlugins\"\n        [legend]=\"barChartLegend\"\n        [chartType]=\"barChartType\"\n        [colors]=\"chartColors\">\n      </canvas>\n    </div>\n    \n    <!-- <button mat-button mat-raised-button color=\"primary\" (click)=\"randomize()\">Update</button> -->\n  </div>\n  <div  *ngIf=\"type != 'line'\">\n      <div style=\"display: block;\">\n        <canvas baseChart\n          [datasets]=\"barChartData\"\n          [labels]=\"barChartLabels\"\n          [options]=\"barChartOptions\"\n          [plugins]=\"barChartPlugins\"\n          [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\"\n          >\n        \n        </canvas>\n      </div>\n      \n      <!-- <button mat-button mat-raised-button color=\"primary\" (click)=\"randomize()\">Update</button> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/chart/barchart/barchart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/chart/barchart/barchart.component.ts ***!
  \*************************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_reco_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/reco.service */ "./src/app/services/reco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarchartComponent = /** @class */ (function () {
    /*sampledata
        [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];
    */
    function BarchartComponent(_service) {
        this._service = _service;
        this.barChartOptions = {
            title: {
                display: true,
                text: this.options,
                fontSize: 14
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
            scales: {
                xAxes: [{
                        gridLines: {
                            lineWidth: 0
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'PU2AB008'
                        }
                    }],
                yAxes: [{
                        scaleLabel: {
                            display: false,
                            labelString: 'No of Delay (Days)'
                        }
                    }]
            }
        };
        // We use these empty structures as placeholders for dynamic theming.
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = this.type ? this.type : 'bar';
        this.barChartLegend = true;
        // public barChartPlugins = [pluginDataLabels];
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.chartColors = [
            {
                backgroundColor: '#626ed4',
                borderColor: '#626ed4',
                pointBackgroundColor: '#626ed4',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(103, 58, 183, .8)',
                fill: false
            },
        ];
    }
    BarchartComponent.prototype.ngOnInit = function () {
        // console.log("bar char ",this.data)
    };
    BarchartComponent.prototype.ngOnChanges = function () {
        this.barChartType = this.type ? this.type : 'bar';
        if (this.type === 'bar') {
            this.barChartOptions = {
                title: {
                    display: true,
                    text: this.options,
                    fontSize: 14
                },
                legend: {
                    display: false,
                    position: 'right',
                    labels: {
                        fontColor: '#000'
                    }
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                lineWidth: 0
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'PU2AB008'
                            }
                        }],
                    yAxes: [{
                            gridLines: {
                                borderDash: [8, 4],
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'No of Delay (Days)'
                            }
                        }]
                }
            };
            this.barChartLabels = this.data.label;
            if (this.color) {
                this.barChartData = [{ data: this.data.data, backgroundColor: this.color,
                        hoverBackgroundColor: this.color }];
            }
            else {
                this.barChartData = [{ data: this.data.data, backgroundColor: '#ff5757',
                        hoverBackgroundColor: '#ff5757' }];
            }
        }
        else if (this.type === 'pie') {
            // this.barChartOptions.title.text=this.options;
            this.barChartLabels = this.data.label;
            this.barChartData = [{ data: this.data.data }];
            this.barChartOptions = {
                title: {
                    display: true,
                    text: this.options,
                    fontSize: 14
                },
                elements: {
                    line: {
                        fill: false
                    }
                }
            };
        }
        else if (this.type === 'line') {
            this.barChartLabels = this.data.label;
            this.barChartData = [{ data: this.data.data }];
            this.barChartOptions = {
                title: {
                    display: true,
                    text: this.options,
                    fontSize: 14
                },
                legend: {
                    display: false,
                    position: 'right',
                    labels: {
                        fontColor: '#000'
                    }
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                lineWidth: 0,
                                borderDash: [8, 4],
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'PU2AB008'
                            }
                        }],
                    yAxes: [{
                            gridLines: {
                                borderDash: [8, 4],
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'No of Delay (Days)'
                            }
                        }]
                }
            };
        }
    };
    // events
    BarchartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    BarchartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    BarchartComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        this.barChartData[0].data = data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarchartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarchartComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarchartComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarchartComponent.prototype, "color", void 0);
    BarchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barchart',
            template: __webpack_require__(/*! ./barchart.component.html */ "./src/app/shared/chart/barchart/barchart.component.html"),
            styles: [__webpack_require__(/*! ./barchart.component.css */ "./src/app/shared/chart/barchart/barchart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_reco_service__WEBPACK_IMPORTED_MODULE_1__["RecoService"]])
    ], BarchartComponent);
    return BarchartComponent;
}());



/***/ }),

/***/ "./src/app/shared/chart/doughnutchart/doughnutchart.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shared/chart/doughnutchart/doughnutchart.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/chart/doughnutchart/doughnutchart.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/chart/doughnutchart/doughnutchart.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  doughnutchart works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/chart/doughnutchart/doughnutchart.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/chart/doughnutchart/doughnutchart.component.ts ***!
  \***********************************************************************/
/*! exports provided: DoughnutchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutchartComponent", function() { return DoughnutchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoughnutchartComponent = /** @class */ (function () {
    function DoughnutchartComponent() {
    }
    DoughnutchartComponent.prototype.ngOnInit = function () {
    };
    DoughnutchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doughnutchart',
            template: __webpack_require__(/*! ./doughnutchart.component.html */ "./src/app/shared/chart/doughnutchart/doughnutchart.component.html"),
            styles: [__webpack_require__(/*! ./doughnutchart.component.css */ "./src/app/shared/chart/doughnutchart/doughnutchart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DoughnutchartComponent);
    return DoughnutchartComponent;
}());



/***/ }),

/***/ "./src/app/shared/chart/linechart/linechart.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/chart/linechart/linechart.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/chart/linechart/linechart.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/chart/linechart/linechart.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  linechart works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/chart/linechart/linechart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/chart/linechart/linechart.component.ts ***!
  \***************************************************************/
/*! exports provided: LinechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinechartComponent", function() { return LinechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinechartComponent = /** @class */ (function () {
    function LinechartComponent() {
    }
    LinechartComponent.prototype.ngOnInit = function () {
    };
    LinechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linechart',
            template: __webpack_require__(/*! ./linechart.component.html */ "./src/app/shared/chart/linechart/linechart.component.html"),
            styles: [__webpack_require__(/*! ./linechart.component.css */ "./src/app/shared/chart/linechart/linechart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinechartComponent);
    return LinechartComponent;
}());



/***/ }),

/***/ "./src/app/shared/chart/piechart/piechart.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/chart/piechart/piechart.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/chart/piechart/piechart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/chart/piechart/piechart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  piechart works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/chart/piechart/piechart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/chart/piechart/piechart.component.ts ***!
  \*************************************************************/
/*! exports provided: PiechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiechartComponent", function() { return PiechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PiechartComponent = /** @class */ (function () {
    function PiechartComponent() {
    }
    PiechartComponent.prototype.ngOnInit = function () {
    };
    PiechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-piechart',
            template: __webpack_require__(/*! ./piechart.component.html */ "./src/app/shared/chart/piechart/piechart.component.html"),
            styles: [__webpack_require__(/*! ./piechart.component.css */ "./src/app/shared/chart/piechart/piechart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PiechartComponent);
    return PiechartComponent;
}());



/***/ }),

/***/ "./src/app/shared/popup/alert/alert.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/popup/alert/alert.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popwidth{\r\n    width: 500px!important;\r\n}"

/***/ }),

/***/ "./src/app/shared/popup/alert/alert.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/popup/alert/alert.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div> -->\n<!-- <div class=\"modal bs-example-modal \" tabindex=\"-1\" role=\"dialog\">\n   -->\n  <div>\n   <!-- <div class=\"modal-dialog \" role=\"document\"> -->\n     <div>\n      <div class=\"modal-content popwidth\">\n          <div class=\"modal-header\">\n              <h5 class=\"modal-title mt-0\">{{  data.title }}</h5>\n              <button (click)=\"onNoClick()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">×</span>\n              </button>\n          </div>\n          <div class=\"modal-body\">\n              <p>{{ data.description}}</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          </div>\n      </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div>"

/***/ }),

/***/ "./src/app/shared/popup/alert/alert.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/popup/alert/alert.component.ts ***!
  \*******************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        dialogRef.disableClose = true;
    }
    AlertComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/shared/popup/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/shared/popup/alert/alert.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/shared/shared-routing.module.ts");
/* harmony import */ var _table_erptable_erptable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/erptable/erptable.component */ "./src/app/shared/table/erptable/erptable.component.ts");
/* harmony import */ var _table_banktable_banktable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table/banktable/banktable.component */ "./src/app/shared/table/banktable/banktable.component.ts");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ "./src/app/shared/sidemenu/sidemenu.component.ts");
/* harmony import */ var _chart_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/barchart/barchart.component */ "./src/app/shared/chart/barchart/barchart.component.ts");
/* harmony import */ var _chart_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart/linechart/linechart.component */ "./src/app/shared/chart/linechart/linechart.component.ts");
/* harmony import */ var _chart_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart/piechart/piechart.component */ "./src/app/shared/chart/piechart/piechart.component.ts");
/* harmony import */ var _chart_doughnutchart_doughnutchart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/doughnutchart/doughnutchart.component */ "./src/app/shared/chart/doughnutchart/doughnutchart.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _popup_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popup/alert/alert.component */ "./src/app/shared/popup/alert/alert.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Adventsuitsfrontend_src_app_pipe_filterUnique_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../Adventsuitsfrontend/src/app/pipe/filterUnique.pipe */ "../Adventsuitsfrontend/src/app/pipe/filterUnique.pipe.ts");
/* harmony import */ var _expand_menu_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../expand-menu.directive */ "./src/app/expand-menu.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// import { NgScrollbarModule } from 'ngx-scrollbar';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // NgScrollbarModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"],
                // FilterPipe,
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents(null)
            ],
            declarations: [
                _expand_menu_directive__WEBPACK_IMPORTED_MODULE_20__["ExpandMenuDirective"],
                _Adventsuitsfrontend_src_app_pipe_filterUnique_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"],
                _table_erptable_erptable_component__WEBPACK_IMPORTED_MODULE_3__["ERPtableComponent"],
                _table_banktable_banktable_component__WEBPACK_IMPORTED_MODULE_4__["BanktableComponent"],
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__["SidemenuComponent"],
                _chart_doughnutchart_doughnutchart_component__WEBPACK_IMPORTED_MODULE_9__["DoughnutchartComponent"],
                _chart_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_6__["BarchartComponent"],
                _chart_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_7__["LinechartComponent"],
                _chart_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_8__["PiechartComponent"],
                _popup_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"],
            ],
            exports: [
                _Adventsuitsfrontend_src_app_pipe_filterUnique_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _table_erptable_erptable_component__WEBPACK_IMPORTED_MODULE_3__["ERPtableComponent"],
                _table_banktable_banktable_component__WEBPACK_IMPORTED_MODULE_4__["BanktableComponent"],
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__["SidemenuComponent"],
                _chart_doughnutchart_doughnutchart_component__WEBPACK_IMPORTED_MODULE_9__["DoughnutchartComponent"],
                _chart_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_6__["BarchartComponent"],
                _chart_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_7__["LinechartComponent"],
                _chart_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_8__["PiechartComponent"],
            ],
            providers: [
                _Adventsuitsfrontend_src_app_pipe_filterUnique_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"]
            ]
            // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidemenu/sidemenu.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/sidemenu/sidemenu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mini {\r\n  margin-left: 70px;\r\n}\r\n.dropdown-submenu {\r\n  position: relative;\r\n}\r\n.dropdown-submenu>.dropdown-menu {\r\n  top: 0;\r\n  left: 100%;\r\n  margin-top: -6px;\r\n  margin-left: -1px;\r\n  border-radius: 0 6px 6px 6px;\r\n}\r\n.dropdown-submenu:hover>.dropdown-menu {\r\n  display: block;\r\n}\r\n.dropdown-submenu>a:after {\r\n  display: block;\r\n  content: \" \";\r\n  float: right;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n  border-width: 5px 0 5px 5px;\r\n  border-left-color: #ccc;\r\n  margin-top: 5px;\r\n  margin-right: -10px;\r\n}\r\n.dropdown-submenu:hover>a:after {\r\n  border-left-color: #fff;\r\n}\r\n.dropdown-submenu.pull-left {\r\n  float: none;\r\n}\r\n.dropdown-submenu.pull-left>.dropdown-menu {\r\n  left: -100%;\r\n  margin-left: 10px;\r\n  border-radius: 6px 0 6px 6px;\r\n}\r\n#remove-scroll {overflow-y:hidden; height: -webkit-fill-available; margin-bottom: 25px; }\r\n#remove-scroll:hover {overflow-y:scroll;height: -webkit-fill-available; margin-bottom: 25px;}\r\n#remove-scroll::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 2px;\r\n\tbackground-color: #495057;\r\n}\r\n#remove-scroll::-webkit-scrollbar\r\n{\r\n\twidth: 6px;\r\n\tbackground-color: #495057;\r\n}\r\n#remove-scroll::-webkit-scrollbar-thumb\r\n{\r\n\t/* border-radius: 10px; */\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n  /* background-color: #D62929; */\r\n  \r\n  background: rgb(158, 165, 171);\r\n  width: 5px;\r\n  position: absolute;\r\n  top: 110px;\r\n  opacity: 0.4;\r\n  display: block;\r\n  border-radius: 7px;\r\n  z-index: 99;\r\n  right: 1px;\r\n  height: 296.565px;\r\n}\r\n.submenuheight{\r\n    height: 0px;\r\n    visibility: hidden;\r\n}\r\n.submenu li {\r\n  padding-left:15px;\r\n  }\r\nul li + .submenu {\r\n  display: none;\r\n  }\r\nul li.active + .submenu {\r\n    display: block;\r\n    list-style: none;\r\n    }"

/***/ }),

/***/ "./src/app/shared/sidemenu/sidemenu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidemenu/sidemenu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [ngClass]=\"{'enlarged':flag}\">\n\n\n<div id=\"wrapper\">\n\n  <!-- Top Bar Start -->\n  <div class=\"topbar\">\n\n      <!-- LOGO -->\n      <div class=\"topbar-left\">\n          <a class=\"logo\">\n              <span >\n                    <img src=\"assets/images/dashboard.png\" alt=\"\" height=\"60\">\n                      <!-- <a class=\"navbar-brand\" style=\"color:darkgray\" >Advent Suits</a> -->\n                  </span>\n              <i>\n                      <img src=\"assets/images/login-outer.png\" alt=\"\" height=\"30\">\n                      <!-- <a class=\"navbar-brand\" style=\"color:darkgray\">A</a> -->\n\n                  </i>\n          </a>\n      </div>\n\n      <nav class=\"navbar-custom\">\n            <ul class=\"navbar-right list-inline float-right mb-0\">\n                      \n\n                        <!-- notification -->\n                        <li class=\"dropdown notification-list list-inline-item\">\n                            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\n                                <i class=\"mdi mdi-power text-danger\"></i>\n                               Logout\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" style=\"\">\n                                <!-- item-->\n                                <h6 class=\"dropdown-item-text\">\n                                        Notifications (258)\n                                    </h6>\n                                <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 443.594px;\"><div class=\"slimscroll notification-item-list\" style=\"overflow: hidden; width: auto; height: 443.594px;\">\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item active\">\n                                        <div class=\"notify-icon bg-success\"><i class=\"mdi mdi-cart-outline\"></i></div>\n                                        <p class=\"notify-details\">Your order is placed<span class=\"text-muted\">Dummy text of the printing and typesetting industry.</span></p>\n                                    </a>\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-warning\"><i class=\"mdi mdi-message-text-outline\"></i></div>\n                                        <p class=\"notify-details\">New Message received<span class=\"text-muted\">You have 87 unread messages</span></p>\n                                    </a>\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-info\"><i class=\"mdi mdi-glass-cocktail\"></i></div>\n                                        <p class=\"notify-details\">Your item is shipped<span class=\"text-muted\">It is a long established fact that a reader will</span></p>\n                                    </a>\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-primary\"><i class=\"mdi mdi-cart-outline\"></i></div>\n                                        <p class=\"notify-details\">Your order is placed<span class=\"text-muted\">Dummy text of the printing and typesetting industry.</span></p>\n                                    </a>\n                                    <!-- item-->\n                                    <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                                        <div class=\"notify-icon bg-danger\"><i class=\"mdi mdi-message-text-outline\"></i></div>\n                                        <p class=\"notify-details\">New Message received<span class=\"text-muted\">You have 87 unread messages</span></p>\n                                    </a>\n                                </div><div class=\"slimScrollBar\" style=\"background: rgb(158, 165, 171); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n                                <!-- All-->\n                                <a href=\"javascript:void(0);\" class=\"dropdown-item text-center text-primary\">\n                                        View all <i class=\"fi-arrow-right\"></i>\n                                    </a>\n                            </div>\n                        </li>\n                        <li class=\"dropdown notification-list list-inline-item\">\n                            <div class=\"dropdown notification-list nav-pro-img\">\n                                <a class=\"dropdown-toggle nav-link arrow-none waves-effect nav-user\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\n                                    <img src=\"assets/images/users/user-4.jpg\" alt=\"user\" class=\"rounded-circle\">\n                                </a>\n                                <div class=\"dropdown-menu dropdown-menu-right profile-dropdown\" x-placement=\"bottom-end\" style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(66px, 70px, 0px);\">\n                                    <!-- item-->\n                                    <a class=\"dropdown-item\" href=\"#\"><i class=\"mdi mdi-account-circle m-r-5\"></i> Profile</a>\n                                    <a class=\"dropdown-item\" href=\"#\"><i class=\"mdi mdi-wallet m-r-5\"></i> My Wallet</a>\n                                    <a class=\"dropdown-item d-block\" href=\"#\"><span class=\"badge badge-success float-right\">11</span><i class=\"mdi mdi-settings m-r-5\"></i> Settings</a>\n                                    <a class=\"dropdown-item\" href=\"#\"><i class=\"mdi mdi-lock-open-outline m-r-5\"></i> Lock screen</a>\n                                    <div class=\"dropdown-divider\"></div>\n                                    <a class=\"dropdown-item text-danger\" href=\"#\"><i class=\"mdi mdi-power text-danger\"></i> Logout</a>\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n\n          <ul class=\"list-inline menu-left mb-0\">\n              <li class=\"float-left\">\n                  <button class=\"button-menu-mobile open-left waves-effect\" (click)=\"toggle()\">\n                      <i class=\"mdi mdi-menu\"></i>\n                  </button>\n              </li>\n              <!-- <li class=\"d-none d-sm-block\">\n                  <div class=\"dropdown pt-3 d-inline-block\">\n                      <a class=\"btn btn-light dropdown-toggle\" [routerLink]=\"\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                              Create\n                          </a>\n\n                      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n                          <a class=\"dropdown-item\" [routerLink]=\"\">Action</a>\n                          <a class=\"dropdown-item\" [routerLink]=\"\">Another action</a>\n                          <a class=\"dropdown-item\" [routerLink]=\"\">Something else here</a>\n                          <div class=\"dropdown-divider\"></div>\n                          <a class=\"dropdown-item\" [routerLink]=\"\">Separated link</a>\n                      </div>\n                  </div>\n              </li> -->\n          </ul>\n\n      </nav>\n\n  </div>\n  <!-- Top Bar End -->\n\n  <!-- ========== Left Sidebar Start ========== -->\n  <div class=\"left side-menu\">\n      <div class=\"slimscroll-menu\" id=\"remove-scroll\" >\n\n\n          <!--- Sidemenu -->\n          <div id=\"sidebar-menu\">\n              <!-- Left Menu Start -->\n              <ul class=\"metismenu mm-show\" id=\"side-menu\">\n                \n                <li class=\"menu-title\">Account Recivables</li>\n\n                \n                <li appExpandMenu >\n                    <a  class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> Home  </span> </a>\n                   \n                </li>\n                <li appExpandMenu> \n                    <a  class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> File Uploads <span class=\"float-right menu-arrow\"><i class=\"mdi mdi-chevron-right\"></i></span> </span> </a>\n                   \n                </li>\n                <ul class=\"submenu \" style=\"\">\n                    <li><a >Order</a></li>\n                    <li><a >Invoice</a></li>\n                    <li><a href=\"ui-cards.html\">Payment Advice</a></li>\n                    <li><a href=\"ui-carousel.html\">Bank Statement</a></li>\n                    <li><a href=\"ui-dropdowns.html\">Customer GL</a></li>\n                </ul>n\n     \n                <li appExpandMenu>\n                    <a  class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> Masters <span class=\"float-right menu-arrow\"><i class=\"mdi mdi-chevron-right\"></i></span> </span> </a>\n                   \n                </li>\n              \n\n                <ul class=\"submenu mm-collapse\" style=\"\">\n                    <li><a href=\"ui-alerts.html\"> Organization</a></li>\n                    <li><a href=\"ui-buttons.html\">Product Category</a></li>\n                    <li><a href=\"ui-cards.html\"> Product Line</a></li>\n                    <li><a href=\"ui-carousel.html\"> Product Type</a></li>\n                    <li><a href=\"ui-dropdowns.html\"> Product</a></li>\n                    <li><a href=\"ui-dropdowns.html\"> Shipping Site</a></li>\n                    <li><a href=\"ui-dropdowns.html\"> Customer</a></li>\n                    <li><a href=\"ui-dropdowns.html\">  Channel</a></li>\n                    <li><a href=\"ui-dropdowns.html\"> Customer Region</a></li>\n                    <li><a href=\"ui-dropdowns.html\"> Payment Term</a></li>\n\n\n                </ul>\n                <li appExpandMenu>\n                    <a   [routerLink]=\"['/main/dash']\" class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> Dashboard </span> </a>\n                   \n                </li>\n                <li appExpandMenu>\n                    <a  class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> KPI's <span class=\"float-right menu-arrow\"><i class=\"mdi mdi-chevron-right\"></i></span> </span> </a>\n                   \n                </li>\n                \n\n                <ul class=\"submenu mm-collapse\" style=\"\">\n                    <li><a [routerLink]=\"['/main/kpi/order']\">Order</a></li>\n                    <li><a [routerLink]=\"['/main/kpi/invoice']\">Invoice</a></li>\n                    <li><a href=\"ui-cards.html\">Product</a></li>\n                    <li><a href=\"ui-carousel.html\">Customer</a></li>\n                    <li><a href=\"ui-dropdowns.html\">Collections</a></li>\n                </ul>\n                <li appExpandMenu>\n                    <a  class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> Security <span class=\"float-right menu-arrow\"><i class=\"mdi mdi-chevron-right\"></i></span> </span> </a>\n                   \n                </li>\n                \n\n\n\n                <ul class=\"submenu mm-collapse\" style=\"\">\n                    <li><a href=\"ui-alerts.html\">Users</a></li>\n                    <li><a href=\"ui-buttons.html\">Roles</a></li>\n                    <li><a href=\"ui-cards.html\">Permissions</a></li>\n                    \n                </ul>\n                <li appExpandMenu>\n                    <a  class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> Reports  </span> </a>\n                   \n                </li>\n                <li appExpandMenu>\n                    <a  class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> User Preferences  </span> </a>\n                   \n                </li>\n                <li appExpandMenu>\n                    <a  class=\"waves-effect\" aria-expanded=\"true\"><i class=\"ti-package\"></i> <span> LogOff  </span> </a>\n                   \n                </li>\n\n\n\n\n\n\n            </ul>\n              \n          </div>\n          <!-- Sidebar -->\n          <div class=\"clearfix\"></div>\n\n      </div>\n      <!-- Sidebar -left -->\n\n  </div>\n  <!-- Left Sidebar End -->\n\n</div>\n  <!-- ============================================================== -->\n  <!-- Start right Content here -->\n  <!-- ============================================================== -->\n  <div [ngClass]=\"flag ? 'content-page mini':'content-page'\">\n        <!-- Start content -->\n        <div class=\"content\">\n            <div class=\"container-fluid\">\n                    <router-outlet></router-outlet>\n                            \n        </div>\n        <!-- container-fluid -->\n\n\n    </div>\n    <!-- content -->\n\n    <!-- <footer class=\"footer\">\n        © 2019 Veltrix <span class=\"d-none d-sm-inline-block\"> - Crafted with <i class=\"mdi mdi-heart text-danger\"></i> by Themesbrand</span>.\n    </footer> -->\n\n</div>\n\n<!-- ============================================================== -->\n<!-- End Right content here -->\n<!-- ============================================================== -->\n\n<script src=\"../../../assets/js/app.js\"></script>\n\n</main>\n"

/***/ }),

/***/ "./src/app/shared/sidemenu/sidemenu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidemenu/sidemenu.component.ts ***!
  \*******************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.flag = false;
        this.submenu = true;
        this.listModules = [];
        this.sample = true;
        this.CurrentURL = window.location.href;
        this.CurrentURLArr = this.CurrentURL.split('/');
        this.CHECKPAGE = this.CurrentURLArr[this.CurrentURLArr.length - 1];
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent.prototype.listmenu = function (id) {
        this._service.loadmenuitems(id)
            .subscribe(function (res) {
            return res;
        });
    };
    SidemenuComponent.prototype.toggle = function () {
        this.flag = !this.flag;
    };
    SidemenuComponent.prototype.hidesubmenu = function () {
        this.submenu = !this.submenu;
    };
    SidemenuComponent.prototype.listClick = function (e) {
        console.log(e);
    };
    SidemenuComponent.prototype.fetchURL = function (pid, url) {
        console.log(this.CHECKPAGE);
        console.log("poid", pid, url);
        if (url) {
            this._router.navigateByUrl(url);
        }
        else {
            this.sample = !this.sample;
        }
    };
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/shared/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/shared/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/table/banktable/banktable.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/table/banktable/banktable.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    background: #fff;\r\n    color: #424242;\r\n    /* max-width: 700px;  */\r\n}\r\n.ag-header-row {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    background: aquamarine;\r\n    background: #0077b3!important;\r\n    color: #fff!important;\r\n}\r\n.ag-theme-balham .ag-header-cell, .ag-theme-balham .ag-header-group-cell{\r\n    background-color: #0077b3;\r\n}\r\n.ag-theme-balham .ag-header-cell{\r\n    background-color: #e0e0e0;\r\n}\r\n.ag-header-cell{\r\n    background: #0077b3!important;\r\n    color: #fff!important;\r\n}\r\n.ag-pivot-off .ag-header-group-cell{\r\n    font-size: 50px;\r\n    color: red;\r\n}\r\n.ag-pivot-on .ag-header-group-cell{\r\n    font-size: 25px;\r\n    color: green;\r\n}\r\n.ag-cell-label-container{\r\n    /*Necessary to allow for text to grow vertically*/\r\n    height: 100%;\r\n}\r\n.ag-header-cell-label {\r\n    /*Necessary to allow for text to grow vertically*/\r\n    height: 100%;\r\n    padding:0 !important;\r\n}\r\n.ag-header-cell-label .ag-header-cell-text{\r\n    /*Force the width corresponding at how much width\r\n    we need once the text is layed out vertically*/\r\n    width: 30px;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    margin-top: 50px;\r\n    /*Since we are rotating a span*/\r\n    display: inline-block;\r\n}\r\n.ag-theme-balham .ag-header-cell{\r\n    background-color: red;\r\n}\r\n.ag-theme-balham .ag-header-cell, .ag-theme-balham .ag-header-group-cell{\r\n    background-color: #e0e0e0;\r\n}"

/***/ }),

/***/ "./src/app/shared/table/banktable/banktable.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/table/banktable/banktable.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n<div>\n<!-- <h2>{{(defaultoption == \"Open Invoice (By Count)\")?\"Invoice Issued\":\"Open Order\"}}</h2> -->\n<!-- <div class=\"form-group row\">\n                                            \n        <label for=\"example-text-input\" class=\"col-sm-2 col-form-label\">Filter</label>\n        <div class=\"col-sm-5\">\n            <input class=\"form-control\" type=\"text\"  id=\"filter-input\">\n        </div>\n    </div> -->\n    <ag-grid-angular  #agGrid id=\"grid1\"  class=\"ag-theme-balham\" \n    style=\" height: 700px;\"\n    \n   \n    [rowData]=\"rowData\" \n    [columnDefs]=\"OrdercolDefs\"\n     \n    [enableFilter]=\"true\"\n    [enableSorting]=\"true\"\n    [pagination]=\"true\"\n\n    >\n</ag-grid-angular>\n</div>\n</mat-card>\n<!-- style=\"width: 600PX; height: 600px;margin-left: 31px;\"  -->\n<style>\n::ng-deep .ag-theme-balham .ag-header-cell, .ag-theme-balham .ag-header-group-cell{\n    background-color: #0077b3!important;\n        color:#fff;\n        font-size:15px;\n        font-weight: bold;\n}\n</style>"

/***/ }),

/***/ "./src/app/shared/table/banktable/banktable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/table/banktable/banktable.component.ts ***!
  \***************************************************************/
/*! exports provided: BanktableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanktableComponent", function() { return BanktableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BanktableComponent = /** @class */ (function () {
    function BanktableComponent(http) {
        this.http = http;
        this.rowData = [];
        this.columnDefs = [
            { headerName: 'Bank Date', field: 'referenceDateTime_1',
                cellRenderer: function (data) {
                    return moment__WEBPACK_IMPORTED_MODULE_2__(data.value).format('DD/MM/YYYY');
                },
                sortable: true, filter: "agDateColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Description', field: 'referenceText_1', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Debit', field: 'debitAmount', sortable: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Credit', field: 'creditAmount', sortable: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Branch Code', field: 'referenceText_3', sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Value Date	', field: 'referenceDateTime_2',
                cellRenderer: function (data) {
                    return moment__WEBPACK_IMPORTED_MODULE_2__(data.value).format('DD/MM/YYYY');
                },
                sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Balance', field: 'amount_1', sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Bank Stmt ID', field: 'referenceText_4', sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Tag', field: 'referenceText_5', sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank Doc #', field: 'referenceText_6', sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank FC	', field: 'amount_2', sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank FC amount', field: 'referenceText_8', sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'Bank NR Payee', field: 'referenceText_9', sortable: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true }
        ];
        this.autoGroupColumnDef = {
            headerName: "Group",
            width: 200,
            field: "athlete",
            valueGetter: function (params) {
                if (params.node.group) {
                    return params.node.key;
                }
                else {
                    return params.data[params.colDef.field];
                }
            },
            headerCheckboxSelection: true,
            cellRenderer: "agGroupCellRenderer",
            cellRendererParams: { checkbox: true }
        };
        this.defaultColDef = {
            editable: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            resizable: true,
            filter: true
        };
        this.rowSelection = "multiple";
        this.rowGroupPanelShow = "always";
        this.pivotPanelShow = "always";
    }
    BanktableComponent.prototype.ngOnInit = function () {
    };
    BanktableComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.defaultoption == "Open Order (By Count)") {
            this.OrdercolDefs = [
                { headerName: 'Row Id', sort: 'asc', field: 'Row Id', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Order Year', field: 'Order Year', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Order Number', field: 'Order Number', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Order Date', field: 'Order Date',
                    cellRenderer: function (data) {
                        return moment__WEBPACK_IMPORTED_MODULE_2__(data.value).format('DD/MM/YYYY');
                    },
                    sortable: true, filter: "agDateColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Order Due Date', field: 'Order Due Date',
                    cellRenderer: function (data) {
                        return moment__WEBPACK_IMPORTED_MODULE_2__(data.value).format('DD/MM/YYYY');
                    },
                    sortable: true, filter: "agDateColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Customer Name', field: 'Customer Name', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Product Name', field: 'Product Name', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Product Code', field: 'Product Code', sortable: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Unit Cost (INR)', field: 'Unit Cost (INR)', sortable: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Quantity Ordered', field: 'Quantity Ordered', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Quantity Pending', field: 'Quantity Pending', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Quantity Shipped', field: 'Quantity Shipped', sortable: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Total Order Value (INR)', field: 'Total Order Value (INR)', sortable: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Balance Order Value (INR)', field: 'Balance Order Value (INR)', sortable: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Order Fulfillment %', field: 'Order Fulfillment %', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Order Shipment Status', field: 'Order Shipment Status', sortable: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            ];
            this.http
                .get("./assets/js/openOrder.json")
                .subscribe(function (data) {
                // this.rowData = data;
                _this.orderDeatailData = data;
                if ((_this.month == 'month_3') || (_this.month == 'month_6') || (_this.month == 'year_1'))
                    _this.rowData = _this.orderDeatailData[_this.month];
                else
                    _this.rowData = _this.orderDeatailData.year_1;
            });
        }
        else if (this.defaultoption == "Open Invoice (By Count)") {
            this.OrdercolDefs = [
                { headerName: 'Row Id', field: 'Row Id', sort: 'asc', filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true, sortable: true },
                { headerName: 'Invoice Year', field: 'Invoice Year', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Invoice Number', field: 'Invoice Number', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Invoice Date', field: 'Invoice Date',
                    cellRenderer: function (data) {
                        return moment__WEBPACK_IMPORTED_MODULE_2__(data.value).format('DD/MM/YYYY');
                    },
                    sortable: true, filter: "agDateColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Order Number', field: 'Order Number', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Order Date', field: 'Order Date',
                    cellRenderer: function (data) {
                        return moment__WEBPACK_IMPORTED_MODULE_2__(data.value).format('DD/MM/YYYY');
                    },
                    sortable: true, filter: "agDateColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'CustomerName', field: 'CustomerName', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Customer Region', field: 'Customer Region', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Customer Type', field: 'Customer Type', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Product Name', field: 'Product Name', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Product Code', field: 'Product Code', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Quantity Invoiced', field: 'Quantity Invoiced', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Total Invoice Value (INR)', field: 'Total Invoice Value (INR)', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Assessable Amount (INR)', field: 'Assessable Amount (INR)', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'IGST INR', field: 'IGST INR', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Packing & Forwarding INR', field: 'Packing & Forwarding INR', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'SGST INR', field: 'SGST INR', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'TC SGST INR', field: 'TC SGST INR', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Line Amount INR', field: 'Line Amount INR', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Payment Term Description', field: 'Payment Term Description', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Payment Term', field: 'Payment Term', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
                { headerName: 'Transporter Name', field: '', sortable: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            ];
            this.http
                .get("./assets/js/invoice.json")
                .subscribe(function (data) {
                // this.rowData = data;
                _this.invoiceDeatailData = data;
                if ((_this.month == 'month_3') || (_this.month == 'month_6'))
                    _this.rowData = _this.invoiceDeatailData[_this.month];
                else
                    _this.rowData = _this.invoiceDeatailData.month_6;
            });
        }
    };
    BanktableComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.OrdercolDefs = { suppressAutoSize: true };
        this.gridOptions = {
            defaultColDef: {
                sortable: true
            },
            enableSorting: true,
            enableFilter: true,
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BanktableComponent.prototype, "month", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BanktableComponent.prototype, "defaultoption", void 0);
    BanktableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banktable',
            template: __webpack_require__(/*! ./banktable.component.html */ "./src/app/shared/table/banktable/banktable.component.html"),
            styles: [__webpack_require__(/*! ./banktable.component.css */ "./src/app/shared/table/banktable/banktable.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BanktableComponent);
    return BanktableComponent;
}());



/***/ }),

/***/ "./src/app/shared/table/erptable/erptable.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/table/erptable/erptable.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    background: #fff;\r\n    color: #424242;\r\n    max-width: 700px; \r\n}"

/***/ }),

/***/ "./src/app/shared/table/erptable/erptable.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/table/erptable/erptable.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div>\n    <h2>ERP</h2>\n    <div class=\"form-group row\">\n\n      <!-- <label for=\"example-text-input\" class=\"col-sm-2 col-form-label\">Filter</label> -->\n      <div class=\"col-sm-4\">\n        <!-- <input class=\"form-control\" type=\"text\" id=\"filter-input\"> -->\n        <mat-form-field>\n            <mat-label>Find</mat-label>\n          <input matInput [(ngModel)]=\"findtext\"  placeholder=\"Enter word\">\n        </mat-form-field>\n\n      </div>\n      <div class=\"col-sm-4\" >\n          <mat-form-field>\n              <mat-label>Select Column</mat-label>\n              <mat-select [(ngModel)]=\"columnname\" >\n                <mat-option *ngFor=\"let val of columnDefs;\" [value]=\"val.field\">\n                  {{val.headerName}}\n                </mat-option>\n              </mat-select>\n              </mat-form-field>\n            \n                          \n        <!-- <select class=\"form-control\"\n         style=\"width: 100%;\" tabindex=\"-1\"\n        aria-hidden=\"true\">\n      \n        <option *ngFor=\"let val of columnDefs;\" value=\"{{val.field}}\">{{val.headerName}}</option>\n         \n        </select> -->\n      \n      </div>\n      <div class=\"col-sm-4\">\n          <button mat-raised-button color=\"primary\" (click)=\"search()\">Search</button>\n          <span style=\"font-size: 33px;\n          margin-left: 16px;\n          position: absolute;\n          cursor: pointer;\" (click)=\"refresh()\">\n              <i class=\"mdi mdi-refresh\"></i>\n    \n              </span>\n      </div>\n    \n\n    </div>\n    <ag-grid-angular style=\" height: 420px;\" class=\"ag-theme-balham\" [enableSorting]=\"true\" [enableFilter]=\"true\"\n      [rowData]=\"rowData\" [enableSorting]=\"true\" [pagination]=\"false\" [columnDefs]=\"columnDefs\">\n    </ag-grid-angular>\n\n    <!-- pager -->\n    <mat-paginator [length]=\"totalpage\" [pageSize]=\"limit\" [pageSizeOptions]=\"[5, 10, 25, 100]\"\n      (page)=\"pagechange($event)\">\n    </mat-paginator>\n  \n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/table/erptable/erptable.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/table/erptable/erptable.component.ts ***!
  \*************************************************************/
/*! exports provided: ERPtableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERPtableComponent", function() { return ERPtableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_reco_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reco.service */ "./src/app/services/reco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ERPtableComponent = /** @class */ (function () {
    function ERPtableComponent(http, reco) {
        this.http = http;
        this.reco = reco;
        this.rowData = [];
        this.Arr = Array; //Array type captured in a variable
        this.num = 20;
        // pager object
        this.pager = {};
        this.offsets = 0;
        this.limit = 25;
        this.columnDefs = [
            { headerName: 'ERP_ID	', field: 'intRecordsId', sort: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Doc.Date', field: 'referenceDateTime_1', sort: true,
                cellRenderer: function (data) {
                    return moment__WEBPACK_IMPORTED_MODULE_2__(data.value).format('DD/MM/YYYY');
                },
                filter: "agDateColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Text', field: 'referenceText_11', sort: true, filter: "agTextColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Debit Amount', field: 'debitAmount', sort: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Credit Amount', field: 'creditAmount', sort: true, filter: "agNumberColumnFilter", suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Document Header Text', field: 'referenceText_3', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Assignment	', field: 'referenceText_4', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Reference', field: 'referenceText_5', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Vendor', field: 'referenceText_6', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Vendor Name', field: 'referenceText_8', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Check number', field: 'referenceText_9', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Amount in local cur.', field: 'amount_1', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Clrng doc.	', field: 'referenceText_10', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP User name', field: 'referenceText_12', sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true },
            { headerName: 'ERP Entry Date ', field: 'referenceDateTime_3',
                cellRenderer: function (data) {
                    return moment__WEBPACK_IMPORTED_MODULE_2__(data.value).format('DD/MM/YYYY');
                },
                sort: true, filter: true, suppressSizeToFit: true, suppressAutoSize: true }
        ];
        this.autoGroupColumnDef = {
            headerName: "Group",
            width: 200,
            field: "athlete",
            valueGetter: function (params) {
                if (params.node.group) {
                    return params.node.key;
                }
                else {
                    return params.data[params.colDef.field];
                }
            },
            headerCheckboxSelection: true,
            cellRenderer: "agGroupCellRenderer",
            cellRendererParams: { checkbox: true }
        };
        this.defaultColDef = {
            editable: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            resizable: true,
            filter: true
        };
        this.rowSelection = "multiple";
        this.rowGroupPanelShow = "always";
        this.pivotPanelShow = "always";
    }
    ERPtableComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    ERPtableComponent.prototype.search = function () {
        var _this = this;
        console.log("findtext", this.findtext, this.columnname);
        var obj = {
            offset: this.offsets,
            limit: this.limit,
            findtext: this.findtext ? this.findtext : false,
            columnname: this.columnname ? this.columnname : false,
            relationId: this.relationId ? this.relationId : false
        };
        this.reco.ERPTotalCount(obj).subscribe(function (res) { _this.totalpage = res; console.log("totalpage", _this.totalpage); });
        this.reco.ERP(obj)
            .subscribe(function (data) {
            // this.rowData = data;
            _this.rowData = data;
        });
    };
    ERPtableComponent.prototype.ngOnInit = function () {
        this.search();
    };
    ERPtableComponent.prototype.refresh = function () {
        this.findtext = "";
        this.columnname = "";
        this.search();
    };
    ERPtableComponent.prototype.pagechange = function (e) {
        var _this = this;
        console.log("page change ", e);
        var obj = {
            offset: e.pageIndex,
            limit: e.pageSize
        };
        this.reco.ERP(obj)
            .subscribe(function (data) {
            // this.rowData = data;
            _this.rowData = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ERPtableComponent.prototype, "relationId", void 0);
    ERPtableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-erptable',
            template: __webpack_require__(/*! ./erptable.component.html */ "./src/app/shared/table/erptable/erptable.component.html"),
            styles: [__webpack_require__(/*! ./erptable.component.css */ "./src/app/shared/table/erptable/erptable.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], src_app_services_reco_service__WEBPACK_IMPORTED_MODULE_3__["RecoService"]])
    ], ERPtableComponent);
    return ERPtableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project_structure\AccountreceivableDemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map