function disableButtonSm(clickedButton) {
  clickedButton.disabled = false;
  old = clickedButton.innerHTML;
  clickedButton.classList.add("loading-sm");
  clickedButton.innerHTML = "Loading...";
  clickedButton.style.cursor = "not-allowed";
  clickedButton.classList.add("loading");

  setTimeout(function () {
    clickedButton.classList.remove("loading-sm");
    clickedButton.classList.remove("loading");
    clickedButton.disabled = true;
    clickedButton.style.opacity = 0.5;
    clickedButton.innerHTML = old;
  }, 2000);
}
// medium button
function disableButtonMd(clickedButton) {
    clickedButton.disabled = false;
    old = clickedButton.innerHTML;
    clickedButton.classList.add("loading-md");
    clickedButton.innerHTML = "Loading...";
    clickedButton.style.cursor = "not-allowed";
    clickedButton.classList.add("loading");
  
    setTimeout(function () {
      clickedButton.classList.remove("loading-md");
      clickedButton.classList.remove("loading");
      clickedButton.disabled = true;
      clickedButton.style.opacity = 0.5;
      clickedButton.innerHTML = old;
    }, 2000);
  }

// large button

function disableButtonLg(clickedButton) {
    clickedButton.disabled = false;
    old = clickedButton.innerHTML;
    clickedButton.classList.add("loading-lg");
    clickedButton.innerHTML = "Loading...";
    clickedButton.style.cursor = "not-allowed";
    clickedButton.classList.add("loading");
  
    setTimeout(function () {
      clickedButton.classList.remove("loading-lg");
      clickedButton.classList.remove("loading");
      clickedButton.disabled = true;
      clickedButton.style.opacity = 0.5;
      clickedButton.innerHTML = old;
    }, 2000);
  }