"use strict";

const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];
let mergedArr = [];

document.getElementById("original-arrays").innerHTML = `[${arr1}] , [${arr2}]`;

function mergeArrs(arr1, arr2) {
  setTimeout("showHide('brain')", 500);
  audioup.play();
  for (let i = 0; i < arr1.length; i++) {
    mergedArr[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    mergedArr[i + arr1.length] = arr2[i];
  }
  document.getElementById("mergeRes").innerHTML = `[${mergedArr}]`;
  document.getElementById("phase2").classList.remove("hide");
}

function sortArr(arr) {
  setTimeout("showHide('brain')", 500);
  setTimeout("showHide('reset')", 3000);
  audiodown.play();
  for (let i = 0; i < arr.length; i++) { //looping through each item in the array.
    for (let j = 0; j < arr.length; j++) { //need to compare each item to the rest of the items.
      if (arr[j] > arr[j + 1]) { //testing if currItem is bigger than the nextItem.
        let tmp = arr[j]; //if currItem is bigger than nextItem, save the current item's value to a temporary storage.
        arr[j] = arr[j + 1]; //and then re-set the currItem's value to the nextItem's value.
        arr[j + 1] = tmp; // and then re-set the nextItem's value to what the currItem's value was in the begining.
      }
    }
  }
  document.getElementById("orderRes").innerHTML = `[${mergedArr}]`;
}

function showRes(location) {
  showHide('brain');
  if (location === 'merge') {
    setTimeout("mergeArrs(arr1, arr2)", 3000);
  } else {
    setTimeout("sortArr(mergedArr)", 3000);
  }
}

function showHide(el) {
  if (el === 'brain') {
    document.getElementById("brain").classList.toggle("hide");
  } else if (el === 'reset') {
    document.getElementById("reset").classList.toggle("hide");
  } else {
    document.getElementById("phase2").classList.toggle("hide");
  }
}

function reset() {
  showHide('brain')
  setTimeout("clear()", 2000);
}

function clear() {
  setTimeout("showHide('brain')", 500);
  audioreset.play();
  document.getElementById("mergeRes").innerHTML = '';
  document.getElementById("orderRes").innerHTML = '';
  showHide('phase2');
  showHide('reset');
}

let audiodown = new Audio('whistledown.wav');

let audioup = new Audio('whistleup.wav');

let audioreset = new Audio('reset.wav');
