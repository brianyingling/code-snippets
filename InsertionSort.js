function InsertionSort(nums) {
	for (var i=0; i < nums.length; i++) {
		var current = nums[i];
		var j = i-1;

		// shift the other numbers over to make way
		// for current's new slot
		while (j >= 0 && current < nums[j]) {
			nums[j+1] = nums[j];
			j--;
		}
		nums[j+1] = current;
	}
	return nums;
}

console.log( InsertionSort([9,8,5,4,2]));
console.log( InsertionSort([1,3,4,0,1]));