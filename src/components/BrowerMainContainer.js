import React, { useEffect, useState } from 'react'
import FirstMovieVideo from './FirstMovieVideo';
import FirstmovieINFO from './FirstmovieINFO';
import { OPTIONS, SEARCH_LEFT, SEARCH_RIGHT } from '../util/Links';
import { FIRST_MOVIE_NAME } from '../util/Content';

function BrowerMainContainer() {
  const [mov,setmov] = useState(null);
  const getmovie = async (str)=> {
    const query = encodeURIComponent(str);
    const url = SEARCH_LEFT + query + SEARCH_RIGHT;
    const raw = await fetch(url,OPTIONS);
    const obj = await raw.json();
    // console.log(obj.results[0]);
    setmov(obj.results[0]);
  }
  useEffect(()=>{
    getmovie(FIRST_MOVIE_NAME);
  },[]);
  if(mov===null) return;
  return (
    <div className=''>
        <FirstmovieINFO name={mov.name} overview={mov.overview}/>
        <FirstMovieVideo movieid={mov.id}/>
    </div>
  )
}

export default BrowerMainContainer;