const DomManipulation = {
  //   cricket_match: ["MATCH 1"],
  //   // initial state
  //   initialState: {
  //     [this.cricket_match[0]]: {
  //       increment: 0,
  //       decrement: 0,
  //       totalScore: 0,
  //     },
  //   },
  //   // add new item to cricket_match array by raw js
  //   addCricketMatch: (match) => {
  //     if (this.cricket_match.includes(match)) {
  //       alert("Match already exists");
  //       return;
  //     }
  //     this.cricket_match.push(match);
  //     this.initialState[match] = {
  //       increment: 0,
  //       decrement: 0,
  //       totalScore: 0,
  //     };
  //   },
  //   // reset input
  //   resetInput: (html) => {
  //     html.querySelectorAll("input").forEach((input) => {
  //       input.value = "";
  //     });
  //     html.querySelector("h3").innerHTML = `Match ${
  //       this.cricket_match.length + 1
  //     }`;
  //     this.addCricketMatch(`MATCH ${this.cricket_match.length + 1}`);
  //   },
  //   // copy last child html for appending new match
  //   copyLastChild: () => {
  //     const lastChild = document.querySelector(".all-matches:last-child");
  //     if (lastChild) {
  //       const newChild = lastChild.cloneNode(true);
  //       this.resetInput(newChild);
  //       document.querySelector(".all-matches").appendChild(newChild);
  //       return newChild;
  //     } else {
  //       const copyHtml = document
  //         .querySelector(".all-matches")
  //         .children[0].cloneNode(true);
  //       this.resetInput(copyHtml);
  //       document.querySelector(".all-matches").appendChild(copyHtml);
  //       return copyHtml;
  //     }
  //   },
  //   // add new match to dom
  //   addNewMatch: () => {
  //     document.querySelector(".lws-addMatch").addEventListener("click", () => {
  //       const data = this.copyLastChild();
  //       data.querySelector(".lws-delete").addEventListener("click", (e) => {
  //         e.target.parentNode.parentNode.parentNode.remove();
  //       });
  //     });
  //   },
  //   // reset all html input value
  //   resetInputValueToZero: () => {
  //     const resetBtn = document.querySelector(".reset-value");
  //     resetBtn.addEventListener("click", () => {
  //       document.querySelectorAll("input").forEach((input) => {
  //         input.value = "";
  //       });
  //     });
  //   },
  alertTest: () => {
    alert("hello");
  },
};

export default DomManipulation;
