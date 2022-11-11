$(document).ready(function () {
  let close = document.querySelectorAll(".clients-base-list-item-cancell");
  let modal = document.querySelectorAll(".item-cancell-window");
  let buttons = document.querySelectorAll(".clients-base-list-item .my-service-item-action-text")

  let cardList = document.querySelectorAll(".clients-base-list-item");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      if (modal[i].classList.length > 1) {
        modal[i].classList.remove("hidden-item-cancell-window");
      } else {
        modal[i].classList.add("hidden-item-cancell-window");
      }
    });
  }

  let flag = false;
  let titleHeader = document.querySelector(".salon-clients-base-header");

  if (window.innerWidth <= 1000 && flag === false) {
    for (let i = 0; i < cardList.length; i++) {
      let title = document
        .querySelector(".salon-clients-base-header")
        .cloneNode(true);
      console.log(title);
      cardList[i].appendChild(title);

      buttons[i].classList.remove("hidden-btn");
    }

    titleHeader.classList.add("hidden-header");

    let duration = document.querySelectorAll(
      ".salon-clients-base-header div:nth-child(4)"
    );

    for (let i = 0; i < duration.length; i++) {
      duration[i].innerHTML = "Длит.";
    }
    duration.innerHTML = "Длит.";
    titleHeader.classList.add("hidden-header");
    flag = true;
  }

  window.addEventListener(`resize`, (event) => {
    console.log(window.innerWidth, event);

    if (window.innerWidth <= 1000 && flag === false) {
      for (let i = 0; i < cardList.length; i++) {
        let title = document
          .querySelector(".salon-clients-base-header")
          .cloneNode(true);
        console.log(title);
        cardList[i].appendChild(title);

        buttons[i].classList.remove("hidden-btn");
      }

      titleHeader.classList.add("hidden-header");

      let duration = document.querySelectorAll(
        ".salon-clients-base-header div:nth-child(4)"
      );

      for (let i = 0; i < duration.length; i++) {
        duration[i].innerHTML = "Длит.";
      }
      duration.innerHTML = "Длит.";
      titleHeader.classList.add("hidden-header");
      flag = true;
    } else if (window.innerWidth >= 1000 && flag === true) {
      for (let i = 0; i < cardList.length; i++) {
        buttons[i].classList.add("hidden-btn");
      }

      let titleList = document.querySelectorAll(
        ".clients-base-list-item .salon-clients-base-header"
      );
      titleHeader.classList.remove("hidden-header");
      for (let i = 0; i < titleList.length; i++) {
        titleList[i].parentNode.removeChild(titleList[i]);
      }

      let durationHeader = document.querySelector(
        ".salon-clients-base-header div:nth-child(4)"
      );
      durationHeader.innerHTML = "Длительность";

      flag = false;
    }
  });
});
