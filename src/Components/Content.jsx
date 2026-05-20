import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

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
    </div>
  );
}

export default Content;
