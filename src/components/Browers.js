import React from "react";
import Heading from "./Heading";
import useMovie from "../hooks/useMovie";
import BrowerMainContainer from "./BrowerMainContainer";
import BrowerSecondary from "./BrowerSecondary";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browers = () => {
  useMovie();
  const showgpt = useSelector((store) => store.gpt.Showgpt);
  return (
    <div>
      <Heading />
      {showgpt ? (
        <GptSearch />
      ) : (
        <>
          <BrowerMainContainer />
          <BrowerSecondary />
        </>
      )}
    </div>
  );
};

export default Browers;
