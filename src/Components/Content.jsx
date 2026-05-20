import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import StatsPanel from './StatsPanel';
import PlayerTable from './PlayerTable';

function Content() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

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
      />
      <PlayerTable debouncedSearch={debouncedSearch} />
    </div>
  );
}

export default Content;
