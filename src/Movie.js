import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
const Movie = () => {
  const [isLoading, setLoading] = useState(true);
    const [state,setState]=useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://moviesapi.ir/api/v1/movies/${id}`).then(function(res){
setState(res.data)
setLoading(false)
    })
  }, [id]);
if (isLoading){
  return <Spinner/>
}
console.log(state.images)
  return (
    <>
    <div className="w-full h-screen mx-auto bg-slate-700 ">
      <div className="w-4/5 h-2/4 flex flex-auto">
         {state.images!=undefined
?state.images.map((item , i)=>{
        return <img src={item} key={i} className="w-1/3"/>
        }):""}
      </div>
      <h1>{state.title}</h1>
      <h1>{state.year}</h1>
      <h1>{state.director}</h1>
      <h1>{state.country}</h1>
    </div>
    </>
  );
};

export default Movie;
