const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.congif({path: './config/config.env'});

app.use(express.json());



const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}, in ${process.env.NODE_ENV} mode.`);
});