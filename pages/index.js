import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [movieName, setMovieName] = useState(null); // state to store user input
  const [movieInfo, setMovieInfo] = useState(null); // state to store movie info received from API

  // fetch movie info from IMDB API
  const fetchMovieInfo = async () => {
    try {
      const res = await axios.get(`/api/movie`, {
        params: { movieName },
      });
      const { data } = res;
      const { results } = data;
      setMovieInfo(results[0]);
      console.log(movieInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className=" font-semibold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Movie Details App
      </h2>
      <h3 className=" text-secondary text-2xl font-medium tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Get info about any movie.
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <div className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-lg md:w-full"
            placeholder="Search for a movie..."
            onChange={(e) => setMovieName(e.target.value)} // event handler to update state value as user types
          />
          <button
            className="font-medium ml-4 px-12 py-2 rounded-lg bg-button text-primary transition duration-200 hover:bg-button-dark md:ml-0 md:mt-4"
            onClick={fetchMovieInfo}
          >
            Search
          </button>
        </div>
        {movieInfo && (
          <div className="flex mt-12 w-3/6 h-4/5 border border-primary md:flex-col md:w-4/6 md:h-full md:mb-12">
            <Image
              src={movieInfo.image.url}
              width={220}
              height={300}
              alt={movieInfo.title}
            />
            <div className="flex flex-col justify-center ml-8 md:mt-6">
              <h2 className="text-primary text-xl font-semibold tracking-wider md:text-base">
                <span className="text-secondary uppercase">Title: </span>{" "}
                {movieInfo.title}
              </h2>
              <h2 className="text-primary text-xl font-semibold mt-8 tracking-wider md:text-base md:mt-6">
                <span className="text-secondary uppercase">Release Year: </span>{" "}
                {movieInfo.year}
              </h2>
              <h2 className="text-primary text-xl font-semibold mt-8 tracking-wider md:text-base md:mt-6">
                <span className="text-secondary uppercase">Run Time: </span>{" "}
                {movieInfo.runningTimeInMinutes} minutes
              </h2>
              <Link
                href={`https://www.imdb.com${movieInfo.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="outline-none font-medium mt-8 px-8 py-2 rounded-lg bg-button text-primary transition duration-200 hover:bg-button-dark md:ml-0 md:my-4">
                  View on IMDB
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
