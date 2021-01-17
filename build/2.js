webpackJsonp([2],{

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingPageModule", function() { return SharingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sharing__ = __webpack_require__(917);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharingPageModule = /** @class */ (function () {
    function SharingPageModule() {
    }
    SharingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sharing__["a" /* SharingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sharing__["a" /* SharingPage */]),
            ],
        })
    ], SharingPageModule);
    return SharingPageModule;
}());

//# sourceMappingURL=sharing.module.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharingPage; });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the SharingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SharingPage = /** @class */ (function () {
    function SharingPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.data = {
            topic: "",
            when: "",
            where: "",
            who: "",
            sharing: "",
            help: "",
            person: null
        };
        this.hasError = false;
        this.errMsg = "";
        this.allowBack = true;
        this.data.person = this.navParams.get('person');
        if (!navParams.get('actived')) {
            navCtrl.setRoot('BerandaPage');
        }
    }
    SharingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharingPage');
    };
    SharingPage.prototype.ionViewWillEnter = function () {
        if (this.service.sharing_page) {
            this.navCtrl.popToRoot();
        }
    };
    SharingPage.prototype.keHalamanEnd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hasError = false;
                        if (!(this.data.topic &&
                            this.data.when &&
                            this.data.where &&
                            this.data.who &&
                            this.data.sharing &&
                            this.data.help)) return [3 /*break*/, 2];
                        this.service.LOADER(); // loading global
                        console.log('data', this.data);
                        return [4 /*yield*/, this.service.simpanDataSharing(this.data).then(function (res) {
                                console.log('data push', res);
                                var sharing = _this.navParams.get('person');
                                console.log('sharer', sharing);
                                sharing.save({ sharing: { __type: "Pointer", className: "Sharing", objectId: res.objectId } });
                                _this.navCtrl.push('EndPage');
                                _this.service.Loader.dismiss();
                                _this.service.sharing_page = true;
                            }, function (err) {
                                console.log(err);
                                _this.service.Loader.dismiss();
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        console.log('data harus diisi');
                        this.errMsg = "Pastikan semua sudah terisi yaaa...";
                        this.hasError = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SharingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sharing',template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\sharing\sharing.html"*/'<!--\n\n  Generated template for the SharingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sharing</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="logo-br">\n\n    <img src="assets/imgs/USELOGO-01.png" alt="">\n\n  </div>\n\n\n\n  <div class="text-goshare">\n\n    Silakan Sharing\n\n  </div>\n\n  <div class="text-share">\n\n    Kolom di bawah ini disediakan untuk mencurahkan segala perasaan/ pikiran/ ide/ komentar. <br>\n\n    Untuk membantu Anda mengisi, silakan gunakan panduan ini.\n\n  </div>\n\n  <div class="label-float">\n\n\n\n\n\n\n\n  </div>\n\n\n\n  <ion-item>\n\n    <ion-label position="floating" floating>Topik yang disampaikan</ion-label>\n\n    <ion-input [(ngModel)]="data.topic" required></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label position="floating" floating>Kapan kejadiannya</ion-label>\n\n    <ion-input [(ngModel)]="data.when" required></ion-input>\n\n  </ion-item>\n\n  <ion-item>  \n\n    <ion-label position="floating" floating>Dimana</ion-label>\n\n    <ion-input [(ngModel)]="data.where" required></ion-input> \n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label position="floating" floating>Siapa yang terlibat</ion-label>\n\n    <ion-input [(ngModel)]="data.who" required></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-textarea [(ngModel)]="data.sharing" placeholder="Sharing di sini..." rows="10" required>\n\n    </ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-textarea [(ngModel)]="data.help" placeholder="Pertolongan yang diharapkan..." rows="3" required>\n\n    </ion-textarea>\n\n  </ion-item>\n\n\n\n  <p *ngIf="hasError">{{errMsg}}</p>\n\n\n\n  <br>\n\n\n\n    <button (click)="keHalamanEnd()" color="gray" ion-button block round color="primary">SUBMIT</button>\n\n    <br><br>\n\n</ion-content>'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\pages\sharing\sharing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], SharingPage);
    return SharingPage;
}());

//# sourceMappingURL=sharing.js.map

/***/ })

});
//# sourceMappingURL=2.js.map