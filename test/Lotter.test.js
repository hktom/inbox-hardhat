const { expect } = require("chai");

describe("Lottery", function () {
  let lottery;

  this.beforeEach(async function () {
    const Lottery = await ethers.getContractFactory("Lottery");
    lottery = await Lottery.deploy();
  });

  it("should deploy a contract", function () {
    expect(lottery.target).to.be.a("string");
  });

  it("should have a default manager", async function () {
    expect(await lottery.manager()).to.equal(owner.address);
  });

  it("should let you enter the lottery", async function () {
    // fake accounts
    const [owner, player1, player2] = await ethers.getSigners();
  })
});
