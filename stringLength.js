function stringLength(firstS, secondS, thirdS) {
  let firstSL = firstS.length;
  let secondSL = secondS.length;
  let thirdSL = thirdS.length;
  let sum = firstSL + secondSL + thirdSL;
  let avgSum = Math.round(sum / 3);
  console.log(sum);
  console.log(avgSum);
}
stringLength('chocolate', 'ice cream', 'cake')