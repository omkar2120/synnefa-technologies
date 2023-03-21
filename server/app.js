const express  = require('express');
require("./conn")
const cors = require('cors')

const app = express();
const PORT = process.env.PORT|| 3000
app.use(express.json());
app.use(cors());

// app.use(express.json());
const router = require("./router");


app.use(router)



app.listen(PORT, () => {
    console.log(`Server  listening on ${PORT}`)
})
