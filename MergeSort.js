// MergeSort involves merging two already sorted
// arrays together. Splits the array in half and then
// uses recursion to further divide each array  
// until each element is an array of one. Then sorts
// and merges the array.

function MergeSort(nums) {
	if (nums.length < 2) return nums;

	var middle = Math.floor(nums.length / 2);
	var left   = nums.slice(0, middle);
	var right  = nums.slice(middle, nums.length);

	return merge(MergeSort(left), MergeSort(right));
}

function merge(left, right) {
	var result = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) 
			result.push(left.shift());
		else
			result.push(right.shift());
	}

	while(left.length)
		result.push(left.shift());

	while(right.length)
		result.push(right.shift());

	return result;
}

console.log(MergeSort([5,4,3,2,1]);