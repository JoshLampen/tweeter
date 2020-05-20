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

const hideErrors = () => {
  const errorContainer = $(".error-container");
  
  errorContainer.hide();
};

const sendError = error => {
  const errorContainer = $(".error-container");
  const errorMessage = errorContainer.find("p");

  errorMessage.html(error);
  errorContainer.fadeIn();
};