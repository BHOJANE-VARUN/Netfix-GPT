import React from 'react';
import { useSelector } from 'react-redux';
import Movielist from './Movielist';

function GptMovies() {
  const movies = useSelector(store => store.gpt.gptMovies);
  const names = useSelector(store => store.gpt.gptMovieNames);

  if (!names) return null;

  return (
    <div className="w-full mx-auto bg-black/70 p-4 rounded-lg space-y-6">
      {names.map((name, index) => (
        <Movielist key={index} title={name} tv={movies[index]} />
      ))}
    </div>
  );
}

export default GptMovies;
