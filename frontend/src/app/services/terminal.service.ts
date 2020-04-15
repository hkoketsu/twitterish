import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private switchSubject = new BehaviorSubject(false);
  terminalOn = this.switchSubject.asObservable();

  private apiUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
      console.log(baseUrl);
      this.apiUrl = baseUrl + 'command/';
    }

  openTerminal(on: boolean) {
    this.switchSubject.next(on);
  }

  getCommandResponse(command: string) {
    return this.http.get(this.apiUrl + command);
  }
}
