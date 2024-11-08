/**
 * @param {number[]} nums
 * @return {void}
 */

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf = () => {
    let sum = 0;
    for (let i = 0; i < this.nums.length; i++) {
      sum += this.nums[i];
    }
    return sum;
  };

  toString = () => {
    return `[${this.nums.join()}]`;
  };
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // 10

String(obj1); // "[1,2]"
String(obj2); // "[3,4]"

console.log(String(obj1));
