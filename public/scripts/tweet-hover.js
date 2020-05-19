$(document).ready(function() {
  $("article").hover(function() {
    const article = $(this);
    const header = $(this).find("header");
        
    article.css("box-shadow", "10px 10px rgba(64, 87, 161, 0.5)");
    
    header.append("<p>@SirIsaac</p>");

  }, function() {
    const article = $(this);
    const p = $(this).find("header").find("p");

    article.css("box-shadow", "none");

    p.remove();
    
  });
});