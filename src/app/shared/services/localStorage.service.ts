import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LocalStorageService {
  hasItem(name: string): boolean {
    return localStorage.hasOwnProperty(name);
  }

  getItem(name: string): Observable<any> {
    return new Observable(observer => {
      const value = localStorage.getItem(name);
      observer.next(JSON.parse(value) || null);
      observer.complete();
    });
  }

  setItem(name: string, item: any): void {
    localStorage.setItem(name, JSON.stringify(item));
  }
}
