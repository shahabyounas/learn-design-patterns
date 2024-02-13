export function NavBar() {
  return (
    <nav className="bg-black text-white rounded-sm border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Observer Design pattern
        </span>
        <div className="flex items-center space-x-6 rtl:space-x-reverse"></div>
      </div>
    </nav>
  );
}
