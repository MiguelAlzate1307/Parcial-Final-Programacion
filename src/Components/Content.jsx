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
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  const getTotalFav = () => filteredPlayers.filter((p) => p.fav).length;
  const [totalFav, setTotalFav] = useState(getTotalFav());

  const totalPages = Math.round(filteredPlayers.length / itemsPerPage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 250);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredPlayers(
      players.filter(
        (p) =>
          p.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          p.club.toLowerCase().includes(debouncedSearch.toLowerCase()),
      ),
    );
    setTotalFav(getTotalFav());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <div className="w-full dark:bg-[#202020] rounded-md bg-white min-h-screen p-8">
      <SearchBar search={search} OnSearch={setSearch} />
      <StatsPanel
        debouncedSearch={debouncedSearch}
        OnSearchByHistory={setSearch}
        totalItems={filteredPlayers.length}
        totalFav={totalFav}
        players={filteredPlayers}
      />
      <PlayerTable
        debouncedSearch={debouncedSearch}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        OnChangeFav={setTotalFav}
        players={filteredPlayers.length !== 0 ? filteredPlayers : []}
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
