const express = require("express");
const { fetchallCategories } = require("./controllers/categoryControllers");
const { fetchAllReviews } = require("./controllers/reviews-controllers");
const {
  handleIncorrectEndpointErrors,
  handleIncorrectReviewID,
  handle400Errors,
  handle500Errors,
} = require("./controllers/errorControllers");
const { fetchReviewsComments } = require("./controllers/comments-controllers");
const app = express();

app.get("/api/categories", fetchallCategories);

app.get("/api/reviews", fetchAllReviews);

app.get("/api/reviews/:review_id/comments", fetchReviewsComments);

app.all("*", handleIncorrectEndpointErrors)

app.use(handleIncorrectReviewID);
app.use(handle400Errors);
app.use(handle500Errors);


module.exports = app;
