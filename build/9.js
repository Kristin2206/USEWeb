webpackJsonp([9],{

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInformasiPageModule", function() { return DetailInformasiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_informasi__ = __webpack_require__(911);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailInformasiPageModule = /** @class */ (function () {
    function DetailInformasiPageModule() {
    }
    DetailInformasiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_informasi__["a" /* DetailInformasiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_informasi__["a" /* DetailInformasiPage */]),
            ],
        })
    ], DetailInformasiPageModule);
    return DetailInformasiPageModule;
}());

//# sourceMappingURL=detail-informasi.module.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailInformasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
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
 * Generated class for the DetailInformasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailInformasiPage = /** @class */ (function () {
    function DetailInformasiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = navParams.get('data');
        console.log(this.data);
        if (!this.data) {
            this.navCtrl.setRoot('BerandaPage');
        }
    }
    DetailInformasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailInformasiPage');
    };
    DetailInformasiPage.prototype.edit = function () {
        this.navCtrl.push('EditInformasiPage', { data: this.data });
    };
    DetailInformasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-informasi',template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\detail-informasi\detail-informasi.html"*/'<!--\n\n  Generated template for the DetailInformasiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n  <ion-toolbar>\n\n    <ion-navbar>\n\n      <ion-title>Detail Informasi</ion-title>\n\n    </ion-navbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="edit()" >\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="content-data">\n\n    <p class="title">Status</p>\n\n    <p class="data">{{data.status== 1 ? \'Active\' : \'Inactive\'}}</p>\n\n    \n\n    <p class="title">Type</p>\n\n    <p class="data">{{data.type == 1 ? \'What\' : data.type == 2 ? \'Who\' : data.type == 3 ? \'How\' : data.type == 4 ? \'data Media\' : \'Belum ditentukan\'}}</p>\n\n\n\n    <p class="title">Content</p>\n\n    <p class="data">{{data.content}}</p>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\detail-informasi\detail-informasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailInformasiPage);
    return DetailInformasiPage;
}());

//# sourceMappingURL=detail-informasi.js.map

/***/ })

});
//# sourceMappingURL=9.js.map