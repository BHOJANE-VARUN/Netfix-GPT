import { useDispatch, useSelector } from "react-redux";
import {OPTIONS} from "../util/Links.js"
import {addactio, addanime, addcomedy, addkdrama} from "../util/movieSlice.js";
import { useEffect } from "react";
const useTV = ()=>{
    const dispatch = useDispatch();
    const kdra = useSelector(store => store.movie.kdrama);
    const ani = useSelector(store => store.movie.anime);
    const acti = useSelector(store => store.movie.actio);
    const com = useSelector(store => store.movie.comedy);
    const getkdrama = async ()=>{
        const raw = await fetch("https://api.themoviedb.org/3/discover/tv?with_genres=18&with_original_language=ko&sort_by=popularity.desc&first_air_date.gte=2022-01-01&language=en-US",OPTIONS);
        const data = await raw.json();
        dispatch(addkdrama(data));
    }
    const getAnime = async () => {
        const raw = await fetch("https://api.themoviedb.org/3/discover/tv?with_genres=16&with_original_language=ja&sort_by=popularity.desc&first_air_date.gte=2022-01-01&language=en-US", OPTIONS);
        const data = await raw.json();
        dispatch(addanime(data));
    } 
    const getActionShows = async () => {
        const raw = await fetch("https://api.themoviedb.org/3/discover/tv?with_genres=10759&sort_by=popularity.desc&first_air_date.gte=2022-01-01&language=en-US", OPTIONS);
        const data = await raw.json();
        dispatch(addactio(data));
    }
    const getComedyShows = async () => {
        const raw = await fetch("https://api.themoviedb.org/3/discover/tv?with_genres=35&sort_by=popularity.desc&first_air_date.gte=2022-01-01&language=en-US", OPTIONS);
        const data = await raw.json();
        dispatch(addcomedy(data));
    }    
    useEffect(()=>{
       !kdra && getkdrama();
       !ani && getAnime();
       !acti && getActionShows();
       !com && getComedyShows();
    },[])
}
export default useTV;