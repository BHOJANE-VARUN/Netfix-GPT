import { GoogleGenerativeAI } from "@google/generative-ai";

export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PHOTO_URL =  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fpeople-profile-graphic_24911-21373.jpg&tbnid=Y5vdNyNauoAmdM&vet=12ahUKEwjWt9is4OqHAxWG-jgGHXNuCr0QMygDegQIARBx..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fpeople-profile-graphic_2757319.htm&docid=rr8UIf2C1VmTRM&w=626&h=626&q=sample%20profile%20photo&ved=2ahUKEwjWt9is4OqHAxWG-jgGHXNuCr0QMygDegQIARBx";
export const MOVIE_API = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const SEARCH_LEFT = 'https://api.themoviedb.org/3/search/multi?query=';
export const SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie?query=';
export const SEARCH_RIGHT = '&include_adult=false&language=en-US&page=1';
export const OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:process.env.REACT_APP_TMDB,
    }
  };
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const GENRE_TV = 'https://api.themoviedb.org/3/genre/tv/list?language=en-US';
export const TV_BY_GENRE_LEF = "https://api.themoviedb.org/3/discover/tv?with_genres=";
export const TV_BY_GENRE_RIG = "&language=en-US&sort_by=popularity.desc";
export const BG_IMGAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg";
export const genAI = new GoogleGenerativeAI(
    process.env.REACT_APP_GENAI
);
