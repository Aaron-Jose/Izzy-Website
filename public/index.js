function openPage(pageName) {
  var i, tabtitle, tabcontent, tablinks;

  tabtitle = document.getElementsByClassName("tabtitle");
  for (i = 0; i < tabtitle.length; i++) {
    tabtitle[i].style.display = "none";
  }
  if (pageName == "HOME") {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "block";
    }
  } else {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  }

  document.getElementById(pageName).style.display = "block";
  document.getElementById(pageName.toLowerCase()).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// const button = document.getElementById("pageMenuBtn");
// const menu = document.getElementById("nav-contents");

// // Function to add "pressed" class on button
// function pressButton() {
//     if (menu.classList.contains('unpressed')) {
//         menu.classList.remove('unpressed');
//         menu.classList.add('pressed')
//         console.log('menu hidden')
//     }

//     console.log('menu shown')
// }

// // Function to remove "pressed" class from button
// function releaseButton() {
//     if (menu.classList.contains('pressed')) {
//         menu.classList.remove('pressed');
//         menu.classList.add('unpressed')
//         console.log('menu hidden')
//     }
// }

// // Add event listener for touch or pointer events
// button.addEventListener('pointerdown', pressButton);
// button.addEventListener('touchstart', pressButton);

// // Remove "pressed" state when the user taps anywhere else or scrolls
// document.addEventListener('pointerdown', function(event) {
//     if (!button.contains(event.target)) {
//         releaseButton();
//     }
// });

// document.addEventListener('touchstart', function(event) {
//     if (!button.contains(event.target)) {
//         releaseButton();
//     }
// });

// // Remove "pressed" state when scrolling
// window.addEventListener('scroll', releaseButton);