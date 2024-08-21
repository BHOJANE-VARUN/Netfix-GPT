import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API, OPTIONS } from "../util/Links";
import { useEffect } from "react";
import { addmovies } from "../util/movieSlice";

const useMovie = ()=>{
  const movies = useSelector(store => store.movie.nowPlayingMovies)
    const dispatch = useDispatch();
    const getdata = async ()=>{
      const raw = await fetch(MOVIE_API,OPTIONS);
      const objjson = await raw.json();
      dispatch(addmovies(objjson))
    }
    useEffect(()=>{
       !movies && getdata();
    },[])
}
export default useMovie;