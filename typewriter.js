"use strict";

window.addEventListener("load", getText);

let string;
let letters;
let a = 0;
let typekey1 = document.querySelector("#typekey1");
let typekey2 = document.querySelector("#typekey2");
let typelast = document.querySelector("#typelast");

function getText() {
  string = document.querySelector(".typewritten").textContent;
  console.log("getText " + string);
  removeText();
}

function removeText() {
  var typewritten = document.querySelector(".typewritten").textContent;
  var empty = typewritten.replace(typewritten, "???");
  console.log("removeText " + string + empty);
  showLetter();
}

function showLetter() {
  letters = string.substring(0, a);
  document.querySelector(".typewritten").textContent = letters;
  console.log("showLetter " + letters);

  var c = Math.floor(Math.random() * 2);

  if (c === 0) {
    typekey1.play();
    console.log(c);
  } else {
    typekey2.play();
    console.log(c);
  }

  waitTimeout();
}

function waitTimeout() {
  if (a > string.length) {
    typelast.play();
    endTypewriter();
    console.log(a > string.lenght);
  } else {
    var b = Math.floor(Math.random() * 100 + 400);
    console.log("b= " + b);
    setTimeout(incrementNumber, b);
    // incrementNumber();
  }
}

function incrementNumber() {
  a++;
  console.log("incrementNumber " + a);
  showLetter();
}

function endTypewriter() {
  console.log("endTypewriter");
  document.querySelector(".typewritten").classList.add("blink");
  document.querySelector(".typewritten").addEventListener("animationend", restartTypewriter);
}

function restartTypewriter() {
  console.log("restartTypewriter");
  document.querySelector(".typewritten").classList.remove("blink");
  document.querySelector(".typewritten").removeEventListener("animationend", restartTypewriter);
  a = 0;
  removeText();
}
