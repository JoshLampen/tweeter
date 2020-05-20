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
        <i class="fas fa-flag footer-icon"></i>
        <i class="fas fa-retweet footer-icon"></i>
        <i class="fas fa-heart footer-icon"></i>
      </div>
    </footer>
  </article>
  `;

  return tweet;
};