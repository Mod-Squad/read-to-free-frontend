'use strict';

const addBookSuccess = (data) => {
  console.log("You've added a book!");
  console.log(data);
};

const addBookFailure = (data) => {
  console.log("Oops, something went wrong.");
  console.log(data);
};

const success = (data) => {
  console.log('YAY!!!!');
  $('.show-books').html('Are you there?');
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  success,
  failure,
  addBookSuccess,
  addBookFailure,
};
