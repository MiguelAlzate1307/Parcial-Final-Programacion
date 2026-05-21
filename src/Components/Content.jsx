import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import StatsPanel from './StatsPanel';
import PlayerTable from './PlayerTable';
import Pagination from './Pagination';
import { players } from '../utils/players-data';

function Content() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [totalFav, setTotalFav] = useState(players.filter((p) => p.fav).length);

  const totalPages = Math.round(totalItems / itemsPerPage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 250);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="w-full dark:bg-[#202020] rounded-md bg-white min-h-screen p-8">
      <SearchBar search={search} OnSearch={setSearch} />
      <StatsPanel
        debouncedSearch={debouncedSearch}
        OnSearchByHistory={setSearch}
        totalItems={totalItems}
        totalFav={totalFav}
      />
      <PlayerTable
        debouncedSearch={debouncedSearch}
        OnFilteredCount={setTotalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        OnChangeFav={setTotalFav}
      />
      <Pagination
        totalPages={totalPages === 0 ? 1 : totalPages}
        currentPage={currentPage}
        OnPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        OnItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
}

export default Content;
