function changeTheArrayElement(arr, index, number){
	arr[index] = number;
}

arr = [1, 2, 3, 4];
console.log(arr);

changeTheArrayElement(arr, 1, 23);
console.log(arr);
