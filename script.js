// Intro animatsiya
setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
}, 2500);

// Oddiy tashrif hisoblagichi (faqat shu brauzer uchun)
let count = localStorage.getItem("lady_views");

if (!count) {
    count = 1;
} else {
    count = Number(count) + 1;
}

localStorage.setItem("lady_views", count);

const counter = document.getElementById("counter");

if (counter) {
    counter.innerText = count;
}
