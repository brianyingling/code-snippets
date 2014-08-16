
// if the current number is smaller than the 
// smallest number previously found, swap them.
// minIndex - save the index # of the smallest
// number so far traversed.

function SelectionSort(nums) {
	for (var i = 0; i < nums.length-1; i++) {
		var minIndex = i;
		for (var j = i+1; j < nums.length; j++) {
			if (nums[j] < nums[minIndex]) {
				minIndex = j;
			}
			var temp = nums[minIndex];
			nums[minIndex] = nums[i];
			nums[i] = temp;
		}
	}
	return nums;
}

console.log(SelectionSort([9,8,7,6,5]));
console.log(SelectionSort([9,8,7,6,5,4,3,2,1]));