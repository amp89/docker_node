const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const expressSession = require("express-session");
const flash = require("connect-flash");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const passport = require("passport");
const path = require("path");


//create app
const app = express();

//use flash messages
app.use(flash());

//setup static/public file path
app.use(express.static(path.join(__dirname,"public")));

//setup cookie parser
app.use(cookieParser());

//setup body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//setup method override (allows put and delete)
app.use(methodOverride("_method"));

//setup session / passport
const session = expressSession({
    secret:"hello", //TODO: change me
    resave:false,
    saveUninitialized:false
});

app.use(session);

var server = require("http").createServer(app);

server.listen(5000, () => {
    // console.log(`listening on port ${serverConfig.port}`);
    console.log(`listening on port 5000`);
})