const { Router } = require('express');

let router = Router();

const movieControler = require("./controller")

router.post("/movie" , movieControler.createMovie)
router.get("/getAllMoviesData" , movieControler.getAllMoviesData)
router.post("/booking" , movieControler.booking)
router.get("/getMovieById/:_id" , movieControler.getMovieById)


module.exports = router;