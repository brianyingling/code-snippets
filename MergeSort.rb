
def MergeSort(nums)
	return nums if nums.size < 2
	middle 	= (nums.size / 2)
	left 	= nums[0, middle]
	right 	= nums[middle, nums.size-middle]
	merge MergeSort(left), MergeSort(right)
end

def merge(left, right)
	result = []
	
	while left.size > 0 && right.size > 0 do
		if left.first <= right.first
			result << left.shift
		else
			result << right.shift
		end
	end

	while left.size > 0 do 
		result << left.shift
	end

	while right.size > 0 do 
		result << right.shift
	end
	
	result
end

puts MergeSort([5,4,3,2,1]).inspect