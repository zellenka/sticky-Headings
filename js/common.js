window.onscroll = function() {
  var firstHeading = document.querySelector("#one");
  var secondHeading = document.querySelector("#two");
  var thirdHeading = document.querySelector("#three");
  // getting access to elements
  var scrollHeight =
    document.getElementById("text-content").scrollHeight +
    document.getElementById("one").scrollHeight;
  // calculating height between elements
  if (
    (document.documentElement.scrollTop > 50 &&
      document.documentElement.scrollTop < scrollHeight + 50) ||
    (document.body.scrollTop > 50 &&
      document.body.scrollTop < scrollHeight + 50)
  ) {
    firstHeading.classList.add("fixed");
    secondHeading.classList.remove("fixed");
    // area to show first element
  } else if (
    (document.documentElement.scrollTop > 50 + scrollHeight &&
      document.documentElement.scrollTop < scrollHeight * 2) ||
    (document.body.scrollTop > 50 + scrollHeight &&
      document.body.scrollTop < scrollHeight * 2)
  ) {
    secondHeading.classList.add("fixed");
    firstHeading.classList.remove("fixed");
    thirdHeading.classList.remove("fixed");
    // area to show second element
  } else if (
    (document.documentElement.scrollTop > 50 + scrollHeight &&
      document.documentElement.scrollTop < scrollHeight * 3 + 50) ||
    (document.body.scrollTop > 50 + scrollHeight &&
      document.body.scrollTop < scrollHeight * 3 + 50)
  ) {
    thirdHeading.classList.add("fixed");
    secondHeading.classList.remove("fixed");
    // area to show third element
  } else {
    firstHeading.classList.remove("fixed");
    secondHeading.classList.remove("fixed");
    thirdHeading.classList.remove("fixed");
  }
};
