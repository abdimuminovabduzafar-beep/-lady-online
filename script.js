// Visitor Counter (faqat shu brauzer uchun)

let visitors = Number(localStorage.getItem("lady_visitors") || 0);

visitors++;

localStorage.setItem("lady_visitors", visitors);

document.getElementById("counter").textContent = visitors;
