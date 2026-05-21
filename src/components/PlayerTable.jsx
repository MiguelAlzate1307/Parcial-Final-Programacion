import { useState } from 'react';
import PlayerRow from './PlayerRow';

function PlayerTable({
  itemsPerPage,
  currentPage,
  OnChangeFav,
  OnSelectPlayer,
  players,
}) {
  const [rowColors, setRowColors] = useState('none');

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paintRows = (index) => {
    if (rowColors === 'none') return '';

    if (rowColors === 'pares' && index % 2 === 0) return 'bg-blue-200';

    if (rowColors === 'impares' && index % 2 !== 0) return 'bg-blue-200';
  };

  return (
    <div className="mt-4">
      <div className="flex space-x-3">
        <button
          onClick={() => setRowColors('pares')}
          className="border border-yellow-400 text-yellow-400 rounded-sm p-1 hover:cursor-pointer hover:scale-105 transition duration-75 hover:bg-yellow-400 hover:text-gray-950"
          disabled={rowColors === 'pares'}
        >
          Pintar filas pares
        </button>
        <button
          onClick={() => setRowColors('impares')}
          className="border border-yellow-400 text-yellow-400 rounded-sm p-1 hover:cursor-pointer hover:scale-105 transition duration-75 hover:bg-yellow-400 hover:text-gray-950"
          disabled={rowColors === 'impares'}
        >
          Pintar filas impares
        </button>
        <button
          onClick={() => setRowColors('none')}
          className="border border-gray-400 text-gray-400 rounded-sm p-1 hover:cursor-pointer hover:scale-105 transition duration-75 hover:bg-gray-400 hover:text-white"
          disabled={rowColors === 'none'}
        >
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
            {players.slice(start, end).map((p, i) => (
              <PlayerRow
                key={i}
                player={p}
                OnChangeFav={OnChangeFav}
                OnSelectPlayer={OnSelectPlayer}
                rowColor={paintRows(i + 1)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayerTable;
