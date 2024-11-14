'use client';

import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";

export type ArtTypeSelectProps = {
    value: string;
}

const ArtTypeSelect: FC<ArtTypeSelectProps> = ({ value }) => {
    const pathName = usePathname();
    const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // overwrite the type query parameter with the new value
        const url = new URL(pathName, window.location.origin);
        url.searchParams.set("type", e.target.value);

        router.push(url.toString());
    }

    return (
        <select value={value} onChange={handleChange}>
            <option value="painting">Painting</option>
            <option value="sculpture">Sculpture</option>
            <option value="book">Book</option>
            <option value="sketch">Sketch</option>
            <option value="print">Print</option>
        </select>
    )
}

export default ArtTypeSelect;