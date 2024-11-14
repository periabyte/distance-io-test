import type { FC } from "react";
import type { SearchItem } from "~/types";

export type SearchResultsProps = {
  data: SearchItem[],
  term: string
}


const SearchResults: FC<SearchResultsProps> = ({ data = [], term = '' }) => {
  if (data.length === 0 && term.length > 0) {
    return <p>No results found</p>
  }

  if (data.length === 0 && term.length === 0) {
    return <p>Search for something...</p>;
  }

  return (
    <ul>
      {data.map((result) => (
        <li key={result.id}>
          <h2>{result.name}</h2>
        </li>
      ))}
    </ul>
  )
}

export default SearchResults;