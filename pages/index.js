import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [movieName, setMovieName] = useState(null); // state to store user input
  const [movieInfo, setMovieInfo] = useState(null); // state to store movie info received from API

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
          <button className="font-medium ml-4 px-12 py-2 rounded-lg bg-button text-primary transition duration-200 hover:bg-button-dark md:ml-0 md:mt-4">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
