import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./styles/output.css";
const App = React.lazy(() => import("./App"));
const Movies = React.lazy(() => import("./Movies"));
const Movie = React.lazy(() => import("./Movie"));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<p> Loading...</p>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
