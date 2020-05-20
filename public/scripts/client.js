const getDateString = milliseconds => { // helper function for displaying the tweet creation date
  const datePosted = new Date(milliseconds);
  const dateNow = new Date().getTime();
  const diffTime = Math.abs(dateNow - datePosted);
  let diff;
  let unit;

  if (diffTime < 1000 * 60) { // milliseconds in a minute
    diff = Math.floor(diffTime / (1000));
    unit = "seconds";
  } else if (diffTime < 1000 * 60 * 60) { // milliseconds in an hour
    diff = Math.floor(diffTime / (1000 * 60));
    unit = "minutes";
  } else if (diffTime < 1000 * 60 * 60 * 24) { // milliseconds in a day
    diff = Math.floor(diffTime / (1000 * 60 * 60));
    unit = "hours";
  } else if (diffTime < 1000 * 60 * 60 * 24 * 30) { // approximate milliseconds in a month
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    unit = "days";
  } else if (diffTime < 1000 * 60 * 60 * 24 * 30 * 12) { // approximate milliseconds in a year
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    unit = "months";
  } else { // approximate milliseconds in a year
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
    unit = "years";
  }
  
  return `${diff} ${unit} ago`;
};

const createTweetElement = tweetObj => {
  const tweet = `
  <article>
    <header>
      <div>
        <img src="${tweetObj.user.avatars}">
        <h4>${tweetObj.user.name}</h4>
      </div>
      <p class="handle">${tweetObj.user.handle}</p>
    </header>
    <p>${tweetObj.content.text}</p>
    <footer>
      <p>${getDateString(tweetObj.dateCreated)}</p>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `;

  return tweet;
};

const renderTweets = tweetsArr => {
  for (const item of tweetsArr) {
    const tweet = createTweetElement(item);
    $(".tweet-container").prepend(tweet);
  }
};

const loadTweets = () => {
  $.get("/tweets/")
  .then(function(data, status) {
    renderTweets(data);
  });
};

$(document).ready(function() {
  const form = $("form");

  loadTweets();

  form.submit(function(event) {
    event.preventDefault();

    const entry = $(this).serialize();
    const textarea = $(this).find("#tweet-text");
    const counter = $(this).find(".counter");

    $.post("/tweets/", entry);

    $(".tweet-container").empty();
    textarea.val("");
    counter.html(140);

    loadTweets();
  });
});