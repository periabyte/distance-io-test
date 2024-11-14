'use client'

import { useEffect, useState, type FC } from "react";
import SearchResults from "./SearchResults";
import type { SearchItem } from "~/types";


const ClientSearchForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [term, setTerm] = useState<string>('');
  const [results, setResults] = useState<SearchItem[]>([]);

  const handleSearch = async (term:string) => {
    setLoading(true);

    const url = new URL('/api/search', window.location.origin);
    url.searchParams.set('term', term);

    try {
      const response = await fetch(url.toString());
      const data = await response.json();
        
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void handleSearch(term);
  }, [term]);
  
  console.log('data', results)

  return (
    <div className="flex flex-col gap-2">
      <input
        className="border border-gray-300 rounded p-2"
        type="text"
        placeholder="Search"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResults term={term} data={results} />
      )}
    </div>
  );
}

export default ClientSearchForm;
