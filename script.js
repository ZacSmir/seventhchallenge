var colorfulElements = $(".intro-section")
var colorNameDisplay = $("#color-display")
console.log("cats")
colorfulElements.hover(function(e) {
  var elementHoveredOver = $(e.target)
  console.log(elementHoveredOver);
  colorNameDisplay.html();
})