import React from "react";
import { useNavigate } from "react-router-dom";

const Movies = (props) => {
  const navigate = useNavigate();
  const pushToDetailComponent=()=>{
    navigate(`/movies/${props.data.id}`)
  }
  return (

    <div onClick={pushToDetailComponent}  className="w-64 rounded-lg rounded-b-lg shadow-2xl	bg-white h-108 mx-auto text-center grid gap-4 grid-cols-3 grid-rows-3 relative"> 
      <img src={props.data.poster} className="w-64 h-72 absolute top-0 rounded-lg"/>
      <div className="  w-64 h-20 absolute bottom-0 mb-5 ">
        
      <h1 >{props.data.title}</h1>
       <h1 >imdb_rating : {props.data.imdb_rating}</h1>
      <h1 >rank : {props.data.id}</h1> 
      </div>
    </div>
  );
};

export default Movies;
