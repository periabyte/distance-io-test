
export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold">Distance Test</h1>
      <ul>
        <li>
          <a className="block underline text-blue-500" href="/search">Search</a>
          <a className="block underline text-blue-500" href="/search/client">Search (Client Only)</a>
          <a className="block underline text-blue-500" href="/gallery">Gallery</a>
        </li>
      </ul>
    </>
  );
}
