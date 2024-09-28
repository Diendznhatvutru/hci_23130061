document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about-link");
  const cvPopup = document.getElementById("cv-popup");
  const closeCvButton = document.getElementById("close-cv");

  aboutLink.addEventListener("click", (event) => {
    event.preventDefault(); // Ngăn không cho chuyển trang
    cvPopup.style.display = "block"; // Hiện CV
  });

  closeCvButton.addEventListener("click", () => {
    cvPopup.style.display = "none"; // Đóng CV
  });

  // Đóng CV khi nhấp ra ngoài
  window.addEventListener("click", (event) => {
    if (event.target === cvPopup) {
      cvPopup.style.display = "none";
    }
  });
});
