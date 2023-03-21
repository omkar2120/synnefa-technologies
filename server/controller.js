const { Movie, Booking } = require("./model/movieSchema");

const createMovie = async (req, res) => {
  try {
    console.log(req.body);
    const { title, language, price, theater, image } = req.body;
    const createMovie = new Movie({
      title,
      language,
      price,
      theater,
      image,
    });
    await createMovie.save();
    return res.status(200).json({
      message: "Created successfully",
      status: 200,
      data: createMovie,
    });
  } catch (err) {
    res.status(404).send({
      error: err.message,
      status: 0,
      data: [],
    });
  }
};

const getAllMoviesData = async (req, res) => {
  try {
    const getMovies = await Movie.find();
    return res.status(200).json({
      message: "Data fetch succesffully",
      status: 200,
      data: getMovies,
    });
  } catch (err) {
    res.status(404).send({
      error: err.message,
      status: 0,
      data: [],
    });
  }
};

const booking = async (req, res) => {
  try {
    const { movie, numberOfTickets } = req.body;

    const addBooking = await Booking.create({ movie, numberOfTickets });

    return res.status(200).json({
      message: "Booking created successfully",
      status: 200,
      data: addBooking,
    });
  } catch (err) {
    res.status(404).send({
      error: err.message,
      status: 0,
      data: [],
    });
  }
};

const getMovieById = async(req,res) => {
  try{
    const getMovies = await Movie.findById(req.params._id);

    return res.status(200).json({
      message: "Data fetch succesffully",
      status: 200,
      data: getMovies,
    });
  }catch(err){
    res.status(404).send({
      error: err.message,
      status: 0,
      data: [],
    });
  }
}

module.exports = { createMovie, getAllMoviesData , booking ,getMovieById };
