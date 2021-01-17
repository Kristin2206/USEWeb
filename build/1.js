webpackJsonp([1],{

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatPageModule", function() { return WhatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__what__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WhatPageModule = /** @class */ (function () {
    function WhatPageModule() {
    }
    WhatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__what__["a" /* WhatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__what__["a" /* WhatPage */]),
            ],
        })
    ], WhatPageModule);
    return WhatPageModule;
}());

//# sourceMappingURL=what.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WhatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatPage = /** @class */ (function () {
    function WhatPage(navCtrl, navParams, serviceProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        // variabel
        this.informasi = "";
        this.erroMessage = "";
        this.isLoading = false;
        this.DATA_WHAT = "";
    }
    // dijalani pada saat pertama masuk pada halaman ini
    WhatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhatPage');
    };
    // fungsi ini dijalani setiap masuk halaman yg dituju how
    WhatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('will enter');
        // this.ambilData(); // panggil fungsi untuk di jalanin pada saat setiap masuk halaman what
        this.serviceProvider.LOADER();
        this.serviceProvider.retrieveWhatData().then(function (data) {
            _this.DATA_WHAT = data.content;
            // console.log('Data What', data);
            _this.serviceProvider.Loader.dismiss();
        }, function (err) {
            console.log(err);
            _this.serviceProvider.Loader.dismiss();
        });
    };
    WhatPage.prototype.ambilData = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Tunggu ya... USE sedang menyiapkan datanya :)" // content loading
        });
        loader.present(); // jalanin loading
        this.serviceProvider.getInformation() // panggil function dari service
            .then(function (response) {
            _this.informasi = response; // data yang ada di var response di set ke variabel informasi
            console.log('data', response); // debug 
            loader.dismiss(); // tutup loading
        }, function (err) {
            console.log(err); // debug error
            loader.dismiss(); // tutup loadng
        });
    };
    WhatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-what',template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\what\what.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>WHAT</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n  <div class="container">\n\n    <div class="logo">\n\n      <img src="assets/imgs/USELOGO-01.png">\n\n    </div>\n\n\n\n    <div class="data-title">\n\n      <h3>USE Itu Apa?</h3>\n\n    </div>\n\n\n\n    <div class="data-content">\n\n      <p style="text-align: center; white-space: pre-line;">{{ DATA_WHAT }}</p>\n\n      <!-- Salah satu usaha yang bisa kita lakukan untuk mengungkapkan emosi yang dirasakan adalah dengan bercerita. Dengan bercerita, kita bisa melepaskan ketegangan/ kecemasan yang dirasakan. <br> <br> USE (U Can Share Everything) hadir untuk membantu teman-teman DCT Bandung dari sisi psikologis untuk menjadi pendengar dari cerita teman-teman, baik hal positif  maupun negatif, baik hal personal maupun profesional. <br> <br>\n\n      Teman-teman akan mendapatkan beberapa kemudahan dalam bercerita. Bisa bercerita dengan mencantumkan nama atau tidak. Bisa memilih bercerita dengan siapa. Bisa memilih bercerita melalui chat atau call. Bagi yang mencantumkan nama, kami akan menghubungi segera dalam 1x24jam. -->\n\n    </div>\n\n  </div>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\what\what.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], WhatPage);
    return WhatPage;
}());

//# sourceMappingURL=what.js.map

/***/ })

});
//# sourceMappingURL=1.js.map