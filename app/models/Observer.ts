import {  ObservableInterface } from "./Observable";

export interface ObserverInterface {
    update(subject: ObservableInterface) :void;
}

export class Observer implements ObserverInterface {
    id: string;
    name: string;
    isSubscribed: Boolean;
    public notifyObserver: Boolean = false;

    constructor(id: string, name: string) {
        this.id = id, 
        this.name = name;
        this.isSubscribed = false;
      }

    update(subject: ObservableInterface) :void {}

    onClick(id: string): string { return this.id; }
}

