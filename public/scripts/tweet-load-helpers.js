// requires ./tweet-create-helpers.js

const renderTweets = tweetsArr => {
  for (const item of tweetsArr) {
    const tweet = createTweetElement(item);
    $(".tweet-container").prepend(tweet);
  }
};

const loadTweets = () => {
  $.get("/tweets/")
  .then(function(data, status) {
    renderTweets(data);
  });
};

const resetForm = form => {
  const textarea = $(form).find("#tweet-text");
  const counter = $(form).find(".counter");

  textarea.val("");
  counter.html(140);
};