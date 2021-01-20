"use strict";

// Selectors

const cards = document.querySelectorAll(".cards");
const one = document.querySelector(".cardOne");
const two = document.querySelector(".cardTwo");
const three = document.querySelector(".cardThree");
const four = document.querySelector(".cardFour");
const five = document.querySelector(".cardFive");
const six = document.querySelector(".cardSix");

////////////////////////////////////////////////////////

// click counters

let clicks = 0;

let clickOneTwo = 0;

let clickThreeFour = 0;

let clickFiveSix = 0;

// Check if cards contains needed classes, if yes, add +1 to counters
const checkEquality = function (x) {
  if (x.classList.contains("one") || x.classList.contains("two")) {
    clickOneTwo++;
    clicks++;
    console.log(clicks);
    console.log(`Click one two = ${clickOneTwo}`);
  }
  if (x.classList.contains("three") || x.classList.contains("four")) {
    clickThreeFour++;
    clicks++;
    console.log(clicks);
    console.log(`Click three four = ${clickThreeFour}`);
  }
  if (x.classList.contains("five") || x.classList.contains("six")) {
    clickFiveSix++;
    clicks++;
    console.log(clicks);
    console.log(`Click five six = ${clickFiveSix}`);
  }
};

// Reset game

const reset = function () {
  cards.forEach((x) => {
    if (!x.classList.contains("hidden")) {
      x.classList.add("hidden");
    }
  });
};

// Count clicks function
// Here I check if cards are same, if not I put counters to 0 and also check witch card was last clicked on and I add to those clickcounter -1, and also to global click counter -1 so after that last click when everything goes back to start they can start from 0. This funcionality gave me much headache, until I realized that problem was in click counter and that when two opposite cards are revealed, and I click on third one for reset, counter actually starts from 1, and that gave me a bug. If they are same, and If they counter is equal or above two I putted background color equal to them so when I reset classes guessed one dont change. So I check equality by clicks, if click count of two choosen cards is above 2, and main click counter is below three that means that two cards are revealed in two clicks and that means that they are equal hits in two clicks

const countClicks = function (x) {
  if (
    (clicks === 2 && clickOneTwo === 1 && clickThreeFour === 1) ||
    (clicks === 2 && clickOneTwo === 1 && clickFiveSix === 1) ||
    (clicks === 2 && clickThreeFour === 1 && clickFiveSix === 1)
  ) {
    clickOneTwo = 0;
    clickThreeFour = 0;
    clickFiveSix = 0;

    if (x.classList.contains("one") || x.classList.contains("two")) {
      clickOneTwo = -1;
      clicks = -1;
    }
    if (x.classList.contains("three") || x.classList.contains("four")) {
      clickThreeFour = -1;
      clicks = -1;
    }
    if (x.classList.contains("five") || x.classList.contains("six")) {
      clickFiveSix = -1;
      clicks = -1;
    }
    reset();
  } else if (clickOneTwo === 2 && clicks === 2) {
    one.style.backgroundColor = "yellow";
    two.style.backgroundColor = "yellow";
    clicks = 0;
  } else if (clickThreeFour === 2 && clicks === 2) {
    three.style.backgroundColor = "green";
    four.style.backgroundColor = "green";
    clicks = 0;
  } else if (clickFiveSix === 2 && clicks === 2) {
    five.style.backgroundColor = "blueviolet";
    six.style.backgroundColor = "blueviolet";
    clicks = 0;
  }
};

// Add event listener for each cards

cards.forEach((x) =>
  x.addEventListener("click", function () {
    x.classList.remove("hidden");
    countClicks(x);
    checkEquality(x);
  })
);
