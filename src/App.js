import axios from 'axios';
import react from 'react';
import React, { useState,useEffect } from 'react';
import Movies from './Movies';
import Spinner from './Spinner';
function App() {
  const [data,setData] = useState([])
  const [pageNo,setPageNo] = useState(1);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    
    getData()
    setLoading(false)

  }, []);
  function getData(){
  if(pageNo<=25){
    
    axios.get(`https://moviesapi.ir/api/v1/movies?page=${pageNo}`)
    .then(response => {
      if(pageNo > 1){
        let arr = [...data, ...response.data.data];
        setData(arr);
      }
      else{
        setData(response.data.data);
      }
      
    })
    .catch(error => {
      console.log('Axios GET request failed');
    })
  }
    

	}
  const firstEvent = (e) => {
  console.log(e.target.offsetHeight + e.target.scrollTop);
		var bottom = e.target.offsetHeight + e.target.scrollTop>= e.target.scrollHeight
		if(bottom){
			let pg = pageNo + 1;
			setPageNo(pg);
      
			getData();
		}
	}
  if (isLoading) {
    return    <Spinner/>;
      }
    
  return (
    <>
    <div onScroll={firstEvent} className='MainDiv grid gap-4 grid-cols-3 grid-rows-none mobile:grid-cols-1 mobile:grid-rows-none tablet:grid-cols-2 tablet:grid-rows-none mindesk:grid-cols-3 mindesk:grid-rows-none normaldesk:grid-cols-4 normaldesk:grid-rows-none 2xl:grid-cols-4   2xl:grid-rows-none'  >
 {data.map((data,i)=>(
   <Movies data={data} key={i}/>
   )
   )} 
   </div>
    </>
   
  );
}

export default App;
