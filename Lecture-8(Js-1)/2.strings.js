let str = "Hello world! Learning Strings in JS";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str);

// console.log(str.substr(6,10));
// console.log(str.substr(6));
console.log(str.substring(6,11));
console.log(str.slice(6,11));

console.log(str.indexOf('world'));

if(str.includes('world')){
    console.log('world present hai');
}
else console.log('world present nahi hai');
str = str.replace('world','asdaasd');
console.log(str);

