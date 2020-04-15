import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private backgroundColorSubject = new BehaviorSubject('#000');
  backgroundColor = this.backgroundColorSubject.asObservable();

  private textColorSubject = new BehaviorSubject('#fff');
  textColor = this.textColorSubject.asObservable();


  constructor() { }

  public changeBackgroundColor(nextColor: string) {
    this.backgroundColorSubject.next(nextColor);
  }

  public changeTextColor(nextColor: string) {
    this.textColorSubject.next(nextColor);
  }
}
