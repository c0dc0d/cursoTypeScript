import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import { ContatoService } from './contato.service';
import { DialogService } from './../dialog.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit{

    contatos: Contato[] = [];
    mensagem: {};
    classesCss:{};
    currentTimeout: any;

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ){}

    ngOnInit(): void {
        this.contatoService.getContatos()
                .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                console.log(err);
                 this.mostrarMensagem({
                    tipo:'danger',
                    mensagem:'Ocorreu um erro ao buscar contatos'
                });
            });
    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar o contato' + contato.nome + '?')
            .then((canDelete: boolean) => {
                if(canDelete){
                    this.contatoService.delete(contato) 
                        .then(() => {
                            this.contatos = this.contatos.filter(c => c.id != contato.id);
                            this.mostrarMensagem({
                                tipo:'success',
                                mensagem:'Contato deletado'
                            });
                        }).catch(err => {
                            console.log(err);
                             this.mostrarMensagem({
                                tipo:'success',
                                mensagem:'Ocorreu um erro ao deletar um contato'
                            });
                        });
                }
            });
    }

    private mostrarMensagem(mensagem: {tipo: string, mensagem: string}): void{
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if(mensagem.tipo != 'danger'){
            if(this.currentTimeout){
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }

    private montarClasses(tipo: string): void{
        this.classesCss = {
            'alert': true
        }
        this.classesCss['alert-'+ tipo] = true;
    }
}