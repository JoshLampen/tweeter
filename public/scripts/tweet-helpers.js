const getDateString = milliseconds => { // displays the tweet creation date
  const datePosted = new Date(milliseconds);
  const dateNow = new Date().getTime();
  const diffTime = Math.abs(dateNow - datePosted);
  let diff;
  let unit;

  if (diffTime < 1000 * 60) { // milliseconds in a minute
    diff = Math.floor(diffTime / (1000));
    diff === 1 ? unit = "second" : unit = "seconds";
  } else if (diffTime < 1000 * 60 * 60) { // milliseconds in an hour
    diff = Math.floor(diffTime / (1000 * 60));
    diff === 1 ? unit = "minute" : unit = "minutes";
  } else if (diffTime < 1000 * 60 * 60 * 24) { // milliseconds in a day
    diff = Math.floor(diffTime / (1000 * 60 * 60));
    diff === 1 ? unit = "hour" : unit = "hours";
  } else if (diffTime < 1000 * 60 * 60 * 24 * 30) { // approximate milliseconds in a month
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    diff === 1 ? unit = "day" : unit = "days";
  } else if (diffTime < 1000 * 60 * 60 * 24 * 30 * 12) { // approximate milliseconds in a year
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    diff === 1 ? unit = "month" : unit = "months";
  } else {
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
    diff === 1 ? unit = "year" : unit = "years";
  }
  
  return `${diff} ${unit} ago`;
};

const validateTweet = tweet => {
  const entry = $(tweet).serialize();
  const counter = $(tweet).find(".counter");
  let errorMessage;
  
  if (entry.length < 6 || entry === null) { // an empty string, when serialized, will be 'text='
  errorMessage = "Error: Cannot post an empty tweet";
} else if (counter.val() < 0) {
  errorMessage = "Error: Character limit exceeded";
}

  return errorMessage;
};

const escape = string => { // prevents XSS when inputting text from the form submission
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(string));
  return div.innerHTML;
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
    <p>${escape(tweetObj.content.text)}</p>
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

const resetForm = form => {
  const textarea = $(form).find("#tweet-text");
  const counter = $(form).find(".counter");

  textarea.val("");
  counter.html(140);
};