def MergeSort(nums):
	if len(nums) < 2:
		return nums 
	middle = len(nums) / 2
	left   = nums[:middle]
	right  = nums[middle:]
	return merge(MergeSort(left), MergeSort(right))

def merge(left, right):
	result = []
	while len(left) > 0 and len(right) > 0:
		if left[0] <= right[0]:
			result.append(left.pop(0) )
		else:
			result.append(right.pop(0) )

	while len(left) > 0:
		for num in left:
			result.append(left.pop(0))
	
	while len(right) > 0:
		for num in right:
			result.append(right.pop(0))
	return result

print MergeSort([5,4,3,2,1])	