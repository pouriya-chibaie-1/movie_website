import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Movie = () => {
    const [state,setState]=useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://moviesapi.ir/api/v1/movies/${id}`).then(function(res){
setState(res.data)
    })
  }, [id]);
  console.log(state);
  return (
    <>
      <h1>{state.title}</h1>
      <h1>{state.year}</h1>
      <h1>{state.director}</h1>
      <h1>{state.country}</h1>
    </>
  );
};

export default Movie;
