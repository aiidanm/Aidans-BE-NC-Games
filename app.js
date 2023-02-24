
const express = require("express");
const { fetchallCategories } = require("./controllers/categoryControllers");
const {
  fetchSingleReview,
  fetchAllReviews,
  patchReviewController,
  PostNewComment,
} = require("./controllers/reviews-controllers");
const {
  handleIncorrectEndpointErrors,
  handle500Errors,
  handleCustomErrors,
  handleQueryErrors,
  handlePSQLErrors
} = require("./controllers/errorControllers");

const {fetchAllUsers} = require("./controllers/users-controllers")

const { fetchReviewsComments, deleteCommentByIDController } = require("./controllers/comments-controllers");

const app = express();
app.use(express.json())


app.use(express.json())

app.get("/api/categories", fetchallCategories);

app.get("/api/reviews", fetchAllReviews);

app.get("/api/reviews/:review_id", fetchSingleReview);

app.get("/api/reviews/:review_id/comments",fetchReviewsComments)

app.get("/api/users", fetchAllUsers)

app.delete("/api/comments/:comment_id", deleteCommentByIDController)

app.patch("/api/reviews/:review_id", patchReviewController)

app.post("/api/reviews/:review_id/comments",PostNewComment)

app.all("*", handleIncorrectEndpointErrors)

app.use(handlePSQLErrors)

app.use(handleQueryErrors)

app.use(handleCustomErrors)

app.use(handle500Errors);

module.exports = app;
