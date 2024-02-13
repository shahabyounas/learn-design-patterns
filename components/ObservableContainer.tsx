import { Observable } from "@/app/models";

export function ObservableContainer(props: any) {
    return (
      <div className="flex my-3">
        <p className="font-normal text-gray-500 dark:text-gray-400">
          Publishers List
        </p>
        <div className="mt-2 divide-gray-200 rounded">
          <ul className="border divide-y divide-gray-200">
            {props.pubsList.map((item: Observable) => (
              <li className="p-2" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }