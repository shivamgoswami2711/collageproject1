const content = document.querySelector("#content");
const footer = document.querySelector("footer");
const get_Start = document.querySelector(".get_Start");
const main_container = document.querySelector(".main_container");
get_Start.addEventListener("click", () => {
    content.classList.remove("none")
    footer.classList.remove("none")
    main_container.classList.add("none")
})