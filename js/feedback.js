var feedbackLink = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".modal-feedback-reg");
var feedbackClose = document.querySelector(".body");
var feedbackLogin = FeedbackPopup.querySelector(".mod2-username");
var feedbackMail = FeedbackPopup.querySelector(".mod2-usermail");
var feedbackForm = FeedbackPopup.querySelector(".feedback-form");
var feedbackComment = FeedbackPopup.querySelector(".mod2-comment");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storage) {
    feedbackLogin.value = storage;
    feedbackMail.focus();
  } else {
    feedbackLogin.focus();
  }
  if (storage) {
    feedbackMail.value = storage;
    FeedbackComment.focus();
  } else {
    feedbackLogin.focus();
    feedbackMail.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

FeedbackForm.addEventListener("submit", function (evt) {
  if (!FeedbackLogin.value || !FeedbackMail.value || !FeedbackComment.value) {
    evt.preventDefault();
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});