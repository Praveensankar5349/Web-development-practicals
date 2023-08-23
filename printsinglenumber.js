/**
 * @param {number[]} nums
 * @return {number}
 */
export function singleNumber(nums) {
    if(nums.length > 1){
         for(let i= 0;i<nums.length;i++){
        var count = 0;
        for(let j= 0;j<nums.length;j++){
            if(nums[i] == nums[j]){
                count += 1;
            }
        }
        if(count == 1){
            return nums[i];
        }
    }
    }
    else{
        return nums[0];
    }
   
}
