"use strict";

// Accordian Functionality
const accordians = document.querySelectorAll(".btn-accordian");
accordians.forEach((accordian) => {
  accordian.addEventListener("click", () => {
    accordians.forEach((acc) => {
      if(accordian !== acc)
        acc.parentNode.classList.remove("active-accordian");
    })
    accordian.parentNode.classList.toggle("active-accordian");
  });
});
