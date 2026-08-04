let count = Number(localStorage.getItem("lady_counter") || 0);
count++;
localStorage.setItem("lady_counter", count);

const el = document.getElementById("counter");
if (el) {
  el.textContent = count;
}
