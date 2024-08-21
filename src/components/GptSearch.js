import React, { useRef } from "react";
import { BG_IMGAGE, OPTIONS, SEARCH_MOVIE, SEARCH_RIGHT } from "../util/Links";
import { useDispatch, useSelector } from "react-redux";
import { genAI } from "../util/Links";
import { addgptResult } from "../util/GptSlice";
import GptMovies from "./GptMovies";

function GptSearch() {
  const lang = useSelector((store) => store.lang.obj);
  const searchtext = useRef(null);
  const searchMovieTMDB = async (movie) =>{
    const raw = await fetch(
      SEARCH_MOVIE + movie + SEARCH_RIGHT,OPTIONS
    );
    const data = await raw.json();
    return data?.results;
  }
  const dispatch = useDispatch();
  const handlesubmit = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchtext.current.value +
      ". only give me names of 5 movies, comma separated like the example result give ahead. example result: ,movie1,movie2,movie3,movie4,movie5.And don't recommend adult movies.And if no query is there then give random indian movie names in the same format as given in example";
    //console.log(query);


    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const gptresult = await model.generateContent(query);
      const rawresponse = await gptresult.response;
      const gptresponce = rawresponse.text();

    const result = gptresponce.split(",");
    const tmdbresults = await Promise.all(result.map((m) => searchMovieTMDB(m))); 
    //console.log(tmdbresults);
    dispatch(addgptResult({Moviedata:tmdbresults,Moviename:result}));
  };
  return (
    <div className="bg-black">
    <div className="relative w-full h-screen overflow-y-hidden">
      <img
        src={BG_IMGAGE}
        alt="background img"
        className="fixed top-0 left-0 w-fit h-fit object-cover z-0"
      />
      <div className="pt-[23%] sm:pt-[18%] md:pt-[10%] md:pl-[7%] w-full flex justify-center z-10 bg-opacity-90">
        <form
          className="w-11/12 flex justify-between h-8 z-30 sm:w-9/12 md:w-8/12 md:h-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchtext}
            type="text"
            className="bg-white border-2 border-black w-9/12 pl-2 pb-1 text-lg"
            placeholder={lang?.place}
          />
          <button
            className="text-white bg-red-600 font-bold text-xl pb-1 rounded-lg h-full w-20 md:w-2/12"
            onClick={handlesubmit}
          >
            {lang?.Search}
          </button>
        </form>
      </div>
    </div>
    <GptMovies/>
    </div>
  );
}

export default GptSearch;
