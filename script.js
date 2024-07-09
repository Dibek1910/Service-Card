document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.querySelector(".box-container");
  const boxes = Array.from(document.querySelectorAll(".box"));

  const firstThree = boxes.slice(0, 3);
  const lastThree = boxes.slice(3);

  boxContainer.innerHTML = "";

  firstThree.forEach((box) => {
    boxContainer.appendChild(box);
  });

  lastThree.forEach((box) => {
    boxContainer.appendChild(box);
  });
});
