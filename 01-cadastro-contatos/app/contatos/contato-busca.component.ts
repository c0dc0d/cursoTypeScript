import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';

import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
        .cursor-pointer:hover {
            cursor: pointer;
        }
    `]
})

export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit() { 
        this.contatos = this.termosDaBusca
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([]))
            .catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);
            });
    }

    search(termo: string):void {
        this.termosDaBusca.next(termo);
    }

    verDetalhe(contato: Contato): void{
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
    }
}