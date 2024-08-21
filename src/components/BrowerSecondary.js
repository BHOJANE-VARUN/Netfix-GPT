import React from 'react'
import Movielist from './Movielist'
import useTV from '../hooks/useTV'
import { useSelector } from 'react-redux';

function BrowerSecondary() {
  const movie = useSelector(store => store.movie)
  useTV();
  return (
  <div className='border-2 border-black bg-black pl-3 sm:pl-8 md:pl-12'>
    <div className='-mt-5 sm:-mt-10 md:-mt-[15%] relative z-20'>
      <Movielist title={"KDRAMA"} tv={movie.kdrama?.results}/>
      <Movielist title={"ANIME"} tv={movie.anime?.results}/>
      <Movielist title={"ACTION"} tv={movie.actio?.results}/>
      <Movielist title={"COMEDY"} tv={movie.comedy?.results}/>
    </div>
  </div>
  )
}

export default BrowerSecondary