function removeElement(nums: number[], val: number): number {
    let k = 0;
    let max = nums.length;
    for (let i=0; i<max; i++) {
        if (nums[i] == val) { 
            nums[i] = 52; 
            k++;
        };
    }
    nums = nums.sort((a, b) => a - b);
    return max - k;
};