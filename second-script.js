`use strict`;

// SELECTING CSS CLASSES
const body = document.body;
const calcText = document.querySelector(`.header__calc-text`);
const setTitle = document.querySelector(`.header__set-title`);
const headerNums = document.querySelectorAll(`.header__switch-link`);
const headerNumBox = document.querySelector(`.header__form`);
const calcScreen = document.querySelector(`.calc-screen`);
const calcBtns = document.querySelector(`.calc-btns`);
const numBtnsColor = document.querySelectorAll(`.calc-btns__color`);

const numBtns = document.querySelectorAll(`.calcNum`);
const operationBtns = document.querySelectorAll(`.btn-operation`);
const switchBtns = document.querySelectorAll(`.header__switch-btn`);

const plusBtn = document.querySelector(`.btn-plus`);
const subBtn = document.querySelector(`.btn-sub`);
const divisionBtn = document.querySelector(`.btn-division`);
const multiplyBtn = document.querySelector(`.btn-multiply`);

const dotBtn = document.querySelector(`.btn-dot`);
const deleteBtn = document.querySelector(`.btn-delete`);
const resetBtn = document.querySelector(`.btn-reset`);
const equalBtn = document.querySelector(`.btn-equal`);

const screenSave = document.querySelector(`.calc-screen__save`);
const screenCalc = document.querySelector(`.calc-screen__calc`);

// IPLEMENTING SWITCH VERSIONS
switchBtns.forEach((switchBtn, i, arr) => {
  switchBtn.addEventListener(`click`, () => {
    if (i === 0) {
      body.style.backgroundColor = `rgba(58, 70, 99, 1)`;
      calcText.style.color = `rgba(255, 255, 255, 1)`;
      setTitle.style.color = `rgba(255, 255, 255, 1)`;
      headerNumBox.style.backgroundColor = `rgba(36, 45, 68, 1)`;
      switchBtn.style.backgroundColor = `rgba(208, 63, 47, 1)`;
      calcScreen.style.backgroundColor = `rgba(24, 31, 51, 1)`;
      screenSave.style.color = `rgba(255, 255, 255, 1)`;
      screenCalc.style.color = `rgba(255, 255, 255, 1)`;
      calcBtns.style.backgroundColor = `rgba(36, 45, 68, 1)`;

      deleteBtn.style.backgroundColor = `rgba(100, 113, 152, 1)`;
      deleteBtn.style.boxShadow = `inset 0px -4px 0px #414E73`;
      deleteBtn.style.color = `#ffffff`;
      resetBtn.style.backgroundColor = `rgba(100, 113, 152, 1)`;
      resetBtn.style.boxShadow = `inset 0px -4px 0px #414E73`;
      resetBtn.style.color = `#ffffff`;
      equalBtn.style.backgroundColor = `rgba(208, 63, 47, 1)`;
      equalBtn.style.boxShadow = `inset 0px -4px 0px #93261A`;
      equalBtn.style.color = `#ffffff`;

      for (const headerNum of headerNums) {
        headerNum.style.color = `rgba(255, 255, 255, 1)`;
      }
      for (const numBtn of numBtnsColor) {
        numBtn.style.backgroundColor = `rgba(234, 227, 220, 1)`;
        numBtn.style.boxShadow = `inset 0px -4px 0px #B3A497`;
        numBtn.style.color = `rgba(67, 74, 89, 1)`;
      }
      for (const [deadI, deadSwitch] of arr.entries()) {
        if (deadI !== i) {
          deadSwitch.style.backgroundColor = `transparent`;
        }
      }
    }
    if (i === 1) {
      body.style.backgroundColor = `rgba(230, 230, 230, 1)`;
      calcText.style.color = `rgba(54, 54, 44, 1)`;
      setTitle.style.color = `rgba(54, 54, 44, 1)`;
      headerNumBox.style.backgroundColor = `rgba(210, 205, 205, 1)`;
      switchBtn.style.backgroundColor = `rgba(200, 84, 2, 1)`;
      calcScreen.style.backgroundColor = `rgba(238, 238, 238, 1)`;
      screenSave.style.color = `rgba(54, 54, 44, 1)`;
      screenCalc.style.color = `rgba(54, 54, 44, 1)`;
      calcBtns.style.backgroundColor = `rgba(210, 205, 205, 1)`;

      deleteBtn.style.backgroundColor = `rgba(55, 129, 135, 1)`;
      deleteBtn.style.boxShadow = `inset 0px -4px 0px #1B6066`;
      deleteBtn.style.color = `#ffffff`;
      resetBtn.style.backgroundColor = `rgba(55, 129, 135, 1)`;
      resetBtn.style.boxShadow = `inset 0px -4px 0px #1B6066`;
      resetBtn.style.color = `#ffffff`;
      equalBtn.style.backgroundColor = `rgba(200, 84, 2, 1)`;
      equalBtn.style.boxShadow = `inset 0px -4px 0px #873901`;
      equalBtn.style.color = `#ffffff`;

      for (const headerNum of headerNums) {
        headerNum.style.color = `rgba(54, 54, 44, 1)`;
      }
      for (const numBtn of numBtnsColor) {
        numBtn.style.backgroundColor = `rgba(229, 228, 225, 1)`;
        numBtn.style.boxShadow = `inset 0px -4px 0px #A79E91`;
        numBtn.style.color = `rgba(54, 54, 44, 1)`;
      }
      for (const [deadI, deadSwitch] of arr.entries()) {
        if (deadI !== i) {
          deadSwitch.style.backgroundColor = `transparent`;
        }
      }
    }
    if (i === 2) {
      body.style.backgroundColor = `rgba(23, 6, 42, 1)`;
      calcText.style.color = `rgba(255, 229, 61, 1)`;
      setTitle.style.color = `rgba(255, 229, 61, 1)`;
      headerNumBox.style.backgroundColor = `rgba(30, 9, 54, 1)`;
      switchBtn.style.backgroundColor = `rgba(0, 222, 208, 1)`;
      calcScreen.style.backgroundColor = `rgba(30, 9, 54, 1)`;
      screenSave.style.color = `rgba(255, 229, 61, 1)`;
      screenCalc.style.color = `rgba(255, 229, 61, 1)`;
      calcBtns.style.backgroundColor = `rgba(30, 9, 54, 1)`;

      deleteBtn.style.backgroundColor = `rgba(86, 7, 124, 1)`;
      deleteBtn.style.color = `#ffffff`;
      deleteBtn.style.boxShadow = `inset 0px -4px 0px #BE15F4`;
      resetBtn.style.backgroundColor = `rgba(86, 7, 124, 1)`;
      resetBtn.style.boxShadow = `inset 0px -4px 0px #BE15F4`;
      deleteBtn.style.color = `#ffffff`;
      equalBtn.style.backgroundColor = `rgba(0, 222, 208, 1)`;
      equalBtn.style.boxShadow = `inset 0px -4px 0px #6CF9F1`;
      equalBtn.style.color = `#ffffff`;

      for (const headerNum of headerNums) {
        headerNum.style.color = `rgba(255, 229, 61, 1)`;
      }
      for (const numBtn of numBtnsColor) {
        numBtn.style.backgroundColor = `rgba(51, 28, 77, 1)`;
        numBtn.style.boxShadow = `inset 0px -4px 0px #881C9E`;
        numBtn.style.color = `rgba(255, 229, 61, 1)`;
      }
      for (const [deadI, deadSwitch] of arr.entries()) {
        if (deadI !== i) {
          deadSwitch.style.backgroundColor = `transparent`;
        }
      }
    }
  });
});

// IMPLEMENTING CALCULATIONS

let previousNumb;
let currentNumb = "";
let operationSymbol = "";
let equalResult;

// Impelementing init function to reset
const init = function () {
  previousNumb = 0;
  currentNumb = "";
  operationSymbol = "";
  equalResult = 0;

  screenSave.textContent = previousNumb;
  screenCalc.textContent = currentNumb;
};

// Iplementing dot btn
dotBtn.addEventListener(`click`, () => {
  if (currentNumb.includes(`.`)) return;
  currentNumb += dotBtn.textContent;
  screenCalc.textContent = currentNumb;
});

// Iplementing delete btn
deleteBtn.addEventListener(`click`, () => {
  if (screenCalc.textContent === "") {
    screenSave.textContent = screenSave.textContent.slice(0, -1);
  }
  previousNumb = 0;
  currentNumb = currentNumb.slice(0, -1);
  screenCalc.textContent = currentNumb;
});

// Iplementing numbers btn
numBtns.forEach((num) => {
  num.addEventListener(`click`, () => {
    currentNumb += +num.textContent;
    screenCalc.textContent = currentNumb;
  });
});

// Chosing operation symbol
const chooseOperation = function (operationSign) {
  operationSymbol = operationSign;
  if (previousNumb) {
    if (operationSign == `+`) {
      console.log(previousNumb, currentNumb);
      previousNumb += currentNumb;
    }
    if (operationSign == "-") {
      previousNumb -= +currentNumb;
    }
    if (operationSign == "*") {
      previousNumb *= +currentNumb;
    }
    if (operationSign == "/") {
      previousNumb /= +currentNumb;
    }
  } else {
    previousNumb = +currentNumb;
  }
  screenSave.textContent = `${previousNumb} ${operationSign}`;
  currentNumb = "";
  return previousNumb;
};

// Implementing Operations
operationBtns.forEach((operation) => {
  operation.addEventListener(`click`, () => {
    chooseOperation(operation.textContent);
  });
});

// Implementing Equal btn
equalBtn.addEventListener(`click`, () => {
  if (!previousNumb || !currentNumb) return;
  screenSave.textContent = `${previousNumb} ${operationSymbol} ${currentNumb} =`;
  if (operationSymbol === "+") {
    console.log(previousNumb, +currentNumb);
    equalResult = previousNumb + +currentNumb;
  } else if (operationSymbol === "-") {
    equalResult = previousNumb - +currentNumb;
  } else if (operationSymbol === "/") {
    equalResult = previousNumb / +currentNumb;
  } else if (operationSymbol === "x") {
    equalResult = previousNumb * +currentNumb;
  }
  screenCalc.textContent = equalResult.toFixed(2);
  previousNumb = 0;
  currentNumb = ``;
});

// 1) Implementing Reset btn
resetBtn.addEventListener(`click`, init);
