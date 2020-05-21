$(document).ready(function() {
  $(document).on("mouseenter", "article", function() {
    const article = $(this);
    const handle = $(this).find(".handle");
    
    article.css("box-shadow", "10px 10px rgba(64, 87, 161, 0.5)");
    
    handle.css("color", "#545149bd");
    
    $(document).on("mouseenter", ".footer-icon", function() {
      const icon = $(this);
      
      icon.css("color", "#4056A1");
      
    });
    
    $(document).on("mouseleave", ".footer-icon", function() {
      const icon = $(this);
    
      icon.css("color", "rgba(64, 87, 161, 0.75)");
    });
  });
  
  $(document).on("mouseleave", "article", function() {
    const article = $(this);
    const handle = $(this).find(".handle");
    
    article.css("box-shadow", "none");
    
    handle.css("color", "#f4f1ec");
  });
});