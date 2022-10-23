function circleArea(arg) {
  let argType = typeof (arg);
  if (argType !== 'number') {
    console.log(`We can not calculate the circle area, because we receive a ${argType}.`);
  } else {
    let area = Math.pow(arg, 2) * Math.PI;
    console.log(area.toFixed(2));
  }
}
circleArea('name')