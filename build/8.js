webpackJsonp([8],{

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailRespondenPageModule", function() { return DetailRespondenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_responden__ = __webpack_require__(919);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailRespondenPageModule = /** @class */ (function () {
    function DetailRespondenPageModule() {
    }
    DetailRespondenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_responden__["a" /* DetailRespondenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_responden__["a" /* DetailRespondenPage */]),
            ],
        })
    ], DetailRespondenPageModule);
    return DetailRespondenPageModule;
}());

//# sourceMappingURL=detail-responden.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailRespondenPage; });
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
 * Generated class for the DetailRespondenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailRespondenPage = /** @class */ (function () {
    function DetailRespondenPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    DetailRespondenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailRespondenPage');
    };
    DetailRespondenPage.prototype.ionViewWillEnter = function () {
        this.data = this.navParams.get('data');
        console.log('data', this.data);
    };
    DetailRespondenPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        console.log('tutup');
    };
    DetailRespondenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-responden',template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\detail-responden\detail-responden.html"*/'<!--\n\n  Generated template for the DetailRespondenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <!-- <ion-navbar>\n\n    <ion-title>detailResponden</ion-title>\n\n  </ion-navbar> -->\n\n  <ion-toolbar color="secondary">\n\n\n\n    <ion-title>Data Responden</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="data">\n\n    <h4>Data</h4>\n\n    <p>Nama : {{data.nama}}</p>\n\n    <p>Friends : {{data.friends}}</p>\n\n    <p>Topik : {{data.topik}}</p>\n\n    <p>Media : {{data.media}}</p>\n\n    <p>Disampaikan : {{data.disampaikan}}</p>\n\n\n\n    <div *ngIf="data.sharing">\n\n      <h4>Sharing</h4>\n\n      <p>Topik : {{data.sharing.topic}}</p>\n\n      <p>Kapan : {{data.sharing.when}}</p>\n\n      <p>Dimana : {{data.sharing.where}}</p>\n\n      <p>Siapa : {{data.sharing.who}}</p>\n\n      <p>Sharing : {{data.sharing.sharing}}</p>\n\n      <p>Bantuan : {{data.sharing.help}}</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\detail-responden\detail-responden.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], DetailRespondenPage);
    return DetailRespondenPage;
}());

//# sourceMappingURL=detail-responden.js.map

/***/ })

});
//# sourceMappingURL=8.js.map