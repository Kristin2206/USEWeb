webpackJsonp([5],{

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidePageModule", function() { return GuidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guide__ = __webpack_require__(914);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GuidePageModule = /** @class */ (function () {
    function GuidePageModule() {
    }
    GuidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__guide__["a" /* GuidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__guide__["a" /* GuidePage */]),
            ],
        })
    ], GuidePageModule);
    return GuidePageModule;
}());

//# sourceMappingURL=guide.module.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidePage; });
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
 * Generated class for the GuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuidePage = /** @class */ (function () {
    // content = [
    // '1. Silakan sentuh "Start Sharing" pada halaman home USE untuk memulai sharing.';
    // '2. Anda akan masuk ke halaman pengisian informasi umum sebelum sharing. Silakan mengisi sesuai dengan petunjuk pengisian. Setelah selesai, silakan sentuh "GO".';
    // '3. Anda akan masuk ke halaman sharing. Dalam halaman ini, Anda dapat sharing mengenai apapun. Setelah selesai, silakan sentuh "Submit".';
    // '4. Apabila ada pertanyaan mengenai aplikasi ini silakan menghubungi USE Friends.';
    // ]
    function GuidePage(navCtrl, navParams, serviceProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.content = [];
        if (!navParams.get('actived')) {
            navCtrl.setRoot('BerandaPage');
        }
    }
    GuidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuidePage');
    };
    // fungsi ini dijalani setiap masuk halaman yg dituju how
    GuidePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('will enter');
        // this.ambilData(); // panggil fungsi untuk di jalanin pada saat setiap masuk halaman what
        this.serviceProvider.LOADER();
        this.serviceProvider.retrieveHowData().then(function (data) {
            _this.content = data.content.split(';');
            console.log('HOW', data.content.split(';'));
            _this.serviceProvider.Loader.dismiss();
        }, function (err) {
            console.log(err);
            _this.serviceProvider.Loader.dismiss();
        });
    };
    GuidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guide',template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\guide\guide.html"*/'<!--\n  Generated template for the GuidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="container">\n\n    <div class="logo">\n      <img src="assets/imgs/USELOGO-01.png">\n    </div>\n\n    <div class="data-title">\n      <h3>Petunjuk Sharing</h3>\n    </div>\n\n    <div class="data-content">\n      <p *ngFor="let item of content">{{ item }}</p>\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\guide\guide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], GuidePage);
    return GuidePage;
}());

//# sourceMappingURL=guide.js.map

/***/ })

});
//# sourceMappingURL=5.js.map