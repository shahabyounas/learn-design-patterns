import { Observer } from "@/app/models";
import { getRandId } from "@/app/util";

export function ObserverCard(props: Observer) {
  const notifyObserver =   props.notifyObserver;
  const subscribe  = props.isSubscribed ? 'Subscried' : 'Subscribe Now'
  return (
      <div key={notifyObserver && getRandId()} className={`max-w-sm my-1 bg-white mx-1 min-h-36 min-w-48 border 
                border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${notifyObserver && 'splash-card-bg'}`}>
        <div className="p-5">
          <p className="whitespace-break-spaces flex justify-between font-bold tracking-tight text-gray-900 dark:text-white">
            <span>
              {props.name}
            </span>
          </p>
            <button className="bg-black text-white px-3 rounded" onClick={() => props.onClick(props.id)}> {subscribe} </button>
        </div>
      </div>
  );
}
