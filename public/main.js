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

/***/ "./src/app/admins-main/admin-edit/admin-add/admin-add.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-add/admin-add.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucy1tYWluL2FkbWluLWVkaXQvYWRtaW4tYWRkL2FkbWluLWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-add/admin-add.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-add/admin-add.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Añadir producto</h2>\r\n\r\n  <form #newItem=\"ngForm\" (ngSubmit)=\"alta()\" novalidate>\r\n\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"subject\">Nombre</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"nombre\" [(ngModel)]=\"nombre\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"content\">Categoria</label>\r\n      <select class=\"form-control\" name=\"descripcion\" [(ngModel)]=\"categoria\" >\r\n      <option *ngFor=\"let i of categorias\">\r\n        {{i}}\r\n      </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"content\">Precio</label>\r\n      <input type=\"number\" class=\"form-control\" name=\"precio\" min=\"0\" [(ngModel)]=\"precio\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"content\">URL de imagen</label>\r\n      <input type=\"text\" class=\"form-control\" value=\"Se requiere el link de la imagen\" name=\"img\" [(ngModel)]=\"url\"\r\n        required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"content\">Descripcion</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"descripcion\" [(ngModel)]=\"descripcion\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"content\">Marca </label>\r\n      <select class=\"form-control\" name=\"marca\" [(ngModel)]=\"marca\" required>\r\n      <option *ngFor=\"let i of marcas\">\r\n        {{i}}\r\n      </option>\r\n    </select>\r\n    </div>\r\n\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"content\">Codigo de barras</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"codigo\" [(ngModel)]=\"codigo\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group col-4\">\r\n      <label for=\"content\">Existencias</label>\r\n      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"existencias\" [(ngModel)]=\"existencias\" required>\r\n    </div>\r\n\r\n    <button type=\"submit\" [disabled]=\"!newItem.valid\" class=\"btn btn-default btn-dark\">Agregar</button>\r\n  </form>\r\n\r\n</div>\r\n<p> {{newItem.value | json}}</p>"

/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-add/admin-add.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-add/admin-add.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddComponent", function() { return AdminAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_productos_main_producto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/productos-main/producto */ "./src/app/productos-main/producto.ts");
/* harmony import */ var _admins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admins.service */ "./src/app/admins-main/admins.service.ts");
/* harmony import */ var src_app_productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/productos-main/producto-detail/producto-detail.component */ "./src/app/productos-main/producto-detail/producto-detail.component.ts");





var AdminAddComponent = /** @class */ (function () {
    function AdminAddComponent(adminservice, productoDet) {
        this.adminservice = adminservice;
        this.productoDet = productoDet;
        this.marcas = this.adminservice.getMarcas();
        this.categorias = this.adminservice.getCategorias();
        this.nombre = '';
        this.precio = 0;
        this.categoria = '';
        this.descripcion = '';
        this.marca = '';
        this.codigo = '';
        this.existencias = 0;
        this.url = '';
    }
    AdminAddComponent.prototype.ngOnInit = function () {
    };
    AdminAddComponent.prototype.alta = function () {
        this.adminservice.CrearItem(new src_app_productos_main_producto__WEBPACK_IMPORTED_MODULE_2__["producto"](this.adminservice.lastId, this.nombre, this.precio, this.categoria, this.descripcion, this.marca, this.codigo, this.existencias, this.url));
    };
    AdminAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-add',
            template: __webpack_require__(/*! ./admin-add.component.html */ "./src/app/admins-main/admin-edit/admin-add/admin-add.component.html"),
            styles: [__webpack_require__(/*! ./admin-add.component.css */ "./src/app/admins-main/admin-edit/admin-add/admin-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admins_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"],
            src_app_productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductoDetailComponent"]])
    ], AdminAddComponent);
    return AdminAddComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-del/admin-del.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-del/admin-del.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucy1tYWluL2FkbWluLWVkaXQvYWRtaW4tZGVsL2FkbWluLWRlbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-del/admin-del.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-del/admin-del.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #newItem=\"ngForm\" (ngSubmit)=\"editar()\" novalidate>\r\n  <h2>Eliminar producto</h2>\r\n  <div class=\"form-group col-4\">\r\n    <label for=\"subject\">id</label>\r\n    <input type=\"number\" class=\"form-control\" name=\"id\" value=\"{{id}}\" [(ngModel)]=\"id\" min=\"0\" required>\r\n  </div>\r\n  <button type=\"submit\" [disabled]=\"!newItem.valid\" class=\"btn btn-default btn-dark\">Guardar</button>\r\n</form>"

/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-del/admin-del.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-del/admin-del.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminDelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDelComponent", function() { return AdminDelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admins.service */ "./src/app/admins-main/admins.service.ts");



var AdminDelComponent = /** @class */ (function () {
    function AdminDelComponent(adminservice) {
        this.adminservice = adminservice;
        this.idnum = this.adminservice.getIdItem();
    }
    AdminDelComponent.prototype.ngOnInit = function () {
    };
    AdminDelComponent.prototype.borrar = function () {
        this.producto = this.adminservice.getItem(this.idnum);
        this.adminservice.deleteItem(this.idnum, this.producto);
        console.log(this.adminservice.toConsole());
    };
    AdminDelComponent.prototype.showItem = function (id) {
        var p = this.adminservice.getItem(this.idnum);
    };
    AdminDelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-del',
            template: __webpack_require__(/*! ./admin-del.component.html */ "./src/app/admins-main/admin-edit/admin-del/admin-del.component.html"),
            styles: [__webpack_require__(/*! ./admin-del.component.css */ "./src/app/admins-main/admin-edit/admin-del/admin-del.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"]])
    ], AdminDelComponent);
    return AdminDelComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucy1tYWluL2FkbWluLWVkaXQvYWRtaW4tZWRpdC1pdGVtL2FkbWluLWVkaXQtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <h2>Editar producto</h2>\r\n  \r\n    <form #newItem=\"ngForm\" (ngSubmit)=\"editar()\" novalidate>\r\n  \r\n      <div class=\"form-group col-4\">\r\n        <label for=\"subject\">id</label>\r\n        <input type=\"number\" class=\"form-control\" name=\"id\" \r\n        value=\"{{id}}\"  [(ngModel)]=\"id\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group col-4\">\r\n        <label for=\"subject\">Nombre</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"nombre\" \r\n        value=\"{{nombre}}\"  [(ngModel)]=\"nombre\" required>\r\n      </div>\r\n  \r\n      <div class=\"form-group col-4\">\r\n        <label for=\"content\">Categoria</label>\r\n        <select class=\"form-control\" name=\"descripcion\" [(ngModel)]=\"categoria\" value=\"{{productosh.categoria}}\">\r\n        <option *ngFor=\"let i of categorias\">\r\n          {{i}}\r\n        </option>\r\n        </select>\r\n      </div>\r\n  \r\n      <div class=\"form-group col-4\">\r\n        <label for=\"content\">Precio</label>\r\n        <input type=\"number\" class=\"form-control\" name=\"precio\" min=\"0\" \r\n        value=\"{{productosh.precio}}\" [(ngModel)]=\"precio\" required>\r\n      </div>\r\n  \r\n      <div class=\"form-group col-4\">\r\n        <label for=\"content\">URL de imagen</label>\r\n        <input type=\"url\" class=\"form-control\" value=\"{{productosh.url}}\" \r\n        name=\"img\" [(ngModel)]=\"url\" required>\r\n      </div>\r\n  \r\n      <div class=\"form-group col-4\">\r\n        <label for=\"content\">Descripcion</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"descripcion\" \r\n        value=\"{{productosh.descripcion}}\" [(ngModel)]=\"descripcion\" required>\r\n      </div>\r\n  \r\n      <div class=\"form-group col-4\">\r\n        <label for=\"content\">Marca </label>\r\n        <select class=\"form-control\" name=\"marca\" [(ngModel)]=\"marca\" value=\"{{productosh.marca}}\" required>\r\n        <option *ngFor=\"let i of marcas\">\r\n          {{i}}\r\n        </option>\r\n      </select>\r\n      </div>\r\n  \r\n      <div class=\"form-group col-4\">\r\n        <label for=\"content\">Codigo de barras</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"codigo\" value=\"{{productosh.codigo}}\" \r\n        [(ngModel)]=\"codigo\" required>\r\n      </div>\r\n  \r\n      <div class=\"form-group col-4\">\r\n        <label for=\"content\">Existencias</label>\r\n        <input type=\"number\" class=\"form-control\" min=\"0\" name=\"existencias\" value=\"{{productosh.existencias}}\"\r\n        [(ngModel)]=\"existencias\" required>\r\n      </div>\r\n  \r\n      <button type=\"submit\" [disabled]=\"!newItem.valid\" class=\"btn btn-default btn-dark\">Guardar</button>\r\n    </form>\r\n  \r\n  </div>\r\n  <p> {{newItem.value | json}}</p>"

/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminEditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditItemComponent", function() { return AdminEditItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_productos_main_producto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/productos-main/producto */ "./src/app/productos-main/producto.ts");
/* harmony import */ var _admins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admins.service */ "./src/app/admins-main/admins.service.ts");




var AdminEditItemComponent = /** @class */ (function () {
    function AdminEditItemComponent(adminservice) {
        this.adminservice = adminservice;
        this.marcas = this.adminservice.getMarcas();
        this.categorias = this.adminservice.getCategorias();
        // valores de el producto a seleccionar
        this.productosh = this.adminservice.getItem(this.adminservice.getIdItem());
        this.id = 0;
        this.nombre = '';
        this.precio = 0;
        this.categoria = '';
        this.descripcion = '';
        this.marca = '';
        this.codigo = '';
        this.existencias = 0;
        this.url = '';
    }
    AdminEditItemComponent.prototype.ngOnInit = function () {
    };
    AdminEditItemComponent.prototype.editar = function () {
        var p = new src_app_productos_main_producto__WEBPACK_IMPORTED_MODULE_2__["producto"](this.id, this.nombre, this.precio, this.categoria, this.descripcion, this.marca, this.codigo, this.existencias, this.url);
        this.adminservice.actualizarItem(p);
    };
    AdminEditItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit-item',
            template: __webpack_require__(/*! ./admin-edit-item.component.html */ "./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-item.component.css */ "./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admins_service__WEBPACK_IMPORTED_MODULE_3__["AdminsService"]])
    ], AdminEditItemComponent);
    return AdminEditItemComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    justify-self: center;\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5zLW1haW4vYWRtaW4tZWRpdC9hZG1pbi1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5zLW1haW4vYWRtaW4tZWRpdC9hZG1pbi1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admins-main/admin-edit/admin-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admins-main/admin-edit/admin-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditComponent", function() { return AdminEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admins.service */ "./src/app/admins-main/admins.service.ts");



var AdminEditComponent = /** @class */ (function () {
    // producto: Producto;
    // marcas = this.adminservice.getMarcas();
    // categorias = this.adminservice.getCategorias();
    // nombre = '';
    // precio = 0;
    // categoria = '';
    // descripcion = '';
    // marca = '';
    // codigo = '';
    // existencias = 0;
    // url = '';
    // myForm: FormGroup;
    function AdminEditComponent(adminservice
    // public fb: FormBuilder,
    ) {
        this.adminservice = adminservice;
        // this.myForm = this.fb.group({
        //   name: ['', [Validators.required]],
        //   company: ['', [Validators.required]],
        //   email: ['', [Validators.required]],
        //   age: ['', [Validators.required]],
        //   url: ['', [Validators.required]],
        //   password: ['', [Validators.required]],
        // });
    }
    AdminEditComponent.prototype.ngOnInit = function () {
    };
    AdminEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-edit',
            template: __webpack_require__(/*! ./admin-edit.component.html */ "./src/app/admins-main/admin-edit/admin-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit.component.css */ "./src/app/admins-main/admin-edit/admin-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"]
            // public fb: FormBuilder,
        ])
    ], AdminEditComponent);
    return AdminEditComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admin-list/admin-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admins-main/admin-list/admin-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucy1tYWluL2FkbWluLWxpc3QvYWRtaW4tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admins-main/admin-list/admin-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admins-main/admin-list/admin-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"containerbutton\">\r\n  <button type=\"button\" class=\"btn btn-secondary btn-lg col-5 \" routerLink='/admin/inventario'>Inventario</button> <br> <br>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-lg col-5\" routerLink='/admin/reportevtas' >Reporte de ventas</button> <br> <br>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-lg col-5\" routerLink='/admin/add'>Alta de productos</button> <br> <br>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-lg col-5\" routerLink='/admin/edit'>Edicion de productos</button> <br> <br>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-lg col-5\" routerLink='/admin/delete'>Eliminacion de productos</button> <br> <br>\r\n</div>"

/***/ }),

/***/ "./src/app/admins-main/admin-list/admin-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admins-main/admin-list/admin-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListComponent", function() { return AdminListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_users_main_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/users-main/users.service */ "./src/app/users-main/users.service.ts");




var AdminListComponent = /** @class */ (function () {
    function AdminListComponent(userser) {
        this.userser = userser;
        this.cambiaDato = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lastId = 1;
    }
    AdminListComponent.prototype.ngOnInit = function () {
    };
    AdminListComponent.prototype.getUsers = function () {
        // retornamos el arreglo de los usuarios en existencia
        return this.userser.users.slice();
    };
    AdminListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-list',
            template: __webpack_require__(/*! ./admin-list.component.html */ "./src/app/admins-main/admin-list/admin-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-list.component.css */ "./src/app/admins-main/admin-list/admin-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_users_main_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], AdminListComponent);
    return AdminListComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admin-list/admin/admin.component.css":
/*!******************************************************************!*\
  !*** ./src/app/admins-main/admin-list/admin/admin.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucy1tYWluL2FkbWluLWxpc3QvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admins-main/admin-list/admin/admin.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admins-main/admin-list/admin/admin.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admins-main/admin-list/admin/admin.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admins-main/admin-list/admin/admin.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admins-main/admin-list/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admins-main/admin-list/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admin-list/inventario/inventario.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admins-main/admin-list/inventario/inventario.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#table{\r\n    margin: auto;  \r\n  }\r\n  #titulo{\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5zLW1haW4vYWRtaW4tbGlzdC9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5zLW1haW4vYWRtaW4tbGlzdC9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YWJsZXtcclxuICAgIG1hcmdpbjogYXV0bzsgIFxyXG4gIH1cclxuICAjdGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/admins-main/admin-list/inventario/inventario.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admins-main/admin-list/inventario/inventario.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"titulo\">\r\n    Inventario\r\n  </h1>\r\n  <table class=\"table table-borderless table-dark table-hover table-responsive{-sm|-md|-lg|-xl}\r\n   col-10\" id=\"table\">\r\n    <thead class=\"bg-secondary \">\r\n      <tr>\r\n        <th scope=\"col\">Producto</th>\r\n        <th scope=\"col\">Descripcion</th>\r\n        <th scope=\"col\">Existencia</th>\r\n        <th scope=\"col\">Precio</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngFor=\"let item of this.productoService.productos\">\r\n      <tr>\r\n        <th scope=\"row\">{{item.nombre}}</th>\r\n        <td>{{item.descripcion}}</td>\r\n        <td>{{item.existencia}}</td>\r\n        <td>$ {{item.precio}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./src/app/admins-main/admin-list/inventario/inventario.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admins-main/admin-list/inventario/inventario.component.ts ***!
  \***************************************************************************/
/*! exports provided: InventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioComponent", function() { return InventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admins.service */ "./src/app/admins-main/admins.service.ts");
/* harmony import */ var src_app_productos_main_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/productos-main/productos.service */ "./src/app/productos-main/productos.service.ts");




var InventarioComponent = /** @class */ (function () {
    function InventarioComponent(adminservice, productoService) {
        this.adminservice = adminservice;
        this.productoService = productoService;
    }
    InventarioComponent.prototype.ngOnInit = function () {
    };
    InventarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventario',
            template: __webpack_require__(/*! ./inventario.component.html */ "./src/app/admins-main/admin-list/inventario/inventario.component.html"),
            styles: [__webpack_require__(/*! ./inventario.component.css */ "./src/app/admins-main/admin-list/inventario/inventario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"], src_app_productos_main_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"]])
    ], InventarioComponent);
    return InventarioComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#table{\r\n  margin: auto;  \r\n}\r\n#titulo{\r\n  text-align: center;\r\n}\r\nul{\r\n  list-style: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5zLW1haW4vYWRtaW4tbGlzdC9yZXBvcnRlLXZlbnRhcy9yZXBvcnRlLXZlbnRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucy1tYWluL2FkbWluLWxpc3QvcmVwb3J0ZS12ZW50YXMvcmVwb3J0ZS12ZW50YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YWJsZXtcclxuICBtYXJnaW46IGF1dG87ICBcclxufVxyXG4jdGl0dWxve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG51bHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"titulo\">\r\n  Reporte de ventas\r\n</h1>\r\n<table class=\"table table-borderless table-dark table-hover table-responsive{-sm|-md|-lg|-xl}\r\n col-10\" id=\"table\">\r\n  <thead class=\"bg-secondary \">\r\n    <tr>\r\n      <th scope=\"col\"></th>\r\n      <th scope=\"col\">Usuario</th>\r\n      <th scope=\"col\">Productos</th>\r\n      <th scope=\"col\">Total</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngFor=\"let item of ArrayVtas\">\r\n    <tr>\r\n      <th scope=\"row\"></th>\r\n      <td>{{item.nombre}}</td>\r\n      <td>\r\n        <ul *ngFor=\"let i of item.productos, let x = index\">\r\n          <li>{{x+1}}- Producto: {{i}}  Cantidad: {{item.cantidad[x]}}</li> \r\n        </ul>\r\n      </td>\r\n      <td>$ {{item.total}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ReporteVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteVentasComponent", function() { return ReporteVentasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admins.service */ "./src/app/admins-main/admins.service.ts");



var ReporteVentasComponent = /** @class */ (function () {
    function ReporteVentasComponent(adminservice) {
        this.adminservice = adminservice;
        this.ArrayVtas = this.adminservice.vtas;
    }
    ReporteVentasComponent.prototype.ngOnInit = function () {
    };
    ReporteVentasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporte-ventas',
            template: __webpack_require__(/*! ./reporte-ventas.component.html */ "./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.html"),
            styles: [__webpack_require__(/*! ./reporte-ventas.component.css */ "./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"]])
    ], ReporteVentasComponent);
    return ReporteVentasComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admins-main.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admins-main/admins-main.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucy1tYWluL2FkbWlucy1tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admins-main/admins-main.component.html":
/*!********************************************************!*\
  !*** ./src/app/admins-main/admins-main.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admins-main works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admins-main/admins-main.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admins-main/admins-main.component.ts ***!
  \******************************************************/
/*! exports provided: AdminsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsMainComponent", function() { return AdminsMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminsMainComponent = /** @class */ (function () {
    function AdminsMainComponent() {
    }
    AdminsMainComponent.prototype.ngOnInit = function () {
    };
    AdminsMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admins-main',
            template: __webpack_require__(/*! ./admins-main.component.html */ "./src/app/admins-main/admins-main.component.html"),
            styles: [__webpack_require__(/*! ./admins-main.component.css */ "./src/app/admins-main/admins-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminsMainComponent);
    return AdminsMainComponent;
}());



/***/ }),

/***/ "./src/app/admins-main/admins.service.ts":
/*!***********************************************!*\
  !*** ./src/app/admins-main/admins.service.ts ***!
  \***********************************************/
/*! exports provided: AdminsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsService", function() { return AdminsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _productos_main_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productos-main/productos.service */ "./src/app/productos-main/productos.service.ts");
/* harmony import */ var _productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productos-main/producto-detail/producto-detail.component */ "./src/app/productos-main/producto-detail/producto-detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AdminsService = /** @class */ (function () {
    function AdminsService(prodservice, prodDetail, http) {
        this.prodservice = prodservice;
        this.prodDetail = prodDetail;
        this.http = http;
        // id para los pridutos
        this.local = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.productos = this.prodservice.productos;
        this.nameproducts = [];
        this.lastId = this.productos.length + 1;
        // Arreglo de las Ventas
        this.vtas = [];
    }
    AdminsService.prototype.AvisoOperacion = function (estatus) {
        if (estatus === true) {
            alert('operacion exitosa');
        }
        else {
            alert('Operacion fallida');
        }
    };
    // devuelve el item
    AdminsService.prototype.getItem = function (id) {
        // obtener el item con el id correspondiente
        // retornar el item
        var pos = this.productos.findIndex(function (al) { return al.id === id; });
        return Object.assign({}, this.productos[pos]);
    };
    // elimina un elemento
    // tslint:disable-next-line: no-shadowed-variable
    AdminsService.prototype.deleteItem = function (id, producto) {
        if (id <= 0 || id > this.productos.length) {
            return alert('Error id invalido');
        }
        var op = confirm('¿seguro que quiere elimar este elemnto?');
        var body = {
            id: producto.id,
        };
        // if (op === true) {
        // this.http.delete('http://127.0.0.1:3003/api/producto/:id', body)
        //   .subscribe((data: producto) => {
        //     console.log(data);
        //   }, (err) => {
        //     console.log(err);
        //   });
        // }
        return this.AvisoOperacion(op);
    };
    // crea un nuevo producto
    // tslint:disable-next-line: no-shadowed-variable
    AdminsService.prototype.CrearItem = function (producto) {
        var body = {
            id: this.lastId,
            nombre: producto.nombre,
            precio: producto.precio,
            categoria: producto.categoria,
            descripcion: producto.descripcion,
            marca: producto.marca,
            codigo: producto.codigo,
            existencia: producto.existencia,
            url: producto.url
        };
        console.log(body);
        this.http.post(this.local + '/productos', body)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.prodservice.productos.push(producto);
        this.lastId++;
        // this.notificarCambios();
        this.AvisoOperacion(true);
    };
    AdminsService.prototype.generarReporte = function () {
        // generacion de reporte
    };
    // edita un producto
    // tslint:disable-next-line: no-shadowed-variable
    AdminsService.prototype.actualizarItem = function (producto) {
        var body = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            categoria: producto.categoria,
            descripcion: producto.descripcion,
            marca: producto.marca,
            codigo: producto.codigo,
            existencia: producto.existencia,
            url: producto.url
        };
        console.log(body);
        this.http.patch(this.local + '/productos', body)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.prodservice.productos.push(producto);
        // this.notificarCambios();
        this.AvisoOperacion(true);
    };
    AdminsService.prototype.toConsole = function () {
        console.log(this.getProductos());
    };
    // devuelve el arreglo de productos
    AdminsService.prototype.getProductos = function () {
        return this.productos.slice();
    };
    // devuelve el arreglo de las marcas
    AdminsService.prototype.getMarcas = function () {
        return this.prodservice.marcas.slice();
    };
    // devuelve el arreglo de las categorias
    AdminsService.prototype.getCategorias = function () {
        return this.prodservice.categorias.slice();
    };
    // devuelve el arreglo de los nombres de los productos
    AdminsService.prototype.getProductosString = function () {
        var _this = this;
        this.prodservice.productos.forEach(function (element) {
            _this.nameproducts.push(element.nombre);
        });
        return this.nameproducts;
    };
    // crea una nueva venta
    AdminsService.prototype.crearVenta = function (V) {
        var _this = this;
        // this.vtas.push(V);
        // // this.notificarCambiosVtas();
        // this.AvisoOperacion(true);
        var f = new Date();
        var body = {
            carrito: V.nombre,
            total: V.total,
            estado: false,
            date: f
        };
        console.log(body);
        this.http.post(this.local + '/ventas', body)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
            _this.AvisoOperacion(false);
        });
        this.vtas.push(V);
    };
    // Regresa el id de el producto detalle en cuestion
    AdminsService.prototype.getIdItem = function () {
        return this.prodDetail.id;
    };
    AdminsService.prototype.borradopermante = function (id) {
        var pos = this.prodservice.productos.findIndex(function (al) { return al.id === id; });
        this.prodservice.productos.splice(pos, 1);
    };
    AdminsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_productos_main_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"],
            _productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductoDetailComponent"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AdminsService);
    return AdminsService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_log_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/log/log.component */ "./src/app/login/log/log.component.ts");
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/register/register.component */ "./src/app/login/register/register.component.ts");
/* harmony import */ var _users_main_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-main/user-list/user-list.component */ "./src/app/users-main/user-list/user-list.component.ts");
/* harmony import */ var _users_main_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-main/user-edit/user-edit.component */ "./src/app/users-main/user-edit/user-edit.component.ts");
/* harmony import */ var _admins_main_admin_edit_admin_add_admin_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admins-main/admin-edit/admin-add/admin-add.component */ "./src/app/admins-main/admin-edit/admin-add/admin-add.component.ts");
/* harmony import */ var _admins_main_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admins-main/admin-list/admin-list.component */ "./src/app/admins-main/admin-list/admin-list.component.ts");
/* harmony import */ var _admins_main_admin_edit_admin_del_admin_del_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admins-main/admin-edit/admin-del/admin-del.component */ "./src/app/admins-main/admin-edit/admin-del/admin-del.component.ts");
/* harmony import */ var _admins_main_admin_edit_admin_edit_item_admin_edit_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admins-main/admin-edit/admin-edit-item/admin-edit-item.component */ "./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.ts");
/* harmony import */ var _admins_main_admin_list_reporte_ventas_reporte_ventas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admins-main/admin-list/reporte-ventas/reporte-ventas.component */ "./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.ts");
/* harmony import */ var _admins_main_admin_list_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admins-main/admin-list/inventario/inventario.component */ "./src/app/admins-main/admin-list/inventario/inventario.component.ts");
/* harmony import */ var _productos_main_productos_list_productos_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productos-main/productos-list/productos-list.component */ "./src/app/productos-main/productos-list/productos-list.component.ts");
/* harmony import */ var _productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./productos-main/producto-detail/producto-detail.component */ "./src/app/productos-main/producto-detail/producto-detail.component.ts");
/* harmony import */ var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./carrito/carrito.component */ "./src/app/carrito/carrito.component.ts");

















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _login_log_log_component__WEBPACK_IMPORTED_MODULE_4__["LogComponent"] },
    { path: 'register', component: _login_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'edit', component: _users_main_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"] },
    { path: 'showUsers', component: _users_main_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"] },
    { path: 'admin/add', component: _admins_main_admin_edit_admin_add_admin_add_component__WEBPACK_IMPORTED_MODULE_8__["AdminAddComponent"] },
    { path: 'admin/herramientas', component: _admins_main_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_9__["AdminListComponent"] },
    { path: 'admin/delete', component: _admins_main_admin_edit_admin_del_admin_del_component__WEBPACK_IMPORTED_MODULE_10__["AdminDelComponent"] },
    { path: 'admin/edit', component: _admins_main_admin_edit_admin_edit_item_admin_edit_item_component__WEBPACK_IMPORTED_MODULE_11__["AdminEditItemComponent"] },
    { path: 'admin/reportevtas', component: _admins_main_admin_list_reporte_ventas_reporte_ventas_component__WEBPACK_IMPORTED_MODULE_12__["ReporteVentasComponent"] },
    { path: 'admin/inventario', component: _admins_main_admin_list_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_13__["InventarioComponent"] },
    { path: 'products', component: _productos_main_productos_list_productos_list_component__WEBPACK_IMPORTED_MODULE_14__["ProductosListComponent"] },
    { path: 'products/:id', component: _productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProductoDetailComponent"] },
    { path: 'carrito', component: _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_16__["CarritoComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: rgb(233, 233, 233);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'proyectoAngular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_log_log_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/log/log.component */ "./src/app/login/log/log.component.ts");
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/register/register.component */ "./src/app/login/register/register.component.ts");
/* harmony import */ var _users_main_users_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users-main/users-main.component */ "./src/app/users-main/users-main.component.ts");
/* harmony import */ var _users_main_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users-main/user-edit/user-edit.component */ "./src/app/users-main/user-edit/user-edit.component.ts");
/* harmony import */ var _users_main_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users-main/user-list/user-list.component */ "./src/app/users-main/user-list/user-list.component.ts");
/* harmony import */ var _users_main_user_list_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users-main/user-list/user/user.component */ "./src/app/users-main/user-list/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admins_main_admins_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admins-main/admins-main.component */ "./src/app/admins-main/admins-main.component.ts");
/* harmony import */ var _admins_main_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admins-main/admin-edit/admin-edit.component */ "./src/app/admins-main/admin-edit/admin-edit.component.ts");
/* harmony import */ var _admins_main_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admins-main/admin-list/admin-list.component */ "./src/app/admins-main/admin-list/admin-list.component.ts");
/* harmony import */ var _admins_main_admin_list_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admins-main/admin-list/admin/admin.component */ "./src/app/admins-main/admin-list/admin/admin.component.ts");
/* harmony import */ var _productos_main_productos_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./productos-main/productos-main.component */ "./src/app/productos-main/productos-main.component.ts");
/* harmony import */ var _productos_main_productos_list_productos_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./productos-main/productos-list/productos-list.component */ "./src/app/productos-main/productos-list/productos-list.component.ts");
/* harmony import */ var _productos_main_productos_edit_productos_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./productos-main/productos-edit/productos-edit.component */ "./src/app/productos-main/productos-edit/productos-edit.component.ts");
/* harmony import */ var _productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./productos-main/producto-detail/producto-detail.component */ "./src/app/productos-main/producto-detail/producto-detail.component.ts");
/* harmony import */ var _productos_main_productos_list_producto_producto_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./productos-main/productos-list/producto/producto.component */ "./src/app/productos-main/productos-list/producto/producto.component.ts");
/* harmony import */ var _admins_main_admin_edit_admin_add_admin_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admins-main/admin-edit/admin-add/admin-add.component */ "./src/app/admins-main/admin-edit/admin-add/admin-add.component.ts");
/* harmony import */ var _admins_main_admin_edit_admin_del_admin_del_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admins-main/admin-edit/admin-del/admin-del.component */ "./src/app/admins-main/admin-edit/admin-del/admin-del.component.ts");
/* harmony import */ var _admins_main_admin_edit_admin_edit_item_admin_edit_item_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admins-main/admin-edit/admin-edit-item/admin-edit-item.component */ "./src/app/admins-main/admin-edit/admin-edit-item/admin-edit-item.component.ts");
/* harmony import */ var _admins_main_admin_list_reporte_ventas_reporte_ventas_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admins-main/admin-list/reporte-ventas/reporte-ventas.component */ "./src/app/admins-main/admin-list/reporte-ventas/reporte-ventas.component.ts");
/* harmony import */ var _admins_main_admin_list_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admins-main/admin-list/inventario/inventario.component */ "./src/app/admins-main/admin-list/inventario/inventario.component.ts");
/* harmony import */ var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./carrito/carrito.component */ "./src/app/carrito/carrito.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _productos_main_productos_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./productos-main/productos.service */ "./src/app/productos-main/productos.service.ts");
/* harmony import */ var _venta_venta_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./venta/venta.component */ "./src/app/venta/venta.component.ts");

































// import { HttpModule} from '@angular/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _login_log_log_component__WEBPACK_IMPORTED_MODULE_8__["LogComponent"],
                _login_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _users_main_users_main_component__WEBPACK_IMPORTED_MODULE_10__["UsersMainComponent"],
                _users_main_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserEditComponent"],
                _users_main_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"],
                _users_main_user_list_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _admins_main_admins_main_component__WEBPACK_IMPORTED_MODULE_15__["AdminsMainComponent"],
                _admins_main_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_16__["AdminEditComponent"],
                _admins_main_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_17__["AdminListComponent"],
                _admins_main_admin_list_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                _admins_main_admin_edit_admin_add_admin_add_component__WEBPACK_IMPORTED_MODULE_24__["AdminAddComponent"],
                _admins_main_admin_edit_admin_del_admin_del_component__WEBPACK_IMPORTED_MODULE_25__["AdminDelComponent"],
                _admins_main_admin_edit_admin_edit_item_admin_edit_item_component__WEBPACK_IMPORTED_MODULE_26__["AdminEditItemComponent"],
                _admins_main_admin_list_reporte_ventas_reporte_ventas_component__WEBPACK_IMPORTED_MODULE_27__["ReporteVentasComponent"],
                _admins_main_admin_list_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_28__["InventarioComponent"],
                _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_29__["CarritoComponent"],
                _productos_main_productos_main_component__WEBPACK_IMPORTED_MODULE_19__["ProductosMainComponent"],
                _productos_main_productos_list_productos_list_component__WEBPACK_IMPORTED_MODULE_20__["ProductosListComponent"],
                _productos_main_productos_edit_productos_edit_component__WEBPACK_IMPORTED_MODULE_21__["ProductosEditComponent"],
                _productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_22__["ProductoDetailComponent"],
                _productos_main_productos_list_producto_producto_component__WEBPACK_IMPORTED_MODULE_23__["ProductoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            ],
            providers: [_productos_main_producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_22__["ProductoDetailComponent"], _productos_main_productos_service__WEBPACK_IMPORTED_MODULE_31__["ProductosService"], _venta_venta_component__WEBPACK_IMPORTED_MODULE_32__["VentaComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carrito/carrito.component.css":
/*!***********************************************!*\
  !*** ./src/app/carrito/carrito.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(156, 238, 238);\r\n    padding-bottom: 70px;\r\n}\r\n.cart-page-container {\r\n    max-width: 1140px;\r\n    text-align: center;\r\n    padding: 0 30px;\r\n    margin: auto;\r\n}\r\n.cart-page-header h1 {\r\n    font-size:50px;\r\n    margin: 80px 0;\r\n}\r\n.cart-page-content {\r\n    max-width:940px;\r\n    margin:30px 70px;\r\n    background-color: white;\r\n    padding:60px;\r\n}\r\n.cart-item-cell {\r\n    width: 100%;\r\n}\r\n.cart-total,\r\n.cart-item-row {\r\n    border-bottom: 1px solid #e4e4e4;\r\n}\r\n.cart-item-header .cart-item-cell:first-of-type {\r\n    text-align: left;\r\n}\r\n.cart-item-header .cart-item-cell {\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    letter-spacing: .15em;\r\n    color: #9f9f9f;\r\n    text-align: right;\r\n}\r\n.cart-item-thumbnail {\r\n    float: left;\r\n    width: 120px;\r\n    height: 90px;\r\n    margin-right: 15px;\r\n    vertical-align: middle;\r\n    background-position: 50% 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.cart-item-info {\r\n    float: left;\r\n}\r\n.cart-item-brand {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    text-align: left;\r\n    letter-spacing: .05em;\r\n    color: #9f9f9f;\r\n}\r\n.cart-item-title {\r\n    color: #1d1d20;\r\n    max-width: 100%;\r\n    text-transform: uppercase;\r\n    letter-spacing: .1em;\r\n    text-align: left;\r\n}\r\n.item-price {\r\n    color: #9f9f9f;\r\n    font-size:16px;\r\n}\r\n.item-remove {\r\n    font-size: 30px;\r\n    color:#9f9f9f;\r\n    cursor:pointer;\r\n}\r\n.item-remove:hover {\r\n    color:black;\r\n}\r\n.cart-total {\r\n    text-transform: uppercase;\r\n    color:#9f9f9f;\r\n    letter-spacing: 2px;\r\n    margin:0;\r\n}\r\n.cart-total-row {\r\n    line-height: 30px;\r\n}\r\n.cart-total-label {\r\n    text-align: left;\r\n}\r\n.cart-total-value {\r\n    text-align: right;\r\n}\r\n.cart-total-price {\r\n    color:black\r\n}\r\n.cart-buttons {\r\n    padding:20px 0;\r\n}\r\n.continue-shopping a {\r\n    text-transform: uppercase;\r\n    color: black;\r\n    float: left;\r\n}\r\n.checkout-button {\r\n    float: right;\r\n    margin-bottom: 20px;\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .cart-item-row {\r\n        display: table;\r\n        width: 100%;\r\n        border-collapse: separate;\r\n        border-spacing: 0 30px;\r\n        box-sizing: border-box;\r\n        table-layout: fixed;\r\n    }\r\n    .cart-item-product {\r\n        width: 320%;\r\n        text-align: left;\r\n    }\r\n    .cart-item-cell {\r\n        display: table-cell;\r\n        vertical-align: top;\r\n        text-align: right;\r\n    }\r\n}\r\n@media screen and (max-width: 820px) {\r\n    .cart-page-content {\r\n        margin:0;\r\n    }\r\n    .cart-page-header h1 {\r\n        margin: 30px 0;\r\n    }\r\n    .cart-item-header {\r\n        display: none;\r\n    }\r\n    .cart-item-product {\r\n        width: 100%;\r\n        float: left;\r\n        margin-left: 0;\r\n        padding-bottom: 15px;\r\n    }\r\n    .cart-item-quantity {\r\n        width: 80%;\r\n        float: left;\r\n        padding-bottom: 15px;\r\n        text-align: left;\r\n    }\r\n    .cart-item-total,\r\n    .cart-item-action {\r\n        text-align: right;\r\n    }\r\n    .cart-total-label {\r\n        float: left;\r\n    }\r\n    .continue-shopping a {\r\n        float: none;\r\n    }\r\n    .checkout-button {\r\n        float: none;\r\n        margin:20px 0 0 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycml0by9jYXJyaXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOztJQUVJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7SUFDckI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztRQUNkLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7O1FBRUksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2Fycml0by9jYXJyaXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NiwgMjM4LCAyMzgpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbn1cclxuLmNhcnQtcGFnZS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNhcnQtcGFnZS1oZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOjUwcHg7XHJcbiAgICBtYXJnaW46IDgwcHggMDtcclxufVxyXG4uY2FydC1wYWdlLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOjk0MHB4O1xyXG4gICAgbWFyZ2luOjMwcHggNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzo2MHB4O1xyXG59XHJcbi5jYXJ0LWl0ZW0tY2VsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FydC10b3RhbCxcclxuLmNhcnQtaXRlbS1yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XHJcbn1cclxuLmNhcnQtaXRlbS1oZWFkZXIgLmNhcnQtaXRlbS1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY2FydC1pdGVtLWhlYWRlciAuY2FydC1pdGVtLWNlbGwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMTVlbTtcclxuICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmNhcnQtaXRlbS10aHVtYm5haWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jYXJ0LWl0ZW0taW5mbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2FydC1pdGVtLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxufVxyXG4uY2FydC1pdGVtLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMWQxZDIwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaXRlbS1wcmljZSB7XHJcbiAgICBjb2xvcjogIzlmOWY5ZjtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59XHJcbi5pdGVtLXJlbW92ZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjojOWY5ZjlmO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLml0ZW0tcmVtb3ZlOmhvdmVyIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uY2FydC10b3RhbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IzlmOWY5ZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG4uY2FydC10b3RhbC1yb3cge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmNhcnQtdG90YWwtbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY2FydC10b3RhbC12YWx1ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2FydC10b3RhbC1wcmljZSB7XHJcbiAgICBjb2xvcjpibGFja1xyXG59XHJcblxyXG4uY2FydC1idXR0b25zIHtcclxuICAgIHBhZGRpbmc6MjBweCAwO1xyXG59XHJcbi5jb250aW51ZS1zaG9wcGluZyBhIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hlY2tvdXQtYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY2FydC1pdGVtLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMCAzMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIH1cclxuICAgIC5jYXJ0LWl0ZW0tcHJvZHVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDMyMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5jYXJ0LWl0ZW0tY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAuY2FydC1wYWdlLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG4gICAgLmNhcnQtcGFnZS1oZWFkZXIgaDEge1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgfVxyXG4gICAgLmNhcnQtaXRlbS1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FydC1pdGVtLXByb2R1Y3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcnQtaXRlbS1xdWFudGl0eSB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNhcnQtaXRlbS10b3RhbCxcclxuICAgIC5jYXJ0LWl0ZW0tYWN0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5jYXJ0LXRvdGFsLWxhYmVsIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5jb250aW51ZS1zaG9wcGluZyBhIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5jaGVja291dC1idXR0b24ge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbjoyMHB4IDAgMCAwO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/carrito/carrito.component.html":
/*!************************************************!*\
  !*** ./src/app/carrito/carrito.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"cart-page-container\">\r\n  <div class=\"cart-page-header\">\r\n      <h1>Carrito de compras</h1>\r\n  </div>\r\n  <div class=\"cart-page-content\" *ngIf=\"!emptyCar\">\r\n    <!-- *ngIf=\"cartList.length > 0\" -->\r\n      <div class=\"cart-item-header cart-item-row\">\r\n          <div class=\"cart-item-cell cart-item-product\"><span>Producto</span></div>\r\n          <div class=\"cart-item-cell cart-item-quantity\"><span>Cantidad</span></div>\r\n          <div class=\"cart-item-cell cart-item-total\"><span>Total</span></div>\r\n          <div class=\"cart-item-cell cart-item-action\"><span>Eliminar</span></div>\r\n      </div>\r\n      <div class=\"cart-item-row\" *ngFor=\"let item of carrito; let i = index\">\r\n        <!-- *ngFor=\"let cart of cartList;let i = index\" -->\r\n          <div class=\"cart-item-cell cart-item-product\">\r\n              <div class=\"cart-item-thumbnail\" [ngStyle]=\"{'background-image': 'url(this.carrito[i].url)'}\" >\r\n                \r\n              </div>\r\n              <div class=\"cart-item-info\">\r\n                  <div class=\"cart-item-brand\">{{item.marca}}</div>\r\n                  <div class=\"cart-item-title\">{{item.nombre}}</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"cart-item-cell cart-item-quantity\">\r\n              {{this.cantidad[i]}}\r\n          </div>\r\n          <div class=\"cart-item-cell cart-item-total\">\r\n              <div class=\"item-price\">\r\n                  ${{item.precio}}.00\r\n              </div>\r\n          </div>\r\n          <div class=\"cart-item-cell cart-item-action\">\r\n              <div class=\"item-remove\" (click)=\"removeFromCart(item)\">X</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"row cart-total\">\r\n          <div class=\"col-lg-offset-6\">\r\n              <div class=\"cart-total-row row\">\r\n                  \r\n                  <div class=\"col-md-6 cart-total-value\"></div>\r\n              </div>\r\n              <div class=\"cart-total-row row\">\r\n                  <div class=\"col-md-6 cart-total-label\">\r\n                      subtotal\r\n                  </div>\r\n                  <div class=\"col-md-6 cart-total-value\">\r\n                      ${{total}}.00\r\n                  </div>\r\n              </div>\r\n              <div class=\"cart-total-row row\">\r\n                  <div class=\"col-md-6 cart-total-label\">\r\n                      total\r\n                  </div>\r\n                  <div class=\"col-md-6 cart-total-value cart-total-price\">\r\n                       ${{total}}.00\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"cart-buttons\">\r\n          <div class=\"continue-shopping\"><a routerLink=\"/products\">Regresar a productos</a></div>\r\n          <button (click)=\"resetCar()\" routerLink = '/home' >Terminar compra</button>\r\n      </div>\r\n  </div>\r\n  <div class=\"cart-page-content\" *ngIf=\"emptyCar\">\r\n      <!-- *ngIf=\"cartList.length == 0\" -->\r\n      <h4>Carrito vacio</h4>\r\n      <a routerLink=\"/products\">Volver a productos</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/carrito/carrito.component.ts":
/*!**********************************************!*\
  !*** ./src/app/carrito/carrito.component.ts ***!
  \**********************************************/
/*! exports provided: CarritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoComponent", function() { return CarritoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _productos_main_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productos-main/productos.service */ "./src/app/productos-main/productos.service.ts");
/* harmony import */ var _venta_venta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../venta/venta */ "./src/app/venta/venta.ts");
/* harmony import */ var _users_main_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users-main/users.service */ "./src/app/users-main/users.service.ts");
/* harmony import */ var _admins_main_admins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admins-main/admins.service */ "./src/app/admins-main/admins.service.ts");






var CarritoComponent = /** @class */ (function () {
    function CarritoComponent(productoService, userservice, adminservice) {
        this.productoService = productoService;
        this.userservice = userservice;
        this.adminservice = adminservice;
        this.usuario = '';
        this.nameproductos = [];
        this.cantidad = [];
    }
    CarritoComponent.prototype.ngOnInit = function () {
        this.carrito = this.productoService.getCarrito();
        if (this.carrito.length < 1) {
            this.emptyCar = true;
        }
        else {
            this.emptyCar = false;
        }
        this.total = this.calculateTotal(this.carrito);
        this.cantidad = this.productoService.cantprod;
    };
    CarritoComponent.prototype.calculateTotal = function (car) {
        var tot = 0;
        for (var _i = 0, car_1 = car; _i < car_1.length; _i++) {
            var prod = car_1[_i];
            tot += prod.precio;
        }
        return tot;
    };
    CarritoComponent.prototype.resetCar = function () {
        this.getArrayProductos();
        // tslint:disable-next-line: max-line-length
        this.adminservice.crearVenta(new _venta_venta__WEBPACK_IMPORTED_MODULE_3__["Venta"](this.userservice.loggedUser.nombre, this.nameproductos, this.productoService.cantprod, this.total));
        this.productoService.carrito.length = 0;
        this.productoService.cantprod.length = 0;
    };
    CarritoComponent.prototype.removeFromCart = function (prod) {
        this.productoService.removeCarrito(prod);
        this.carrito = this.productoService.getCarrito();
        this.total = this.calculateTotal(this.carrito);
        if (this.carrito.length < 1) {
            this.emptyCar = true;
        }
    };
    CarritoComponent.prototype.getArrayProductos = function () {
        var _this = this;
        this.carrito.forEach(function (element) {
            _this.nameproductos.push(element.nombre);
        });
        // hace falta añadir cantidad para poder realizar esto
    };
    CarritoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carrito',
            template: __webpack_require__(/*! ./carrito.component.html */ "./src/app/carrito/carrito.component.html"),
            styles: [__webpack_require__(/*! ./carrito.component.css */ "./src/app/carrito/carrito.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_productos_main_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"],
            _users_main_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _admins_main_admins_service__WEBPACK_IMPORTED_MODULE_5__["AdminsService"]])
    ], CarritoComponent);
    return CarritoComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    background-color: rgb(250, 249, 249); /* Green */\r\n    border: none;\r\n    color: gray;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n  }\r\n\r\n  button:hover {\r\n    background-color: rgb(250, 249, 249); /* Green */\r\n    border: none;\r\n    color: gray;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px; \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DLEVBQUUsVUFBVTtJQUNoRCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxvQ0FBb0MsRUFBRSxVQUFVO0lBQ2hELFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDksIDI0OSk7IC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDksIDI0OSk7IC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDsgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    Distribuciones Gaona\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" routerLink = \"/home\">Inicio</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!getLogged()\"> \r\n        <a class=\"nav-link\" href=\"#\" routerLink = \"/login\">Iniciar sesión</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"getLogged()\"> \r\n        <a class=\"nav-link\" href=\"#\" routerLink = \"/edit\">Editar usuario</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"getAdmin()\">\r\n        <a class=\"nav-link\" href=\"#\" routerLink = \"/showUsers\">Lista usuarios</a>\r\n      </li>\r\n      \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" routerLink = \"/products\">Productos</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" *ngIf=\"getLogged()\">\r\n        <a class=\"nav-link\" href=\"#\" routerLink = \"/carrito\">Carrito</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"getAdmin()\">\r\n        <a class=\"nav-link\" href=\"#\" routerLink = \"/admin/herramientas\">Administrador</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"getLogged()\" (click)=\"logout()\"> \r\n        <a class=\"nav-link\" href=\"#\" routerLink = \"/home\">Cerrar sesión</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_main_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users-main/users.service */ "./src/app/users-main/users.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getLogged = function () {
        return this.userService.userLogged;
    };
    HeaderComponent.prototype.getAdmin = function () {
        return this.userService.admin;
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.userLogged = false;
        this.userService.loggedUser = null;
        this.userService.admin = false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_main_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-size: 350%;\r\n    text-align: center;\r\n}\r\n\r\n/*Propiedades del container*/\r\n\r\n#container{\r\n    width: 60%;\r\n    margin-right:auto;\r\n    margin-left: auto;\r\n    background-color: black;\r\n    position: initial;\r\n\r\n}\r\n\r\n.parrafo-ofertas{\r\n    font-size: 30px;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-weight: bolder;\r\n    font-style: italic;\r\n    color: antiquewhite;\r\n}\r\n\r\n/*Propiedades del carrusel*/\r\n\r\n#Carrusel-ofertas{\r\n    width: 100%;\r\n    justify-self: center;\r\n    color: black;\r\n    text-align: center;\r\n    margin-right:auto;\r\n    margin-left: auto;\r\n}\r\n\r\n/*Propiedades del contenedor de las img en carrusel*/\r\n\r\n#Carrusel-ofertas img{\r\n    margin-right:auto;\r\n    margin-left: auto;\r\n}\r\n\r\n/*Pendiente-----*/\r\n\r\n.indicadores{\r\n    position: initial;\r\n    margin-right:auto;\r\n    margin-left: auto;\r\n    bottom: 30px;\r\n    padding-left: 0;\r\n    list-style: circle;\r\n    text-align: center;\r\n}\r\n\r\n.indicadores i{\r\n    color:whitesmoke;\r\n}\r\n\r\ni.fas.fa-circle {\r\n    border-color: black;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 25px;\r\n}\r\n\r\n.d-block{\r\n    width: 450px;\r\n    height: 450px;;\r\n}\r\n\r\n/* Fin de elementos del carrusel*/\r\n\r\n/*Propiedades del footer*/\r\n\r\n#footer{\r\n  position: absolute;\r\n  background-color:rgb(74, 75, 78);\r\n  color: blue;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n/*Propiedades del texto del footer*/\r\n\r\n#footer div p{\r\n  background-color:rgb(74, 75, 78);\r\n  color: white;\r\n  font-size: 15px;\r\n}\r\n\r\n/*Propiedades de los iconos del footer*/\r\n\r\n#footer div ul{\r\n  font-size: 25px;\r\n  color: whitesmoke;\r\n}\r\n\r\n#footer div ul a:visited{\r\n  color: whitesmoke;\r\n}\r\n\r\n#Facebook-logo:hover{\r\n  color:#3b5998;\r\n}\r\n\r\n#Twiter-logo:hover{\r\n  color:#00aced;\r\n}\r\n\r\n#Whatsapp-logo:hover{\r\n  color:#25d366;\r\n}\r\n\r\n/*fin de Propiedades del footer*/\r\n\r\n@font-face {\r\n    font-family: 'Vampiro One';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Vampiro One'), local('VampiroOne-Regular'), url(http://themes.googleusercontent.com/static/fonts/vampiroone/v3/Ho2Xld8UbQyBA8XLxF1_NYbN6UDyHWBl620a-IRfuBk.woff) format('woff');\r\n  }\r\n\r\nh1 a{\r\n    text-decoration:none;\r\n    transition: all 0.5s;\r\n  }\r\n\r\nh1 a{\r\n    font-size:1.5em;\r\n    color:#228DFF;\r\n    font-family:Iceland;\r\n  }\r\n\r\nh1 a:hover{\r\n    -webkit-animation: neon2 1.5s ease-in-out infinite alternate;\r\n    animation: neon2 1.5s ease-in-out infinite alternate;\r\n  }\r\n\r\nh1 a:hover{\r\n  color:#ffffff;\r\n  }\r\n\r\n@-webkit-keyframes neon2 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff,\r\n                 0 0 20px  #fff,\r\n                 0 0 30px  #fff,\r\n                 0 0 40px  #228DFF,\r\n                 0 0 70px  #228DFF,\r\n                 0 0 80px  #228DFF,\r\n                 0 0 100px #228DFF,\r\n                 0 0 150px #228DFF;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff,\r\n                 0 0 10px #fff,\r\n                 0 0 15px #fff,\r\n                 0 0 20px #228DFF,\r\n                 0 0 35px #228DFF,\r\n                 0 0 40px #228DFF,\r\n                 0 0 50px #228DFF,\r\n                 0 0 75px #228DFF;\r\n    }\r\n  }\r\n\r\n@keyframes neon2 {\r\n    from {\r\n      text-shadow: 0 0 10px #fff,\r\n                 0 0 20px  #fff,\r\n                 0 0 30px  #fff,\r\n                 0 0 40px  #228DFF,\r\n                 0 0 70px  #228DFF,\r\n                 0 0 80px  #228DFF,\r\n                 0 0 100px #228DFF,\r\n                 0 0 150px #228DFF;\r\n    }\r\n    to {\r\n      text-shadow: 0 0 5px #fff,\r\n                 0 0 10px #fff,\r\n                 0 0 15px #fff,\r\n                 0 0 20px #228DFF,\r\n                 0 0 35px #228DFF,\r\n                 0 0 40px #228DFF,\r\n                 0 0 50px #228DFF,\r\n                 0 0 75px #228DFF;\r\n    }\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUE0Qjs7QUFDNUI7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCOztBQUVyQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBLDJCQUEyQjs7QUFDM0I7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFDQSxvREFBb0Q7O0FBQ3BEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFDQSxpQkFBaUI7O0FBQ2pCO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQ0EsaUNBQWlDOztBQUVqQyx5QkFBeUI7O0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFDQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBLHVDQUF1Qzs7QUFDdkM7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBLGdDQUFnQzs7QUFFOUI7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyTEFBMkw7RUFDN0w7O0FBSUM7SUFDQyxvQkFBb0I7SUFHcEIsb0JBQW9CO0VBQ3RCOztBQUlBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSw0REFBNEQ7SUFFNUQsb0RBQW9EO0VBQ3REOztBQUlBO0VBQ0EsYUFBYTtFQUNiOztBQU1BO0lBQ0U7TUFDRTs7Ozs7OztrQ0FPNEI7SUFDOUI7SUFDQTtNQUNFOzs7Ozs7O2lDQU8yQjtJQUM3QjtFQUNGOztBQWlDQTtJQUNFO01BQ0U7Ozs7Ozs7a0NBTzRCO0lBQzlCO0lBQ0E7TUFDRTs7Ozs7OztpQ0FPMkI7SUFDN0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1zaXplOiAzNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKlByb3BpZWRhZGVzIGRlbCBjb250YWluZXIqL1xyXG4jY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG5cclxufVxyXG4ucGFycmFmby1vZmVydGFze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcclxufVxyXG4vKlByb3BpZWRhZGVzIGRlbCBjYXJydXNlbCovXHJcbiNDYXJydXNlbC1vZmVydGFze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLypQcm9waWVkYWRlcyBkZWwgY29udGVuZWRvciBkZSBsYXMgaW1nIGVuIGNhcnJ1c2VsKi9cclxuI0NhcnJ1c2VsLW9mZXJ0YXMgaW1ne1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4vKlBlbmRpZW50ZS0tLS0tKi9cclxuLmluZGljYWRvcmVze1xyXG4gICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbGlzdC1zdHlsZTogY2lyY2xlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5kaWNhZG9yZXMgaXtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbn1cclxuaS5mYXMuZmEtY2lyY2xlIHtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5kLWJsb2Nre1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDs7XHJcbn1cclxuLyogRmluIGRlIGVsZW1lbnRvcyBkZWwgY2FycnVzZWwqL1xyXG5cclxuLypQcm9waWVkYWRlcyBkZWwgZm9vdGVyKi9cclxuI2Zvb3RlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzQsIDc1LCA3OCk7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4vKlByb3BpZWRhZGVzIGRlbCB0ZXh0byBkZWwgZm9vdGVyKi9cclxuI2Zvb3RlciBkaXYgcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig3NCwgNzUsIDc4KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi8qUHJvcGllZGFkZXMgZGUgbG9zIGljb25vcyBkZWwgZm9vdGVyKi9cclxuI2Zvb3RlciBkaXYgdWx7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbiNmb290ZXIgZGl2IHVsIGE6dmlzaXRlZHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4jRmFjZWJvb2stbG9nbzpob3ZlcntcclxuICBjb2xvcjojM2I1OTk4O1xyXG59XHJcbiNUd2l0ZXItbG9nbzpob3ZlcntcclxuICBjb2xvcjojMDBhY2VkO1xyXG59XHJcbiNXaGF0c2FwcC1sb2dvOmhvdmVye1xyXG4gIGNvbG9yOiMyNWQzNjY7XHJcbn1cclxuLypmaW4gZGUgUHJvcGllZGFkZXMgZGVsIGZvb3RlciovXHJcbiAgXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1ZhbXBpcm8gT25lJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdWYW1waXJvIE9uZScpLCBsb2NhbCgnVmFtcGlyb09uZS1SZWd1bGFyJyksIHVybChodHRwOi8vdGhlbWVzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zdGF0aWMvZm9udHMvdmFtcGlyb29uZS92My9IbzJYbGQ4VWJReUJBOFhMeEYxX05ZYk42VUR5SFdCbDYyMGEtSVJmdUJrLndvZmYpIGZvcm1hdCgnd29mZicpO1xyXG4gIH1cclxuICAgXHJcbiAgXHJcbiAgXHJcbiAgIGgxIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGgxIGF7XHJcbiAgICBmb250LXNpemU6MS41ZW07XHJcbiAgICBjb2xvcjojMjI4REZGO1xyXG4gICAgZm9udC1mYW1pbHk6SWNlbGFuZDtcclxuICB9XHJcbiAgaDEgYTpob3ZlcntcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBuZW9uMiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBuZW9uMiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbjogbmVvbjIgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGgxIGE6aG92ZXJ7XHJcbiAgY29sb3I6I2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIG5lb24yIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCAgI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgMzBweCAgI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCAgIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgNzBweCAgIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCAgIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgMTUwcHggIzIyOERGRjtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCAjZmZmLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxNXB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgMzVweCAjMjI4REZGLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4ICMyMjhERkYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDUwcHggIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgNzVweCAjMjI4REZGO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuIFxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBuZW9uMiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDMwcHggICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggICMyMjhERkYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDcwcHggICMyMjhERkYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggICMyMjhERkYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4ICMyMjhERkYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDE1MHB4ICMyMjhERkY7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgMTVweCAjZmZmLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4ICMyMjhERkYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDM1cHggIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCAjMjI4REZGLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA1MHB4ICMyMjhERkYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDc1cHggIzIyOERGRjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiBcclxuICBcclxuICBcclxuICBcclxuICBAa2V5ZnJhbWVzIG5lb24yIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCAgI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgMzBweCAgI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCAgIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgNzBweCAgIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCAgIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgMTUwcHggIzIyOERGRjtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZixcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCAjZmZmLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxNXB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgMzVweCAjMjI4REZGLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4ICMyMjhERkYsXHJcbiAgICAgICAgICAgICAgICAgMCAwIDUwcHggIzIyOERGRixcclxuICAgICAgICAgICAgICAgICAwIDAgNzVweCAjMjI4REZGO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1><a href=\"\"> Distribuciones Gaona </a></h1>\r\n\r\n<body id=\"body\">\r\n  <div id=\"container\">\r\n      <p class=\"parrafo-ofertas\">¡Ofertas del mes!</p>\r\n      <!--Inicio de carrucel-->\r\n      <div id=\"Carrusel-ofertas\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <div class=\"carousel-inner\">\r\n              <div class=\"carousel-item active\">\r\n                  <img class=\"d-block \" src=\"https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/12733426_1680588772211694_324493388602809657_n.jpg?_nc_cat=106&_nc_ht=scontent-mia3-1.xx&oh=4a834630d5d37ae6b8b8adc25e95c0ab&oe=5D6265DE\" alt=\"First slide\">\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                  <img class=\"d-block \" src=\"https://conceptodefinicion.de/wp-content/uploads/2017/10/Abarrotes2.jpg\" alt=\"Second slide\">\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                  <img class=\"d-block \" src=\"logo.jpg\" alt=\"Third slide\">\r\n              </div>\r\n          </div>\r\n          <ol class=\"indicadores\">\r\n              <i class=\"fas fa-circle\" data-target=\"#Carrusel-ofertas\" data-slide-to=\"0\" class=\"active\"></i>\r\n              <i class=\"fas fa-circle\" data-target=\"#Carrusel-ofertas\" data-slide-to=\"1\"></i>\r\n              <i class=\"fas fa-circle\" data-target=\"#Carrusel-ofertas\" data-slide-to=\"2\"></i>\r\n          </ol>\r\n          <a class=\"carousel-control-prev\" href=\"#Carrusel-ofertas\" routerLink=\"\" role=\"button\" data-slide=\"prev\">\r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#Carrusel-ofertas\" routerLink=\"\" role=\"button\" data-slide=\"next\">\r\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\" icon></span>\r\n              <span class=\"sr-only\">Next</span>\r\n          </a>\r\n      </div>\r\n  </div>\r\n\r\n  \r\n\r\n</body>\r\n<!-- Footer -->\r\n<footer class=\"page-footer font-small cyan darken-3\" id=\"footer\">\r\n  <!--Elementos de Footer-->\r\n  <div class=\"container-footer\">\r\n      <!--Botones de redes sociales-->\r\n      <ul class=\"list-unstyled list-inline text-center\">\r\n          <li class=\"list-inline-item\">\r\n              <a class=\"btn-floating btn-fb mx-1\"\r\n                  href=\"https://www.facebook.com/pages/category/Shopping---Retail/Distribuciones-Gaona-1680583162212255/\"\r\n                  target=”_blank”>\r\n                  <i class=\"fab fa-facebook-f\" id=\"Facebook-logo\"> </i>\r\n              </a>\r\n          </li>\r\n          <li class=\"list-inline-item\">\r\n              <a class=\"btn-floating btn-tw mx-1\">\r\n                  <i class=\"fab fa-twitter\" id=\"Twiter-logo\"> </i>\r\n              </a>\r\n          </li>\r\n          <li class=\"list-inline-item\">\r\n              <a class=\"btn-floating mx-1\">\r\n                  <i class=\"fab fa-whatsapp\" id=\"Whatsapp-logo\"></i>\r\n              </a>\r\n      </ul>\r\n      <!-- Social buttons -->\r\n  </div>\r\n  <!-- Fin de los elementos del Footer-->\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"footer-copyright text-center\">\r\n      <p>© 2019 Copyright:\r\n          <a href=\"index.html\"> Distribuciones Gaona</a>\r\n      </p>\r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Fin del Footer -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/log/log.component.css":
/*!*********************************************!*\
  !*** ./src/app/login/log/log.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Contenedor{\r\n\twidth: 400px;\r\n\tmargin: 0 auto;\r\n\tbackground-color: #F3EDED;\r\n        border: 1px solid #ECE8E8;\r\n\theight: 400px;\r\n\tborder-radius:8px;\r\n    padding: 0px 9px 0px 9px;\r\n    \r\n    \r\n    \r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    padding-bottom: 50px;\r\n    padding-top: 15px;\r\n}\r\n\r\n/**\r\n * Aplicando al icono de usuario el color de fondo,\r\n * rellenado de 20px y un redondeado de 120px en forma\r\n * de un circulo\r\n */\r\n\r\n.Icon img{\r\n      background: #A8A6A6;\r\n      padding: 20px;\r\n      border-radius: 120px;\r\n      max-width: 125px;\r\n      max-height: 125px;\r\n}\r\n\r\n/**\r\n * Se aplica al contenedor madre un margen de tamaño 10px hacia la cabecera y pie,\r\n * color de fuente blanco,un tamaño de fuente 50px y texto centrado.\r\n */\r\n\r\n.Icon{\r\n     margin-top: 10px;\r\n     margin-bottom:10px; \r\n     color: #FFF;\r\n     font-size: 50px;\r\n     text-align: center;\r\n}\r\n\r\n/**\r\n * Se aplica al contenedor donde muestra en el pie\r\n * la opción de olvidaste tu contraseña?\r\n */\r\n\r\n.opcioncontra{\r\n\ttext-align: center;\r\n\tmargin-top: 20px;\r\n\tfont-size: 14px;\r\n}\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9nL2xvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCx5QkFBeUI7UUFDbEIseUJBQXlCO0NBQ2hDLGFBQWE7Q0FDYixpQkFBaUI7SUFDZCx3QkFBd0I7Ozs7QUFJNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTs7OztFQUlFOztBQUNGO01BQ00sbUJBQW1CO01BQ25CLGFBQWE7TUFDYixvQkFBb0I7TUFDcEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtBQUN2Qjs7QUFDQTs7O0VBR0U7O0FBQ0Y7S0FDSyxnQkFBZ0I7S0FDaEIsa0JBQWtCO0tBQ2xCLFdBQVc7S0FDWCxlQUFlO0tBQ2Ysa0JBQWtCO0FBQ3ZCOztBQUNBOzs7RUFHRTs7QUFDRjtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZy9sb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNDb250ZW5lZG9ye1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjNFREVEO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQ0U4RTg7XHJcblx0aGVpZ2h0OiA0MDBweDtcclxuXHRib3JkZXItcmFkaXVzOjhweDtcclxuICAgIHBhZGRpbmc6IDBweCA5cHggMHB4IDlweDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4gXHJcbi8qKlxyXG4gKiBBcGxpY2FuZG8gYWwgaWNvbm8gZGUgdXN1YXJpbyBlbCBjb2xvciBkZSBmb25kbyxcclxuICogcmVsbGVuYWRvIGRlIDIwcHggeSB1biByZWRvbmRlYWRvIGRlIDEyMHB4IGVuIGZvcm1hXHJcbiAqIGRlIHVuIGNpcmN1bG9cclxuICovXHJcbi5JY29uIGltZ3tcclxuICAgICAgYmFja2dyb3VuZDogI0E4QTZBNjtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTIwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTI1cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEyNXB4O1xyXG59XHJcbi8qKlxyXG4gKiBTZSBhcGxpY2EgYWwgY29udGVuZWRvciBtYWRyZSB1biBtYXJnZW4gZGUgdGFtYcOxbyAxMHB4IGhhY2lhIGxhIGNhYmVjZXJhIHkgcGllLFxyXG4gKiBjb2xvciBkZSBmdWVudGUgYmxhbmNvLHVuIHRhbWHDsW8gZGUgZnVlbnRlIDUwcHggeSB0ZXh0byBjZW50cmFkby5cclxuICovXHJcbi5JY29ue1xyXG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbToxMHB4OyBcclxuICAgICBjb2xvcjogI0ZGRjtcclxuICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8qKlxyXG4gKiBTZSBhcGxpY2EgYWwgY29udGVuZWRvciBkb25kZSBtdWVzdHJhIGVuIGVsIHBpZVxyXG4gKiBsYSBvcGNpw7NuIGRlIG9sdmlkYXN0ZSB0dSBjb250cmFzZcOxYT9cclxuICovXHJcbi5vcGNpb25jb250cmF7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiBcclxuIl19 */"

/***/ }),

/***/ "./src/app/login/log/log.component.html":
/*!**********************************************!*\
  !*** ./src/app/login/log/log.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <h1> Inicio de sesión</h1>\r\n<form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\r\n<div id=\"Contenedor\">\r\n\r\n  <div class=\"Icon\">\r\n      <!--Icono de usuario-->\r\n      <img src=\"https://image.flaticon.com/icons/png/512/64/64572.png\" alt=\"\">\r\n   </div>\r\n\r\n  \r\n\r\n    <div class=\"ContentForm\">\r\n      <div class=\"input-group input-group-lg\">\r\n        <span class=\"input-group-addon\" id=\"sizing-addon1\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n         <input [(ngModel)]=\"mail\" type=\"email\" class=\"form-control\" name=\"correo\" placeholder=\"Correo\" id=\"Correo\" aria-describedby=\"sizing-addon1\" required>\r\n      </div>\r\n      \r\n      <br>\r\n      <div class=\"input-group input-group-lg\">\r\n      <span class=\"input-group-addon\" id=\"sizing-addon1\"><i class=\"glyphicon glyphicon-lock\"></i></span>\r\n      <input [(ngModel)]=\"password\" type=\"password\" name=\"contra\" class=\"form-control\" placeholder=\"******\" aria-describedby=\"sizing-addon1\" required>\r\n      </div>\r\n      \r\n      <br>\r\n      <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block btn-signin\" [disabled] = \"!f.valid\">Iniciar Sesión</button>\r\n      <div class=\"opcioncontra\"><a href=\"\" routerLink = '/register'>¿No tienes una cuenta? ¡Regístrate!</a></div>\r\n    </div>\r\n</div> \r\n</form> \r\n\r\n"

/***/ }),

/***/ "./src/app/login/log/log.component.ts":
/*!********************************************!*\
  !*** ./src/app/login/log/log.component.ts ***!
  \********************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_users_main_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/users-main/users.service */ "./src/app/users-main/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogComponent = /** @class */ (function () {
    function LogComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.mail = '';
        this.password = '';
    }
    LogComponent.prototype.ngOnInit = function () {
        this.userService.getUsers();
    };
    LogComponent.prototype.submit = function (formulario) {
        if (this.userService.containsMail(this.mail)) {
            if (this.userService.containsAdmin(this.mail)) {
                this.userService.admin = true;
            }
            if (this.userService.passwordMatch(this.password, this.userService.getUserId(this.mail))) {
                this.user = this.userService.getUser(this.userService.getUserId(this.mail));
                alert("Bienvenido " + this.user.nombre);
                this.userService.userLogged = true;
                this.userService.loggedUser = this.user;
                console.log(this.userService.admin);
                this.router.navigate(['/home']);
            }
        }
        else {
            alert('Usuario o contraseña incorrecta');
        }
    };
    LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/login/log/log.component.html"),
            styles: [__webpack_require__(/*! ./log.component.css */ "./src/app/login/log/log.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_users_main_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Contenedor{\r\n\twidth: 400px;\r\n\tmargin: 50px auto;\r\n\tbackground-color: #F3EDED;\r\n    border: 1px solid #ECE8E8;\r\n\theight: 550px;\r\n\tborder-radius:8px;\r\n\tpadding: 0px 9px 0px 9px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    padding-bottom: 20px;\r\n    padding-top: 15px;\r\n}\r\n\r\n/**\r\n * Aplicando al icono de usuario el color de fondo,\r\n * rellenado de 20px y un redondeado de 120px en forma\r\n * de un circulo\r\n */\r\n\r\n.Icon img{\r\n      background: #A8A6A6;\r\n      padding: 20px;\r\n      border-radius: 120px;\r\n      max-width: 125px;\r\n      max-height: 125px;\r\n}\r\n\r\n/**\r\n * Se aplica al contenedor madre un margen de tamaño 10px hacia la cabecera y pie,\r\n * color de fuente blanco,un tamaño de fuente 50px y texto centrado.\r\n */\r\n\r\n.Icon{\r\n     margin-top: 10px;\r\n     margin-bottom:10px; \r\n     color: #FFF;\r\n     font-size: 50px;\r\n     text-align: center;\r\n}\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIseUJBQXlCO0lBQ3RCLHlCQUF5QjtDQUM1QixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHdCQUF3QjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7O0VBSUU7O0FBQ0Y7TUFDTSxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0FBQ3ZCOztBQUNBOzs7RUFHRTs7QUFDRjtLQUNLLGdCQUFnQjtLQUNoQixrQkFBa0I7S0FDbEIsV0FBVztLQUNYLGVBQWU7S0FDZixrQkFBa0I7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0NvbnRlbmVkb3J7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG5cdG1hcmdpbjogNTBweCBhdXRvO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGM0VERUQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUNFOEU4O1xyXG5cdGhlaWdodDogNTUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czo4cHg7XHJcblx0cGFkZGluZzogMHB4IDlweCAwcHggOXB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbiBcclxuLyoqXHJcbiAqIEFwbGljYW5kbyBhbCBpY29ubyBkZSB1c3VhcmlvIGVsIGNvbG9yIGRlIGZvbmRvLFxyXG4gKiByZWxsZW5hZG8gZGUgMjBweCB5IHVuIHJlZG9uZGVhZG8gZGUgMTIwcHggZW4gZm9ybWFcclxuICogZGUgdW4gY2lyY3Vsb1xyXG4gKi9cclxuLkljb24gaW1ne1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjQThBNkE2O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgICAgbWF4LWhlaWdodDogMTI1cHg7XHJcbn1cclxuLyoqXHJcbiAqIFNlIGFwbGljYSBhbCBjb250ZW5lZG9yIG1hZHJlIHVuIG1hcmdlbiBkZSB0YW1hw7FvIDEwcHggaGFjaWEgbGEgY2FiZWNlcmEgeSBwaWUsXHJcbiAqIGNvbG9yIGRlIGZ1ZW50ZSBibGFuY28sdW4gdGFtYcOxbyBkZSBmdWVudGUgNTBweCB5IHRleHRvIGNlbnRyYWRvLlxyXG4gKi9cclxuLkljb257XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOjEwcHg7IFxyXG4gICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/login/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/login/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <h1>Registro</h1>\r\n  <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\r\n  <div id=\"Contenedor\">\r\n      <div class=\"Icon\">\r\n          <!--Icono de usuario-->\r\n          <img src=\"https://image.flaticon.com/icons/png/512/64/64572.png\" alt=\"\">\r\n      </div>\r\n      <!-- Comienzo del formulario Registro-->\r\n      <div class=\"ContentForm\">\r\n              <div class=\"input-group input-group-lg\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon1\"><i\r\n                          class=\"glyphicon glyphicon-user\"></i></span>\r\n                  <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" name=\"nombre\" placeholder=\"Nombre\" id=\"Nombre\"\r\n                      aria-describedby=\"sizing-addon1\" required>\r\n              </div>\r\n              <div class=\"input-group input-group-lg\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon1\"><i\r\n                          class=\"glyphicon glyphicon-user\"></i></span>\r\n                  <input [(ngModel)]=\"address\" type=\"text\" class=\"form-control\" name=\"domicilio\" placeholder=\"Domicilio\" id=\"Domicilio\"\r\n                      aria-describedby=\"sizing-addon1\" required>\r\n              </div>\r\n              <div class=\"input-group input-group-lg\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon1\"><i\r\n                          class=\"glyphicon glyphicon-user\"></i></span>\r\n                  <input [(ngModel)]=\"date\" type=\"date\" class=\"form-control\" name=\"fechanac\" placeholder=\"Fecha de Nacimiento\"\r\n                      id=\"Fechanac\" aria-describedby=\"sizing-addon1\" required>\r\n              </div>\r\n              <div class=\"input-group input-group-lg\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon1\"><i\r\n                          class=\"glyphicon glyphicon-user\"></i></span>\r\n                  <input [(ngModel)]=\"cp\" type=\"text\" class=\"form-control\" name=\"cp\" placeholder=\"Código Postal\" id=\"codigoPostal\"\r\n                      aria-describedby=\"sizing-addon1\" required>\r\n              </div>\r\n              <div class=\"input-group input-group-lg\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon1\"><i\r\n                          class=\"glyphicon glyphicon-user\"></i></span>\r\n                  <input [(ngModel)]=\"mail\" type=\"email\" class=\"form-control\" name=\"correo\" placeholder=\"Correo\" id=\"Correo\"\r\n                      aria-describedby=\"sizing-addon1\" required>\r\n              </div>\r\n\r\n              <br>\r\n              <div class=\"input-group input-group-lg\">\r\n                  <span class=\"input-group-addon\" id=\"sizing-addon1\"><i\r\n                          class=\"glyphicon glyphicon-lock\"></i></span>\r\n                  <input [(ngModel)]=\"password\" type=\"password\" name=\"contra\" class=\"form-control\" placeholder=\"Contraseña\"\r\n                      aria-describedby=\"sizing-addon1\" required>\r\n              </div>\r\n\r\n              <br>\r\n              <button class=\"btn btn-lg btn-primary btn-block btn-signin\" id=\"IngresoLog\"\r\n                  type=\"submit\" [disabled] = \"!f.valid\">Registrarse</button>\r\n      </div>\r\n  </div>\r\n</form>\r\n<p>{{f.value|json}}</p>\r\n<p>{{name}} {{address}} {{date}} {{cp}} {{mail}} {{password}}</p>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_users_main_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/users-main/users.service */ "./src/app/users-main/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_users_main_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/users-main/user */ "./src/app/users-main/user.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new src_app_users_main_user__WEBPACK_IMPORTED_MODULE_4__["User"](0, '', '', new Date(), 0, '', '', '', '');
        this.name = '';
        this.address = '';
        this.date = new Date();
        this.cp = '';
        this.mail = '';
        this.password = '';
        this.rol = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.submit = function (formulario) {
        if (this.userService.containsMail(this.mail)) {
            this.errorAlert();
        }
        else {
            this.user.nombre = this.name;
            this.user.domicilio = this.address;
            this.user.fecha = this.date;
            this.user.cp = Number(this.cp);
            this.user.mail = this.mail;
            this.user.password = this.password;
            console.log(this.user);
            this.userService.addUser(this.user);
            this.registerAlert();
            this.router.navigate(['/home']);
        }
    };
    RegisterComponent.prototype.registerAlert = function () {
        alert('¡Usuario registrado correctamente!');
    };
    RegisterComponent.prototype.errorAlert = function () {
        alert('El correo que ha introducido ya está registrado.');
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/login/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/login/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_users_main_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/productos-main/producto-detail/producto-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/productos-main/producto-detail/producto-detail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy1tYWluL3Byb2R1Y3RvLWRldGFpbC9wcm9kdWN0by1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/productos-main/producto-detail/producto-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/productos-main/producto-detail/producto-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Detalle del producto </h1>\r\n<div class=\"container\">\r\n  <div class=\"media col-8 mt-2 border border-primary align-items-center \">\r\n      <img class=\"rounded-circle\" src=\"https://www.sinplastico.com/3009-home_default/escoba-para-interior-de-pelo-natural.jpg\" alt=\"\">\r\n    <div class=\"media-body\">\r\n      <h5>{{nombre}}</h5>\r\n      <p>Marca: {{marca}}</p>\r\n      <p>Categoría: {{categoria}}</p>\r\n      <p>Precio:${{precio}}.00</p>\r\n      <p>Existencia: {{existencia}}</p>\r\n    </div>\r\n  </div>\r\n  <button (click)=\"back()\">¡Go Back!</button>  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/productos-main/producto-detail/producto-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/productos-main/producto-detail/producto-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetailComponent", function() { return ProductoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productos.service */ "./src/app/productos-main/productos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ProductoDetailComponent = /** @class */ (function () {
    function ProductoDetailComponent(productosService, router, route, location) {
        this.productosService = productosService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    ProductoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = Number(params.id);
            var producto = _this.productosService.getProducto(_this.id);
            _this.nombre = producto.nombre;
            _this.marca = producto.marca;
            _this.categoria = producto.categoria;
            _this.precio = producto.precio;
            _this.existencia = producto.existencia;
        });
    };
    // Regresar a la pantalla anterior
    ProductoDetailComponent.prototype.back = function () {
        this.location.back();
    };
    ProductoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto-detail',
            template: __webpack_require__(/*! ./producto-detail.component.html */ "./src/app/productos-main/producto-detail/producto-detail.component.html"),
            styles: [__webpack_require__(/*! ./producto-detail.component.css */ "./src/app/productos-main/producto-detail/producto-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ProductoDetailComponent);
    return ProductoDetailComponent;
}());



/***/ }),

/***/ "./src/app/productos-main/producto.ts":
/*!********************************************!*\
  !*** ./src/app/productos-main/producto.ts ***!
  \********************************************/
/*! exports provided: producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "producto", function() { return producto; });
var producto = /** @class */ (function () {
    function producto(id, nombre, precio, categoria, descripcion, marca, codigo, existencia, url) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.marca = marca;
        this.codigo = codigo;
        this.existencia = existencia;
        this.url = url;
    }
    return producto;
}());



/***/ }),

/***/ "./src/app/productos-main/productos-edit/productos-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/productos-main/productos-edit/productos-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy1tYWluL3Byb2R1Y3Rvcy1lZGl0L3Byb2R1Y3Rvcy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/productos-main/productos-edit/productos-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/productos-main/productos-edit/productos-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  productos-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/productos-main/productos-edit/productos-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/productos-main/productos-edit/productos-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductosEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosEditComponent", function() { return ProductosEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductosEditComponent = /** @class */ (function () {
    function ProductosEditComponent() {
    }
    ProductosEditComponent.prototype.ngOnInit = function () {
    };
    ProductosEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos-edit',
            template: __webpack_require__(/*! ./productos-edit.component.html */ "./src/app/productos-main/productos-edit/productos-edit.component.html"),
            styles: [__webpack_require__(/*! ./productos-edit.component.css */ "./src/app/productos-main/productos-edit/productos-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductosEditComponent);
    return ProductosEditComponent;
}());



/***/ }),

/***/ "./src/app/productos-main/productos-list/producto/producto.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/productos-main/productos-list/producto/producto.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n /********************* Shopping Demo-2 **********************/\r\n\r\n.demo{padding:45px 0}\r\n\r\n.product-grid2{font-family:'Open Sans',sans-serif;position:relative}\r\n\r\n.product-grid2 .product-image2{overflow:hidden;position:relative}\r\n\r\n.product-grid2 .product-image2 a{display:block}\r\n\r\n.product-grid2 .product-image2 img{width:100%;height:auto}\r\n\r\n.product-image2 .pic-1{opacity:1;transition:all .5s}\r\n\r\n.product-grid2:hover .product-image2 .pic-1{opacity:0}\r\n\r\n.product-image2 .pic-2{width:100%;height:100%;opacity:0;position:absolute;top:0;left:0;transition:all .5s}\r\n\r\n.product-grid2:hover .product-image2 .pic-1{opacity:1}\r\n\r\n.product-grid2 .social{padding:0;margin:0;position:absolute;bottom:12px;right:25px;z-index:1}\r\n\r\n.product-grid2 .social li{margin:0 0 10px;display:block;-webkit-transform:translateX(100px);transform:translateX(100px);transition:all .5s}\r\n\r\n.product-grid2:hover .social li{-webkit-transform:translateX(0);transform:translateX(0)}\r\n\r\n.product-grid2:hover .social li:nth-child(2){transition-delay:.15s}\r\n\r\n.product-grid2:hover .social li:nth-child(3){transition-delay:.25s}\r\n\r\n.product-grid2 .social li a{color:#505050;background-color:#fff;font-size:17px;line-height:45px;text-align:center;height:35px;width:35px;border-radius:50%;display:block;transition:all .3s ease 0s}\r\n\r\n.product-grid2 .social li a:hover{color:#fff;background-color:#3498db;box-shadow:0 0 10px rgba(0,0,0,.5)}\r\n\r\n.product-grid2 .social li a:after,.product-grid2 .social li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:12px;line-height:22px;border-radius:3px;padding:0 5px;white-space:nowrap;opacity:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);position:absolute;left:50%;top:-30px}\r\n\r\n.product-grid2 .social li a:after{content:'';height:15px;width:15px;border-radius:0;-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);top:-22px;z-index:-1}\r\n\r\n.product-grid2 .social li a:hover:after,.product-grid2 .social li a:hover:before{opacity:1}\r\n\r\n.product-grid2 .add-to-cart{color:#fff;background-color:#404040;font-size:15px;text-align:center;width:100%;padding:10px 0;display:block;position:absolute;left:0;bottom:-100%;transition:all .3s}\r\n\r\n.product-grid2 .add-to-cart:hover{background-color:#3498db;text-decoration:none}\r\n\r\n.product-grid2:hover .add-to-cart{bottom:0}\r\n\r\n.product-grid2 .product-new-label{background-color:#3498db;color:#fff;font-size:17px;padding:5px 10px;position:absolute;right:0;top:0;transition:all .3s}\r\n\r\n.product-grid2:hover .product-new-label{opacity:0}\r\n\r\n.product-grid2 .product-content{padding:20px 10px;text-align:center}\r\n\r\n.product-grid2 .title{font-size:15px;margin:0 0 7px}\r\n\r\n.product-grid2 .title a{color:#303030}\r\n\r\n.product-grid2 .title a:hover{color:#3498db}\r\n\r\n.product-grid2 .price{color:#303030;font-size:12px}\r\n\r\n@media screen and (max-width:990px){.product-grid2{margin-bottom:30px}\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG9zLW1haW4vcHJvZHVjdG9zLWxpc3QvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0MsNkRBQTZEOztBQUU5RCxNQUFNLGNBQWM7O0FBQ3BCLGVBQWUsa0NBQWtDLENBQUMsaUJBQWlCOztBQUNuRSwrQkFBK0IsZUFBZSxDQUFDLGlCQUFpQjs7QUFDaEUsaUNBQWlDLGFBQWE7O0FBQzlDLG1DQUFtQyxVQUFVLENBQUMsV0FBVzs7QUFDekQsdUJBQXVCLFNBQVMsQ0FBQyxrQkFBa0I7O0FBQ25ELDRDQUE0QyxTQUFTOztBQUNyRCx1QkFBdUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0I7O0FBQ3pHLDRDQUE0QyxTQUFTOztBQUNyRCx1QkFBdUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVM7O0FBQzVGLDBCQUEwQixlQUFlLENBQUMsYUFBYSxDQUFDLG1DQUEyQixDQUEzQiwyQkFBMkIsQ0FBQyxrQkFBa0I7O0FBQ3RHLGdDQUFnQywrQkFBc0IsQ0FBdEIsdUJBQXVCOztBQUN2RCw2Q0FBNkMscUJBQXFCOztBQUNsRSw2Q0FBNkMscUJBQXFCOztBQUNsRSw0QkFBNEIsYUFBYSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQywwQkFBMEI7O0FBQ25NLGtDQUFrQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsa0NBQWtDOztBQUN4RyxxRUFBcUUsc0JBQXNCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGtDQUEwQixDQUExQiwwQkFBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsU0FBUzs7QUFDelIsa0NBQWtDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxnREFBd0MsQ0FBeEMsd0NBQXdDLENBQUMsU0FBUyxDQUFDLFVBQVU7O0FBQ2pKLGlGQUFpRixTQUFTOztBQUMxRiw0QkFBNEIsVUFBVSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGtCQUFrQjs7QUFDak0sa0NBQWtDLHdCQUF3QixDQUFDLG9CQUFvQjs7QUFDL0Usa0NBQWtDLFFBQVE7O0FBQzFDLGtDQUFrQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCOztBQUN4Six3Q0FBd0MsU0FBUzs7QUFDakQsZ0NBQWdDLGlCQUFpQixDQUFDLGlCQUFpQjs7QUFDbkUsc0JBQXNCLGNBQWMsQ0FBQyxjQUFjOztBQUNuRCx3QkFBd0IsYUFBYTs7QUFDckMsOEJBQThCLGFBQWE7O0FBQzNDLHNCQUFzQixhQUFhLENBQUMsY0FBYzs7QUFDbEQsb0NBQW9DLGVBQWUsa0JBQWtCO0FBQ3JFIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG9zLW1haW4vcHJvZHVjdG9zLWxpc3QvcHJvZHVjdG8vcHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLyoqKioqKioqKioqKioqKioqKioqKiBTaG9wcGluZyBEZW1vLTIgKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5kZW1ve3BhZGRpbmc6NDVweCAwfVxyXG4ucHJvZHVjdC1ncmlkMntmb250LWZhbWlseTonT3BlbiBTYW5zJyxzYW5zLXNlcmlmO3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4ucHJvZHVjdC1ncmlkMiAucHJvZHVjdC1pbWFnZTJ7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4ucHJvZHVjdC1ncmlkMiAucHJvZHVjdC1pbWFnZTIgYXtkaXNwbGF5OmJsb2NrfVxyXG4ucHJvZHVjdC1ncmlkMiAucHJvZHVjdC1pbWFnZTIgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OmF1dG99XHJcbi5wcm9kdWN0LWltYWdlMiAucGljLTF7b3BhY2l0eToxO3RyYW5zaXRpb246YWxsIC41c31cclxuLnByb2R1Y3QtZ3JpZDI6aG92ZXIgLnByb2R1Y3QtaW1hZ2UyIC5waWMtMXtvcGFjaXR5OjB9XHJcbi5wcm9kdWN0LWltYWdlMiAucGljLTJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3RyYW5zaXRpb246YWxsIC41c31cclxuLnByb2R1Y3QtZ3JpZDI6aG92ZXIgLnByb2R1Y3QtaW1hZ2UyIC5waWMtMXtvcGFjaXR5OjF9XHJcbi5wcm9kdWN0LWdyaWQyIC5zb2NpYWx7cGFkZGluZzowO21hcmdpbjowO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxMnB4O3JpZ2h0OjI1cHg7ei1pbmRleDoxfVxyXG4ucHJvZHVjdC1ncmlkMiAuc29jaWFsIGxpe21hcmdpbjowIDAgMTBweDtkaXNwbGF5OmJsb2NrO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMHB4KTt0cmFuc2l0aW9uOmFsbCAuNXN9XHJcbi5wcm9kdWN0LWdyaWQyOmhvdmVyIC5zb2NpYWwgbGl7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9XHJcbi5wcm9kdWN0LWdyaWQyOmhvdmVyIC5zb2NpYWwgbGk6bnRoLWNoaWxkKDIpe3RyYW5zaXRpb24tZGVsYXk6LjE1c31cclxuLnByb2R1Y3QtZ3JpZDI6aG92ZXIgLnNvY2lhbCBsaTpudGgtY2hpbGQoMyl7dHJhbnNpdGlvbi1kZWxheTouMjVzfVxyXG4ucHJvZHVjdC1ncmlkMiAuc29jaWFsIGxpIGF7Y29sb3I6IzUwNTA1MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Zm9udC1zaXplOjE3cHg7bGluZS1oZWlnaHQ6NDVweDt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6MzVweDt3aWR0aDozNXB4O2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6YmxvY2s7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2UgMHN9XHJcbi5wcm9kdWN0LWdyaWQyIC5zb2NpYWwgbGkgYTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzM0OThkYjtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjUpfVxyXG4ucHJvZHVjdC1ncmlkMiAuc29jaWFsIGxpIGE6YWZ0ZXIsLnByb2R1Y3QtZ3JpZDIgLnNvY2lhbCBsaSBhOmJlZm9yZXtjb250ZW50OmF0dHIoZGF0YS10aXApO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDAwO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjIycHg7Ym9yZGVyLXJhZGl1czozcHg7cGFkZGluZzowIDVweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDotMzBweH1cclxuLnByb2R1Y3QtZ3JpZDIgLnNvY2lhbCBsaSBhOmFmdGVye2NvbnRlbnQ6Jyc7aGVpZ2h0OjE1cHg7d2lkdGg6MTVweDtib3JkZXItcmFkaXVzOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKTt0b3A6LTIycHg7ei1pbmRleDotMX1cclxuLnByb2R1Y3QtZ3JpZDIgLnNvY2lhbCBsaSBhOmhvdmVyOmFmdGVyLC5wcm9kdWN0LWdyaWQyIC5zb2NpYWwgbGkgYTpob3ZlcjpiZWZvcmV7b3BhY2l0eToxfVxyXG4ucHJvZHVjdC1ncmlkMiAuYWRkLXRvLWNhcnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiM0MDQwNDA7Zm9udC1zaXplOjE1cHg7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJTtwYWRkaW5nOjEwcHggMDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtib3R0b206LTEwMCU7dHJhbnNpdGlvbjphbGwgLjNzfVxyXG4ucHJvZHVjdC1ncmlkMiAuYWRkLXRvLWNhcnQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzQ5OGRiO3RleHQtZGVjb3JhdGlvbjpub25lfVxyXG4ucHJvZHVjdC1ncmlkMjpob3ZlciAuYWRkLXRvLWNhcnR7Ym90dG9tOjB9XHJcbi5wcm9kdWN0LWdyaWQyIC5wcm9kdWN0LW5ldy1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiMzNDk4ZGI7Y29sb3I6I2ZmZjtmb250LXNpemU6MTdweDtwYWRkaW5nOjVweCAxMHB4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7dHJhbnNpdGlvbjphbGwgLjNzfVxyXG4ucHJvZHVjdC1ncmlkMjpob3ZlciAucHJvZHVjdC1uZXctbGFiZWx7b3BhY2l0eTowfVxyXG4ucHJvZHVjdC1ncmlkMiAucHJvZHVjdC1jb250ZW50e3BhZGRpbmc6MjBweCAxMHB4O3RleHQtYWxpZ246Y2VudGVyfVxyXG4ucHJvZHVjdC1ncmlkMiAudGl0bGV7Zm9udC1zaXplOjE1cHg7bWFyZ2luOjAgMCA3cHh9XHJcbi5wcm9kdWN0LWdyaWQyIC50aXRsZSBhe2NvbG9yOiMzMDMwMzB9XHJcbi5wcm9kdWN0LWdyaWQyIC50aXRsZSBhOmhvdmVye2NvbG9yOiMzNDk4ZGJ9XHJcbi5wcm9kdWN0LWdyaWQyIC5wcmljZXtjb2xvcjojMzAzMDMwO2ZvbnQtc2l6ZToxMnB4fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MHB4KXsucHJvZHVjdC1ncmlkMnttYXJnaW4tYm90dG9tOjMwcHh9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/productos-main/productos-list/producto/producto.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/productos-main/productos-list/producto/producto.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-3 col-sm-6\">\r\n          <div class=\"product-grid2\">\r\n              <div class=\"product-image2\">\r\n                  <a href=\"#\">\r\n                      <img class=\"pic-1\" src=\"https://www.sinplastico.com/3009-home_default/escoba-para-interior-de-pelo-natural.jpg\">\r\n                      <img class=\"pic-2\" src=\"http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg\">\r\n                  </a>\r\n                  <ul class=\"social\">\r\n                      <li><a href=\"#\" routerLink= \"\" data-tip=\"Detalles\" (click)=\"infoProducto()\"><i class=\"fa fa-eye\"></i></a></li>\r\n                      <li><a  data-tip=\"Agregar carrito\" (click)=\"anadirProducto()\"><i class=\"fa fa-shopping-cart\"></i></a></li>\r\n                  </ul>\r\n                <!--Hover de Carrito-->\r\n                <!-- <a class=\"add-to-cart\" href=\"\">Agregar al carrito</a> -->\r\n              </div>\r\n              <div class=\"product-content\">\r\n                  <h3 class=\"title\">{{producto.nombre}}</h3>\r\n                  <span class=\"price\">${{producto.precio}}.00</span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/productos-main/productos-list/producto/producto.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/productos-main/productos-list/producto/producto.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _producto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../producto */ "./src/app/productos-main/producto.ts");
/* harmony import */ var _productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../productos.service */ "./src/app/productos-main/productos.service.ts");




var ProductoComponent = /** @class */ (function () {
    function ProductoComponent(productoService) {
        this.productoService = productoService;
        this.removeFromCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.infoProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProductoComponent.prototype.ngOnInit = function () {
    };
    ProductoComponent.prototype.quitarProducto = function () {
        this.removeFromCart.emit(this.producto);
    };
    ProductoComponent.prototype.anadirProducto = function () {
        this.productoService.addCarrito(this.producto);
        console.log(this.productoService.carrito);
    };
    ProductoComponent.prototype.infoProducto = function () {
        this.infoProduct.emit(this.producto);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _producto__WEBPACK_IMPORTED_MODULE_2__["producto"])
    ], ProductoComponent.prototype, "producto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductoComponent.prototype, "removeFromCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductoComponent.prototype, "infoProduct", void 0);
    ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto',
            template: __webpack_require__(/*! ./producto.component.html */ "./src/app/productos-main/productos-list/producto/producto.component.html"),
            styles: [__webpack_require__(/*! ./producto.component.css */ "./src/app/productos-main/productos-list/producto/producto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"]])
    ], ProductoComponent);
    return ProductoComponent;
}());



/***/ }),

/***/ "./src/app/productos-main/productos-list/productos-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/productos-main/productos-list/productos-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv{\r\n        background-color: rgb(156, 238, 238);\r\n        \r\n}\r\n\r\n#idk{\r\n        float: right;   \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG9zLW1haW4vcHJvZHVjdG9zLWxpc3QvcHJvZHVjdG9zLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7UUFDUSxvQ0FBb0M7O0FBRTVDOztBQUVBO1FBQ1EsWUFBWTtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy1tYWluL3Byb2R1Y3Rvcy1saXN0L3Byb2R1Y3Rvcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDIzOCwgMjM4KTtcclxuICAgICAgICBcclxufVxyXG5cclxuI2lka3tcclxuICAgICAgICBmbG9hdDogcmlnaHQ7ICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/productos-main/productos-list/productos-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/productos-main/productos-list/productos-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"form-inline my-2 my-lg-0\" id= \"idk\">\r\n  <input [(ngModel)]=\"searchText\"  class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar productos\" aria-label=\"Search\">\r\n  <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"searchproduct(searchText)\">Buscar</button>\r\n</div>\r\n\r\n<div>\r\n    <h3 align=\"center\">Lista de productos</h3>\r\n    \r\n    <div class=\"row\" *ngIf=\"!showSearch\">\r\n        <app-producto class=\"col-md-6 col-sm-8\" *ngFor=\"let item of productos\"  \r\n        [producto]=\"item\" [producto] = productos (infoProduct)=\"inspeccionar($event)\" > </app-producto>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showSearch\">\r\n      <app-producto class=\"col-md-6 col-sm-8\" *ngFor=\"let item of searchProduct\"  \r\n      [producto]=\"item\" [producto] = productos (infoProduct)=\"inspeccionar($event)\" > </app-producto>\r\n  </div>\r\n\r\n    <nav aria-label=\"Page navigation example\">\r\n        <ul class=\"pagination justify-content-center\">\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\" routerLink=\"/products\" (click)=\"currentPage(1)\">1</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\" routerLink=\"/products\" (click)=\"currentPage(2)\">2</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\" routerLink=\"/products\" (click)=\"currentPage(3)\">3</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\" routerLink=\"/products\" (click)=\"currentPage(4)\">4</a></li>\r\n        </ul>\r\n      </nav>\r\n</div> \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/productos-main/productos-list/productos-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/productos-main/productos-list/productos-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosListComponent", function() { return ProductosListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productos.service */ "./src/app/productos-main/productos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductosListComponent = /** @class */ (function () {
    function ProductosListComponent(productoService, router, route) {
        this.productoService = productoService;
        this.router = router;
        this.route = route;
        this.searchProduct = [];
        this.showSearch = false;
    }
    ProductosListComponent.prototype.ngOnInit = function () {
        this.currentPage(1);
        this.productoService.getProductos();
    };
    ProductosListComponent.prototype.inspeccionar = function (producto) {
        this.router.navigate([producto.id], { relativeTo: this.route });
    };
    ProductosListComponent.prototype.currentPage = function (id) {
        //Muestra normal del paginado
        this.showSearch = false;
        if (id === 1) {
            this.productos = this.productoService.productos.slice(0, 6);
        }
        else if (id === 2) {
            this.productos = this.productoService.productos.slice(6, 12);
        }
        else if (id === 3) {
            this.productos = this.productoService.productos.slice(12, 18);
        }
        else {
            this.productos = this.productoService.productos.slice(18, 24);
        }
    };
    ProductosListComponent.prototype.searchproduct = function (name) {
        this.searchProduct.length = 0;
        for (var i = 0; i < this.productoService.productos.length; i++) {
            if (this.productoService.productos[i].nombre.indexOf(name) !== -1) {
                this.searchProduct.push(this.productoService.productos[i]);
            }
        }
        this.showSearch = true;
    };
    ProductosListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos-list',
            template: __webpack_require__(/*! ./productos-list.component.html */ "./src/app/productos-main/productos-list/productos-list.component.html"),
            styles: [__webpack_require__(/*! ./productos-list.component.css */ "./src/app/productos-main/productos-list/productos-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductosListComponent);
    return ProductosListComponent;
}());



/***/ }),

/***/ "./src/app/productos-main/productos-main.component.css":
/*!*************************************************************!*\
  !*** ./src/app/productos-main/productos-main.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: rgb(156, 238, 238);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG9zLW1haW4vcHJvZHVjdG9zLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztFQUN0QyIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy1tYWluL3Byb2R1Y3Rvcy1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDIzOCwgMjM4KTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/productos-main/productos-main.component.html":
/*!**************************************************************!*\
  !*** ./src/app/productos-main/productos-main.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  productos-main works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/productos-main/productos-main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productos-main/productos-main.component.ts ***!
  \************************************************************/
/*! exports provided: ProductosMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosMainComponent", function() { return ProductosMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductosMainComponent = /** @class */ (function () {
    function ProductosMainComponent() {
    }
    ProductosMainComponent.prototype.ngOnInit = function () {
    };
    ProductosMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos-main',
            template: __webpack_require__(/*! ./productos-main.component.html */ "./src/app/productos-main/productos-main.component.html"),
            styles: [__webpack_require__(/*! ./productos-main.component.css */ "./src/app/productos-main/productos-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductosMainComponent);
    return ProductosMainComponent;
}());



/***/ }),

/***/ "./src/app/productos-main/productos.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/productos-main/productos.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ProductosService = /** @class */ (function () {
    function ProductosService(http) {
        this.http = http;
        // cambiaDato = new Subject<producto[]>();
        this.local = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.lastId = 1;
        this.marcas = [
            'Gaona',
            'Dove',
            'Dulces',
        ];
        // Arreglo de las categorias
        this.categorias = [
            'Abarrotes',
            'Limpieza',
            'Perfumeria',
            'Dulceria',
            'Personal'
        ];
        this.productos = [];
        this.carrito = [];
        this.cantprod = [];
    }
    ProductosService.prototype.getProductos = function () {
        var _this = this;
        this.http.get(this.local + '/productos').subscribe(function (data) {
            console.log(data);
            _this.productos = data;
        });
    };
    ProductosService.prototype.getProducto = function (id) {
        var pos = this.productos.findIndex(function (p) { return p.id === id; });
        return Object.assign({}, this.productos[pos]);
    };
    ProductosService.prototype.addCarrito = function (prod) {
        if (this.carrito.length === 0) {
            this.carrito.push(prod);
            this.cantprod.push(1);
            return;
        }
        this.repetidos(prod);
    };
    ProductosService.prototype.removeCarrito = function (prod) {
        var pos = this.carrito.findIndex(function (p) { return p.id === prod.id; });
        this.carrito.splice(pos, 1);
    };
    ProductosService.prototype.getCarrito = function () {
        return this.carrito.slice();
    };
    ProductosService.prototype.repetidos = function (prod) {
        // if (this.carrito[this.carrito.length - 1].id === prod.id) {
        //   console.log('entra a if');
        //   this.cantprod[this.cantprod.length - 1]++;
        //   return;
        // } else {
        //   this.carrito.push(prod);
        //   this.cantprod.push(1);
        for (var i = 0; i < this.carrito.length; i++) {
            if (this.carrito[i].id === prod.id) {
                this.cantprod[i]++;
                return;
            }
        }
        this.carrito.push(prod);
        this.cantprod.push(1);
    };
    ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductosService);
    return ProductosService;
}());



/***/ }),

/***/ "./src/app/users-main/user-edit/user-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/users-main/user-edit/user-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLW1haW4vdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users-main/user-edit/user-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/users-main/user-edit/user-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <img class=\"rounded-circle d-block mx-auto\" src=\"https://image.flaticon.com/icons/png/512/64/64572.png\">\r\n\r\n\r\n  <form #f=\"ngForm\" (ngSubmit)=\"save(f)\" >\r\n      <div class=\"form-group\">\r\n          <label for=\"\">Nombre</label>\r\n          <input [(ngModel)]=\"user.nombre\" type=\"text\" class=\"form-control nombre\"  name=\"nombre\" id=\"\" aria-describedby=\"helpId\"\r\n              placeholder=\"Nombre usuario\" required  >\r\n            </div>\r\n      \r\n      <div class=\"form-group\">\r\n          <label for=\"\">Domicilio</label>\r\n          <input [(ngModel)]=\"user.domicilio\" type=\"text\" class=\"form-control domicilio\"  name=\"domicilio\" id=\"\" aria-describedby=\"helpId\"\r\n              placeholder=\"Domicilio\" required  >\r\n        </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"\">Código Postal</label>\r\n          <input [(ngModel)]=\"user.cp\" type=\"text\" class=\"form-control cp\"  name=\"cp\" id=\"\" aria-describedby=\"helpId\"\r\n              placeholder=\"C.P.\" required  >\r\n        </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"\">Correo</label>\r\n          <input [(ngModel)]=\"user.mail\" type=\"text\" class=\"form-control mail\"  name=\"mail\" id=\"\" aria-describedby=\"helpId\"\r\n              placeholder=\"Correo\" required  >\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"\">Contraseña</label>\r\n          <input [(ngModel)]=\"user.password\" type=\"text\" class=\"form-control password\"  name=\"password\" id=\"\" aria-describedby=\"helpId\"\r\n              placeholder=\"Contraseña\" required  >\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelar()\">cancelar</button>\r\n          <button type=\"submit\" class=\"btn btn-primary save\" [disabled] = \"!f.valid\" >Guardar</button>\r\n      </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users-main/user-edit/user-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/users-main/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users-main/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, userService, router, location) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.location = location;
        this.modoAdd = true;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.modoAdd = false;
                _this.id = Number(params.id);
                _this.user = _this.userService.loggedUser;
            }
            else {
                _this.modoAdd = true;
                _this.user = _this.userService.loggedUser;
            }
        });
    };
    UserEditComponent.prototype.save = function (formulario) {
        this.userService.editUser(this.user);
        this.router.navigate(['/home']);
    };
    UserEditComponent.prototype.cancelar = function () {
        this.location.back();
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/users-main/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/users-main/user-edit/user-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/users-main/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/users-main/user-list/user-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#button {\r\n    float: right;\r\n    padding-right: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtbWFpbi91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMtbWFpbi91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users-main/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/users-main/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Lista de usuarios</h1>\r\n<br>\r\n<div class=\"form-inline my-2 my-lg-0\" id=\"button\">\r\n  <input [(ngModel)]=\"searchText\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Buscar usuarios\" aria-label=\"Search\">\r\n  <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" (click)=\"searchName(searchText)\">Buscar</button>\r\n</div>\r\n\r\n<div *ngIf=\"!searchDisplay\" class = \"media-list lista justify-content-left\">\r\n  <app-user *ngFor = \"let item of users\" [user] = \"item\"></app-user>\r\n</div>\r\n<div *ngIf=\"searchDisplay\" class = \"media-list lista justify-content-left\">\r\n  <app-user *ngFor = \"let item of searchUsers\" [user] = \"item\"></app-user>\r\n</div>\r\n<nav aria-label=\"Page navigation example\">\r\n  <ul class=\"pagination justify-content-center\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\" routerLink=\"/showUsers\" (click)=\"currentPage(1)\">1</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\" routerLink=\"/showUsers\" (click)=\"currentPage(2)\">2</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\" routerLink=\"/showUsers\" (click)=\"currentPage(3)\">3</a></li>\r\n  </ul>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/users-main/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/users-main/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users-main/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.searchUsers = [];
        this.searchDisplay = false;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPage(1);
        this.subscript = this.userService.cambiaDato.subscribe(function (arrayUsers) {
            _this.users = arrayUsers;
        });
        this.userService.getUsers();
    };
    UserListComponent.prototype.editar = function (user) {
        this.router.navigate(['/edit']);
        console.log("El usuario a editar id: " + user.id + " nombre: " + user.nombre);
    };
    UserListComponent.prototype.crearUsuario = function () {
        this.router.navigate(['/register']);
    };
    UserListComponent.prototype.currentPage = function (id) {
        this.searchDisplay = false;
        if (id === 1) {
            this.users = this.userService.users.slice(0, 5);
        }
        else if (id === 2) {
            this.users = this.userService.users.slice(5, 10);
        }
        else {
            this.users = this.userService.users.slice(10, 15);
        }
    };
    UserListComponent.prototype.searchName = function (name) {
        this.searchUsers.length = 0;
        for (var i = 0; i < this.userService.users.length; i++) {
            if (this.userService.users[i].nombre.indexOf(name) !== -1) {
                this.searchUsers.push(this.userService.users[i]);
            }
        }
        this.searchDisplay = true;
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/users-main/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/users-main/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/users-main/user-list/user/user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/users-main/user-list/user/user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div img{\r\n    max-width: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtbWFpbi91c2VyLWxpc3QvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy1tYWluL3VzZXItbGlzdC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/users-main/user-list/user/user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/users-main/user-list/user/user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media col-8 mt-2\" id=\"modelo\">\r\n  <div class=\"media-left align-self-center mr-3\">\r\n      <img class=\"rounded-circle\" src=\"https://image.flaticon.com/icons/png/512/64/64572.png\">\r\n  </div>\r\n  <div class=\"media-body\">\r\n      <h4 class=\"nombre\">{{user.nombre}}</h4>\r\n      <p class=\"domicilio\">Domicilio: {{user.domicilio}} </p>\r\n      <p class=\"fecha\">Fecha de Nacimiento: {{user.fecha}} </p>\r\n      <p class=\"cp\">Código Postal: {{user.cp}} </p>\r\n      <p class=\"mail\">Correo: {{user.mail}} </p>\r\n      <p class=\"password\">Contraseña: {{user.password}} </p>\r\n      \r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users-main/user-list/user/user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/users-main/user-list/user/user.component.ts ***!
  \*************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user */ "./src/app/users-main/user.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.editUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.editarUser = function () {
        this.editUser.emit(this.user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserComponent.prototype, "editUser", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/users-main/user-list/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/users-main/user-list/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users-main/user.ts":
/*!************************************!*\
  !*** ./src/app/users-main/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, nombre, domicilio, fecha, cp, mail, password, rol, token) {
        this.id = id;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.fecha = fecha;
        this.cp = cp;
        this.mail = mail;
        this.password = password;
        this.rol = rol;
        this.token = token;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/users-main/users-main.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users-main/users-main.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLW1haW4vdXNlcnMtbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users-main/users-main.component.html":
/*!******************************************************!*\
  !*** ./src/app/users-main/users-main.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  users-main works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/users-main/users-main.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users-main/users-main.component.ts ***!
  \****************************************************/
/*! exports provided: UsersMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersMainComponent", function() { return UsersMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersMainComponent = /** @class */ (function () {
    function UsersMainComponent() {
    }
    UsersMainComponent.prototype.ngOnInit = function () {
    };
    UsersMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-main',
            template: __webpack_require__(/*! ./users-main.component.html */ "./src/app/users-main/users-main.component.html"),
            styles: [__webpack_require__(/*! ./users-main.component.css */ "./src/app/users-main/users-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersMainComponent);
    return UsersMainComponent;
}());



/***/ }),

/***/ "./src/app/users-main/users.service.ts":
/*!*********************************************!*\
  !*** ./src/app/users-main/users.service.ts ***!
  \*********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.cambiaDato = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userLogged = false;
        this.local = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.users = [];
        this.usersMails = [];
        this.admins = [];
    }
    UsersService.prototype.getNextId = function () {
        return this.lastid;
    };
    UsersService.prototype.containsMail = function (mail) {
        return this.usersMails.includes(mail);
    };
    UsersService.prototype.containsAdmin = function (mail) {
        return this.admins.includes(mail);
    };
    UsersService.prototype.addMail = function (mail) {
        this.usersMails.push(mail);
    };
    UsersService.prototype.addUser = function (user) {
        this.getUsers();
        var body = {
            id: this.lastid + 1,
            nombre: user.nombre,
            domicilio: user.domicilio,
            fecha: user.fecha,
            cp: user.cp,
            mail: user.mail,
            password: user.password,
            rol: 'user',
            token: '123'
        };
        //console.log(JSON.stringify(body));
        this.http.post(this.local + '/usuarios', body)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        if (!this.containsMail(user.mail)) {
            this.addMail(user.mail);
            this.users.push(Object.assign({}, user));
            this.notificarCambios();
        }
    };
    UsersService.prototype.getLoggedUser = function (mail) {
        var _this = this;
        this.http.get(this.local + '/usuario/' + mail)
            .subscribe(function (data) {
            _this.loggedUser = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    UsersService.prototype.logIn = function (email, pw) {
        var body = {
            mail: email,
            password: pw,
        };
        this.http.post(this.local + '/user/login', body)
            .subscribe(function (data) {
        }, function (err) {
            console.log(err);
        });
    };
    UsersService.prototype.editUser = function (user) {
        var _this = this;
        var body = {
            id: user.id,
            nombre: user.nombre,
            domicilio: user.domicilio,
            fecha: user.fecha,
            cp: user.cp,
            mail: user.mail,
            password: user.password,
            rol: user.rol,
            token: user.token
        };
        this.getLoggedUser(this.loggedUser.mail);
        this.http.patch(this.local + '/usuario/' + this.loggedUser.mail, body, { headers: { 'x-auth': this.loggedUser.token } })
            .subscribe(function (data) {
            console.log(data);
            var pos = _this.users.findIndex(function (u) { return u.id === user.id; });
            Object.assign(_this.users[pos], user);
            _this.notificarCambios();
        }, function (err) {
            console.log(err);
        });
        // const pos = this.users.findIndex(u => u.id === user.id);
        // Object.assign(this.users[pos], user);
        // this.notificarCambios();
    };
    UsersService.prototype.getUsers = function () {
        var _this = this;
        this.http.get(this.local + '/usuarios')
            .subscribe(function (data) {
            _this.users = data;
            _this.lastid = _this.users.length;
            _this.users.forEach(function (u) {
                _this.addMail(u.mail);
                if (u.rol === 'admin') {
                    _this.admins.push(u.mail);
                }
            });
            console.log(_this.users);
        }, function (err) {
            console.log(err);
        });
    };
    UsersService.prototype.getUser = function (id) {
        var pos = this.users.findIndex(function (u) { return u.id === id; });
        return Object.assign({}, this.users[pos]);
    };
    UsersService.prototype.notificarCambios = function () {
        this.cambiaDato.next(this.users.slice());
    };
    UsersService.prototype.passwordMatch = function (password, id) {
        var user = this.getUser(id);
        return user.password === password;
    };
    UsersService.prototype.getUserId = function (mail) {
        if (this.containsMail(mail)) {
            var posMail = this.usersMails.indexOf(mail);
            posMail++;
            return posMail;
        }
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/venta/venta.component.css":
/*!*******************************************!*\
  !*** ./src/app/venta/venta.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbnRhL3ZlbnRhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/venta/venta.component.html":
/*!********************************************!*\
  !*** ./src/app/venta/venta.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  venta works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/venta/venta.component.ts":
/*!******************************************!*\
  !*** ./src/app/venta/venta.component.ts ***!
  \******************************************/
/*! exports provided: VentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaComponent", function() { return VentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admins_main_admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admins-main/admins.service */ "./src/app/admins-main/admins.service.ts");



var VentaComponent = /** @class */ (function () {
    function VentaComponent(adminservice) {
        this.adminservice = adminservice;
        this.usuario = '';
        this.cantidades = [];
        this.productos = [];
        this.total = 0;
    }
    VentaComponent.prototype.ngOnInit = function () {
    };
    VentaComponent.prototype.NewVta = function (V) {
        this.adminservice.crearVenta(V);
    };
    VentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-venta',
            template: __webpack_require__(/*! ./venta.component.html */ "./src/app/venta/venta.component.html"),
            styles: [__webpack_require__(/*! ./venta.component.css */ "./src/app/venta/venta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admins_main_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"]])
    ], VentaComponent);
    return VentaComponent;
}());



/***/ }),

/***/ "./src/app/venta/venta.ts":
/*!********************************!*\
  !*** ./src/app/venta/venta.ts ***!
  \********************************/
/*! exports provided: Venta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Venta", function() { return Venta; });
var Venta = /** @class */ (function () {
    function Venta(nombre, productos, cantidad, total) {
        this.nombre = nombre;
        this.productos = productos;
        this.cantidad = cantidad;
        this.total = total;
    }
    return Venta;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://distribucionesgaona.herokuapp.com/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\titin\Desktop\Diseño Web\angular\p\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map