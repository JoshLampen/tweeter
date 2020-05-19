$(document).ready(function() {
  $("#tweet-text").on('keyup keydown paste', function() {
    const counter = $(this).parent().find(".counter");

    const charCount = this.value.length;
    counter.html(140 - charCount);
    
    if (140 - charCount < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "#545149");
    }
  });
});