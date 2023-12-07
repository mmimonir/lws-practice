import domManipulation from "/domManipulation.js";
console.log("Working");

// const cricket_match = ["MATCH 1"];

// // initial state
// const initialState = {
//   [cricket_match[0]]: {
//     increment: 0,
//     decrement: 0,
//     totalScore: 0,
//   },
// };

// // add new item to cricket_match array by raw js
// const addCricketMatch = (match) => {
//   if (cricket_match.includes(match)) {
//     alert("Match already exists");
//     return;
//   }
//   cricket_match.push(match);
//   initialState[match] = {
//     increment: 0,
//     decrement: 0,
//     totalScore: 0,
//   };
// };

// const resetInput = (html) => {
//   html.querySelectorAll("input").forEach((input) => {
//     input.value = "";
//   });
//   html.querySelector("h3").innerHTML = `Match ${cricket_match.length + 1}`;
//   addCricketMatch(`MATCH ${cricket_match.length + 1}`);
// };

// // copy last child html for appending new match
// const copyLastChild = () => {
//   const lastChild = document.querySelector(".all-matches:last-child");
//   if (lastChild) {
//     const newChild = lastChild.cloneNode(true);
//     resetInput(newChild);
//     document.querySelector(".all-matches").appendChild(newChild);
//     return newChild;
//   } else {
//     const copyHtml = document
//       .querySelector(".all-matches")
//       .children[0].cloneNode(true);
//     resetInput(copyHtml);
//     document.querySelector(".all-matches").appendChild(copyHtml);
//     return copyHtml;
//   }
// };
// // add new match to dom
// document.querySelector(".lws-addMatch").addEventListener("click", () => {
//   const data = copyLastChild();
//   data.querySelector(".lws-delete").addEventListener("click", (e) => {
//     e.target.parentNode.parentNode.parentNode.remove();
//   });
// });
// // reset all html input value
// const resetBtn = document.querySelector(".reset-value");
// resetBtn.addEventListener("click", () => {
//   document.querySelectorAll("input").forEach((input) => {
//     input.value = "";
//   });
// });
