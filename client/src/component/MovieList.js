import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = () => {
  useEffect(() => {
    getAllMoviesData();
  }, []);

  const [movieList, setMovieList] = useState([]);

  const getAllMoviesData = async () => {
    try {
      const getMovie = await axios.get(
        "http://localhost:3000/getAllMoviesData"
      );
      console.log(getMovie.data.data);
      setMovieList(getMovie.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="main-div">
      {movieList.map((el, l) => (
        <>
          <div key={l} className="card" style={{ width: "18rem" , margin:"20px" }}>
            <img src={el?.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{el?.title}</p>
            </div>
            <Link to={`movie/${el?._id}`}>
              <button type="button" class="btn btn-primary" >Book</button>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default MovieList;
