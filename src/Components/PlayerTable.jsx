import { useEffect } from 'react';
import { players } from '../utils/players-data';
import PlayerRow from './PlayerRow';

function PlayerTable({
  debouncedSearch,
  OnFilteredCount,
  itemsPerPage,
  currentPage,
}) {
  const filteredPlayers = players.filter(
    (p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      p.club.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  useEffect(() => {
    OnFilteredCount(filteredPlayers.length);
  }, [filteredPlayers.length, OnFilteredCount]);

  return (
    <div className="mt-4">
      <div className="flex space-x-3">
        <button className="border border-yellow-400 text-yellow-400 rounded-sm p-1 hover:cursor-pointer hover:scale-105 transition duration-75 hover:bg-yellow-400 hover:text-gray-950">
          Pintar filas pares
        </button>
        <button className="border border-yellow-400 text-yellow-400 rounded-sm p-1 hover:cursor-pointer hover:scale-105 transition duration-75 hover:bg-yellow-400 hover:text-gray-950">
          Pintar filas impares
        </button>
        <button className="border border-gray-400 text-gray-400 rounded-sm p-1 hover:cursor-pointer hover:scale-105 transition duration-75 hover:bg-gray-400 hover:text-white">
          Limpiar color
        </button>
      </div>
      <div className="w-full overflow-y-hidden overflow-x-scroll xl:overflow-x-hidden mt-4 rounded-lg shadow-lg">
        <table className="w-full">
          <thead className="bg-gray-950">
            <tr>
              <th className="text-white uppercase py-2 px-4">Fav</th>
              <th className="text-white uppercase py-2 px-4">Jugador</th>
              <th className="text-white uppercase py-2 px-4">Club</th>
              <th className="text-white uppercase py-2 px-4">Posición</th>
              <th className="text-white uppercase py-2 px-4">País</th>
              <th className="text-white uppercase py-2 px-4">Edad</th>
              <th className="text-white uppercase py-2 px-4">Goles</th>
              <th className="text-white uppercase py-2 px-4">Asistencias</th>
              <th className="text-white uppercase py-2 px-4">Rating</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-950">
            {filteredPlayers.slice(start, end).map((p, i) => (
              <PlayerRow key={i} player={p} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayerTable;
