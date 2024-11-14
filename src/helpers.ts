import type { ArtFilter } from "~/app/gallery/page";

export const getFinalUrl = (filter: ArtFilter) => {
    const baseUrl = 'https://www.rijksmuseum.nl/api/en/collection?key=QTBem9yg&imgonly=true&type=painting&ps=50';
    const url = new URL(baseUrl);

    for (const [key, value] of Object.entries(filter)) {
        if (key === 'term') {
            url.searchParams.set('q', `${value}`);     
        } else {
            url.searchParams.set(key, `${value}`);
        }
    }

    return url.toString();
}