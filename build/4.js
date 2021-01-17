webpackJsonp([4],{

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowPageModule", function() { return HowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__how__ = __webpack_require__(915);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HowPageModule = /** @class */ (function () {
    function HowPageModule() {
    }
    HowPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__how__["a" /* HowPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__how__["a" /* HowPage */]),
            ],
        })
    ], HowPageModule);
    return HowPageModule;
}());

//# sourceMappingURL=how.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowPage; });
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
 * Generated class for the HowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HowPage = /** @class */ (function () {
    function HowPage(navCtrl, navParams, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.data = {
            nama: '',
            friends: '',
            disampaikan: '',
            topik: '',
            media: ''
        };
        this.hasError = false;
        this.errMsg = "";
        this.informasi = "";
        if (!navParams.get('actived')) {
            navCtrl.setRoot('BerandaPage');
        }
    }
    HowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowPage');
    };
    HowPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.serviceProvider.how_page) {
            this.navCtrl.popToRoot();
        }
        this.serviceProvider.retrieveOperationalData().then(function (data) {
            _this.informasi = data.content;
        });
    };
    HowPage.prototype.keHalamanSharing = function () {
        var _this = this;
        this.hasError = false;
        // this.navCtrl.push('SharingPage')
        // console.log('keHalamanSharing')
        console.log('data yang diinput =>', this.data);
        if (this.data.nama &&
            this.data.friends &&
            this.data.disampaikan &&
            this.data.topik &&
            this.data.media) {
            this.serviceProvider.LOADER();
            this.serviceProvider.simpanDataResponden(this.data)
                .then(function (res) {
                _this.navCtrl.push('SharingPage', { person: res, actived: true });
                _this.serviceProvider.Loader.dismiss();
                _this.data = {
                    nama: '',
                    friends: '',
                    disampaikan: '',
                    topik: '',
                    media: ''
                };
                _this.serviceProvider.how_page = true;
                // alert('Yeay... datanya sudah tersimpan...')
            }, function (err) {
                // alert('Oops... ada yang ga beres nih')
                console.log(err);
                _this.serviceProvider.Loader.dismiss();
            });
        }
        else {
            this.errMsg = "Pastikan semua sudah terisi yaaa...";
            this.hasError = true;
            console.log('data harus diisi');
        }
        // this.navCtrl.push('SharingPage', {data: "ben"})
    };
    HowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-how',template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\how\how.html"*/'<!--\n\n  Generated template for the HowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="container">\n\n    <div class="logo-br">\n\n      <img src="assets/imgs/USELOGO-01.png" alt="USE">\n\n    </div>\n\n    <div class="face">\n\n      <img src="assets/imgs/USEFace-01.png" alt="USE">\n\n    </div>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nama (boleh anonim)</ion-label>\n\n      <ion-input [(ngModel)]="data.nama"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>USE Friends</ion-label>\n\n      <ion-select [(ngModel)]="data.friends">\n\n        <ion-option value="l">LWW</ion-option>\n\n        <ion-option value="k">KKE</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Ingin Disampaikan ke Manajemen</ion-label>\n\n      <ion-select [(ngModel)]="data.disampaikan">\n\n        <ion-option value="y">Ya</ion-option>\n\n        <ion-option value="t">Tidak</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Topik Sharing</ion-label>\n\n      <ion-select [(ngModel)]="data.topik">\n\n        <ion-option value="p">Personal</ion-option>\n\n        <ion-option value="f">Profesional</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Media Sharing*</ion-label>\n\n      <ion-select [(ngModel)]="data.media">\n\n        <ion-option value="chat">Personal Contact</ion-option>\n\n        <ion-option value="use">USE Only</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <p *ngIf="hasError" style="font-size: small; color: #d24141; margin-left: 14px;">{{errMsg}}</p>\n\n    <div class="text-star">\n\n      {{informasi}}\n\n    </div>\n\n    <div class="text-centre">\n\n      "A lot of problems in the world would disappear if we talked to each other instead of talk about each other." <br>\n\n      -Unknown\n\n\n\n    </div>\n\n\n\n    <br>\n\n\n\n    <button (click)="keHalamanSharing()" color="gray" ion-button block round color="primary">GO!</button>\n\n    <br><br>\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\how\how.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], HowPage);
    return HowPage;
}());

//# sourceMappingURL=how.js.map

/***/ })

});
//# sourceMappingURL=4.js.map