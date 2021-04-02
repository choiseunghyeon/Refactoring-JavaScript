const s = ["H", "D", "S", "C"];
const v = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const c = [];

const rS = () => {
  return s[Math.floor(Math.random() * s.length)];
};

const rV = () => {
  return v[Math.floor(Math.random() * v.length)];
};

const rC = () => {
  return rV() + "-" + rS();
};

const doIt = () => {
  const c = [];
  c.push(rC());
  c.push(rC());
  c.push(rC());
  c.push(rC());
  c.push(rC());
  return c;
};

doIt();
console.log(c);

const assert = require("assert");
const wish = require("wish");
describe("doIt()", () => {
  it("returns something with a length of 5", () => {
    wish(doIt().length === 5);
  });
});
describe("rC()", () => {
  it("returns something", () => {
    // 반환값의 임의성으로 인해 다음과 같이 검사
    wish(rC().match(/\w{1,2}-[HDSC]/));
  });
});
describe("rV()", () => {
  it("returns something", () => {
    wish(rV().match(/\w{1,2}/));
  });
});
describe("rS()", () => {
  it("returns something", () => {
    wish(rS().match(/[HDSC]/));
  });
});
