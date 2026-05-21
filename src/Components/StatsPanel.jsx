import { useMemo } from 'react';
import SearchHistory from './SearchHistory';

function StatsPanel({
  debouncedSearch,
  OnSearchByHistory,
  totalItems,
  totalFav,
  players,
}) {
  const avgGoals = useMemo(() => {
    if (players.length === 0) return 0;

    let sum = 0;

    for (const i of players) {
      sum += i.goals;
    }

    return (sum / players.length).toFixed(2);
  }, [players]);

  const avgAge = useMemo(() => {
    if (players.length === 0) return 0;

    let sum = 0;

    for (const i of players) {
      sum += i.age;
    }

    return Math.round(sum / players.length);
  }, [players]);

  const topScorer = useMemo(() => {
    if (players.length === 0) return 0;

    let topScorer = players[0];

    for (const i of players) {
      if (i.goals > topScorer.goals) topScorer = i;
    }

    return topScorer;
  }, [players]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
      <div className="bg-yellow-400 p-4 rounded-lg text-black min-h-30">
        <p className="text-xs font-semibold">JUGADORES EN TABLA</p>
        <h2 className="text-3xl font-bold mt-1">{totalItems}</h2>

        <span className="text-xs bg-black text-yellow-400 px-2 py-1 rounded mt-2 inline-block">
          Favoritos: {totalFav}
        </span>
      </div>
      <div className="shadow-lg min-h-30 dark:bg-[#2A2D3E] p-4 rounded-lg">
        <p className="text-xs text-gray-400">PROMEDIO DE GOLES</p>
        <h2 className="text-xl font-semibold mt-2">{avgGoals}</h2>
      </div>
      <div className="shadow-lg min-h-30 dark:bg-[#2A2D3E] p-4 rounded-lg">
        <p className="text-xs text-gray-400">PROMEDIO DE EDAD</p>
        <h2 className="text-xl font-semibold mt-2">{avgAge} años</h2>
      </div>
      <div className="shadow-lg min-h-30 dark:bg-[#1F2937] p-4 rounded-lg">
        <p className="text-xs text-gray-400">MÁXIMO GOLEADOR</p>
        <h2 className="text-lg font-semibold mt-2">{topScorer.name}</h2>
      </div>
      <SearchHistory
        debouncedSearch={debouncedSearch}
        OnSearchByHistory={OnSearchByHistory}
      />
    </div>
  );
}

export default StatsPanel;
