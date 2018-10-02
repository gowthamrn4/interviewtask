(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addnewcontact/addnewcontact.component.css":
/*!***********************************************************!*\
  !*** ./src/app/addnewcontact/addnewcontact.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header\r\n{\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n*{\r\n    padding:0px;\r\n    \r\n}\r\n.container\r\n{\r\n    max-width:600px;\r\n    \r\n   \r\n}\r\n.input\r\n{\r\n    padding:30px;\r\n}\r\nbutton\r\n{\r\n    padding:10px;\r\n}\r\n/* .input span\r\n{\r\n    padding:15px;\r\n    margin:10px;\r\n} */\r\n.input input{\r\n    padding:10px;\r\n}\r\nul li{\r\n    float: left;\r\n    padding:30px;\r\n    list-style-type: none;\r\n}\r\n#span\r\n{\r\n    background:gray;\r\n    border-radius:20PX;\r\n}"

/***/ }),

/***/ "./src/app/addnewcontact/addnewcontact.component.html":
/*!************************************************************!*\
  !*** ./src/app/addnewcontact/addnewcontact.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"addContact\">\n         <div class=\"row text-center\">\n              <div class=\"col-md-12 col-sm-12 col-12\">\n                 <h4 id=\"header\">NEW CONTACT</h4>\n             </div>\n        </div>\n          <br>\n                 <div class=\"test\">\n                      <div class=\"row\">\n                         <div class=\"col-md-12\">\n                            <div class=\"photo text-center\">\n                                <img class=\"img-circle\" src=\"assets/img/default-avatar.png\" width=\"100\">\n                             </div>\n                         </div>\n                     </div>\n                       <hr>\n                         <br>\n <!-- <ul class=\"text-center\">\n   <li>\n       <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n   </li>\n   <li>\n     <input type=\"text\" class=\"form-control\" placeholder=\"first name\">\n   </li>\n   <li>\n       <input type=\"text\" class=\"form-control\" placeholder=\"last name\">\n     </li>\n </ul>\n <br>\n \n <div class=\"INPUT\">\n     <ul>\n     <li><i class=\"fa fa-phone fa-2x\" style=\"color:white\" aria-hidden=\"true\"></i></li>\n   </ul>\n </div> -->\n \n <div class=\"input\">\n    <form #personForm=\"ngForm\"(ngSubmit)=\"onSubmitnews(personForm.value)\">\n       <div class=\"row\">\n           <div class=\"col-md-6 col-sm-5 col-5\">\n               First Name:  <input type=\"text\" name=\"firstName\" [(ngModel)]=\"contact.firstName\"  class=\"form-control\" required>\n            </div>\n                <div class=\"col-md-1\"></div>\n                    <div class=\"col-md-5 col-sm-5 col-5\">\n                        Last Name:  <input type=\"text\" name=\"lastName\" [(ngModel)]=\"contact.lastName\" class=\"form-control\" required>\n                    </div>\n               </div>\n                        <div class=\"row\">\n                           <div class=\"col-md-6 col-sm-6 col-6\">\n                               Phone Number <input type=\"text\" name=\"phoneNumber\"  [(ngModel)]=\"contact.mobileNumber\" class=\"form-control\" required>\n                                   </div>\n                                      <div class=\"col-md-1\"></div><br>\n                                          <!-- <div class=\"col-md-5 col-sm-5 col-5\"><span style=\"background:gray;border-radius:20px;\"> + ADD PHONE NUMBER</span> -->\n                                       <!-- </div> -->\n                            </div>\n\n                                          <div class=\"row\">\n                                               <div class=\"col-md-6 col-sm-6 col-6\">\n                                                    Email <input name=\"email\" type=\"text\" [(ngModel)]=\"contact.email\" class=\"form-control\" required>\n                                                </div>\n                                           </div><br>\n                                                    <div class=\"row\">\n                                                        <div class=\"col-md-6 col-sm-6 col-6\">\n                                                         <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onSubmitnews(personForm.value)\"\n                                                          [disabled]=\"!personForm.form.valid\">SAVE</button>|\n\n                                                       </div>\n                                                    </div>\n    </form>\n     \n </div>\n \n   </div>\n </div>\n\n \n"

/***/ }),

/***/ "./src/app/addnewcontact/addnewcontact.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/addnewcontact/addnewcontact.component.ts ***!
  \**********************************************************/
/*! exports provided: AddnewcontactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewcontactComponent", function() { return AddnewcontactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddnewcontactComponent = /** @class */ (function () {
    function AddnewcontactComponent(dataservice, http, router) {
        this.dataservice = dataservice;
        this.http = http;
        this.router = router;
        this.contact = {};
    }
    AddnewcontactComponent.prototype.ngOnInit = function () {
    };
    AddnewcontactComponent.prototype.onSubmitnews = function (value) {
        var _this = this;
        console.log(this.contact);
        this.dataservice.addContact(this.contact).subscribe(function (res) {
            console.log(res);
            alert("Add successfull");
            _this.router.navigate(['landingpage/contact']);
        });
    };
    AddnewcontactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addnewcontact',
            template: __webpack_require__(/*! ./addnewcontact.component.html */ "./src/app/addnewcontact/addnewcontact.component.html"),
            styles: [__webpack_require__(/*! ./addnewcontact.component.css */ "./src/app/addnewcontact/addnewcontact.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddnewcontactComponent);
    return AddnewcontactComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'customerDetails';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "./src/app/landingpage/landingpage.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _phone_phone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phone/phone.component */ "./src/app/phone/phone.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _phone_call_call_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phone/call/call.component */ "./src/app/phone/call/call.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _viewpage1_viewpage1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewpage1/viewpage1.component */ "./src/app/viewpage1/viewpage1.component.ts");
/* harmony import */ var _addnewcontact_addnewcontact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addnewcontact/addnewcontact.component */ "./src/app/addnewcontact/addnewcontact.component.ts");
/* harmony import */ var _createmessage_createmessage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./createmessage/createmessage.component */ "./src/app/createmessage/createmessage.component.ts");
/* harmony import */ var _viewmessage_viewmessage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewmessage/viewmessage.component */ "./src/app/viewmessage/viewmessage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_6__["LandingpageComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"],
                _phone_phone_component__WEBPACK_IMPORTED_MODULE_8__["PhoneComponent"],
                _phone_call_call_component__WEBPACK_IMPORTED_MODULE_10__["CallComponent"],
                _viewpage1_viewpage1_component__WEBPACK_IMPORTED_MODULE_12__["Viewpage1Component"],
                _addnewcontact_addnewcontact_component__WEBPACK_IMPORTED_MODULE_13__["AddnewcontactComponent"],
                _createmessage_createmessage_component__WEBPACK_IMPORTED_MODULE_14__["CreatemessageComponent"],
                _viewmessage_viewmessage_component__WEBPACK_IMPORTED_MODULE_15__["ViewmessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'landingpage' },
                    { path: 'landingpage', component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_6__["LandingpageComponent"],
                        children: [
                            { path: '', pathMatch: 'full', redirectTo: 'contact' },
                            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
                            { path: 'addnew', component: _addnewcontact_addnewcontact_component__WEBPACK_IMPORTED_MODULE_13__["AddnewcontactComponent"] },
                            { path: 'viewpage1/:_id', component: _viewpage1_viewpage1_component__WEBPACK_IMPORTED_MODULE_12__["Viewpage1Component"] },
                            { path: 'createmessage/:_id', component: _createmessage_createmessage_component__WEBPACK_IMPORTED_MODULE_14__["CreatemessageComponent"] },
                            { path: 'phone', component: _phone_phone_component__WEBPACK_IMPORTED_MODULE_8__["PhoneComponent"],
                                children: [
                                    { path: '', pathMatch: 'full', redirectTo: 'call' },
                                    { path: '', component: _phone_call_call_component__WEBPACK_IMPORTED_MODULE_10__["CallComponent"] }
                                ] },
                            { path: 'message', component: _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"],
                                children: [
                                    { path: '', pathMatch: 'full', redirectTo: 'sendmessage' },
                                ] }
                        ] },
                ])
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*\r\n{\r\n    padding:0px;\r\n    margin:0px;\r\n}\r\n#search\r\n{\r\n    height:20px;\r\n    width:250px;\r\n    margin:0px auto;\r\n}\r\nhr{\r\n    color: black;\r\n    height:20px;\r\n}\r\n.action ul li\r\n{\r\n    display: inline;\r\n    padding:30px;\r\n}\r\n.contact\r\n{\r\n    width:300px;\r\n    height:600px;\r\n\r\n    background: black;\r\n    color: white;\r\n}\r\n@media only screen and (max-width:500px)\r\n{\r\n    .heading\r\n    {\r\n        width:200px;\r\n    }\r\n\r\n}\r\n@media (min-width: 992px)\r\n{\r\n    .col-md-5 {\r\n        width: 30.66666667%;\r\n}\r\n\r\n}\r\n@media (min-width:1050px)\r\n{\r\n    .col-md-5 {\r\n        width: 25.66666667%;\r\n}\r\n\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-5 col-sm-5 col-5\">\n      <div class=\"contact\">\n        <div class=\"row text-center\" style=\"padding:20px;\">\n          <div class=\"col-md-5 col-sm-5 col-5\">\n            <input id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n               </div>\n        </div>\n        <div class=\"action text-center\">\n          <ul>\n            <li><a routerLink=\"/landingpage/addnew\"><i class=\"fa fa-plus-circle text-center\"  aria-hidden=\"true\">ADD</i></a></li>\n\n          </ul>\n        </div><br><hr>\n        <div class=\"row text-center\" style=\"margin:0px auto;width:100px;\">\n            <div class=\"col-md-5 col-sm-5 col-5\">\n             <h5>CONTACT</h5>\n            </div>\n        </div><br>\n        <hr>\n        <div *ngFor=\"let BindContact of BindContact\">\n        <div class=\"row\" style=\"padding-left:25px\">\n\n          <div class=\"col-md-2 col-sm-4 col-4\">\n            <img src=\"assets/img/avatar5.png\" class=\"img-circle\" width=\"50\">\n          </div>\n          <a routerLink=\"/landingpage/viewpage1/{{BindContact._id}}\">\n\n          <div class=\"col-md-6 col-sm-4 col-4 text-center\" >\n            <span>{{BindContact.firstName}} {{BindContact.lastName}}</span><br>\n            <span>{{BindContact.mobileNumber}}</span><BR>\n          </div>\n        </a>\n\n          <div class=\"col-md-4 col-sm-4 col-4\">\n              <a (click)=\"calllog(BindContact)\"><i class=\"fa fa-phone fa-2x\" style=\"color:white;padding:10px;\" aria-hidden=\"true\"></i></a>             \n              <a routerLink=\"/landingpage/createmessage/{{BindContact._id}}\"><i class=\"fa fa-envelope-o fa-2x\" style=\"color:white;padding:10px;\" aria-hidden=\"true\"></i></a>             \n\n          </div>\n          </div><br>\n          <hr>\n        </div>\n     \n\n\n         \n\n\n      </div>\n    </div>\n\n    <div class=\"test\">\n      <div class=\"col-md-5 col-sm-5 col-5\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getContact().subscribe(function (res) {
            _this.BindContact = res;
            console.log(res);
            for (var i = 0; i < _this.BindContact.length; i++) {
            }
        });
    };
    ContactComponent.prototype.calllog = function (value) {
        var _this = this;
        var data = {
            uid: value.uid,
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            mobileNumber: value.mobileNumber,
            typeOfCall: "dialled",
            dateTime: new Date
        };
        alert("Your Call Created Successfully");
        this.dataservice.createCalllog(data).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['landingpage/phone']);
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/createmessage/createmessage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/createmessage/createmessage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box\r\n{\r\nmax-width:1200px;\r\nmargin-bottom: 1px; \r\n\r\n}\r\n.direct-chat-messages\r\n{\r\n    height:500px;\r\n}\r\n@media only screen and (max-width:700px)\r\n{\r\n.box{\r\n    width:440px;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/createmessage/createmessage.component.html":
/*!************************************************************!*\
  !*** ./src/app/createmessage/createmessage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"box\">\n    <div class=\"box box-danger direct-chat direct-chat-danger\">\n        <div class=\"box-header with-border\">\n          <h3 class=\"box-title\">Messages</h3>\n          <div class=\"box-tools pull-right\">\n            <div class=\"count\" *ngFor=\"let UserMessage of CurrentUsersMessage;let i=index\"></div>\n            <span data-toggle=\"tooltip\" title=\"{{CurrentUsersMessage.length}} New Messages\" class=\"badge bg-red\">{{CurrentUsersMessage.length}}</span>\n            <button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i></button>\n            <button class=\"btn btn-box-tool\" data-toggle=\"tooltip\" title=\"Contacts\" data-widget=\"chat-pane-toggle\"><i class=\"fa fa-comments\"></i></button>\n            <button class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n          </div>\n        </div>\n        <div class=\"box-body\">\n          <div class=\"direct-chat-messages\">\n            <div class=\"direct-chat-msg\">\n              <div class=\"direct-chat-info clearfix\">\n                <span class=\"direct-chat-name pull-left\">{{BindMessage.firstName}} {{BindMessage.lastName}}</span>\n                <span class=\"direct-chat-timestamp pull-right\">23 Jan 2:00 pm</span>\n              </div>\n              <img class=\"direct-chat-img\" src=\"assets/img/avatar5.png\" alt=\"message user image\"><!-- /.direct-chat-img -->\n              <div class=\"direct-chat-text\">\n               Hi.......\n              </div>\n            </div>\n      \n           \n            <div class=\"direct-chat-msg right\"  *ngFor=\"let UserMessage of CurrentUsersMessage\">\n              <div class=\"direct-chat-info clearfix\" >\n                <span class=\"direct-chat-name pull-right\">{{BindMessage.firstName}} {{BindMessage.lastName}}</span>\n                <span class=\"direct-chat-timestamp pull-left\">{{UserMessage.dateTime}}</span>\n              </div>\n              <img class=\"direct-chat-img\" src=\"assets/img/avatar5.png\" alt=\"message user image\"><!-- /.direct-chat-img -->\n              <div class=\"direct-chat-text\">\n              {{UserMessage.value}}\n              </div>\n            </div>\n          </div>\n      \n          <div class=\"direct-chat-contacts\">\n            <ul class=\"contacts-list\">\n              <li>\n                <a href=\"#\">\n                  <img class=\"contacts-list-img\" src=\"assets/img/avatar5.png\" alt=\"Contact Avatar\">\n                  <div class=\"contacts-list-info\">\n                    <span class=\"contacts-list-name\" >\n                    \n                      <small class=\"contacts-list-date pull-right\"></small>\n                    </span>\n                    <span class=\"contacts-list-msg\">{{CurrentUsersMessage.value}}</span>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <form #personForm=\"ngForm\"(ngSubmit)=\"onSubmit(personForm.value)\">\n\n        <div class=\"box-footer\">\n          <div class=\"input-group\">\n                  <input type=\"text\" name=\"message\"  placeholder=\"Type Message ...\" class=\"form-control\" ngModel required>\n            <span class=\"input-group-btn\">\n                <button class=\"btn  btn-round\" type=\"submit\" [disabled]=\"!personForm.form.valid\">Send</button>            </span>\n         \n          </div>\n        </div>\n      </form>\n      </div>\n      </div>"

/***/ }),

/***/ "./src/app/createmessage/createmessage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/createmessage/createmessage.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatemessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatemessageComponent", function() { return CreatemessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatemessageComponent = /** @class */ (function () {
    function CreatemessageComponent(route, router, dataservice, http) {
        this.route = route;
        this.router = router;
        this.dataservice = dataservice;
        this.http = http;
        this.CreateMessage = {
            _id: '',
            firstName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            uid: '',
            dateTime: new Date,
        };
        this.BindMessage = {
            _id: '',
            firstName: '',
            lastName: '',
            mobileNumber: '',
            uid: '',
            Messages: []
        };
    }
    CreatemessageComponent.prototype.ngOnInit = function () {
        this.ListMessage();
    };
    CreatemessageComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            _id: this.BindMessage._id,
            message: {
                value: value.message,
                dateTime: new Date()
            }
        };
        console.log(data);
        this.dataservice.createMessageData(data).subscribe(function (res) {
            _this.ListMessage();
            console.log(res);
            alert("Your Message Is Created");
        });
    };
    CreatemessageComponent.prototype.ListMessage = function () {
        var _this = this;
        this.CurrentUsersMessage = [];
        this.allUsers = [];
        this.id = this.route.snapshot.params['_id'];
        this.dataservice.getContact().subscribe(function (res) {
            _this.allUsers = res;
            console.log(_this.allUsers);
            for (var i = 0; i < _this.allUsers.length; i++) {
                for (var k = 0; k < _this.allUsers[i].message.length; k++) {
                    // this.MyData=this.allUsers[i].message;
                } // }console.log(this.MyData);
                if (_this.id === _this.allUsers[i]._id) {
                    _this.BindMessage._id = _this.allUsers[i]._id;
                    _this.BindMessage.firstName = _this.allUsers[i].firstName;
                    _this.BindMessage.lastName = _this.allUsers[i].lastName;
                    _this.BindMessage.mobileNumber = _this.allUsers[i].mobileNumber;
                    _this.BindMessage.uid = _this.allUsers[i].uid;
                    _this.BindMessage.Messages = _this.allUsers[i].message;
                    _this.CurrentUsersMessage = _this.BindMessage.Messages;
                }
            }
            console.log(_this.CurrentUsersMessage);
        });
    };
    CreatemessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createmessage',
            template: __webpack_require__(/*! ./createmessage.component.html */ "./src/app/createmessage/createmessage.component.html"),
            styles: [__webpack_require__(/*! ./createmessage.component.css */ "./src/app/createmessage/createmessage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], CreatemessageComponent);
    return CreatemessageComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http, router) {
        this.http = http;
        this.router = router;
    }
    DataService.prototype.ngOnInit = function () {
    };
    DataService.prototype.addContact = function (value) {
        var _this = this;
        return this.http.post('https://interviewtask.herokuapp.com/contact/createContact', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.PostContact = data.json(); }));
    };
    DataService.prototype.getContact = function () {
        var _this = this;
        return this.http.get('https://interviewtask.herokuapp.com/contact/getContacts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.GetContact1 = data.json(); }));
    };
    DataService.prototype.viewCalllog = function () {
        var _this = this;
        return this.http.get('https://interviewtask.herokuapp.com/callLog/getCalls')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.getCalls = data.json(); }));
    };
    DataService.prototype.DelContact = function (value) {
        var _this = this;
        return this.http.post('https://interviewtask.herokuapp.com/contact/deleteContact', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.DeleteCon = data.json(); }));
    };
    DataService.prototype.UpdateContact = function (value) {
        var _this = this;
        return this.http.post('https://interviewtask.herokuapp.com/contact/editContact', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.UpdateCon = data.json(); }));
    };
    DataService.prototype.createCalllog = function (value) {
        var _this = this;
        return this.http.post('https://interviewtask.herokuapp.com/callLog/createLog', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.createLog = data.json(); }));
    };
    DataService.prototype.createMessageData = function (value) {
        var _this = this;
        return this.http.post('https://interviewtask.herokuapp.com/contact/createMessage', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.createMessage1 = data.json(); }));
    };
    DataService.prototype.getMessages = function () {
        var _this = this;
        return this.http.get('https://interviewtask.herokuapp.com/contact/getContacts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.getMessage1 = data.json(); }));
    };
    DataService.prototype.DelCall = function (value) {
        var _this = this;
        return this.http.post('https://interviewtask.herokuapp.com/callLog/removeCall', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.DeleteCallLog = data.json(); }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/landingpage/landingpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    padding:0px;\r\n    \r\n}\r\n.active {\r\n    background: black;\r\n    border-right:6px solid lightblue;\r\n\t\r\n}"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body class=\"hold-transition skin-blue fixed sidebar-mini\">\n<div class=\"wrapper\"style=\"overflow:hidden\">\n\n  <header class=\"main-header\">\n    \n    <nav class=\"navbar navbar-static-top\">\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </a>\n    </nav>\n  </header>\n\n\n  <aside class=\"main-sidebar\">\n    <section class=\"sidebar\" >\n    \n      <ul class=\"sidebar-menu\" >\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        </li>\n        <br><br>\n    <li>\n       <a routerLink=\"/landingpage/contact\" routerLinkActive=\"active\"><i class=\"fa fa-address-book fa-2x\" aria-hidden=\"true\"></i></a>\n    </li>\n    <li>                       \n        <a routerLink=\"/landingpage/phone\" routerLinkActive=\"active\"><i class=\"fa fa-phone  fa-2x\" style=\"color:azure;\" aria-hidden=\"true\"></i></a>\n    </li>\n    <li>\n      <a routerLink=\"/landingpage/message\" routerLinkActive=\"active\"><i class=\"fa fa-envelope-o fa-2x\" style=\"color:azure;\" aria-hidden=\"true\"></i></a>\n    </li>\n      </ul>\n    </section>\n  </aside>   \n  <div class=\"content-wrapper\" >\n      \n       <section class=\"content-header\">\n         <router-outlet></router-outlet>\n       </section>    \n</div>\n\n\n\n    \n  </div>\n  </body>"

/***/ }),

/***/ "./src/app/landingpage/landingpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
    }
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    LandingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landingpage',
            template: __webpack_require__(/*! ./landingpage.component.html */ "./src/app/landingpage/landingpage.component.html"),
            styles: [__webpack_require__(/*! ./landingpage.component.css */ "./src/app/landingpage/landingpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*\r\n{\r\n    padding:0px;\r\n    margin:0px;\r\n}\r\n#search\r\n{\r\n    height:20px;\r\n    width:250px;\r\n    margin:0px auto;\r\n}\r\nhr{\r\n    color: black;\r\n    height:20px;\r\n}\r\n.contact\r\n{\r\n    width:300px;\r\n    height:600px;\r\n    \r\n    background: black;\r\n    color: white;\r\n}\r\n.container\r\n{\r\n    max-width:800px;\r\n}\r\n@media only screen and (max-width:500px)\r\n{\r\n    .contact\r\n    {\r\n        width:200px;\r\n    }\r\n    .heading\r\n    {\r\n        width:200px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-5 col-5\">\n        <div class=\"contact\">\n          <div class=\"row text-center\" style=\"padding:20px;\">\n            <div class=\"col-md-5 col-sm-5 col-5\">\n              <input id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n            </div>\n          </div>\n          <div class=\"row text-center\" style=\"margin:0px auto;width:100px;\">\n              <div class=\"col-md-5 col-sm-5 col-5\">\n               <h5>Messages</h5>\n              </div>\n          </div><br>\n          <hr>\n       \n          <div *ngFor=\"let AllMessage of AllMessages\">\n            <div class=\"row\" style=\"padding-left:25px\">\n    \n              <div class=\"col-md-2 col-sm-4 col-4\">\n                <img src=\"assets/img/avatar5.png\" class=\"img-circle\" width=\"50\">\n              </div>\n              <a routerLink=\"/landingpage/createmessage/{{AllMessage._id}}\">\n              <div class=\"col-md-6 col-sm-4 col-4 text-center\" >\n                <span>{{AllMessage.firstName}} {{AllMessage.lastName}}</span><br>\n                <span>{{AllMessage.mobileNumber}}</span><BR>\n              </div>\n              </a>\n    \n              <div class=\"col-md-4 col-sm-4 col-4\">\n                <span data-toggle=\"tooltip\" title=\"{{AllMessage.message.length}} New Messages\" class=\"badge bg-red\" style=\"padding:5px;\">{{AllMessage.message.length}}</span>           \n    \n              </div>\n              </div><br>\n              <hr>\n            </div>\n         \n  \n  \n        </div>\n      </div>\n  \n      <div class=\"col-md-5 col-sm-5 col-5\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(dataservice) {
        this.dataservice = dataservice;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getMessages().subscribe(function (res) {
            _this.AllMessages = res;
            for (var i = 0; i < _this.AllMessages.length; i++) {
                for (var k = 0; k < _this.AllMessages[i].message.length; k++) {
                    _this.AllMessageslength = _this.AllMessages[i].message;
                }
                console.log(_this.AllMessageslength);
            }
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/phone/call/call.component.css":
/*!***********************************************!*\
  !*** ./src/app/phone/call/call.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box\r\n{\r\nwidth:700px;\r\n\r\n\r\n}\r\n@media only screen and (max-width:1000px)\r\n{\r\n.box{\r\n    width:240px;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/phone/call/call.component.html":
/*!************************************************!*\
  !*** ./src/app/phone/call/call.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Construct the box with style you want. Here we are using box-danger -->\n<!-- Then add the class direct-chat and choose the direct-chat-* contexual class -->\n<!-- The contextual class should match the box, so we are using direct-chat-danger -->\n<div class=\"box\">\n  <div class=\"box box-primary direct-chat direct-chat-primary\" style=\"padding:50px\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Call Logs</h3>\n        <div class=\"box-tools pull-right\">          <!-- In box-tools add this button if you intend to use the contacts pane -->\n             <button class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n        </div>\n      </div>\n      <div class=\"box-body\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-4 col-4\">\n              <img src=\"assets/img/user8-128x128.jpg\" class=\"img-circle\" style=\"float:left\">\n            </div>\n            <div class=\"col-md-4 col-sm-4 col-4\">\n              <div class=\"name\" style=\"float:left\">\n                  <span style=\"font-weight:bold\">Gowtham</span><br>\n                  <span style=\"font-weight:bold\">+919567833</span>\n              </div>\n              \n            </div>\n            <br>\n         </div><hr>\n            <div class=\"calls\" style=\"padding:20px;\">\n              <div class=\"row\">\n                  <div class=\"col-md-6 col-sm-6 col-6\">\n                      <i class=\"fa fa-reply fa-2x\" aria-hidden=\"true\">Outgoing Calls</i><br>\n                      <span style=\"font-weight:bold\">Friday 11 at 2018 </span><br>\n                      <span style=\"font-weight:bold\">2min 23sec</span>\n                  </div>\n              </div>\n              <br>\n             <hr>\n             <div class=\"row\">\n                <div class=\"col-md-6 col-sm-6 col-6\">\n                    <i class=\"fa fa-share fa-2x\" aria-hidden=\"true\">Missed Calls</i><br>\n                    <span style=\"font-weight:bold\">Friday 11 at 2018 </span><br>\n                    <span style=\"font-weight:bold\">2min 23sec</span>\n                </div>\n            </div>\n             \n            </div>\n\n          \n        </div>\n      </div>\n      \n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/phone/call/call.component.ts":
/*!**********************************************!*\
  !*** ./src/app/phone/call/call.component.ts ***!
  \**********************************************/
/*! exports provided: CallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallComponent", function() { return CallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallComponent = /** @class */ (function () {
    function CallComponent() {
    }
    CallComponent.prototype.ngOnInit = function () {
    };
    CallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-call',
            template: __webpack_require__(/*! ./call.component.html */ "./src/app/phone/call/call.component.html"),
            styles: [__webpack_require__(/*! ./call.component.css */ "./src/app/phone/call/call.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallComponent);
    return CallComponent;
}());



/***/ }),

/***/ "./src/app/phone/phone.component.css":
/*!*******************************************!*\
  !*** ./src/app/phone/phone.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*\r\n{\r\n    padding:0px;\r\n    margin:0px;\r\n}\r\n#search\r\n{\r\n    height:20px;\r\n    width:250px;\r\n    margin:0px auto;\r\n}\r\nhr{\r\n    color: black;\r\n    height:20px;\r\n}\r\n.contact\r\n{\r\n    width:300px;\r\n    height:600px;\r\n    \r\n    background: black;\r\n    color: white;\r\n}\r\n.container\r\n{\r\n    max-width:800px;\r\n    padding: 0px;\r\n    margin:0px;\r\n}\r\n@media only screen and (max-width:500px)\r\n{\r\n    .contact\r\n    {\r\n        width:200px;\r\n    }\r\n    .heading\r\n    {\r\n        width:200px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/phone/phone.component.html":
/*!********************************************!*\
  !*** ./src/app/phone/phone.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5 col-sm-5 col-5\">\n        <div class=\"contact\">\n          <div class=\"row text-center\" style=\"padding:20px;\">\n            <div class=\"col-md-5 col-sm-5 col-5\">\n              <input id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n            </div>\n          </div>\n                <div class=\"row text-center\" style=\"margin:0px auto;width:100px;\">\n                    <div class=\"col-md-5 col-sm-5 col-5\">\n                         <h5>Histroy</h5>\n                    </div>\n                </div><br><hr>\n                            <div *ngFor=\"let Contact of BindContact\">\n                               <div class=\"row\" style=\"padding-left:25px\">\n  \n                                  <div class=\"col-md-4 col-sm-4 col-4\">\n                                      <img src=\"assets/img/avatar5.png\" class=\"img-circle\" width=\"50\">\n                                  </div>\n  \n                                         <div class=\"col-md-6 col-sm-4 col-4\" >\n                                             <span>{{Contact.firstName}} {{Contact.lastName}}</span><br>\n                                                  <span>{{Contact.mobileNumber}}</span><BR>\n                                                      <span>{{Contact.dateTime}}</span>\n                                         </div>\n                                                     <div class=\"col-md-2 col-sm-2 col-2\">\n                                                       <span data-toggle=\"tooltip\" title=\"Delete?\" (click)=\"delCallLog(Contact)\"><i class=\"fa fa-trash fa-2x\" aria-hidden=\"true\" style=\"color:red\"></i></span>\n                                                     </div>\n          \n  \n                              </div>\n                               <hr>\n                             </div>\n         </div>\n      </div>\n  \n      <div class=\"col-md-5 col-sm-5 col-5\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/phone/phone.component.ts":
/*!******************************************!*\
  !*** ./src/app/phone/phone.component.ts ***!
  \******************************************/
/*! exports provided: PhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneComponent", function() { return PhoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneComponent = /** @class */ (function () {
    function PhoneComponent(dataservice) {
        this.dataservice = dataservice;
        this.DelLog = {
            _id: ''
        };
    }
    PhoneComponent.prototype.ngOnInit = function () {
        this.CallLogs();
    };
    PhoneComponent.prototype.delCallLog = function (value) {
        var _this = this;
        var data = {
            _id: value._id,
        };
        this.dataservice.DelCall(data).subscribe(function (res) {
            _this.CallLogs();
            alert("confirm delete?");
        });
        console.log(data);
    };
    PhoneComponent.prototype.CallLogs = function () {
        var _this = this;
        this.dataservice.viewCalllog().subscribe(function (res) {
            _this.BindContact = res;
            console.log(res);
            for (var i = 0; i < _this.BindContact.length; i++) {
                console.log(res);
            }
        });
    };
    PhoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phone',
            template: __webpack_require__(/*! ./phone.component.html */ "./src/app/phone/phone.component.html"),
            styles: [__webpack_require__(/*! ./phone.component.css */ "./src/app/phone/phone.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PhoneComponent);
    return PhoneComponent;
}());



/***/ }),

/***/ "./src/app/viewmessage/viewmessage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/viewmessage/viewmessage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box\r\n{\r\nwidth:700px;\r\npadding:100px;\r\n}\r\n\r\n\r\n@media only screen and (max-width:700px)\r\n{\r\n.box{\r\n    width:440px;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/viewmessage/viewmessage.component.html":
/*!********************************************************!*\
  !*** ./src/app/viewmessage/viewmessage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Construct the box with style you want. Here we are using box-danger -->\n<!-- Then add the class direct-chat and choose the direct-chat-* contexual class -->\n<!-- The contextual class should match the box, so we are using direct-chat-danger -->\n<div class=\"box\">\n  <div class=\"box box-danger direct-chat direct-chat-danger\" >\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Direct Chat</h3>\n        <div class=\"box-tools pull-right\">\n          <span data-toggle=\"tooltip\" title=\"3 New Messages\" class=\"badge bg-red\">3</span>\n          <button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i></button>\n          <!-- In box-tools add this button if you intend to use the contacts pane -->\n          <button class=\"btn btn-box-tool\" data-toggle=\"tooltip\" title=\"Contacts\" data-widget=\"chat-pane-toggle\"><i class=\"fa fa-comments\"></i></button>\n          <button class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n        </div>\n      </div><!-- /.box-header -->\n      <div class=\"box-body\">\n        <!-- Conversations are loaded here -->\n        <div class=\"direct-chat-messages\">\n          <!-- Message. Default to the left -->\n          <div class=\"direct-chat-msg\">\n            <div class=\"direct-chat-info clearfix\">\n              <span class=\"direct-chat-name pull-left\">Alexander Pierce</span>\n              <span class=\"direct-chat-timestamp pull-right\">23 Jan 2:00 pm</span>\n            </div><!-- /.direct-chat-info -->\n            <img class=\"direct-chat-img\" src=\"assets/img/avatar5.png\" alt=\"message user image\"><!-- /.direct-chat-img -->\n            <div class=\"direct-chat-text\">\n              Is this template really for free? That's unbelievable!\n            </div><!-- /.direct-chat-text -->\n          </div><!-- /.direct-chat-msg -->\n    \n          <!-- Message to the right -->\n          <div class=\"direct-chat-msg right\">\n            <div class=\"direct-chat-info clearfix\">\n              <span class=\"direct-chat-name pull-right\">Sarah Bullock</span>\n              <span class=\"direct-chat-timestamp pull-left\">23 Jan 2:05 pm</span>\n            </div><!-- /.direct-chat-info -->\n            <img class=\"direct-chat-img\" src=\"assets/img/avatar5.png\" alt=\"message user image\"><!-- /.direct-chat-img -->\n            <div class=\"direct-chat-text\">\n              You better believe it!\n            </div><!-- /.direct-chat-text -->\n          </div><!-- /.direct-chat-msg -->\n        </div><!--/.direct-chat-messages-->\n    \n        <!-- Contacts are loaded here -->\n        <div class=\"direct-chat-contacts\">\n          <ul class=\"contacts-list\">\n            <li>\n              <a href=\"#\">\n                <img class=\"contacts-list-img\" src=\"assets/img/avatar5.png\" alt=\"Contact Avatar\">\n                <div class=\"contacts-list-info\">\n                  <span class=\"contacts-list-name\">\n                    Count Dracula\n                    <small class=\"contacts-list-date pull-right\">2/28/2015</small>\n                  </span>\n                  <span class=\"contacts-list-msg\">How have you been? I was...</span>\n                </div><!-- /.contacts-list-info -->\n              </a>\n            </li><!-- End Contact Item -->\n          </ul><!-- /.contatcts-list -->\n        </div><!-- /.direct-chat-pane -->\n      </div><!-- /.box-body -->\n      <div class=\"box-footer\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-danger btn-flat\">Send</button>\n          </span>\n        </div>\n      </div><!-- /.box-footer-->\n    </div><!--/.direct-chat -->\n    </div>\n"

/***/ }),

/***/ "./src/app/viewmessage/viewmessage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/viewmessage/viewmessage.component.ts ***!
  \******************************************************/
/*! exports provided: ViewmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmessageComponent", function() { return ViewmessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewmessageComponent = /** @class */ (function () {
    function ViewmessageComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ViewmessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getMessages().subscribe(function (res) {
            _this.AllMessages = res;
            console.log(res);
        });
    };
    ViewmessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewmessage',
            template: __webpack_require__(/*! ./viewmessage.component.html */ "./src/app/viewmessage/viewmessage.component.html"),
            styles: [__webpack_require__(/*! ./viewmessage.component.css */ "./src/app/viewmessage/viewmessage.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ViewmessageComponent);
    return ViewmessageComponent;
}());



/***/ }),

/***/ "./src/app/viewpage1/viewpage1.component.css":
/*!***************************************************!*\
  !*** ./src/app/viewpage1/viewpage1.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header\r\n{\r\n    color:black;\r\n    font-weight:bold;\r\n}\r\n*{\r\n    padding:0px;\r\n    \r\n}\r\n.container\r\n{\r\n    max-width:600px;\r\n    \r\n   \r\n}\r\n.input\r\n{\r\n    padding:30px;\r\n}\r\nbutton\r\n{\r\n    padding:10px;\r\n}\r\n/* .input span\r\n{\r\n    padding:15px;\r\n    margin:10px;\r\n} */\r\n.input input{\r\n    padding:10px;\r\n}\r\nul li{\r\n    float: left;\r\n    padding:30px;\r\n    list-style-type: none;\r\n}\r\n#span\r\n{\r\n    background:gray;\r\n    border-radius:20PX;\r\n}"

/***/ }),

/***/ "./src/app/viewpage1/viewpage1.component.html":
/*!****************************************************!*\
  !*** ./src/app/viewpage1/viewpage1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"addContact\">\n         <div class=\"row text-center\">\n              <div class=\"col-md-12 col-sm-12 col-12\">\n                 <h4 id=\"header\">NEW CONTACT</h4>\n             </div>\n        </div>\n          <br>\n                 <div class=\"test\">\n                      <div class=\"row\">\n                         <div class=\"col-md-12\">\n                            <div class=\"photo text-center\">\n                                <img class=\"img-circle\" src=\"assets/img/default-avatar.png\" width=\"100\">\n                             </div>\n                         </div>\n                     </div>\n                       <hr>\n                         <br>\n \n <div class=\"input\">\n    <form #personForm=\"ngForm\"(ngSubmit)=\"onSubmitnews(personForm.value)\">\n       <div class=\"row\">\n           <div class=\"col-md-6 col-sm-5 col-5\">\n               First Name:  <input type=\"text\" name=\"firstName\" [(ngModel)]=\"myData.firstName\"  class=\"form-control\" required>\n            </div>\n                <div class=\"col-md-1\"></div>\n                    <div class=\"col-md-5 col-sm-5 col-5\">\n                        Last Name:  <input type=\"text\" name=\"lastName\" [(ngModel)]=\"myData.lastName\" class=\"form-control\" required>\n                    </div>\n               </div>\n                        <div class=\"row\">\n                           <div class=\"col-md-6 col-sm-6 col-6\">\n                               Phone Number <input type=\"text\" name=\"phoneNumber\"  [(ngModel)]=\"myData.mobileNumber\" class=\"form-control\" required>\n                                   </div>\n                                      <div class=\"col-md-1\"></div><br>\n                                          <!-- <div class=\"col-md-5 col-sm-5 col-5\"><span style=\"background:gray;border-radius:20px;\"> + ADD PHONE NUMBER</span> -->\n                                       <!-- </div> -->\n                            </div>\n\n                                          <div class=\"row\">\n                                               <div class=\"col-md-6 col-sm-6 col-6\">\n                                                    Email <input name=\"email\" type=\"text\" [(ngModel)]=\"myData.email\" class=\"form-control\" required>\n                                                </div>\n                                           </div><br>\n                                                    <div class=\"row text-center\">\n                                                        <div class=\"col-md-6 col-sm-6 col-6\">\n                                                         <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"update(personForm.value)\"\n                                                          [disabled]=\"!personForm.form.valid\">UPDATE</button><span style=\"color:floralwhite\">bon</span>\n                                                          <button type=\"button\" (click)=\"Delete()\"  [disabled]=\"!personForm.form.valid\" class=\"btn btn-info btn-round\">Delete</button>\n\n                                                       </div>\n                                                    </div>\n    </form>\n     \n </div>\n \n   </div>\n </div>\n\n \n"

/***/ }),

/***/ "./src/app/viewpage1/viewpage1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/viewpage1/viewpage1.component.ts ***!
  \**************************************************/
/*! exports provided: Viewpage1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewpage1Component", function() { return Viewpage1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Viewpage1Component = /** @class */ (function () {
    function Viewpage1Component(route, router, dataservice, http) {
        this.route = route;
        this.router = router;
        this.dataservice = dataservice;
        this.http = http;
        this.myData = {
            _id: '',
            firstName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            uid: ''
        };
        this.deleteContact = {
            uid: ''
        };
    }
    Viewpage1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.allUsers = [];
        this.id = this.route.snapshot.params['_id'];
        this.dataservice.getContact().subscribe(function (res) {
            _this.allUsers = res;
            console.log(_this.allUsers);
            for (var i = 0; i < _this.allUsers.length; i++) {
                if (_this.id === _this.allUsers[i]._id) {
                    _this.myData._id = _this.allUsers[i]._id;
                    _this.myData.uid = _this.allUsers[i].uid;
                    _this.myData.firstName = _this.allUsers[i].firstName;
                    _this.myData.lastName = _this.allUsers[i].lastName;
                    _this.myData.mobileNumber = _this.allUsers[i].mobileNumber;
                    _this.myData.email = _this.allUsers[i].email;
                    _this.deleteContact.uid = _this.allUsers[i].uid;
                }
            }
            console.log("test" + _this.myData);
        });
    };
    Viewpage1Component.prototype.Delete = function () {
        var _this = this;
        this.dataservice.DelContact(this.deleteContact).subscribe(function (res) {
            console.log(res);
            alert("Delete successfull");
            _this.router.navigate(['landingpage/contact']);
        });
    };
    Viewpage1Component.prototype.update = function () {
        var _this = this;
        this.dataservice.UpdateContact(this.myData).subscribe(function (res) {
            console.log(res);
            alert("Updated successfully");
            _this.router.navigate(['landingpage/contact']);
        });
    };
    Viewpage1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewpage1',
            template: __webpack_require__(/*! ./viewpage1.component.html */ "./src/app/viewpage1/viewpage1.component.html"),
            styles: [__webpack_require__(/*! ./viewpage1.component.css */ "./src/app/viewpage1/viewpage1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], Viewpage1Component);
    return Viewpage1Component;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular 6\customerDetails\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map