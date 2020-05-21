$(document).ready(function() {
  const button = $(".nav-button");
  const upIcon = button.find("div").find(".fa-chevron-up");
  const downIcon = button.find("div").find(".fa-chevron-down");
  const newTweetSection = $(".new-tweet");
  const textarea = newTweetSection.find("#tweet-text");

  newTweetSection.hide();
  upIcon.hide();

  button.click(function() {
    if (newTweetSection.is(":hidden")) {
      downIcon.hide();
      upIcon.show();
      newTweetSection.slideDown(function() {
        textarea.focus();
      });
      button.blur();
    } else {
      upIcon.hide();
      downIcon.show();
      newTweetSection.slideUp();
      button.blur();
    }
  });
});