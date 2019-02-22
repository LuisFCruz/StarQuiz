import { IPersonagem } from './../models';

import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, combineLatest, of, merge } from 'rxjs';
import 'rxjs/add/observable/from';
import { LocalStorageService } from './localStorage.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonagemService {
  url = 'https://swapi.co/api/';

  constructor(private storage: LocalStorageService, private http: HttpClient) {}

  getAll(pages: number[]): Observable<IPersonagem[]> {
    const requests = pages.map((page: number) => this.lista(page));

    return forkJoin<IPersonagem[]>(requests).pipe(
      map(res => res.reduce((aggr, list) => [...aggr, ...list], [])),
      switchMap(res => this.personagemComComplementos(res))
    );
  }

  reduceUrls(personagens: any[]) {
    const seed = {
      films: [],
      vehicles: [],
      homeworld: [],
      species: []
    };
    return personagens.reduce(
      (aggr, { films, vehicles, homeworld, species }) => {
        aggr.films = this.unique([...aggr.films, ...films]);
        aggr.vehicles = this.unique([...aggr.vehicles, ...vehicles]);
        aggr.homeworld = this.unique([...aggr.homeworld, homeworld]);
        aggr.species = this.unique([...aggr.species, ...species]);
        return aggr;
      },
      seed
    );
  }

  personagemComComplementos(personagens: any[]) {
    const urls = this.reduceUrls(personagens);

    const filmsObservable = this.complementos(urls.films, 'title');
    const vehiclesObservable = this.complementos(urls.vehicles, 'name');
    const homeworldObservable = this.complementos(urls.homeworld, 'name');
    const speciesObservable = this.complementos(urls.species, 'name');
    return combineLatest(
      filmsObservable,
      vehiclesObservable,
      homeworldObservable,
      speciesObservable
    ).pipe(
      map(([films, vehicles, homeworld, species]) => {
        const complementos = { films, vehicles, homeworld, species };
        return this.merge(personagens, complementos);
      })
    );
  }

  lista(page: number): Observable<any[]> {
    return this.get(`${this.url}people?page=${page}`).pipe(
      map((people: { results: [] }) => people.results)
    );
  }

  complementos(urls: string[], attr: string): Observable<string> {
    const requests = urls.map(url => this.complementoNome(url, attr));
    return forkJoin(requests).pipe(
      map(res => res.reduce((aggr, item) => ({ ...aggr, ...item }), {}))
    );
  }

  complementoNome(url: string, attr: string): Observable<any> {
    return this.get(url).pipe(
      map(res => {
        const complemento = {};
        const id = this.getId(url);
        complemento[id] = res[attr];
        return complemento;
      })
    );
  }

  get(url: string): Observable<any> {
    if (this.storage.hasItem(url)) {
      return this.storage.getItem(url);
    }
    return this.http.get(url).pipe(
      map(res => {
        this.storage.setItem(url, res);
        return res;
      })
    );
  }

  unique(items: any[]) {
    return items.filter((value, index, self) => self.indexOf(value) === index);
  }

  merge(personagens: any, complementos: any): IPersonagem[] {
    return personagens.map((personagem: any) => {
      const filmes = this.extrairTodosComplementos(
        personagem.films,
        complementos.films
      );
      const veiculos = this.extrairTodosComplementos(
        personagem.vehicles,
        complementos.vehicles
      );
      const planeta = this.extrairComplemento(
        personagem.homeworld,
        complementos.homeworld
      );
      const especies = this.extrairTodosComplementos(
        personagem.species,
        complementos.species
      );

      const {
        name: nome,
        height: altura,
        hair_color: corCabelo,
        skin_color: corPele
      } = personagem;

      const newPersonagem: IPersonagem ={
        id: this.getId(personagem.url),
        nome,
        altura,
        corCabelo,
        corPele,
        filmes,
        veiculos,
        planeta,
        especies,
        estaRespondido: false,
        usouDica: false
      };

      return newPersonagem;
    });
  }

  extrairTodosComplementos(urls: string[], complementos): string {
    return urls.map(url => this.extrairComplemento(url, complementos)).join(', ') || 'n/a';
  }

  extrairComplemento(url: string, complementos: any[]) {
    const id = this.getId(url);
    return complementos[id];
  }

  getId(url: string): string {
    return url.replace(/[^\d]/g, '');
  }
}
