import express from 'express';
import { mainRouter } from './routes/mainRoutes.js';
import {join} from 'path';

const app = express();
const port = process.env.PORT || '3000';
// app.set('views', './views'); // mostly set directory when template file store in another folder
app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use(express.static(join(process.cwd(),'public')));

app.use('/', mainRouter);


app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

