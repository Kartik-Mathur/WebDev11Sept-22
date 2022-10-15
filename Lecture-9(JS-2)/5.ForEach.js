// const arr = [10, 20, 13, -4];
// let ans = '';
// arr.forEach(function (element,indx,a) {
//     if (ans == '')
//         ans = ans + element;
//     else
//         ans = ans + ', ' + element;
//     console.log(`i: ${indx}, value: ${element}, arr: ${a}`);
// })

console.log(`i: ${indx}, value: ${element}, arr: ${a}`);
console.log("i: "+indx+ "value:"+element + "arr:" +a);

// console.log(ans);

const arr = [10, 20, 13, -4];
let ans = '';

function ForEachKaFunction(element,indx,a) {
    if (ans == '')
        ans = ans + element;
    else
        ans = ans + ', ' + element;
    console.log(`i: ${indx}, value: ${element}, arr: ${a}`);
}

arr.forEach(ForEachKaFunction);

console.log(ans);