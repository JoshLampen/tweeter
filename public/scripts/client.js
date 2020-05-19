const getDateString = milliseconds => {
  const datePosted = new Date(milliseconds);
  const dateNow = new Date().getTime();
  const diffTime = Math.abs(dateNow - datePosted);
  let diff;
  let unit;
  if (diffTime < 1000 * 60) { // milliseconds in a minute
    diff = Math.floor(diffTime / (1000 * 60));
    unit = "seconds";
  } else if (diffTime < 1000 * 60 * 60) { // milliseconds in an hour
    diff = Math.floor(diffTime / (1000 * 60 * 60));
    unit = "minutes";
  } else if (diffTime < 1000 * 60 * 60 * 24) { // milliseconds in a day
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    unit = "hours";
  } else if (diffTime < 1000 * 60 * 60 * 24 * 30) { // approximate milliseconds in a month
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    unit = "days";
  } else if (diffTime < 1000 * 60 * 60 * 24 * 30 * 12) { // approximate milliseconds in a year
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
    unit = "months";
  } else { // approximate milliseconds in a year
    diff = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
    unit = "years";
  }
  return `${diff} ${unit} ago`;
};

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const createTweetElement = tweetObj => {
  const $tweet = $(`
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
      <p>${getDateString(tweetObj.created_at)}</p>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `);

  return $tweet;
};

const renderTweets = tweetsArr => {
  for (const tweet of tweetsArr) {
    const $tweet = createTweetElement(tweet);
    $(".container").append($tweet);
  }
};

$(document).ready(function() {
  renderTweets(data);
});