import React from "react";
import { useNavigate } from "react-router-dom";
import "./app.scss"

const Movies = (props) => {
  const navigate = useNavigate();
  // console.log(props);
  const pushToDetailComponent=()=>{
    navigate(`/movies/${props.id}`)
  }

  return (

    <div
       className="Card"
    >
      <h1>{props.title}</h1>
      <h1>{props.imdb}</h1>
      <h1>{props.id}</h1>
    </div>
  );
};

export default Movies;
