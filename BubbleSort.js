function BubbleSort(nums) {
	var swapped = true;
	while (swapped) {
		swapped = false;
		for (var i = 0; i < nums.length-1; i++) {
			if (nums[i] > nums[i+1]) {
				var temp  = nums[i+1];
				nums[i+1] = nums[i];
				nums[i]   = temp;
				swapped = true;
			}
		}
	}
	return nums;
}

console.log( BubbleSort([9,8,5,4,2]));
console.log( BubbleSort([1,3,4,0,1]));