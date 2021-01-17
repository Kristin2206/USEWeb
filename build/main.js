webpackJsonp([13],{

/***/ 280:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 280;

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/beranda/beranda.module": [
		895,
		12
	],
	"../pages/data-informasi/data-informasi.module": [
		896,
		11
	],
	"../pages/data/data.module": [
		897,
		10
	],
	"../pages/detail-informasi/detail-informasi.module": [
		898,
		9
	],
	"../pages/detail-responden/detail-responden.module": [
		906,
		8
	],
	"../pages/edit-informasi/edit-informasi.module": [
		899,
		7
	],
	"../pages/end/end.module": [
		900,
		6
	],
	"../pages/guide/guide.module": [
		901,
		5
	],
	"../pages/how/how.module": [
		902,
		4
	],
	"../pages/menu-admin/menu-admin.module": [
		903,
		3
	],
	"../pages/sharing/sharing.module": [
		904,
		2
	],
	"../pages/what/what.module": [
		907,
		1
	],
	"../pages/who/who.module": [
		905,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 321;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ParseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ParseProvider = /** @class */ (function () {
    function ParseProvider() {
        this.app_id = "eLsQxcVVxTutfKQO6cilnKwGQOPzINnGiNXOIG1y";
        this.js_key = "Y3gxfxSCwYXtMnPUsGpfaZYZE5lPYl9nfxRoRhmX";
        console.log('Hello ParseProvider Provider');
        this.parseInitialize();
    }
    ParseProvider.prototype.parseInitialize = function () {
        __WEBPACK_IMPORTED_MODULE_1_parse___default.a.initialize(this.app_id, this.js_key);
        __WEBPACK_IMPORTED_MODULE_1_parse___default.a.serverURL = "https://parseapi.back4app.com/";
    };
    ParseProvider.prototype.namaFungsi = function () {
        console.log('contoh');
    };
    ParseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ParseProvider);
    return ParseProvider;
}());

//# sourceMappingURL=parse.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_parse__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(178);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function (_super) {
    __extends(ServiceProvider, _super);
    function ServiceProvider(loadingCtrl) {
        var _this = _super.call(this) || this;
        _this.loadingCtrl = loadingCtrl;
        _this.how_page = false;
        _this.sharing_page = false;
        console.log('Hello ServiceProvider Provider');
        return _this;
    }
    ServiceProvider.prototype.getInformation = function () {
        return new Promise(function (resolve, reject) {
            var Information = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend("Information");
            var query = new __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Query(Information);
            query.get('ikUmf7mYhD').then(function (data) {
                resolve(data.get('content'));
            }, function (err) {
                reject(err);
            });
        });
    };
    // fungsi mengambil data "what"
    ServiceProvider.prototype.retrieveWhatData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var What = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend("Information");
            var q = new __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Query(What);
            q.equalTo('type', 1);
            q.equalTo('status', 1);
            q.first().then(function (response) {
                var data = _this.JSONparse(response);
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    // fungsi mengambil data "how"
    ServiceProvider.prototype.retrieveHowData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var What = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend("Information");
            var q = new __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Query(What);
            q.equalTo('type', 3);
            q.equalTo('status', 1);
            q.first().then(function (response) {
                var data = _this.JSONparse(response);
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    ServiceProvider.prototype.JSONparse = function (object) {
        return object = JSON.parse(JSON.stringify(object));
    };
    ServiceProvider.prototype.LOADER = function (msg) {
        if (msg === void 0) { msg = "Tunggu ya... USE sedang menyiapkan datanya :)"; }
        this.Loader = this.loadingCtrl.create({
            content: msg // content loading
        });
        this.Loader.present();
    };
    ServiceProvider.prototype.simpanDataResponden = function (data) {
        return new Promise(function (resolve, reject) {
            console.log('simpanDataResponden');
            console.log('ini ada datanya', data);
            var Responden = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend("Responden");
            var responden = new Responden();
            responden.set('nama', data.nama);
            responden.set('friends', data.friends);
            responden.set('disampaikan', data.disampaikan);
            responden.set('topik', data.topik);
            responden.set('media', data.media);
            responden.set('daftar', new Date().toLocaleDateString());
            responden.save().then(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.simpanDataSharing = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var Sharing = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend("Sharing");
            var s = new Sharing();
            s.save(data).then(function (res) {
                var data = _this.JSONparse(res);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.ambilDataResponden = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var Responden = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend("Responden");
            var q = new __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Query(Responden);
            q.descending('createdAt');
            q.include('sharing');
            q.limit(50);
            q.doesNotExist('deletedAt');
            q.find().then(function (response) {
                var data = _this.JSONparse(response);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.retrieveOperationalData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var What = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend("Information");
            var q = new __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Query(What);
            q.equalTo('type', 4);
            q.equalTo('status', 1);
            q.first().then(function (response) {
                var data = _this.JSONparse(response);
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    ServiceProvider.prototype.retrieveInformationData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var What = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend("Information");
            var q = new __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Query(What);
            q.doesNotExist('deletedAt');
            q.find().then(function (response) {
                var data = _this.JSONparse(response);
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    ServiceProvider.prototype.saveData = function (className, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var Data = __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Object.extend(className);
            var q = new __WEBPACK_IMPORTED_MODULE_2_parse___default.a.Query(Data);
            q.get(data.objectId).then(function (response) {
                // response.set('deletedAt', new Date())
                response.save(data).then(function (ok) {
                    var d = _this.JSONparse(ok);
                    resolve(d);
                }, function (err) {
                    var d = _this.JSONparse(response);
                    resolve(d);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
    ], ServiceProvider);
    return ServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_1__parse_parse__["a" /* ParseProvider */]));

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(503);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_service__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_parse_parse__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/beranda/beranda.module#BerandaPageModule', name: 'BerandaPage', segment: 'beranda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/data-informasi/data-informasi.module#DataInformasiPageModule', name: 'DataInformasiPage', segment: 'data-informasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/data/data.module#DataPageModule', name: 'DataPage', segment: 'data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-informasi/detail-informasi.module#DetailInformasiPageModule', name: 'DetailInformasiPage', segment: 'detail-informasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-informasi/edit-informasi.module#EditInformasiPageModule', name: 'EditInformasiPage', segment: 'edit-informasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/end/end.module#EndPageModule', name: 'EndPage', segment: 'end', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide/guide.module#GuidePageModule', name: 'GuidePage', segment: 'guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/how/how.module#HowPageModule', name: 'HowPage', segment: 'how', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-admin/menu-admin.module#MenuAdminPageModule', name: 'MenuAdminPage', segment: 'menu-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sharing/sharing.module#SharingPageModule', name: 'SharingPage', segment: 'sharing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/who/who.module#WhoPageModule', name: 'WhoPage', segment: 'who', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-responden/detail-responden.module#DetailRespondenPageModule', name: 'DetailRespondenPage', segment: 'detail-responden', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/what/what.module#WhatPageModule', name: 'WhatPage', segment: 'what', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_parse_parse__["a" /* ParseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'BerandaPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleBlackTranslucent();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\DCB-037\Desktop\Project\TemanSharing2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[480]);
//# sourceMappingURL=main.js.map