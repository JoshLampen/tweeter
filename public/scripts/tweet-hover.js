$(document).ready(function() {
  $("article").hover(function() {
    const article = $(this);
    const handle = $(this).find(".handle");
        
    article.css("box-shadow", "10px 10px rgba(64, 87, 161, 0.5)");
    
    handle.css("color", "#545149bd");

  }, function() {
    const article = $(this);
    const handle = $(this).find(".handle");

    article.css("box-shadow", "none");

    handle.css("color", "#f4f1ec");
    
  });
});