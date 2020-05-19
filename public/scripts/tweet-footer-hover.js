$(document).ready(function() {
  $("i").hover(function() {
    const icon = $(this);
    
    icon.css("color", "#4056A1");
    
  }, function() {
    const icon = $(this);

    icon.css("color", "rgba(64, 87, 161, 0.75)");

  });
});