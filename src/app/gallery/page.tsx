import type { SearchParams } from "next/dist/server/request/search-params";
import Image from "next/image";
import ArtTypeSelect from "~/components/ArtTypeSelect";
import type { ArtWorkItem } from "~/components/Gallery";
import Gallery from "~/components/Gallery";
import SearchForm from "~/components/SearchForm";
import { getFinalUrl } from "~/helpers";

export type ArtFilter = {
    q: string; // query
    ps: number; // page size
    type: string; // type
}




export default async function GalleryPage({ searchParams }: { searchParams: Promise<ArtFilter> }) {
    const params = await searchParams;
    const baseUrl = getFinalUrl(params);
    const res = await fetch(baseUrl);
    
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    
    const { artObjects } = await res.json();

    return (
        <div className="p-10 container">
            <h1>Gallery Test</h1>
            <div className="mb-4">
                <p>
                    This utilizes <span className="code">next/image</span> to handle lazy loading and optimization of images in the gallery.
                    This can be improved by providing a base64 blur URL.
                </p>
                <p>
                    UX Wise this can be improved by adding the following features:
                </p>
                <ul className="list-disc list-inside">
                    <li>Adding option to view the whole image</li>
                    <li>Adding an infinite loading/pagination when reaching the end of the screen</li>
                </ul>
            </div>
            <div className="card mb-4 grid grid-flow-col gap-3">
                <SearchForm term={params.q} />
                <ArtTypeSelect value={params.type} />
            </div>
            <Gallery data={artObjects as ArtWorkItem[]} />
        </div>
    )

}