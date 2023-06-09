const { expect } = require("chai");
const PaymentPackage = require("./paymentPackage");

describe("Payment Package", () => {
  describe("constructor test", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Pesho", 10);
    });
    it("name should be correct", () => {
      expect(paymentPackage._name).to.equal("Pesho");
    });
    it("value should be correct", () => {
      expect(paymentPackage._value).to.equal(10);
    });
    it("VAT should be correct", () => {
      expect(paymentPackage._VAT).to.equal(20);
    });
    it("VAT should be correct", () => {
      expect(paymentPackage._active).to.equal(true);
    });
  });
  describe("test setters", () => {
    it("sets empty string for name", () => {
      expect(() => {
        new PaymentPackage("", 10);
      }).to.throw("Name must be a non-empty string");
    });
    it("sets incorrect type for name", () => {
      expect(() => {
        new PaymentPackage(0, 10);
      }).to.throw("Name must be a non-empty string");
    });
    it("sets incorrect type for name", () => {
      expect(() => {
        new PaymentPackage(undefined, 10);
      }).to.throw("Name must be a non-empty string");
    });
    it("sets correct type for name", () => {
      let paymentPackage = new PaymentPackage("Pesho", 10);
      expect(paymentPackage.name).to.equal("Pesho");
      paymentPackage.name = "Gosho";
      expect(paymentPackage.name).to.equal("Gosho");
    });
    it("sets correct type for value", () => {
      let paymentPackage = new PaymentPackage("Pesho", 10);
      expect(paymentPackage.value).to.equal(10);
      paymentPackage.value = 25;
      expect(paymentPackage.value).to.equal(25);
      paymentPackage.value = 0;
      expect(paymentPackage.value).to.equal(0);
    });
    it("throws error due to different value", () => {
      expect(() => {
        new PaymentPackage("Pesho", "10");
      }).to.throw("Value must be a non-negative number");
    });
    it("throws error due to negative value", () => {
      expect(() => {
        new PaymentPackage("Pesho", -10);
      }).to.throw("Value must be a non-negative number");
    });
    it("sets correct type for VAT", () => {
      let paymentPackage = new PaymentPackage("Pesho", 10);
      expect(paymentPackage.VAT).to.equal(20);
      paymentPackage.VAT = 30;
      expect(paymentPackage.VAT).to.equal(30);
      paymentPackage.VAT = 0;
      expect(paymentPackage.VAT).to.equal(0);
    });
    it("sets incorrect type for VAT", () => {
      let paymentPackage = new PaymentPackage("Pesho", 10);
      expect(() => {
        paymentPackage.VAT = "lala";
      }).to.throw("VAT must be a non-negative number");
    });
    it("sets negative value for VAT", () => {
      let paymentPackage = new PaymentPackage("Pesho", 10);
      expect(() => {
        paymentPackage.VAT = -10;
      }).to.throw("VAT must be a non-negative number");
    });
    it("sets correct value", () => {
      let paymentPackage = new PaymentPackage("Pesho", 10);
      expect(paymentPackage.active).to.equal(true);
      paymentPackage.active = false;
      expect(paymentPackage.active).to.equal(false);
    });
  });
  describe("toString method", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Pesho", 10);
    });
    it("tests active state", () => {
      const output = [
        `Package: Pesho`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`,
      ].join("\n");
      expect(paymentPackage.toString()).to.equal(output);
    });
    it("tests inactive state", () => {
      const output = [
        `Package: Pesho (inactive)`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`,
      ].join("\n");
      paymentPackage.active = false;
      expect(paymentPackage.toString()).to.equal(output);
    });
  });
});
