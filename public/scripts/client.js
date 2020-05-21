// manages the core process of submitting tweets
// requires ./tweet-create-helpers.js && ./tweet-error-helpers.js && ./tweet-load-helpers.js

$(document).ready(function() {
  const form = $("form");

  hideErrors();

  loadTweets();

  form.submit(function(event) {
    const button = $(".submit-button");
    const entry = $(this).serialize();
    const errorMessage = validateTweet(this);

    event.preventDefault();

    button.blur();

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