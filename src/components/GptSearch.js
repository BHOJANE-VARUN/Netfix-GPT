import React, { useRef } from "react";
import { BG_IMGAGE, OPTIONS, SEARCH_MOVIE, SEARCH_RIGHT } from "../util/Links";
import { useDispatch, useSelector } from "react-redux";
import { genAI } from "../util/Links";
import { addgptResult } from "../util/GptSlice";
import GptMovies from "./GptMovies";

function GptSearch() {
  const lang = useSelector((store) => store.lang.obj);
  const searchtext = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const raw = await fetch(SEARCH_MOVIE + movie + SEARCH_RIGHT, OPTIONS);
    const data = await raw.json();
    return data?.results;
  };

  const handlesubmit = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query " +
      searchtext.current.value +
      ". Only give me names of 5 movies, comma separated like the example result: ,movie1,movie2,movie3,movie4,movie5. Don't recommend adult movies. If no query is there then give random Indian movie names in the same format.";

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const gptresult = await model.generateContent(query);
    const rawresponse = await gptresult.response;
    const gptresponce = rawresponse.text();
    const result = gptresponce.split(",");
    const tmdbresults = await Promise.all(result.map((m) => searchMovieTMDB(m)));
    dispatch(addgptResult({ Moviedata: tmdbresults, Moviename: result }));
  };

  return (
    <div className="relative flex flex-col pt-5 items-center min-h-screen w-full  text-white">
      <img
        src={BG_IMGAGE}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-40"
      />

      {/* Search Bar */}
      <form
        className="w-full max-w-2xl flex mt-10 px-4 gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          className="flex-grow px-4 py-2 rounded-md border border-gray-300 text-black text-lg"
          placeholder={lang?.place}
        />
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md"
          onClick={handlesubmit}
        >
          {lang?.Search}
        </button>
      </form>

      {/* GPT Movie List */}
      <div className="w-full mt-8 px-4">
        <GptMovies />
      </div>
    </div>
  );
}

export default GptSearch;
