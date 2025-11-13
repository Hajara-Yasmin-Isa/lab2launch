const links = document.querySelectorAll("a[data-page]");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-page");

    pages.forEach(page => {
      page.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");
  });
});
