// toggling fixed navbar
const navbar = document.querySelector(".Main_Header");
const navbar_height = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", function () {
  const scroll_distance = window.pageYOffset;
  if (scroll_distance > navbar_height) {
    navbar.classList.add("Fixed_Navbar");
  } else {
    navbar.classList.remove("Fixed_Navbar");
  }
});

// navbar scrolling
const links = document.querySelectorAll(".Header_Text");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href");
    const element = document.querySelector(id);
    var position = element.offsetTop - navbar_height;
    console.log(position);
    window.scrollTo({ left: 0, top: position });
  });
});
