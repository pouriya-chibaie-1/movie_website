import axios from "axios";
import React, { useState, useEffect, Suspense,useContext } from "react";
import Movies from "./Components/Movies/Movies";
import "./styles/output.css";
import Spinner from "./Components/Spinner/Spinner";
import SearchComponent from "./Components/Search/SearchComponent";
import context from "./Context/Auth";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
function App() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getData();
    setLoading(false);
  }, []);
  function getData() {
    if (pageNo <= 25) {
      axios
        .get(`https://moviesapi.ir/api/v1/movies?page=${pageNo}`)
        .then((response) => {
          if (pageNo > 1) {
            setLoading(false);

            let arr = [...data, ...response.data.data];
            setData(arr);
          } else {
            setData(response.data.data);
          }
        })
        .catch((error) => {
          console.log("Axios GET request failed");
        });
    }
  }
  const firstEvent = (e) => {
    if (pageNo === 1) {
      let pg = pageNo + 1;
      setPageNo(pg);

      getData();
    }
    var bottom =
      e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight;
    if (bottom) {
      let pg = pageNo + 1;
      setPageNo(pg);
      setLoading(true);
      getData();
    }
  };

console.log("2342423", document.cookie)
if (document.cookie=="" ||document.cookie== null){

  return <Login/>
 }
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(189,74,141,1) 0%, rgba(109,76,153,1) 55%, rgba(46,78,174,1) 91%)",
        }}
      >
        <Header />

        <div
          onScroll={firstEvent}
          style={{
            height: "1000px",
            overflow: "auto",
            backgroundColor: "hsla(0, 0%, 0%, 0)",
          }}
          className="MainDiv grid gap-4 grid-cols-3 grid-rows-none mobile:grid-cols-1 mobile:grid-rows-none tablet:grid-cols-2 tablet:grid-rows-none mindesk:grid-cols-3 mindesk:grid-rows-none normaldesk:grid-cols-4 normaldesk:grid-rows-none 2xl:grid-cols-4 normaldesk:grid-cols-4  2xl:grid-rows-none largedesk:grid-cols-4"
        >
          {data.map((data, i) => (
            <Movies data={data} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
