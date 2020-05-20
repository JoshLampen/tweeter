$(document).ready(function() {
  $(document).on("mouseenter", "i", function() {
    const icon = $(this);
    
    icon.css("color", "#4056A1");
    
  });
  
  $(document).on("mouseleave", "i", function() {
    const icon = $(this);
  
    icon.css("color", "rgba(64, 87, 161, 0.75)");
    
  });
});