const suits = ["H", "D", "S", "C"];
const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cards = [];

const randomSuit = () => {
  return suits[Math.floor(Math.random() * suits.length)];
};

const randomValue = () => {
  return values[Math.floor(Math.random() * values.length)];
};

const randomCard = () => {
  return randomValue() + "-" + randomSuit();
};

const randomHand = () => {
  const cards = [];
  let cardArray = buildCardArray();
  for (let i = 0; i < 5; i++) {
    [cards[i], cardArray] = spliceCard(cardArray);
  }
  return cards;
};

const buildCardArray = () => {
  const tempArr = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      tempArr.push(values[i] + "-" + suits[j]);
    }
  }
  return tempArr;
};

const spliceCard = cardArray => {
  const takeAway = cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0];
  return [takeAway, cardArray];
};

console.log(randomHand());

const assert = require("assert");
const wish = require("wish");
const deepEqual = require("deep-equal");
describe("randomHand()", () => {
  it("returns something with a length of 5", () => {
    wish(randomHand().length === 5);
  });
  for (let i = 0; i < 100; i++) {
    it("should not have the first two cards be the same", () => {
      const result = randomHand();
      wish(result[0] !== result[1]);
    });
  }
});
describe("randomCard()", () => {
  it("returns something", () => {
    // 반환값의 임의성으로 인해 다음과 같이 검사
    wish(randomCard().match(/\w{1,2}-[HDSC]/));
  });
});
describe("randomValue()", () => {
  it("returns something", () => {
    wish(randomValue().match(/\w{1,2}/));
  });
});
describe("randomSuit()", () => {
  it("returns something", () => {
    wish(randomSuit().match(/[HDSC]/));
  });
});

describe("buildCardArray", () => {
  it("does something?", () => {
    wish(
      deepEqual(buildCardArray(), [
        "1-H",
        "1-D",
        "1-S",
        "1-C",
        "2-H",
        "2-D",
        "2-S",
        "2-C",
        "3-H",
        "3-D",
        "3-S",
        "3-C",
        "4-H",
        "4-D",
        "4-S",
        "4-C",
        "5-H",
        "5-D",
        "5-S",
        "5-C",
        "6-H",
        "6-D",
        "6-S",
        "6-C",
        "7-H",
        "7-D",
        "7-S",
        "7-C",
        "8-H",
        "8-D",
        "8-S",
        "8-C",
        "9-H",
        "9-D",
        "9-S",
        "9-C",
        "10-H",
        "10-D",
        "10-S",
        "10-C",
        "J-H",
        "J-D",
        "J-S",
        "J-C",
        "Q-H",
        "Q-D",
        "Q-S",
        "Q-C",
        "K-H",
        "K-D",
        "K-S",
        "K-C",
      ])
    );
  });
  it("returns a full deck", () => {
    wish(buildCardArray().length === 52);
  });
});
describe("spliceCard", () => {
  it("returns two things", () => {
    wish(spliceCard(buildCardArray()).length === 2);
  });
  it("returns the selected card", () => {
    wish(spliceCard(buildCardArray())[0].match(/\w{1,2}-[HDSC]/));
  });
  it("returns an array with one card gone", () => {
    wish(spliceCard(buildCardArray())[1].length === buildCardArray().length - 1);
  });
});
