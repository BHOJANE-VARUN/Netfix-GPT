import React from 'react'
import Movielist from './Movielist'
import useTV from '../hooks/useTV'
import { useSelector } from 'react-redux';

function BrowerSecondary() {
  const movie = useSelector(store => store.movie)
  useTV();
  return (
  <div className='border-2 border-black bg-black pl-12'>
    <div className='-mt-52 relative z-20'>
      <Movielist title={"KDRAMA"} tv={movie.kdrama}/>
      <Movielist title={"ANIME"} tv={movie.anime}/>
      <Movielist title={"ACTION"} tv={movie.actio}/>
      <Movielist title={"COMEDY"} tv={movie.comedy}/>
    </div>
  </div>
  )
}

export default BrowerSecondary