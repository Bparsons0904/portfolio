// Object for display positions and size
let scrolling = {
  startingPosition: 0,
  newPosition: 0,
  positionDifference: 0,
  width: 0,
  height: 0,
  object: {},
};

// GSAP TL Variable
let tl = gsap.timeline({ defaults: { duration: 0.7, delay: 0 } });

// Get element by ID function
function get(id) {
  return document.getElementById(id);
}

// Once DOM loaded, set scrolling object variables
window.onload = () => {
  scrolling.startingPosition = get("left-text").getBoundingClientRect().y;
  scrolling.width = window.innerWidth;
  scrolling.height = window.innerHeight;
  tl.from("#left-text", { y: -400, opacity: 0 })
    .from("#right-text", { y: 400, opacity: 0 })
    .from("#top-nav-right", { x: 400, opacity: 0 });
  document.querySelectorAll(".flag-container").forEach((flag) => {
    observer.observe(flag);
  });
  let skillWrapper = document.getElementById("skills-wrapper");
  observer.observe(document.getElementById("skills-wrapper"));
  horizontalDrag();
};

// On scroll, call scrolling functions
function slideOut() {
  if (scrolling.width > 768) {
    coverText();
  }
  coverDown();
}

// Slide name and title to outside of DOM
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
    scrolling.startingPosition = get("left-text").getBoundingClientRect().y;
  } else {
    offsetAmount =
      (scrolling.width / 2.25) * (1 - scrolling.positionDifference);
  }
  const leftOffset = "right: " + offsetAmount + "px";
  const rightOffset = "left: " + offsetAmount + "px";
  get("left-text-container").setAttribute("style", leftOffset);
  get("right-text-container").setAttribute("style", rightOffset);
}

// Remove/Display arrow down arrows
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
  }
}

// Display arrow indicator and 3d bar
function display3dBar(event, skill) {
  let elements = document.getElementsByClassName("bar active");
  for (const element of elements) {
    element.classList.remove("active");
  }
  elements = document.getElementsByClassName("outer-card");
  for (const element of elements) {
    element.classList.add("hidden");
  }
  const element = get(skill);
  element.classList.remove("hidden");
  event.target.classList.add("active");
}

// Set scroll to smooth
function smoothScroll(href) {
  get(href).scrollIntoView({
    behavior: "smooth",
  });
}

const intersectionOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
  delay: 1,
};

let callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.set(entry.target, { y: 500 });
      gsap.to(entry.target, { y: 0, opacity: 1 });
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(callback, intersectionOptions);

// Testing function for display size
// var onresize = function()
// {
//   var width = window.innerWidth
//   || document.documentElement.clientWidth
//   || document.body.clientWidth;
//   console.log(width);
// }

function horizontalDrag() {
  let el = document.querySelector("#draggable");
  let x = 0,
    y = 0,
    top = 0,
    left = 0;

  let draggingFunction = (e) => {
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", draggingFunction);
    });

    el.scrollLeft = left - e.pageX + x;
    el.scrollTop = top - e.pageY + y;
  };

  el.addEventListener("mousedown", (e) => {
    e.preventDefault();

    y = e.pageY;
    x = e.pageX;
    top = el.scrollTop;
    left = el.scrollLeft;

    document.addEventListener("mousemove", draggingFunction);
  });
}
