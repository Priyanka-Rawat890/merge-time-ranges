/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  // Step 1: Sort ranges by start time
  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [start, end] = ranges[0];

  // Step 2: Merge logic
  for (let i = 1; i < ranges.length; i++) {
    const [currStart, currEnd] = ranges[i];
    if (currStart <= end + threshold) {
      // Merge overlapping or close ranges
      end = Math.max(end, currEnd);
    } else {
      merged.push([start, end]);
      start = currStart;
      end = currEnd;
    }
  }

  // Step 3: Push last range
  merged.push([start, end]);

  return merged;
};

module.exports = { mergeTimeRanges };
