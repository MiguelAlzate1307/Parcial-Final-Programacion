import SearchHistory from './SearchHistory';

function StatsPanel({ debouncedSearch, OnSearchByHistory }) {
  return (
    <div className="grid grid-cols-5 gap-4 mt-6">
      <div className="bg-yellow-400 p-4 rounded-lg text-black">
        <p className="text-xs font-semibold">JUGADORES EN TABLA</p>
        <h2 className="text-3xl font-bold mt-1">1</h2>

        <span className="text-xs bg-black text-yellow-400 px-2 py-1 rounded mt-2 inline-block">
          Favoritos: 1
        </span>
      </div>
      <div className="shadow-lg dark:bg-[#2A2D3E] p-4 rounded-lg">
        <p className="text-xs text-gray-400">PROMEDIO DE GOLES</p>
        <h2 className="text-xl font-semibold mt-2">24.0</h2>
      </div>
      <div className="shadow-lg dark:bg-[#2A2D3E] p-4 rounded-lg">
        <p className="text-xs text-gray-400">PROMEDIO DE EDAD</p>
        <h2 className="text-xl font-semibold mt-2">37 años</h2>
      </div>
      <div className="shadow-lg dark:bg-[#1F2937] p-4 rounded-lg">
        <p className="text-xs text-gray-400">MÁXIMO GOLEADOR</p>
        <h2 className="text-lg font-semibold mt-2">Lionel Messi</h2>
      </div>
      <SearchHistory
        debouncedSearch={debouncedSearch}
        OnSearchByHistory={OnSearchByHistory}
      />
    </div>
  );
}

export default StatsPanel;
