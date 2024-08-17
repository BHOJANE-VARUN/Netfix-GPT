import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function FirstMovieVideo({ movieid }) {
  const trailerVideo = useSelector((store) => store.movie?.talierVideo);
  useMovieTrailer(movieid);

  return (
    <div className="w-screen ">
      <iframe
        className="w-full h-full aspect-video relative -top-10 -z-10"  // Adjust the negative margin as needed
        // src={
        //   "https://www.youtube.com/embed/" +
        //   trailerVideo?.key +
        //   "?&autoplay=1&mute=1&loop=1&start=0&end=26&playlist=" +
        //   trailerVideo?.key +
        //   "&controls=0"
        // }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;muted;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default FirstMovieVideo;
