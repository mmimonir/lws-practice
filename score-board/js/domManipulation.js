const DomManipulation = {
  cricket_match: ["MATCH 1"],

  // initial state
  initialState: {},

  // set initial state function
  setInitialState: function () {
    this.initialState = {
      [this.cricket_match[0]]: {
        increment: 0,
        decrement: 0,
        totalScore: 0,
      },
    };
  },

  // get cricket match
  getCricketMatch: function () {
    return this.cricket_match;
  },

  // get cricket match length
  getCricketMatchLength: function () {
    return this.cricket_match.length;
  },

  // add new item to cricket_match array by raw js
  addCricketMatch: function (match) {
    if (this.cricket_match.includes(match)) {
      alert("Match already exists");
      return;
    }
    this.cricket_match.push(match);
    this.initialState[match] = {
      increment: 0,
      decrement: 0,
      totalScore: 0,
    };
  },

  // reset input
  resetInput: function (html) {
    html.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
    html.querySelector("h3").innerHTML = `Match ${
      this.getCricketMatchLength() + 1
    }`;
    this.addCricketMatch(`MATCH ${this.cricket_match.length + 1}`);
  },

  // add new match to dom
  addNewMatch: function () {
    document.querySelector(".lws-addMatch").addEventListener("click", () => {
      let selectLastChild = document.querySelector(".all-matches:last-child");
      if (selectLastChild) {
        const newChild = selectLastChild.cloneNode(true);
        this.resetInput(newChild);
        document.querySelector(".all-matches").appendChild(newChild);
        selectLastChild = newChild;
      } else {
        const copyHtml = document
          .querySelector(".all-matches")
          .children[0].cloneNode(true);
        this.resetInput(copyHtml);
        document.querySelector(".all-matches").appendChild(copyHtml);
        selectLastChild = copyHtml;
      }
      selectLastChild
        .querySelector(".lws-delete")
        .addEventListener("click", (e) => {
          e.target.parentNode.parentNode.parentNode.remove();
        });
      return selectLastChild;
    });
  },

  // reset all html input value
  resetInputValueToZero: function () {
    const resetBtn = document.querySelector(".reset-value");
    resetBtn.addEventListener("click", () => {
      document.querySelectorAll("input").forEach((input) => {
        input.value = "";
      });
    });
  },
  // alertTest: () => {
  //   alert("hello");
  // },
};

export default DomManipulation;
