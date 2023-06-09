import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoute from "./route/web"

require('dotenv').config()

const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

