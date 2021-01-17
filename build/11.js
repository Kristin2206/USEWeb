webpackJsonp([11],{

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInformasiPageModule", function() { return DataInformasiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_informasi__ = __webpack_require__(909);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataInformasiPageModule = /** @class */ (function () {
    function DataInformasiPageModule() {
    }
    DataInformasiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__data_informasi__["a" /* DataInformasiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__data_informasi__["a" /* DataInformasiPage */]),
            ],
        })
    ], DataInformasiPageModule);
    return DataInformasiPageModule;
}());

//# sourceMappingURL=data-informasi.module.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInformasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(178);
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
 * Generated class for the DataInformasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DataInformasiPage = /** @class */ (function () {
    function DataInformasiPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    DataInformasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DataInformasiPage');
    };
    DataInformasiPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (!this.navParams.get('admin')) {
            this.navCtrl.setRoot('BerandaPage');
        }
        else {
            this.service.retrieveInformationData().then(function (res) {
                console.log('data informasi', res);
                _this.informasi = res;
            });
        }
    };
    DataInformasiPage.prototype.clickInput = function (info) {
        console.log(info);
        this.navCtrl.push('DetailInformasiPage', { data: info });
    };
    DataInformasiPage.prototype.newInformation = function () {
        console.log('new information');
    };
    DataInformasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-data-informasi',template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\data-informasi\data-informasi.html"*/'<!--\n\n  Generated template for the DataInformasiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Informasi</ion-title>\n\n  </ion-navbar>\n\n  <!-- <ion-toolbar>\n\n      <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="newInformation()" >\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar> -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let info of informasi" (click)="clickInput(info)" >\n\n      <h2>{{info.type == 1 ? \'What\' : info.type == 2 ? \'Who\' : info.type == 3 ? \'How\' : info.type == 4 ? \'Info Media\' : \'Belum ditentukan\'}}</h2>\n\n      <ion-badge item-end>{{info.status == 1 ? \'Active\': \'Inactive\'}}</ion-badge>\n\n      <p>{{ info.content }}</p>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\data-informasi\data-informasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */]])
    ], DataInformasiPage);
    return DataInformasiPage;
}());

//# sourceMappingURL=data-informasi.js.map

/***/ })

});
//# sourceMappingURL=11.js.map