const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const filmsRouter = require('./controllers/films_controller.js')
//const booksRouter = requ.. don't need

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));   //    this lesson shows both, but doesn't use this one

app.use(express.static(`${ __dirname }/public`));
app.use(require('./controllers/index.js'));

//     Below is replaced by the above 2 lines:
//app.use('/films', filmsRouter);



app.listen(3000, function () {
  console.log(`App running on port ${this.address().port}`);
});
