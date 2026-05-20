function SearchBar({ search, OnSearch }) {
  const handleSearch = (e) => {
    OnSearch(e.target.value);
  };

  const clearSearch = () => {
    OnSearch('');
  };

  return (
    <div className="w-full">
      <p className="text-xs uppercase text-gray-400 mb-2 tracking-wide">
        Buscar jugadores
      </p>

      <div className="flex items-center bg-gray-200 rounded-lg overflow-hidden">
        <div className="bg-yellow-400 p-3 flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-800">
            <use xlinkHref="/icons.svg#search" />
          </svg>
        </div>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Escribe un nombre o club..."
          className="w-full bg-gray-200 px-4 py-2 text-sm text-black outline-none placeholder-gray-500"
        />
        {search && (
          <button
            onClick={clearSearch}
            className="text-gray-800 right-3 h-5 w-5 hover:text-gray-950 hover:cursor-pointer hover:scale-105 transition duration-75 mr-2"
          >
            <svg className="w-4 h-4">
              <use xlinkHref="/icons.svg#close" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
