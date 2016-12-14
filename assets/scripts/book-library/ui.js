'use strict';

// const api = require('./api.js');

const showBooksTemplate = require('../handlebar-templates/display-select-book.handlebars');

const showReviewsTemplate = require('../handlebar-templates/display-review-bookshelf.handlebars');

const showSearchTemplate = require('../handlebar-templates/display-search-results.handlebars');

// let showReviewsFlag = 0;
// let showBooksFlag = 0;


const addBookSuccess = (data) => {
  console.log("You've added a book!");
  console.log(data);
  $("#add-a-book").trigger("reset");
  return data;
};

const addBookFailure = (error) => {
  console.log("Oops, something went wrong.");
  console.log(error);
};

const getBooksSuccess = (data) => {
  console.log("YaY!");
  // if(!showBooksFlag) {
    $('#show-books').show();
    $('#show-books').html(showBooksTemplate(data));
  //   showBooksFlag = 1;
  // } else if (showBooksFlag) {
    // $('#show-books').hide();
    // showBooksFlag = 0;
  // }
  console.log(data);
};

const hideLibrary = () => {
  $('#show-books').html('');
};

const success = (data) => {
  console.log('YAY!!!!');
  $('.show-books').html('Are you there?');
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const getReviewsSuccess = (data) => {
  // debugger;
  console.log("These are your reviews/ books on your bookshelf");
  // if(!showReviewsFlag) {
  //   $('#show-reviews').show();
    $('#show-reviews').html(showReviewsTemplate(data));
    $('.review-form').hide();
  //   showReviewsFlag = 1;
  // }
  // else if (showReviewsFlag) {
  //   $('#show-reviews').hide();
  //   showReviewsFlag = 0;
  // }
  console.log(data);
};

const getReviewsFailure = (error) => {
  console.log("No reviews for YOU!");
  console.log(error);
};

const updateForm = () => {
  $('.review-form').show();
};

const hideBookshelf = () => {
  $('#show-reviews').html('');
};

const addReviewSuccess = (data) => {
  console.log("You've added a review!");
  console.log(data);
  $(".add-a-review").trigger("reset");
};

const addReviewFailure = (error) => {
  console.log("Oops, something went wrong. No, review.");
  console.log(error);
  $(".add-a-review").trigger("reset");
};

const deleteReviewSuccess = () => {
  // debugger;
  console.log("You've removed a book from your bookshelf!");
  $('#show-reviews').show();
  // api.getReviews()
  //   .then(getReviewsSuccess)
  //   .catch(getReviewsFailure);
};

const deleteReviewFailure = () => {
  console.log("Something went wrong, bookshelf still has book.");
};

const updateOneReviewSuccess = (data) => {
  console.log("You've updated a review!");
  console.log(data);
  // $('.review-form').hide();
  // api.getReviews()
  //   .then(getReviewsSuccess)
  //   .catch(getReviewsFailure);

  // $('#show-reviews').html(showReviewsTemplate(data));

};

const updateOneReviewFailure = (error) => {
  console.log("Oops, something went wrong. Review has not been updated.");
  console.log(error);
};

const getOneReviewSuccess = (data) => {
  console.log("You've updated a book on your bookshelf!");
  // $('#update-this-review').html(updateReviewTemplate(data));
  console.log('this is one review', data);
};

const getOneReviewFailure = (error) => {
  console.log("Something went wrong, book not updated.");
  console.log(error);
};

const searchBooksSuccess = (data) => {
  console.log("These are your search results!");
  console.log(data);
  $("#search-book-titles").trigger("reset");
  $(".search-results").html(showSearchTemplate(data));
};

const searchBooksFailure = (error) => {
  console.log("Oops, something went wrong during the search.");
  console.log(error);
  $("#search-book-titles").trigger("reset");
};

const hideSearch = () => {
  $(".search-results").html('');
};

module.exports = {
  success,
  failure,
  getBooksSuccess,
  addBookSuccess,
  addBookFailure,
  getReviewsSuccess,
  getReviewsFailure,
  addReviewSuccess,
  addReviewFailure,
  deleteReviewSuccess,
  deleteReviewFailure,
  updateOneReviewSuccess,
  updateOneReviewFailure,
  getOneReviewSuccess,
  getOneReviewFailure,
  searchBooksFailure,
  searchBooksSuccess,
  hideBookshelf,
  updateForm,
  hideLibrary,
  hideSearch,

};
