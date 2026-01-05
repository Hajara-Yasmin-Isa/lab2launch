const links = document.querySelectorAll("a[data-page]");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-page");

    // Switch active page
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    // Highlight active nav link
    links.forEach(l => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});
