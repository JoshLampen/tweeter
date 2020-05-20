$(document).ready(function() {
  const button = $(".nav-button");
  const newTweetSection = $(".new-tweet");
  const textarea = newTweetSection.find("#tweet-text");

  newTweetSection.hide();

  button.click(function() {
    if (newTweetSection.is(":hidden")) {
      newTweetSection.slideDown(function() {
        textarea.focus();
      });
      button.blur();
    } else {
      newTweetSection.slideUp();
      button.blur();
    }
  });
});