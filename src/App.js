import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './Movie';
import Movies from './Movies';
import "./app.scss"
function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get('https://moviesapi.ir/api/v1/movies?page=1').then(function(res){
      setData(res.data.data)
    })
    .catch(function(err){
      console.log(err);
    })
  }, []);
  console.log(data);
  return (
   
    <>
 {data.map((data,i)=>(
   <Movies id={data.id} imdb={data.imdb_rating}title={data.title} key={i}/>
   )
   )} 
    </>
   
  );
}

export default App;
