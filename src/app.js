/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My Cat", "My Bird"];
  let action = ["ate", "peed", "crushed", "broke", "blow"];
  let what = ["my homework", "my phone", "the car", "my guitar", "laptop"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "When I was driving",
  ];

  function printExcuse() {
    document.getElementById("excuse").innerHTML =
      who[Math.floor(Math.random() * 5)] +
      " " +
      action[Math.floor(Math.random() * 5)] +
      " " +
      what[Math.floor(Math.random() * 5)] +
      " " +
      when[Math.floor(Math.random() * 5)] +
      ".";
  }

  console.log(printExcuse());
};
