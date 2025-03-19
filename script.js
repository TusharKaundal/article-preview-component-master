document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".share-btn");
  const shareBtnMobile = document.querySelector(".share-btn-mobile");
  const sharePopup = document.querySelector(".share-popup");
  const articleFooter = document.querySelector(".article-footer");
  const articleFooterMobile = document.querySelector(".article-footer-mobile");

  shareBtn.addEventListener("click", () => {
    sharePopup.classList.toggle("show-popup");
    articleFooter.classList.toggle("hidden");
    articleFooterMobile.classList.toggle("hidden");
    shareBtn.classList.toggle("clicked");
    shareBtnMobile.classList.toggle("clicked");
  });
  shareBtnMobile.addEventListener("click", () => {
    sharePopup.classList.toggle("show-popup");
    articleFooter.classList.toggle("hidden");
    articleFooterMobile.classList.toggle("hidden");
    shareBtn.classList.toggle("clicked");
    shareBtnMobile.classList.toggle("clicked");
  });
});
