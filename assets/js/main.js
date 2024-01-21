/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  const closeMenu = () => {
    if (nav.classList.contains("show-menu")) {
      nav.classList.remove("show-menu");
      toggle.classList.remove("show-icon");
    }
  };

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });

  // Close the menu if the user clicks outside the navigation menu
  document.body.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle) {
      closeMenu();
    }
  });
};

showMenu("nav-toggle", "nav-menu");

function toggleDropdown() {
  var dropdownMenu = document.getElementById("registrationMenu");

  // Toggle the visibility of the dropdown menu
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}
// showMenu("nav-toggle", "nav-menu");

/*=============== COUNTDOWN ===============*/
let x = setInterval(function () {
  let now = new Date("03/29/2024 00:00:00").getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = d + "<br/><span> Days </span>";
  document.getElementById("hours").innerHTML = h + "<br/><span> Hours </span>";
  document.getElementById("minutes").innerHTML =
    m + "<br/><span> Minutes </span>";
  document.getElementById("seconds").innerHTML =
    s + "<br/><span> Seconds </span>";

  document.getElementById("dd").style.strokeDashoffset = 440 - (440 * d) / 365;
  document.getElementById("hh").style.strokeDashoffset = 440 - (440 * h) / 24;
  document.getElementById("mm").style.strokeDashoffset = 440 - (440 * m) / 60;
  document.getElementById("ss").style.strokeDashoffset = 440 - (440 * s) / 60;

  document.querySelector(".day_dot").style.transform = `rotateZ(${
    d * 0.986
  }deg)`;
  document.querySelector(".hr_dot").style.transform = `rotateZ(${h * 15}deg)`;
  document.querySelector(".min_dot").style.transform = `rotateZ(${m * 6}deg)`;
  document.querySelector(".sec_dot").style.transform = `rotateZ(${s * 6}deg)`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").style.display = "none";
    document.querySelector(".theta").style.display = "block";
  }
});

/*=============== FOOTER ===============*/
// document.addEventListener("DOMContentLoaded", function () {
//   var body = document.body;
//   var footer = document.querySelector("footer");

//   function updateFooterVisibility() {
//     var isFooterVisible =
//       body.scrollHeight <= window.innerHeight + window.scrollY;

//     // Update footer display property based on visibility
//     footer.style.display = isFooterVisible ? "block" : "none";
//   }

//   // Update footer visibility on initial load
//   updateFooterVisibility();

//   // Update footer visibility on window resize
//   window.addEventListener("resize", updateFooterVisibility);

//   // Update footer visibility on scroll
//   window.addEventListener("scroll", updateFooterVisibility);
// });
window.addEventListener('DOMContentLoaded', function() {
  adjustFooterPosition(); // Adjust footer position on page load
});

window.addEventListener('resize', function() {
  adjustFooterPosition(); // Adjust footer position when the window is resized
});

function adjustFooterPosition() {
  const body = document.body;
  const html = document.documentElement;
  const windowHeight = window.innerHeight;
  const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  if (bodyHeight < windowHeight) {
      // If the content height is less than the viewport height, adjust the footer position
      document.querySelector('footer').style.marginTop = (windowHeight - bodyHeight) + 'px';
  } else {
      // Reset the margin if the content height is greater than or equal to the viewport height
      document.querySelector('footer').style.marginTop = 'auto';
  }
}
