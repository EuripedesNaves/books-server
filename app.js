
//Environment 
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//Conectado BD
require("./config/db.js");

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(morgan("dev"));


//Rotas
const authRoute = require('./routes/user.routes');
const book = require('./routes/book.routes')
const publicBook = require('./routes/publicBook.routes')

//Rotas públicas
app.use('/', authRoute);
app.use('/', publicBook);

//Middleware
app.use(require('./middlewares/auth.js'));

//Rotas particulares
app.use('/', book);


//Configuração de erro
require('./error-handling/error.js')(app);

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);