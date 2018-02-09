import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PersonagemComponent } from './personagem.component';
import { async } from '@angular/core/testing';

@Injectable()
export class PersonagemService {
    http: Http;
    url: string = 'https://swapi.co/api/people?page=';

    constructor(http: Http) {

        this.http = http;
    }

    lista(page: number): Promise<PersonagemComponent[]> {
        // return this.http
        // .get(this.url + page)
        // .map(res => res.json().results);
        return new Promise<PersonagemComponent[]>(resolve => {
            this.http
                .get(this.url + page)
                .map(res => res.json())
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
                    .get(url)
                    .map(res => res.json())
                    .subscribe(n => resolve(n[attr]));
        });
    }
}