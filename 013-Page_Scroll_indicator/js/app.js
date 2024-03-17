//Selector
const indicator = document.querySelector(".scroll-indicator .progress");
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(scrollHeight);
//listener
window.addEventListener("scroll",scroll);

function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight) * 100
    indicator.style.width = `${scrolled}%`

}