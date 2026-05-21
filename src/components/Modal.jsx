function Modal({ isOpen, player, onClose }) {
  if (!isOpen || !player) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 dark:text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Detalle del jugador
            </p>
            <h2 className="text-3xl font-bold mt-2">{player.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {player.club}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-gray-300 bg-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-200 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-gray-100 p-4 dark:bg-slate-800">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Posición
            </p>
            <p className="mt-2 text-lg font-semibold">{player.position}</p>
          </div>
          <div className="rounded-2xl bg-gray-100 p-4 dark:bg-slate-800">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              País
            </p>
            <p className="mt-2 text-lg font-semibold">{player.country}</p>
          </div>
          <div className="rounded-2xl bg-gray-100 p-4 dark:bg-slate-800">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Edad
            </p>
            <p className="mt-2 text-lg font-semibold">{player.age}</p>
          </div>
          <div className="rounded-2xl bg-gray-100 p-4 dark:bg-slate-800">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Rating
            </p>
            <p className="mt-2 text-lg font-semibold">{player.rating}</p>
          </div>
          <div className="rounded-2xl bg-gray-100 p-4 dark:bg-slate-800">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Goles
            </p>
            <p className="mt-2 text-lg font-semibold">{player.goals}</p>
          </div>
          <div className="rounded-2xl bg-gray-100 p-4 dark:bg-slate-800">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Asistencias
            </p>
            <p className="mt-2 text-lg font-semibold">{player.assists}</p>
          </div>
          <div className="rounded-2xl bg-gray-100 p-4 dark:bg-slate-800 sm:col-span-2">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Favorito
            </p>
            <p className="mt-2 text-lg font-semibold">
              {player.fav ? 'Sí' : 'No'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
