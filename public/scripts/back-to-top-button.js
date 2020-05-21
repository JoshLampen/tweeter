$(document).ready(function() {
  const navButton = $(".nav-button");
  const backToTopButton = $(".back-to-top-button");
  const newTweetSection = $(".new-tweet");
  const textarea = newTweetSection.find("#tweet-text");

  backToTopButton.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 290) {
      navButton.fadeOut();
      backToTopButton.fadeIn();
    } else {
      navButton.fadeIn();
      backToTopButton.fadeOut();
    }
  });

  backToTopButton.click(function() {
    newTweetSection.show();
    textarea.focus();
    backToTopButton.blur();
    $(window).scrollTo(0, 0);
  });
});