import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === "x" ? "1" : "0"));

  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two.eq(0)) {
      alert("Divide by 0 error");
      return "0";
    }
    return one.div(two).toString();
  }
  if (operation === "^") {
    return one.pow(parseInt(two)).toString();
  }

  throw Error(`Unknown operation '${operation}'`);
}
