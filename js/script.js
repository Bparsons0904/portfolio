console.log("success");
let leftText = {
    startingPosition: 0,
    newPosition: 0,
    positionDifference: 0,
    margin: 0,
}

let scrolling = {
    width: 0,
    position: 0,
    scrollUp: false
}

let rightText;
window.onload = () => {
    leftText.startingPosition = document.getElementById('left-text').getBoundingClientRect().y;
    scrolling.position = document.getElementById('left-text').getBoundingClientRect().y;

    scrolling.width = window.innerWidth;
    rightText = document.getElementById('right-text');
}

function slideOut() {
    // setScroll();
    leftText.object = document.getElementById('left-text');
    leftText.newPosition =  leftText.object.getBoundingClientRect().y;
    leftText.positionDifference = (leftText.newPosition > 0) ?  leftText.newPosition / leftText.startingPosition : 0;
    const offsetAmount = (scrolling.width/2) * (1 - leftText.positionDifference);
    const leftOffset = "right: " + offsetAmount + "px";
    const rightOffset = "left: " + offsetAmount + "px";
    document.getElementById('left-text').setAttribute("style", leftOffset);
    document.getElementById('right-text').setAttribute("style", rightOffset);
    // if (scrolling.scrollUp) {
    //     const offsetAmount = (scrolling.width/2) * (1 - leftText.positionDifference);
    //     console.log((scrolling.width/2) * leftText.positionDifference);
        
    //     const margin = "right: " + offsetAmount + "px";
    //     document.getElementById('left-text').setAttribute("style", margin);

        
    // } else {
    //     const margin = "right: " + leftText.margin + "px";
    //     document.getElementById('left-text').setAttribute("style", margin);
    // }


}

// function setScroll() {
//     const newPosition = document.getElementById("left-text").getBoundingClientRect().y;
//     if (newPosition < scrolling.position) {
//         scrolling.scrollUp = true;
        
//     } else {
//         scrolling.scrollUp = false;
//     }
//     scrolling.position = newPosition;
// }