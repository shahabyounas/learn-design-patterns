"use client";
import {  useState } from "react";
import { faker } from "@faker-js/faker";
import { Observable, Observer } from "@/app/models";
import { Card, ObservableCard, ObserverCard, NavBar } from "@/components";
import { getRandId } from "./util";


export default function Home() {
  const [observables, setbservables] = useState<Observable[]>([]);
  const [observers, setObservers] = useState<Observer[]>([]);

  function addObservableHandler() {
    const Id = getRandId();
    const companyName = faker.company.buzzAdjective()
    const observable = new Observable(Id, companyName);
    if(observables.length){
      return
    }
    setbservables([...observables, observable]);
  }

  function addObserversHanlder() {
    const observers = Array(14).fill("").map(() => new Observer(getRandId(), faker.person.fullName()));
    setObservers(observers);
  }

  function subscribeButtonHandler(id: string): any {
    const observable = observables[0];
    const ObserverFound = observers.find((obsr: Observer) => obsr.id == id);
    const observableHasObserver = observable.observers.find((obsr: Observer) => obsr.id == id)

    if(observableHasObserver){
      return
    }
    observable.attach(ObserverFound!);

    setObservers((probservers) => {
      return probservers.map(obsr => {
        if(obsr.id == id){
          return { ...obsr, isSubscribed: true }
        }
        return obsr;
      })
    })

    setbservables([observable]);
  }

  function updateObservers(observable: Observable): Observer[]{
    const notifyObservers = observable.observers;

    const updateobservers = observers.map((sub: Observer) => {
      const foundObserver = notifyObservers.find((o: Observer) => o.id == sub.id);
      if (foundObserver) return { ...foundObserver, notifyObserver: true, isSubscribed: true };
      return sub;
    });

    return updateobservers;
  }

  function notificationRead(observable: Observable){
    const notifyObservers = observable.observers;

    const updateobservers = observers.map((obsr: Observer) => {
      const foundObserver = notifyObservers.find((o: Observer) => o.id == obsr.id);
      if (foundObserver) return { ...foundObserver, notifyObserver: false, isSubscribed: true  };
      return obsr;
    });

    setObservers(updateobservers);
  }

  function notifyObserversHandler(id: string){
    const observable = observables.find((obl: Observable) => obl.id == id);

    if(!observable){
      return null
    }

    const observers = updateObservers(observable)

    setObservers(observers);

    setTimeout(() => {
      notificationRead(observable)
     }, 1000);
  }

  return (
    <main className="flex flex-col">
      <NavBar />
      <div className="flex flex-wrap">
        <div className="min-w-40">
          <h3 className="mx-2">Observer Design Pattern</h3>
          <div className="max-w-sm min-h-48 p-8 min-w-4 bg-white mx-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Card onClickButton={addObserversHanlder} onClickHandler={addObservableHandler}  />
          </div>
        </div>

        <div className="min-w-72 mt-6 p-3 border rounded">
          <h5> Publisher </h5>
          <div className="flex">
            {observables.map((item: Observable) => (
              <div key={item.id}>
                <ObservableCard
                  {...item}
                  notify={item.notify}
                  onClick={notifyObserversHandler}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-6">
        <h5 className="mx-3 font-bold"> Subscribers </h5>
        <div className="flex min-h-80 gap-x-2 m-3 p-3 flex-wrap justify-items-center justify-between border rounded">
          {observers.map((sub: Observer) => (
            <div key={sub.id}>
              <ObserverCard
                {...sub}
                onClick={() => subscribeButtonHandler(sub.id)}
                update={function (subject: Observable): void {}}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
