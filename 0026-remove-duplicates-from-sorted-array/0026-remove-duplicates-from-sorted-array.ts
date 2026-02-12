function removeDuplicates(nums: number[]): number {
    let uniqIdx = 0;
    const length = nums.length;
    for (let i=1; i<length; i++) {
        if (nums[uniqIdx] == nums[i]) continue;
        nums[++uniqIdx] = nums[i];
    }

    return uniqIdx + 1;
};