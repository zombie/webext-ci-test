"use strict";

function add(str) {
  let div = document.createElement("div");
  div.textContent = "this div is " + str;
  document.body.appendChild(div);
}

function color(color) {
  document.body.className = color;
}

add("2nd");

color("green");

setTimeout(() => add("3rd"), 2000);

setTimeout(() => color("blue"), 4000);

setTimeout(() => add("4th"), 6000);

setTimeout(() => color("black"), 8000);

setTimeout(() => add("5th"), 10000);
