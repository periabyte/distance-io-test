
import ClientSearchForm from "~/components/ClientSearchForm";

export default async function SearchTest() {
  return (
    <div className="flex flex-col gap-2 max-w-xl">
      <h1 className="text-lg font-bold text-center">Distance Search Test</h1>
      <p>
        This version search uses React.js features to search for items from an endpoint but only on the client side
        using the <span className="code">useState</span> and <span className="code">useEffect</span> hooks to update the search term in the URL and load the search results
      </p>
      <div className="flex flex-col gap-2 border-gray-600 shadow-md p-2 rounded bg-white">
        <ClientSearchForm />
      </div>
    </div>
  );
}
