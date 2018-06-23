const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const expressSession = require("express-session");
const flash = require("connect-flash");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const path = require("path");

const settings = require("./config/settings")

//create app
const app = express();

//use flash messages
app.use(flash());

//setup static/public file path
app.use(express.static(path.join(__dirname,"public")));

//set engine to handlebars
app.engine("handlebars", handlebars(
    {
        helpers:{},
        // defaultLayout:"main"
    }
));

app.set("view engine","handlebars");

//setup cookie parser
app.use(cookieParser());

//setup body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//setup method override (allows put and delete)
app.use(methodOverride("_method"));

//setup session
console.log(settings.secret);
const session = expressSession({
    secret:settings.secret,
    resave:false,
    saveUninitialized:false
});

app.use(session);

app.get("/", (req,res) => {
    res.render("index");
})

var server = require("http").createServer(app);

server.listen(5000, () => {
    // console.log(`listening on port ${serverConfig.port}`);
    console.log(`listening on port 5000`);
})