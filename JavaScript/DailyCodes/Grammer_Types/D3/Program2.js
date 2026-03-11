const arr = ["Shubham", , "Yogesh"];
console.log(arr);

console.log(arr[1]);

console.log("Check that there is something at index 1: ", 1 in arr);


console.log("-----------------------------------------")

const arr2 = ["Shubham", undefined, "Yogesh"];
console.log(arr2[1]);
console.log("Check that there is something at index 1: ", 1 in arr2);
