def BubbleSort(nums)
	swapped = true
	while swapped
		swapped = false
		(0..nums.size-2).each do |i|
			if nums[i] > nums[i+1]
				temp = nums[i+1]
				nums[i+1] = nums[i]
				nums[i] = temp
				swapped = true
			end
		end
	end
	nums
end

puts BubbleSort([9,8,7,6,5,4,3,2,1]).inspect
