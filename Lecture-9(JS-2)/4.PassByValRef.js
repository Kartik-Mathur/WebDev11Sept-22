// Pass by Value
// function updateNumber(n){
//     n = n + 1;
// }

// let a = 1;

// console.log("Before Update",a);
// updateNumber(a);
// console.log("After Update",a);

// Pass by reference
function update(arr){
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] += 20;
    }
}

let arr = [1,2,3];
console.log("Before Update",arr);
update(arr);
console.log("After Update",arr);
