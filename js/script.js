let scrolling = {
    startingPosition: 0,
    newPosition: 0,
    positionDifference: 0,
    width: 0,
    height: 0,
    object: {},
    arrowPosition: 0
}

window.onload = () => {
    scrolling.startingPosition = document.getElementById('left-text').getBoundingClientRect().y;
    scrolling.width = window.innerWidth;
    scrolling.height = window.innerHeight;
    scrolling.arrowPosition = document.getElementById('cover-down');
    // $("#skill-list-container").load("../pages/skill-list.html"); 
}


function slideOut() {
    coverText();
    coverDown();
    aboutIn();
}

function coverText() {
    scrolling.object = document.getElementById('left-text');
    scrolling.newPosition =  scrolling.object.getBoundingClientRect().y;
    scrolling.positionDifference = (scrolling.newPosition > 0) ?  scrolling.newPosition / scrolling.startingPosition : 0;
    const offsetAmount = (scrolling.width/2) * (1 - scrolling.positionDifference);
    const leftOffset = "right: " + offsetAmount + "px";
    const rightOffset = "left: " + offsetAmount + "px";
    document.getElementById('left-text').setAttribute("style", leftOffset);
    document.getElementById('right-text').setAttribute("style", rightOffset);
}

function coverDown() {
    const element = document.getElementById('cover-down');
    (element.getBoundingClientRect().y < (scrolling.height * .9)) ? element.classList.add('hide') : element.classList.remove('hide');
}

function aboutIn() {

    // let allMods = $(".about-item");
    // allMods.each(function(i, el) {
    //     el = $(el);
	// 	if (el.is(":visible")) {
 	// 		el.addClass("slideUp");
	// 	}
	// });
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
