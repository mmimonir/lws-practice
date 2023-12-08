import domManipulation from "./domManipulation.js";
import * as data from "./store.js";

domManipulation.setInitialState();
// domManipulation.addNewMatch();

const resetBtn = document.querySelector(".reset-value");
resetBtn.addEventListener("click", () => {
  domManipulation.resetInputValueToZero();
});

const addMatch = document.querySelector(".lws-addMatch");
addMatch.addEventListener("click", () => {
  addNewMatchToDom();
});

function addNewMatchToDom() {
  return domManipulation.addNewMatch();
}

// add submit event listener to all form
document.addEventListener("submit", (e) => {
  e.preventDefault();
  const nodeLength = e.target.parentNode.parentNode.parentNode.children.length;
  if (nodeLength > 1) {
    const formData = new FormData(e.target);
    const increment = parseInt(formData.get("increment"));
    const decrement = parseInt(formData.get("decrement"));
    if (increment) {
      const parentDiv = e.target.parentNode.parentNode;
      const totalScore = parseInt(
        parentDiv.querySelector(".lws-singleResult").innerText
      );
      parentDiv.querySelector(".lws-singleResult").innerText =
        totalScore + increment;
    } else if (decrement) {
      const parentDiv = e.target.parentNode.parentNode;
      const totalScore = parseInt(
        parentDiv.querySelector(".lws-singleResult").innerText
      );
      parentDiv.querySelector(".lws-singleResult").innerText =
        totalScore - decrement;
    }
  }
});
