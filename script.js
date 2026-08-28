// Envelope opens into a full-screen reader that shows one letter at a time.
// Page through the four with the arrows, arrow keys, swipe, or the dots.

(function () {
  var envelope = document.getElementById("envelope");
  var reader = document.getElementById("reader");
  var track = document.getElementById("track");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var countEl = document.getElementById("count");
  var dotsWrap = document.getElementById("dots");
  if (!envelope || !reader) return;

  var pages = Array.prototype.slice.call(track.querySelectorAll(".page"));
  var total = pages.length;
  var index = 0;
  var isOpen = false;

  // Build one navigation dot per page.
  var dots = pages.map(function (_, i) {
    var dot = document.createElement("button");
    dot.className = "reader__dot";
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Go to letter " + (i + 1));
    dot.addEventListener("click", function () { goTo(i); });
    dotsWrap.appendChild(dot);
    return dot;
  });

  function render() {
    track.style.transform = "translateX(" + (-index * 100) + "%)";
    countEl.textContent = (index + 1) + " / " + total;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;
    pages.forEach(function (page, i) {
      page.setAttribute("aria-hidden", i === index ? "false" : "true");
    });
    dots.forEach(function (dot, i) {
      dot.setAttribute("aria-current", i === index ? "true" : "false");
    });
  }

  function goTo(i) {
    index = Math.max(0, Math.min(total - 1, i));
    render();
  }
  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function openEnvelope() {
    if (isOpen) return;
    isOpen = true;
    document.body.classList.add("is-open");
    envelope.setAttribute("aria-expanded", "true");

    // Once the reader has faded in, move focus to the first letter's name
    // so keyboard / screen-reader users land on the content.
    window.setTimeout(function () {
      var firstName = reader.querySelector(".doc__name");
      if (firstName) firstName.focus({ preventScroll: true });
    }, 1400);
  }

  // A <button> fires click for mouse and keyboard (Enter / Space) alike.
  envelope.addEventListener("click", openEnvelope);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Arrow keys (and Home / End) page through once the reader is open.
  document.addEventListener("keydown", function (e) {
    if (!isOpen) return;
    if (e.key === "ArrowRight") { next(); }
    else if (e.key === "ArrowLeft") { prev(); }
    else if (e.key === "Home") { goTo(0); }
    else if (e.key === "End") { goTo(total - 1); }
  });

  // Basic swipe support on touch devices.
  var startX = null;
  reader.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });
  reader.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    startX = null;
  });

  render();
})();
