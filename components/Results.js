import Head from "next/head";
import Image from "next/image";
import { ThumbUpIcon , ChartPieIcon} from "@heroicons/react/outline"

function Results({ response }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  // console.log(response);
  return (
    <div>
      <Head>
        <title>Hull-ux</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
        {response.map((data) => {
          // console.log(data);
          const poster = data.poster_path
            ? data.poster_path
            : data.backdrop_path;
          const title = data.title;
          const overView = data.overview;
          const media = data.media_type;
          const releaseDate = data.release_date;
          const voteCount = data.vote_count;
          const key = data.id;
          return (
            <div
              className="p-2 group cursor-pointer transition-all duration-300 ease-in transform sm:hover:scale-105 hover:z-50 "
              key={key}
            >
              <Image
                layout="responsive"
                src={`${baseUrl}${poster}`}
                width={1080}
                height={1020}
              />
              <div className="p-2">
                <h2 className="mt-2 text-xl text-white transition-all duration-100 ease-in-out  group-hover:font-bold">
                  {title}
                </h2>
                <p className="truncate max-w-lg">{overView}</p>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                  {`Release Date ${releaseDate}`} •
                  <ThumbUpIcon className="h-4 mx-2" />
                  {voteCount}
                </p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Results;
