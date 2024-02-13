
export function ObservableCard(props: any) {
  return (
    <div className="max-w-sm flex min-h-48 my-1 mx-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <button
          className="bg-black text-white p-1 text-sm px-4 rounded mx-1"
          onClick={() => {
            props.notify();
            props.onClick(props.id);
          }}
        >
          Notify Observers
        </button>
        <p className="font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
          <small>{`${props.name}--Publisher`}</small>
        </p>
      </div>
      <div className="px-3">
      <small> Registered Observers </small>
        <ul className="min-h-36 max-h-40 border overflow-auto rounded-sm p-1 px-2">
          {props.observers.map((o: any) => (
            <li key={o.id}>
              <small> {o.name} </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
