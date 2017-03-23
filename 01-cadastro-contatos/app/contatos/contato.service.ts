import { Injectable } from '@angular/core';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()
export class ContatoService{

    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }

    getContatosSloly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        })
        .then(() => {
            console.log("prmeiro then");
            return "Igor Soares de Freitas";
        })
        .then((param: String) => {
            console.log("segundo then");
            console.log(param);
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log("continuando segundo then");
                    resolve2();
                }, 4000);
            });
            
        })
        .then(() => {
            console.log("terceiro then");
            return this.getContatos();
        });
    }

}