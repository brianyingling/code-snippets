def SelectionSort(nums)
	(0..nums.size-2).each do |i|
		minIndex = i
		(i+1..nums.size-1).each do |j|
			minIndex = j if nums[j] < nums[minIndex]
			temp = nums[minIndex]
			nums[minIndex] = nums[i]
			nums[i] = temp
		end
	end
	nums
end

puts SelectionSort([9,8,7,6,5,4,3,2,1]).inspect
