// helper functions are being pulled from ./tweet-helpers.js

$(document).ready(function() {
  const form = $("form");

  hideErrors();

  loadTweets();

  form.submit(function(event) {
    const entry = $(this).serialize();
    const errorMessage = validateTweet(this);

    event.preventDefault();

    hideErrors();

    if (errorMessage) {
      sendError(errorMessage);
    } else {
      $.post("/tweets/", entry)
      .done(function(data) {
        const tweet = createTweetElement(data.tweet);
        $(".tweet-container").prepend(tweet);

        resetForm(form);
      });
    }
  });
});