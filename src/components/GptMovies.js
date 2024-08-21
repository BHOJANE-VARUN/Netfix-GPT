import React from 'react'
import { useSelector } from 'react-redux';
import Movielist from './Movielist';

function GptMovies() {
    const movies = useSelector(store => store.gpt.gptMovies);
    const names = useSelector(store => store.gpt.gptMovieNames);
    if(names==null) return;
    
  return (
    <div className=' absolute text-white px-10'>
        <div className='relative -top-96 pl-11 -mt-32 w-full h-full overflow-y-scroll bg-black p-5 bg-opacity-90 hide-scrollbar z-40'>
        {names?.map((n,index)=> <Movielist title={n} tv={movies[index]}/>)}
    </div>
</div>
  )
}

export default GptMovies;