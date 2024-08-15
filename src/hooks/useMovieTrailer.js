import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../util/movieSlice";
import { useEffect } from "react";
import { OPTIONS } from "../util/Links";

const useMovieTrailer = (movieid)=>{
const dispatch = useDispatch();
const getBackground = async () => {
  const url = 'https://api.themoviedb.org/3/tv/' + movieid  + '/videos?language=en-US';
  const raw = await fetch(url, OPTIONS);
  const data = await raw.json();
  const talier = data.results.filter((video) => video.type === "Trailer");
  const backgroundvid = talier.length === 0 ? data.results[0] : talier[0];
  console.log(backgroundvid);
  dispatch(addTrailerVideo(backgroundvid));
};
useEffect(() => {
  getBackground();
}, []);}
export default useMovieTrailer;