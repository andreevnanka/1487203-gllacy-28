var feedbackLink = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".modal-feedback-reg");
var feedbackClose = FeedbackPopup.querySelector(".feedback-close");
var feedbackLogin = FeedbackPopup.querySelector(".feedback-username");
var feedbackMail = FeedbackPopup.querySelector(".feedback-usermail");
var feedbackForm = FeedbackPopup.querySelector(".feedback-form");
var feedbackComment = FeedbackPopup.querySelector(".feedback-comment");

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
    feedbackComment.focus();
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
feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackLogin.value || !feedbackMail.value || !feedbackComment.value) {
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