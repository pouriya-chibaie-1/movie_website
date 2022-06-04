import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component'
import Login from "../Login/Login";
const Movies = (props) => {
  const navigate = useNavigate();
  const pushToDetailComponent = () => {
    navigate(`/movies/${props.data.id}`);
  };
  if (localStorage.getItem("Token")==""){
    return <Login/>
  }
  return (
    <Link
      to={`/movies/${props.data.id}`}
      className="w-72 h-108 rounded-lg rounded-b-lg  mx-auto text-center grid gap-4 grid-cols-3 grid-rows-3 relative " 
      style={{
        color: "white",
        height:"500px",

        marginTop:"20px",background: "rgba(0,0,0,0.25)",
      }}
    
    >
    
      <LazyLoadImage
        src={props.data.poster}
        width="288px"
        effect="blur"
        style={{borderRadius:"8px",height:"362px"}}
        
        
        />
  
      <div className="  w-72  absolute bottom-0 " style={{height:"120px",cursor:"pointer"}}>
        <h1> {props.data.title} </h1>
        <h1> imdb_rating: {props.data.imdb_rating} </h1>
        <h1> rank: {props.data.id} </h1>
      </div>
   
    </Link>
  );
};

export default Movies;
