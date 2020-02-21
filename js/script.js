let scrolling = {
  startingPosition: 0,
  newPosition: 0,
  positionDifference: 0,
  width: 0,
  height: 0,
  object: {},
  arrowPosition: 0
};

window.onload = () => {
  scrolling.startingPosition = document
    .getElementById("left-text")
    .getBoundingClientRect().y;
  scrolling.width = window.innerWidth;
  scrolling.height = window.innerHeight;
  scrolling.arrowPosition = document.getElementById("cover-down");
};

function openMenu(x) {
  x.classList.toggle("change");
}

function slideOut() {
  if (scrolling.width > 768) {
    coverText();
  }
  coverDown();
}

function coverText() {
  scrolling.object = document.getElementById("left-text");
  scrolling.newPosition = scrolling.object.getBoundingClientRect().y;
  scrolling.positionDifference =
    scrolling.newPosition > 0
      ? scrolling.newPosition / scrolling.startingPosition
      : 0;
  const offsetAmount =
    (scrolling.width / 2) * (1 - scrolling.positionDifference);
  const leftOffset = "right: " + offsetAmount + "px";
  const rightOffset = "left: " + offsetAmount + "px";
  document.getElementById("left-text").setAttribute("style", leftOffset);
  document.getElementById("right-text").setAttribute("style", rightOffset);
}

function coverDown() {
  let arrow = document.getElementById("cover-down");
  let nav = document.getElementById("top-nav");
  if (arrow.getBoundingClientRect().y < scrolling.height * 0.9) {
    arrow.classList.add("hide");
    nav.classList.add("hide");
  } else {
    arrow.classList.remove("hide");
    nav.classList.remove("hide");
  }
//   element.getBoundingClientRect().y < scrolling.height * 0.9
//     ? element.classList.add("hide")
//     : element.classList.remove("hide");
//   element = document.getElementById("top-nav");
//   element.getBoundingClientRect().y < scrolling.height * 0.9
//     ? element.classList.add("hide")
//     : element.classList.remove("hide");
}

function display3dBar(skill) {
  console.log(skill);
  const elements = document.getElementsByClassName("outer-card");
  for (const element of elements) {
    element.classList.add("hidden");
  }
  const element = document.getElementById(skill);
  element.classList.remove("hidden");
}
