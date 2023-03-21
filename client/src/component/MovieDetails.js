import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const MovieDetails = () => {

  const [movie, setMovie] = useState({});
  const [numberOfTicket, setNumberOfTicket] = useState(0);
 
 let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    MovieDetailsId();
  }, []);

  const MovieDetailsId = async () => {
    try {
      const getMovieDetails = await axios.get(
        `http://localhost:3000/getMovieById/${id}`
      );
      console.log(getMovieDetails.data.data);
      setMovie(getMovieDetails.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const bookTicket = async (req, res) => {
    try {
      let data = { movie: movie._id, numberOfTickets: numberOfTicket };

      const getMovieDetails = await axios.post(
        `http://localhost:3000/booking`,
        data
      );
      navigate("/")
      Swal.fire({
        position: "middle-center",
        icon: "success",
        title: "Ticket booked succesfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
      });

      // console.log(getMovieDetails.data.data);
      setMovie(getMovieDetails.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={movie?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{movie?.title}</p>
        </div>
        <input
          type="number"
          min="0"
          max="10"
          placeholder="Enter number of ticket"
          onChange={(e) => {
            setNumberOfTicket(e.target.value);
          }}
        />
        <button  type="button" class="btn btn-primary mt-5" onClick={bookTicket}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
