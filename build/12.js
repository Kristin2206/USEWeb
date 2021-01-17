webpackJsonp([12],{

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerandaPageModule", function() { return BerandaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beranda__ = __webpack_require__(908);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BerandaPageModule = /** @class */ (function () {
    function BerandaPageModule() {
    }
    BerandaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__beranda__["a" /* BerandaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__beranda__["a" /* BerandaPage */]),
            ],
        })
    ], BerandaPageModule);
    return BerandaPageModule;
}());

//# sourceMappingURL=beranda.module.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BerandaPage; });
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
 * Generated class for the BerandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BerandaPage = /** @class */ (function () {
    function BerandaPage(navCtrl, navParams, platform, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.service = service;
        this.tap = 0;
    }
    BerandaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BerandaPage');
    };
    BerandaPage.prototype.ionViewWillEnter = function () {
        this.service.how_page = false;
        this.service.sharing_page = false;
    };
    BerandaPage.prototype.keHalamanWhat = function () {
        this.navCtrl.push('WhatPage');
        console.log('keHalamanWhat BerandaPage');
    };
    BerandaPage.prototype.keHalamanWho = function () {
        this.navCtrl.push('WhoPage', { actived: true });
        console.log('keHalamanWho BerandaPage');
    };
    BerandaPage.prototype.keHalamanHow = function () {
        // this.navCtrl.push('HowPage')
        this.navCtrl.push('GuidePage', { actived: true });
        console.log('keHalamanHow');
    };
    BerandaPage.prototype.StartSharing = function () {
        this.navCtrl.push('HowPage', { actived: true });
        console.log('StartSharing');
    };
    BerandaPage.prototype.adminOnly = function () {
        var _this = this;
        this.tap++;
        console.log('tap logo', this.tap);
        if (this.tap == 5) {
            this.tap = 0;
            this.service.LOADER("Yeay... Anda Admin yaa...");
            console.log('yeayy..., anda adalah admin');
            // this.navCtrl.push('DataPage', {admin: true});
            this.navCtrl.push('MenuAdminPage', { admin: true });
            this.service.Loader.dismiss();
        }
        else {
            console.log('kurang dari 5');
        }
        setTimeout(function () {
            if (_this.tap < 5) {
                _this.tap = 0;
            }
        }, 1000);
    };
    BerandaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beranda',template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\beranda\beranda.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n  <div class="container">\n\n\n\n    <div class="logo">\n\n      <img (click)="adminOnly()" src="assets/imgs/USELOGO-01.png" alt="">\n\n    </div>\n\n\n\n    <img src="assets/imgs/USEPIC-01.png" alt="" class="USEPIC">\n\n\n\n    <p class="text-center">Hai DCT\'ers Bandung! <br> Selamat datang di aplikasi USE! <br> Senang bertemu dengan Anda</p>\n\n\n\n    <div class="btn-wrap">\n\n\n\n      <button (click)="keHalamanWhat()" color="gray" ion-button\n\n        style="border-radius: 50% !important; width: 8rem; height: 8rem;">What</button>\n\n      <button (click)="keHalamanWho()" color="gray" ion-button\n\n        style="border-radius: 50% !important; width: 8rem; height: 8rem;">Who</button>\n\n      <button (click)="keHalamanHow()" color="gray" ion-button\n\n        style="border-radius: 50% !important; width: 8rem; height: 8rem;">How</button>\n\n\n\n    </div>\n\n<br>\n\n    <button ion-button block round (click)="StartSharing()">Start Sharing</button>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\beranda\beranda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], BerandaPage);
    return BerandaPage;
}());

//# sourceMappingURL=beranda.js.map

/***/ })

});
//# sourceMappingURL=12.js.map