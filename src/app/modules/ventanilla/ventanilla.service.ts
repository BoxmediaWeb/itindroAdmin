import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentanillaService {
  private panel$: BehaviorSubject<string> = new BehaviorSubject<string>("ventanilla");
  private secccion$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  getSeccion(){
    return this.secccion$.asObservable();
  }

  setSeccion(data: string){
    this.secccion$.next(data);
  }

    //Panel

    getPanel(){
      return this.panel$.asObservable();
    }
  
    setPanel(data: string){
      this.panel$.next(data);
    }

  constructor() { }
}
