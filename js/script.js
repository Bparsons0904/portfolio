let scrolling = {
  startingPosition: 0,
  newPosition: 0,
  positionDifference: 0,
  width: 0,
  height: 0,
  object: {},
  arrowPosition: 0
};

function get(id) {
  return document.getElementById(id);
}

window.onload = () => {
  scrolling.startingPosition = get("left-text")
    .getBoundingClientRect().y;
  scrolling.width = window.innerWidth;
  scrolling.height = window.innerHeight;
  scrolling.arrowPosition = get("cover-down");
};

function slideOut() {
  if (scrolling.width > 768) {
    coverText();
  }
  coverDown();
}

function coverText() {
  scrolling.object = get("left-text");
  scrolling.newPosition = scrolling.object.getBoundingClientRect().y;
  scrolling.positionDifference =
    scrolling.newPosition > 0
      ? scrolling.newPosition / scrolling.startingPosition
      : 0;
  let offsetAmount;
  if (window.scrollY == 0) {
    offsetAmount = 0;
    scrolling.startingPosition = 
    get("left-text")
    .getBoundingClientRect().y;
  } else {
    offsetAmount =
    (scrolling.width / 2.25) * (1 - scrolling.positionDifference);
  }
  const leftOffset = "right: " + offsetAmount + "px";
  const rightOffset = "left: " + offsetAmount + "px";
  get("left-text").setAttribute("style", leftOffset);
  get("right-text").setAttribute("style", rightOffset);
}

function coverDown() {
  let arrow = get("cover-down");
  let nav = get("top-nav");
  let header = get("top-nav-left");
  if (arrow.getBoundingClientRect().y < scrolling.height * 0.9) {
    arrow.classList.add("hide");
    nav.classList.add("sticky");
    header.classList.add("show-name");
  } else {
    arrow.classList.remove("hide");
    nav.classList.remove("sticky");
    header.classList.remove("show-name");
    // const leftOffset = "right: " + 0 + "px";
    // const rightOffset = "left: " + 0 + "px";
    // get("left-text").setAttribute("style", leftOffset);
    // get("right-text").setAttribute("style", rightOffset);
  }
}

function display3dBar(skill) {
  const elements = document.getElementsByClassName("outer-card");
  for (const element of elements) {
    element.classList.add("hidden");
  }
  const element = get(skill);
  element.classList.remove("hidden");
}

function smoothScroll(href) {
  get(href).scrollIntoView({
    behavior: "smooth"
  });
}

var onresize = function() 
{
  var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  console.log(width);
}