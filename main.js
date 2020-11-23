(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 35, vars: 0, consts: [["id", "about", 1, "container-fluid"], [1, "row"], [1, "col-sm-3", "col-md-6", "col-lg-8"], [1, "fa", "fa-envelope", 2, "font-size", "20px", "color", "white"], [1, "fa", "fa-map-marker", 2, "font-size", "20px", "color", "white"], [1, "fa", "fa-user", 2, "font-size", "20px", "color", "white"], [1, "btn", "btn-outline-primary", "btn-lg"], [1, "buttons", "text-center"], ["href", "https://m.facebook.com/jenell.mathias", "target", "_blank", 2, "margin", "10px"], [1, "fa", "fa-facebook", 2, "font-size", "20px", "color", "white"], ["href", "https://github.com/jmathiasj", "target", "_blank", 2, "margin", "10px"], [1, "fa", "fa-github", 2, "font-size", "20px", "color", "white"], ["href", "https://www.linkedin.com/in/jenell-mathias", "target", "_blank", 2, "margin", "10px"], [1, "fa", "fa-linkedin", 2, "font-size", "20px", "color", "white"], [1, "col-sm-4"], ["src", "../../assets/aboutme.jpg", "height", "620px", "width", "400px"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jenell Mathias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " mathiasjenell@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Mumbai, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Open To Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hello World!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My name is Jenell Mathias and I am a software engineer. I specialise in making full stack applications. I love exploring new technologies and I like to see myself as a passionate developer and an eternal learner.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Click to Download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click to Check My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    \n    color:rgb(195, 227, 228);\n    font-weight: 80;\n    letter-spacing: 1.5px;\n    animation:fadeIn 0.7s;\n    \n    font-family: Montserrat, sans-serif;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: 40px;\n    color:#7ae0d3;\n    font-weight: 100;\n    letter-spacing: 1.5px;\n    margin-top: 65px;\n    animation:fadeIn 0.6s;\n    font-family: Montserrat, sans-serif;\n  }\n  @keyframes fadeIn{\n    0%{opacity:0;}\n    50%{opacity:0.2;}\n    80%{opacity:0.6;}\n    90%{opacity:0.9;}\n    100%{opacity:1;}\n    }\n  \n  .container-fluid[_ngcontent-%COMP%] {\n    \n    margin-top: 95px;\n    background-color: black;\n  }\n  .bg-grey[_ngcontent-%COMP%] {\n    background-color: #f6f6f6;\n  }\n  .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 19px;\n    line-height: 1.375em;\n    font-weight: 400;\n    font-style: italic;\n    margin: 70px 0;\n  }\n  .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-style: normal;\n  }\n  footer[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 20px;\n    color: #f4511e;\n  }\n  .slideanim[_ngcontent-%COMP%] {visibility:hidden;}\n  .slide[_ngcontent-%COMP%] {\n    animation-name: slide;\n    -webkit-animation-name: slide;\n    animation-duration: 1s;\n    -webkit-animation-duration: 1s;\n    visibility: visible;\n  }\n  @keyframes slide {\n    0% {\n      opacity: 0;\n      transform: translateY(70%);\n    } \n    100% {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n  }\n  i[_ngcontent-%COMP%]{\n    animation:fadeIn 0.7s;\n\n  }\n  .btn-outline-primary[_ngcontent-%COMP%] {\n    background-color:black;\n    border-color: #7ae0d3;;\n    border-radius: 24px;\n    color:#7ae0d3;\n    font-size: 20px;\n    height:55px;\n    width:300px;\n    animation:fadeIn 0.8s;\n    margin-left:25px;\n    margin-right:25px;\n    margin-bottom:5px;\n  }\n  .btn-outline-primary[_ngcontent-%COMP%]:active, .btn-outline-primary[_ngcontent-%COMP%]:focus, .btn-outline-primary[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #7ae0d3!important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7S0FLSztFQUNIO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxHQUFHLFNBQVMsQ0FBQztJQUNiLElBQUksV0FBVyxDQUFDO0lBQ2hCLElBQUksV0FBVyxDQUFDO0lBQ2hCLElBQUksV0FBVyxDQUFDO0lBQ2hCLEtBQUssU0FBUyxDQUFDO0lBQ2Y7RUFDRjs7Ozs7O1FBTU07RUFFTjtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFHQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtFQUNBLFlBQVksaUJBQWlCLENBQUM7RUFDOUI7SUFDRSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLFVBQVU7TUFDVix5QkFBeUI7SUFDM0I7RUFDRjtFQUNBO0lBQ0UscUJBQXFCOztFQUV2QjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUVBO0lBQ0UsV0FBVztJQUNYLG1DQUFtQztFQUNyQyIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBib2R5IHtcbiAgICBmb250OiA0MDAgMTVweCBMYXRvLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH0gKi9cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKiBtYXJnaW4tdG9wOiA1OHB4OyAqL1xuICAgIGNvbG9yOnJnYigxOTUsIDIyNywgMjI4KTtcbiAgICBmb250LXdlaWdodDogODA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gMC43cztcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IzdhZTBkMztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gMC42cztcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgfVxuICBAa2V5ZnJhbWVzIGZhZGVJbntcbiAgICAwJXtvcGFjaXR5OjA7fVxuICAgIDUwJXtvcGFjaXR5OjAuMjt9XG4gICAgODAle29wYWNpdHk6MC42O31cbiAgICA5MCV7b3BhY2l0eTowLjk7fVxuICAgIDEwMCV7b3BhY2l0eToxO31cbiAgICB9XG4gIC8qIGg0IHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9ICAgICovXG4gIFxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDEwcHg7ICovXG4gICAgbWFyZ2luLXRvcDogOTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICAuYmctZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgfVxuICBcbiAgXG4gIC5pdGVtIGg0IHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luOiA3MHB4IDA7XG4gIH1cbiAgLml0ZW0gc3BhbiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIFxuICBmb290ZXIgLmdseXBoaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICNmNDUxMWU7XG4gIH1cbiAgLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxuICAuc2xpZGUge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBrZXlmcmFtZXMgc2xpZGUge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9IFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgfVxuICB9XG4gIGl7XG4gICAgYW5pbWF0aW9uOmZhZGVJbiAwLjdzO1xuXG4gIH1cbiAgLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgYm9yZGVyLWNvbG9yOiAjN2FlMGQzOztcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGNvbG9yOiM3YWUwZDM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDo1NXB4O1xuICAgIHdpZHRoOjMwMHB4O1xuICAgIGFuaW1hdGlvbjpmYWRlSW4gMC44cztcbiAgICBtYXJnaW4tbGVmdDoyNXB4O1xuICAgIG1hcmdpbi1yaWdodDoyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICB9XG5cbiAgLmJ0bi1vdXRsaW5lLXByaW1hcnk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpmb2N1cywgLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YWUwZDMhaW1wb3J0YW50O1xuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");






const routes = [{
        path: '', component: _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_2__["StartPageComponent"],
    },
    {
        path: 'aboutme', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"],
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 0, vars: 0, template: function AppComponent_Template(rf, ctx) { }, styles: ["h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    text-transform: uppercase;\n    color: #303030;\n    font-weight: 600;\n    margin-bottom: 30px;\n  }\n  h4[_ngcontent-%COMP%] {\n    font-size: 19px;\n    line-height: 1.375em;\n    color: #303030;\n    font-weight: 400;\n    margin-bottom: 30px;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 0px 0px;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    \n    \n    background-color:transparent;\n    \n    \n    z-index: 9999;\n    border: 0;\n    font-size: 17px !important;\n    line-height: 1.42857143 !important;\n    letter-spacing: 1px;\n    border-radius:0;\n    font-family: Montserrat;\n    \n    \n  }\n  .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%] {\n    color:white !important;\n    font-size: 17px;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #7ae0d3!important;\n    \n    \n  }\n  .navbar-default[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\n    border-color: transparent;\n    color: #fff !important;\n  }\n  footer[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 20px;\n    \n  }\n  .slideanim[_ngcontent-%COMP%] {visibility:hidden;}\n  .slide[_ngcontent-%COMP%] {\n    animation-name: slide;\n    -webkit-animation-name: slide;\n    animation-duration: 1s;\n    -webkit-animation-duration: 1s;\n    visibility: visible;\n  }\n  @keyframes slide {\n    0% {\n      opacity: 0;\n      transform: translateY(70%);\n    } \n    100% {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n  }\n  @media screen and (max-width: 768px) {\n    .col-sm-4[_ngcontent-%COMP%] {\n      text-align: center;\n      margin: 25px 0;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    .logo[_ngcontent-%COMP%] {\n      font-size: 200px;\n      font-style: italic;\n      color:#7ae0d3 ;\n    }\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    color: #7ae0d3 !important;\n    font-family: cursive;\n    font-size: 35px;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGdFQUFnRTtJQUNoRSw0QkFBNEI7SUFDNUIsdUVBQXVFO0lBQ3ZFLGtEQUFrRDtJQUNsRCxhQUFhO0lBQ2IsU0FBUztJQUNULDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsK0NBQStDO0lBQy9DLGtEQUFrRDtFQUNwRDtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0QjtFQUNBLFlBQVksaUJBQWlCLENBQUM7RUFDOUI7SUFDRSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLFVBQVU7TUFDVix5QkFBeUI7SUFDM0I7RUFDRjtFQVdBO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztJQUNoQjtFQUNGO0VBQ0E7SUFDRTtNQUNFLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsY0FBYztJQUNoQjtFQUNGO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGVBQWU7O0VBRWpCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfSAgXG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gIH1cbiAgLm5hdmJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCAgNzEuMDc1JSwgIzEzMTk0ZCA2MCUpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExMGRlZywgI2ZkY2QzYiA3MS4wODUlLCAjZmZlZDRiIDYwJSk7ICovXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL2Fzc2V0cy9uYXZiYXIucG5nJyk7ICovXG4gICAgei1pbmRleDogOTk5OTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDMgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAvKiBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgKi9cbiAgICAvKiBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmOyAqL1xuICB9XG4gIC5uYXZiYXIgbGkgYSwgLm5hdmJhciB7XG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cbiAgLm5hdmJhci1uYXYgbGkgYTpob3ZlciwgLm5hdmJhci1uYXYgbGkuYWN0aXZlIGEge1xuICAgIGNvbG9yOiAjN2FlMGQzIWltcG9ydGFudDtcbiAgICAvKiBjb2xvcjpncmV5OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6Z3JleSAhaW1wb3J0YW50OyAqL1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gIGZvb3RlciAuZ2x5cGhpY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvKiBjb2xvcjogI2Y0NTExZTsgKi9cbiAgfVxuICAuc2xpZGVhbmltIHt2aXNpYmlsaXR5OmhpZGRlbjt9XG4gIC5zbGlkZSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICAgIH0gXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9IFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sLXNtLTQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmxvZ28ge1xuICAgICAgZm9udC1zaXplOiAyMDBweDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGNvbG9yOiM3YWUwZDMgO1xuICAgIH1cbiAgfVxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogIzdhZTBkMyAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_4__["StartPageComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_4__["StartPageComponent"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/start-page/start-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start-page/start-page.component.ts ***!
  \****************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class StartPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartPageComponent.ɵfac = function StartPageComponent_Factory(t) { return new (t || StartPageComponent)(); };
StartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartPageComponent, selectors: [["app-start-page"]], decls: 12, vars: 0, consts: [["id", "about", 1, "container-fluid"], [1, "row", "text-center"], [1, "typewriter"], [2, "color", "#7ae0d3"], ["routerLink", "aboutme", 1, "btn", "btn-outline-primary", "btn-lg"]], template: function StartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jenell Mathias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Software Engineer..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Know More About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\n  font: 400 15px Lato, sans-serif;\n  line-height: 1.8;\n  color: #818181;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color:rgb(195, 227, 228);\n  font-weight: 80;\n  letter-spacing: 1.5px;\n  \n  font-family: Montserrat, sans-serif;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 70px;\n  color:white;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  margin-top: 58px;\n  animation:fadeIn 0.6s;\n  font-family: Montserrat, sans-serif;\n}\n@keyframes fadeIn{\n  0%{opacity:0;}\n  50%{opacity:0.2;}\n  80%{opacity:0.6;}\n  90%{opacity:0.9;}\n  100%{opacity:1;}\n  }\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding: 60px 50px;\n  margin-top: 130px;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n.item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 19px;\n  line-height: 1.375em;\n  font-weight: 400;\n  font-style: italic;\n  margin: 70px 0;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: normal;\n}\nfooter[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 20px;\n  color: #f4511e;\n}\n.slideanim[_ngcontent-%COMP%] {visibility:hidden;}\n.slide[_ngcontent-%COMP%] {\n  animation-name: slide;\n  -webkit-animation-name: slide;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  visibility: visible;\n}\n@keyframes slide {\n  0% {\n    opacity: 0;\n    transform: translateY(70%);\n  } \n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  background-color:black;\n  border-color: #7ae0d3;;\n  border-radius: 24px;\n  color:#7ae0d3;\n  font-size: 20px;\n  height:55px;\n  width:300px;\n  animation:fadeI 8s;\n}\n@keyframes fadeI{\n  0%{opacity:0;}\n  100%{opacity:1;}\n  }\n.btn-outline-primary[_ngcontent-%COMP%]:active, .btn-outline-primary[_ngcontent-%COMP%]:focus, .btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #7ae0d3!important;\n}\n@media screen and (max-width: 768px) {\n  .col-sm-4[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 25px 0;\n  }\n  .btn-lg[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 35px;\n    color: #fff;\n    \n  }\n}\n@media screen and (max-width: 480px) {\n  .logo[_ngcontent-%COMP%] {\n    font-size: 150px;\n  }\n}\n.typewriter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 200;\n  font-size:35px;\n  font-family: Montserrat, sans-serif;\n  overflow: hidden; \n  \n  white-space: nowrap; \n  margin: 0 auto; \n  line-height: 1.375em;\n  animation: \n    typing 5.5s steps(30, end),\n    blink-caret .6s step-end infinite;\n}\n\n@keyframes typing {\n  from { width: 0 }\n  to { width: 100% }\n}\n\n@keyframes blink-caret {\n  from, to { border-color: transparent }\n  50% { border-color:white }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLEdBQUcsU0FBUyxDQUFDO0VBQ2IsSUFBSSxXQUFXLENBQUM7RUFDaEIsSUFBSSxXQUFXLENBQUM7RUFDaEIsSUFBSSxXQUFXLENBQUM7RUFDaEIsS0FBSyxTQUFTLENBQUM7RUFDZjtBQUNGOzs7Ozs7S0FNSztBQUVMO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBR0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQSxZQUFZLGlCQUFpQixDQUFDO0FBQzlCO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLEdBQUcsU0FBUyxDQUFDO0VBQ2IsS0FBSyxTQUFTLENBQUM7RUFDZjtBQUVGO0VBQ0UsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQVdBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXOztFQUViO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxnQkFBZ0IsRUFBRSw0REFBNEQ7RUFDOUUscUNBQXFDO0VBQ3JDLG1CQUFtQixFQUFFLHVDQUF1QztFQUM1RCxjQUFjLEVBQUUsc0RBQXNEO0VBQ3RFLG9CQUFvQjtFQUNwQjs7cUNBRW1DO0FBQ3JDO0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsT0FBTyxTQUFTO0VBQ2hCLEtBQUssWUFBWTtBQUNuQjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLFdBQVcsMEJBQTBCO0VBQ3JDLE1BQU0sbUJBQW1CO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udDogNDAwIDE1cHggTGF0bywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6cmdiKDE5NSwgMjI3LCAyMjgpO1xuICBmb250LXdlaWdodDogODA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgbWFyZ2luLXRvcDogNThweDtcbiAgYW5pbWF0aW9uOmZhZGVJbiAwLjZzO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbn1cbkBrZXlmcmFtZXMgZmFkZUlue1xuICAwJXtvcGFjaXR5OjA7fVxuICA1MCV7b3BhY2l0eTowLjI7fVxuICA4MCV7b3BhY2l0eTowLjY7fVxuICA5MCV7b3BhY2l0eTowLjk7fVxuICAxMDAle29wYWNpdHk6MTt9XG4gIH1cbi8qIGg0IHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogMS4zNzVlbTtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59ICAgKi9cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4uYmctZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG59XG5cblxuLml0ZW0gaDQge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogNzBweCAwO1xufVxuLml0ZW0gc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuZm9vdGVyIC5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjZjQ1MTFlO1xufVxuLnNsaWRlYW5pbSB7dmlzaWJpbGl0eTpoaWRkZW47fVxuLnNsaWRlIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuQGtleWZyYW1lcyBzbGlkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICB9IFxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgYm9yZGVyLWNvbG9yOiAjN2FlMGQzOztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgY29sb3I6IzdhZTBkMztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6NTVweDtcbiAgd2lkdGg6MzAwcHg7XG4gIGFuaW1hdGlvbjpmYWRlSSA4cztcbn1cbkBrZXlmcmFtZXMgZmFkZUl7XG4gIDAle29wYWNpdHk6MDt9XG4gIDEwMCV7b3BhY2l0eToxO31cbiAgfVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeTphY3RpdmUsIC5idG4tb3V0bGluZS1wcmltYXJ5OmZvY3VzLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FlMGQzIWltcG9ydGFudDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XG4gIH0gXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29sLXNtLTQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI1cHggMDtcbiAgfVxuICAuYnRuLWxnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIFxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubG9nbyB7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgfVxufVxuLnR5cGV3cml0ZXIgaDQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOjM1cHg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGlzIG5vdCByZXZlYWxlZCB1bnRpbCB0aGUgYW5pbWF0aW9uICovXG4gIC8qIGJvcmRlci1yaWdodDogLjA4NWVtIHNvbGlkICNmZmY7ICovXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEtlZXBzIHRoZSBjb250ZW50IG9uIGEgc2luZ2xlIGxpbmUgKi9cbiAgbWFyZ2luOiAwIGF1dG87IC8qIEdpdmVzIHRoYXQgc2Nyb2xsaW5nIGVmZmVjdCBhcyB0aGUgdHlwaW5nIGhhcHBlbnMgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMzc1ZW07XG4gIGFuaW1hdGlvbjogXG4gICAgdHlwaW5nIDUuNXMgc3RlcHMoMzAsIGVuZCksXG4gICAgYmxpbmstY2FyZXQgLjZzIHN0ZXAtZW5kIGluZmluaXRlO1xufVxuXG4vKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xuQGtleWZyYW1lcyB0eXBpbmcge1xuICBmcm9tIHsgd2lkdGg6IDAgfVxuICB0byB7IHdpZHRoOiAxMDAlIH1cbn1cblxuLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xuQGtleWZyYW1lcyBibGluay1jYXJldCB7XG4gIGZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XG4gIDUwJSB7IGJvcmRlci1jb2xvcjp3aGl0ZSB9XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start-page',
                templateUrl: './start-page.component.html',
                styleUrls: ['./start-page.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Desktop/angularDemo 2/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map