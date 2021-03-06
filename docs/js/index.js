const $ = new DisplayJS(window);
$.scroll(() => {
  requestAnimationFrame(parallax);
});
function parallax() {
  if ($.scrollTop() > window.innerHeight) {
    $.css(".logo", "display", "none");
    $.css("footer", "display", "block");
  } else {
    $.css(".logo", {
      transform: "translateY( -" + $.scrollTop() / 2.5 + "px)",
      display: ""
    });
    $.css("footer", "display", "none");
  }
}
$.on(".video", "click", () => {
  $.toggleClass(".youtube", "overlay");
});
