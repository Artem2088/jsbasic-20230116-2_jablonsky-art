function initCarousel() {
  const btnRigth = document.querySelector(".carousel__arrow_right");
  const btnLeft = document.querySelector(".carousel__arrow_left");
  const carusel = document.querySelector(".carousel__inner");
  let size = carusel.offsetWidth;
  const count = 1;
  let position = 0;
  let index = 0;

  btnRigth.addEventListener("click", function (event) {
    index += 1;

    const targetBtnRgt = event.target.closest(".carousel__arrow_right");
    if (!targetBtnRgt) return;
    position -= size * count;
    carusel.style.transform = `translateX(${position}px)`;

    index == 3
      ? (btnRigth.style.display = "none")
      : (btnRigth.style.display = " ");

    if (index != 0) {
      return (btnLeft.style.display = "");
    }
    return;
  });

  btnLeft.addEventListener("click", function (event) {
    const targetBtnRgt = event.target.closest(".carousel__arrow_left");
    if (!targetBtnRgt) return;

    position += `${size}` * count;
    carusel.style.transform = `translateX(${position}px)`;

    if (position == 0) {
      return (btnLeft.style.display = "none");
    }
    return;
  });
  index == 0 ? (btnLeft.style.display = "none") : (btnLeft.style.display = "");
}
