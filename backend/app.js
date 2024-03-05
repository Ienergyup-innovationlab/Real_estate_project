const express = require("express");
const morgan = require("morgan");
// const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const propertyRouter = require("./routes/propertiesRoute");
const userRouter = require("./routes/usersRoute");
const reviewRouter = require("./routes/reviewRoutes");
const agentRouter = require("./routes/agentRoutes");
const globalErrorHandler = require("./controllers/errController");
const AppError = require("./utils/appError");
const path = require("path");
const passport = require("passport");
const session = require("express-session");

const app = express();

//Using helmet package(set special security headers) against Xss attacks
// app.use(helmet());

//See Request Data in console
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(passport.initialize());
//app.use(passport.session());
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

//Implementing rate limit
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests, try again!",
});

//Mount the rate limit
app.use("/api", limiter);

//Use Body Parser and limit body payload
app.use(express.json({ limit: "10kb" }));

//USing mongo-sanitize (preventing nosql query injection attacks)
app.use(mongoSanitize());

//Using xss clean (preventing malicious html code injection)
app.use(xss());

//Preventing Parameter pollution
app.use(hpp({ whitelist: ["toilets", "bedrooms", "baths", "price"] }));

app.get(
  "/google,",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  (req, res) => {
    res.send("/success");
  }
);

//Mount the Router
app.use("/api/v1/properties", propertyRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/agents", agentRouter);

//Error Handling:Incorrect Routes
app.all("*", (req, res, next) => {
  next(new AppError(`Cannot get ${req.originalUrl} on this server`, 404));
});

//Global error Handler/Middleware
app.use(globalErrorHandler);

module.exports = app;
