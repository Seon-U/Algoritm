/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let idx1 = m - 1;
    let idx2 = n - 1;

    while (idx1 >= 0 && idx2 >= 0) {
        if (nums1[idx1] >= nums2[idx2]) {
            nums1[idx1 + idx2 + 1] = nums1[idx1];
            --idx1;
        } else {
            nums1[idx1 + idx2 + 1] = nums2[idx2];
            --idx2;
        }
    }
    
    while (idx2 >=0) {
        nums1[idx1 + idx2 + 1] = nums2[idx2];
        --idx2;
    }
};