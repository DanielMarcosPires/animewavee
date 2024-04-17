/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./css/style.css";
import { Anime } from "@/api/Anime";
import { Suspense } from "react";
import Loading from "@/app/Loading";

async function Catalog() {
  const catalog = new Anime();
  const anime: any = await catalog.getAPI(
    "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=5",
  );
  const obj = anime.data;
  return obj;
}
function convertDate(data: string) {
  const date = new Date(data);
  let dia = `${date.getDate()}`;
  let mes = `${date.getMonth() + 1}`;
  const ano = date.getFullYear();
  if (Number(dia) < 10) {
    dia = `0${dia}`;
  }
  if (Number(mes) < 10) {
    mes = `0${mes}`;
  }
  return `${dia}/${mes}/${ano}`;
}
export default async function Cards() {
  const render: Array<object> = await Catalog();
  console.log(render);
  return (
    <>
      <section className="flex items-center justify-center bg-violet-800 py-5">
        <div className="w-[95%]">
          <h2 className="text-2xl font-bold">Destaques :</h2>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          pagination={true}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="Cards  bg-[#7e22ce] py-4"
        >
          {render
            .filter((item: any) => item.attributes.coverImage !== null)
            .map((item: any) => (
              <SwiperSlide key={item.attributes.titles.en as string}>
                <div className="flex w-full flex-wrap justify-center bg-violet-400">
                  <img
                    className="left-3 h-96 w-full bg-black object-cover  text-center sm:object-contain"
                    src={
                      item.attributes.coverImage
                        ? item.attributes.coverImage.original
                        : ""
                    }
                    alt={
                      item.attributes.coverImage === null ? "Sem Imagem" : ""
                    }
                  />

                  <section className="w-full lg:flex">
                    <header className="w-[600px] bg-black/70 p-2">
                      <h3 className=" text-center text-2xl">
                        {item.attributes.canonicalTitle}
                      </h3>
                      <div className="flex items-end justify-between">
                        <div>
                          <p>
                            Lançamento:{" "}
                            {convertDate(item.attributes.startDate as string)}
                          </p>
                          <p>
                            Atualizado:{" "}
                            {convertDate(item.attributes.updatedAt as string)}
                          </p>
                        </div>
                        <span>{item.attributes.ageRatingGuide}</span>
                      </div>
                    </header>
                    <div className="max-h-[288px] w-full scroll-m-2 overflow-y-scroll bg-black/60">
                      <h2 className="px-5 py-2 text-xl">Description:</h2>
                      <p className="bg-violet-600 p-5">
                        {item.attributes.synopsis}
                      </p>
                    </div>
                  </section>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Suspense>
    </>
  );
}
