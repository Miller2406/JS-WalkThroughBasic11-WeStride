// จงหาค่าน้อยที่สุดและมากที่สุด จากข้อมูลที่กำหนดให้


const nums = [3, 2, 6, 7, 2, 0, 8, 12]

let min = nums[0]
let max = nums[0]

nums.forEach(function (x) {
    if (min > x) min = x;
    if (max < x) max = x;
});

console.log(`Minimum is ${min} & Maximum is ${max}`);