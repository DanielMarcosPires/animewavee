"use client";
export default function catalogo({ catalogoAnime }) {
  return (
    <>
      {catalogoAnime.data && (
        <ul className=" borde borde mx-auto mb-9 ms-24 flex  w-[90%] flex-wrap items-center justify-center  gap-5 border border-white text-center">
          {catalogoAnime.data.map((Anime) => (
            <li key={Anime.id}>
              <p className="w-60">{Anime.attributes.canonicalTitle}</p>
              <img
                className="h-72 w-52 border border-white"
                src={Anime.attributes.posterImage.small}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
