function topKFrequent(nums, k) {
    // Step 1: Create a frequency map using a JavaScript object
    const frequencyMap = {};
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Step 2: Create an array of unique numbers and sort them based on frequency
    const uniqueNums = Object.keys(frequencyMap);
    uniqueNums.sort((a, b) => frequencyMap[b] - frequencyMap[a]);

    // Step 3: Take the first K elements from the sorted array
    const result = uniqueNums.slice(0, k).map(Number);

    return result;
}

// Example usage:
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const result = topKFrequent(nums, k);

console.log(result); // Output: [1, 2]
