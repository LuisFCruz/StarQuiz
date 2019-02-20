import { IPersonagem } from './../models';

import {map} from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonagemService {
    http: Http;
    url: string = 'https://swapi.co/api/people?page=';

    constructor(http: Http) {

        this.http = http;
    }

    lista(page: number): Promise<IPersonagem[]> {
        return new Promise<IPersonagem[]>(resolve => {
            this.http
                .get(this.url + page).pipe(
                map(res => res.json()))
                .subscribe(res => {

                    res.results.map(n => {
                        n.id = n.url.replace(/[^\d]+/g, "");
                        n.image = `assets/images/personagens/${n.id}.jpg`
                        n.mostrarResponder = false;
                        n.estaRespondido = false;
                        n.pontos = 0;
                        n.especies = "";
                    });
                    
                    resolve(res.results)
                });
        });
    }

    async complementos(urls: string[], attr: string): Promise<string> {
       
        let nomes = [];

        nomes = await Promise.all(urls.map(async (url): Promise<string> => {
            let nome = this.complementoNome(url, attr); 
            return await nome;
        }));

        return nomes.join(", ");
    }

    async complementoNome(url: string, attr: string): Promise<string> {
        
        return new Promise<string>(resolve => {
                this.http
                    .get(url).pipe(
                    map(res => res.json()))
                    .subscribe(n => resolve(n[attr]));
        });
    }
}