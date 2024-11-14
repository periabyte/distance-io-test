'use client';

import Image from "next/image";
import type { FC } from "react";

export type ArtWorkItem = {
    id: string;
    title: string;
    webImage: {
        guid: string | null;
        url: string;
    };
    principalOrFirstMaker: string;
}

export type GalleryProps = {
    data: ArtWorkItem[];
}

const Gallery: FC<GalleryProps> = ({ data = [] }) => {
    return (
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 ">
            {data.map((art) => (
                <div className="art-container group" key={art.id}>
                    <div className="art-title-container">
                        <h2 className="">
                            {art.title}
                        </h2>
                        <span>
                            {art.principalOrFirstMaker}
                        </span>
                    </div>
                    <Image
                        className="object-cover"
                        loading="lazy"
                        fill
                        src={!!art.webImage.guid ? art.webImage.url : 'https://placehold.co/1280x768.webp?text=No+Image'}
                        alt={art.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            ))}
        </div>
    );
}

export default Gallery;