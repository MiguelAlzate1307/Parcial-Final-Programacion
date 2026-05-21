function Pagination({
  currentPage,
  OnPageChange,
  itemsPerPage,
  OnItemsPerPageChange,
  totalPages,
}) {
  return (
    <div className="flex justify-between items-center mt-6 text-white">
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">MOSTRAR</span>

        <select
          value={itemsPerPage}
          onChange={(e) => OnItemsPerPageChange(Number(e.target.value))}
          className="bg-gray-200 text-black text-sm px-3 py-1 rounded-md outline-none cursor-pointer"
        >
          <option value={5}>5 por página</option>
          <option value={10}>10 por página</option>
          <option value={20}>20 por página</option>
        </select>
      </div>
      <div className="flex items-center gap-1 shadow-lg border border-gray-200 dark:border-0 text-gray-950 dark:bg-[#2A2D3E] px-2 py-1 rounded-md">
        <button
          onClick={() => OnPageChange(1)}
          disabled={currentPage <= 1}
          className="px-2 dark:text-gray-400 dark:hover:text-white hover:text-gray-800 hover:cursor-pointer"
        >
          «
        </button>
        <button
          onClick={() => OnPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage <= 1}
          className="px-2 dark:text-gray-400 dark:hover:text-white hover:text-gray-800 hover:cursor-pointer"
        >
          ‹
        </button>
        {[...Array(totalPages)].map((_, i) => {
          const pageNumber = i + 1;

          return (
            <button
              key={i}
              onClick={() => OnPageChange(pageNumber)}
              className={`px-3 py-1 rounded text-sm ${
                currentPage === pageNumber
                  ? 'bg-orange-500 text-white'
                  : 'dark:text-gray-300 dark:hover:text-white hover:text-gray-800 hover:cursor-pointer'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => OnPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage >= totalPages}
          className="px-2 dark:text-gray-400 dark:hover:text-white hover:text-gray-800 hover:cursor-pointer"
        >
          ›
        </button>
        <button
          onClick={() => OnPageChange(totalPages)}
          disabled={currentPage >= totalPages}
          className="px-2 dark:text-gray-400 dark:hover:text-white hover:text-gray-800 hover:cursor-pointer"
        >
          »
        </button>
      </div>
    </div>
  );
}

export default Pagination;
