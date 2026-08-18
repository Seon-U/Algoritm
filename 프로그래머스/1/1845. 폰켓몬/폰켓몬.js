function solution(nums) {
    const uniq = new Set(nums);
    return Math.min(uniq.size, nums.length / 2);
}