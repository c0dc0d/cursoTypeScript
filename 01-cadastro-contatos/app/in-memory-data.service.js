"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'Fulano de Tal1', email: 'fulano1@email.com', telefone: '(10) 0000-0000' },
            { id: 2, nome: 'Fulano de Tal2', email: 'fulano2@email.com', telefone: '(20) 0000-0000' },
            { id: 3, nome: 'Fulano de Tal3', email: 'fulano3@email.com', telefone: '(30) 0000-0000' },
            { id: 4, nome: 'Fulano de Tal4', email: 'fulano4@email.com', telefone: '(40) 0000-0000' }
        ];
        return { contatos: contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map