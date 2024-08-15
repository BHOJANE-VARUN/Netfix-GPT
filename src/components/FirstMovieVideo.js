import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
function FirstMovieVideo({ movieid }) {
  const trailerVideo = useSelector((store) => store.movie?.talierVideo);
  useMovieTrailer(movieid)
  return (
    <div className="w-screen">
      <iframe
        className="w-screen h-full aspect-video"
        //src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key + "&controls=0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;muted;"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default FirstMovieVideo;
