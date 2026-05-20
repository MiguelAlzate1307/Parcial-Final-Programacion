import { useEffect, useState } from 'react';

function SearchHistory({ debouncedSearch, OnSearchByHistory }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const search = debouncedSearch.trim();
    if (search === '') return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHistory((prev) => {
      if (prev.includes(search)) return prev;
      return [search, ...prev.slice(0, 4)];
    });
  }, [debouncedSearch]);

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="bg-transparent p-2 text-white">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xs text-gray-400">HISTORIAL DE BÚSQUEDA</p>

        <button
          onClick={clearHistory}
          className="text-xs border border-gray-500 px-2 py-1 rounded text-gray-400 hover:text-white hover:cursor-pointer hover:scale-105 transition duration-75 hover:bg-gray-500"
        >
          Limpiar
        </button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {history.map((item, i) => (
          <button
            key={i}
            onClick={() => OnSearchByHistory(item)}
            className="bg-yellow-400 text-black text-xs px-2 py-1 rounded"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchHistory;
