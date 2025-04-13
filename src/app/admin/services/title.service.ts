import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject<string>('Título de Mi Página');
  currentTitle = this.titleSubject.asObservable();

  setTitle(newTitle: string) {
    this.titleSubject.next(newTitle);
  }
}
