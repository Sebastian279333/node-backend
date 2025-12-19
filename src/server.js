import express from 'express';
import { serverLogger } from './middleware/middleware.js';
import router from './roots/test.rutes.js';
import movieRoute from './roots/movies.routes.js';
const app = express();

app.use(express.json());//midleware

app.use(serverLogger);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/", router);
app.use("/api/movies", movieRoute);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
