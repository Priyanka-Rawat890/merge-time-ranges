const { mergeTimeRanges } = require('./my-module');

const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold1 = 200;
console.log("Example 1 Output:", mergeTimeRanges(ranges1, threshold1));

const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
const threshold2 = 4;
console.log("Example 2 Output:", mergeTimeRanges(ranges2, threshold2));

const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold3 = 3;
console.log("Example 3 Output:", mergeTimeRanges(ranges3, threshold3));
