interface CardProps {
  onClickHandler: Function;
  onClickButton: Function;
}

export function Card(props: CardProps) {
  return (
    <div className="max-w-sm min-h-48 p-8 min-w-4 bg-white mx-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <button
      className="border font-bold px-5 text-sm rounded p-1 bg-black text-white"
      onClick={() => props.onClickButton()}
    >
      <small> Add Observers </small>
    </button>
    <div className="flex flex-col justify-start">
      <div className="flex justify-between items-center my-2">
        <button className="font-bold px-4 text-sm rounded p-1 bg-black text-white" onClick={() => props.onClickHandler()}>
          <small> Add Observable </small>
        </button>
      </div>
    </div>
  </div>
  );
}
