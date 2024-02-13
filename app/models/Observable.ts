import {  Observer } from "./Observer";

 export interface ObservableInterface {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

 class Observable implements ObservableInterface {
    id: string;
    name: string;
    observers: Observer[] = []

    constructor(id: string, name: string) {
      (this.id = id), 
      (this.name = name);
    }

    public attach(observer: Observer): void {
      const isExist = this.observers.includes(observer)
      if(isExist){
        return 
      }
      this.observers.push(observer)
    }

    detach(observer: Observer): void {
        
    }

    public notify() {
        for (const observer of this.observers) {
          observer.update(this);
        }
    }

    public notificationRead(): void{
      this.observers.forEach((o) => {
        return {
          ...o,
          notifyObserver: false
        }
      })

      this.notify()
    }


  }

  export {
    Observable
  }