import { NextResponse, type NextRequest } from "next/server";

const TEST_DATA = [
    {
        id: 1,
        name: "Test 1",
        
    },
    {
        id: 2,
        name: "Test another 2",
        
    },

];

export const GET = async (request: NextRequest) => {
    let filtered = [...TEST_DATA];

    if (request.nextUrl.searchParams.has("term")) {
        const search = request.nextUrl.searchParams.get("term") as string;
        
        // Filter the data based on the search query
        // NOTE: This can be done in a more complex way using a fulltext search library, context search, or vector search
        // NOTE: This can also include additional filters, such as date range, category, etc. depending on the data and requirements
        // NOTE: But for now this will do
        filtered = filtered.filter((item) => item.name
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
        );
    }

    return NextResponse.json(filtered);
}