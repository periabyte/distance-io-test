import { Suspense } from "react";
import SearchForm from "~/components/SearchForm";
import SearchResults from "~/components/SearchResults";
import type { SearchItem } from "~/types";


export default async function SearchTest({ searchParams }: { searchParams: Promise<{ term?: string }> }) {
  const searchTerm = (await searchParams).term ?? '';
  const results = await fetch(`http://localhost:3000/api/search${searchTerm ? `?term=${searchTerm}` : ''}`);
  const resultsJSON = await results.json();

  return (
    <div className="flex flex-col gap-2 max-w-xl">
      <h1>Distance Search Test</h1>
      <p>
        This quick search uses Next.js features to search for items in a <span className="code">route.ts</span> file inside the next.js app router
        using the <span className="code">useRouter</span> hook to update the search term in the URL and load the search results
      </p>

      <div className="flex flex-col gap-2 border-gray-600 card">
        <Suspense fallback={<p>Loading...</p>}>
          <SearchForm term={searchTerm} />
        </Suspense>
        <SearchResults term={searchTerm} data={resultsJSON as SearchItem[]} />
      </div>
    </div>
  );
}
