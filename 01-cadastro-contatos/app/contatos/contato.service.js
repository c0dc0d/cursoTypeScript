"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ContatoService = (function () {
    function ContatoService(http) {
        this.http = http;
        this.contatosUrl = "app/contatos";
    }
    ;
    ContatoService.prototype.getContatos = function () {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(function (response) { return response.json().data; });
    };
    ContatoService.prototype.getContato = function (id) {
        return this.getContatos()
            .then(function (contatos) { return contatos.find(function (contato) { return contato.id === id; }); });
    };
    ContatoService.prototype.getContatosSloly = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 2000);
        })
            .then(function () {
            console.log("prmeiro then");
            return "Igor Soares de Freitas";
        })
            .then(function (param) {
            console.log("segundo then");
            console.log(param);
            return new Promise(function (resolve2, reject2) {
                setTimeout(function () {
                    console.log("continuando segundo then");
                    resolve2();
                }, 2000);
            });
        })
            .then(function () {
            console.log("terceiro then");
            return _this.getContatos();
        });
    };
    return ContatoService;
}());
ContatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContatoService);
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map