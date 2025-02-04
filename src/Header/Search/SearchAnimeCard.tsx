import React from "react";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import { Anime } from "../../types";

const SearchAnimeCard = (anime: Anime) => {
  return (
    <Link to={`/info/${anime.slug}`}>
      <div
        className="flex w-full cursor-pointer rounded-sm p-2 hover:bg-white hover:bg-opacity-10"
        key={anime.slug}
      >
        <Image
          src={anime.image}
          alt={anime.title}
          className="min-w-1/4 max-w-1/4 object-cover h-20 mr-2"
        />

        <div className="space-y-2">
          <h1 className="text-white text-sm font-medium line-clamp-1">
            {anime.title}
          </h1>
          <p className="text-gray-400 line-clamp-2 text-xs">
            {anime.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchAnimeCard;
