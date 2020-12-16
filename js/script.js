//filterizr
const filterizd = $(".menu").filterizr({
  //options object
});

//keep button focus until another button is clicked

let activeEL;
console.log(activeEL);

document.querySelectorAll(".btn").forEach((e) => {
  e.addEventListener("click", onButtonClick);
});

function onButtonClick(e) {
  if (activeEL) {
    console.log(activeEL);
    if (activeEL != e.currentTarget) {
      activeEL.classList.remove("active");
    }
    console.log(activeEL);
  }

  activeEL = e.currentTarget;
  activeEL.classList.add("active");
}

//pre-click ALL button to let user know where they are and what they might could do
const buttonAll = document.querySelectorAll(".btn");
buttonAll[0].click();

//show the date
const title = document.querySelector(".title");
const titleTime = document.querySelector(".clock");
let check = 0;
let clock;
const date = new Date();
const week = date.getDay();
const weekList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

title.addEventListener("click", function () {
  var date = new Date();
  var week = date.getDay();
  updateDate();

  if (check == 0) {
    title.innerHTML = clock;
    check = 1;
  } else {
    title.innerHTML = `Yahoo Menu`;
    check = 0;
  }
});

function updateDate() {
  let newDate = new Date();
  let month = newDate.getMonth() + 1;
  let days = newDate.getDate();
  let hour = newDate.getHours();
  let mins = newDate.getMinutes();
  let sec = newDate.getSeconds();

  let clockJSRead = `${addZero(month)}/${addZero(days)} ${addZero(hour)}:${addZero(mins)}:${addZero(sec)}`;
  clock = `${weekList[week - 1]}  ${clockJSRead}`;
  if (check == 1) {
    title.innerHTML = clock;
  }
}

function addZero(e) {
  if (e.toString().length == 1) {
    e = "0" + e;
  }
  return e;
}

setInterval(updateDate, 500);
updateDate();
