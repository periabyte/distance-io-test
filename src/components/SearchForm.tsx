'use client';

import { usePathname, useRouter } from "next/navigation";
import type { FC } from "react";
export type FormProps = {
  term: string;
};

const SearchForm: FC<FormProps> = ({ term }) => {
    const pathName = usePathname();
    const router = useRouter();
    return (
        <input
            type="text"
            placeholder="Search"
            defaultValue={term}
            onChange={e => {
                const term = e.target.value;
                const url = new URL(pathName, window.location.origin);
                url.searchParams.set("term", term);
                router.push(url.toString());
            }}
        />
    );
}

export default SearchForm;