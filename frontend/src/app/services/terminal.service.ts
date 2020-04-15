import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private switchSubject = new BehaviorSubject(false);
  terminalOn = this.switchSubject.asObservable();


  constructor() { }

  openTerminal(on: boolean) {
    this.switchSubject.next(on);
  }
}
