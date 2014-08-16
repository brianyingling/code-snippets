def InsertionSort(nums) 
	(0..nums.length-1).each do |i|
		current = nums[i]
		j = i - 1
		while j >= 0 && current < nums[j] do 
			nums[j+1] = nums[j]
			j = j - 1
		end
		nums[j+1] = current
	end
	nums
end

puts InsertionSort([9,8,7,6,5,4,3,2,1]).inspect
