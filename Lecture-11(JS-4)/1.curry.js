function add(a){
    if(typeof a == 'undefined') return 0;

    let ans = a;
    function addMore(x){
        if(x){// iska mtlb x is defined
            ans += x;
            return addMore;
        }
        else{
            return ans;
        }
    }
    return addMore;
}

console.log(add(1)(2)(3)(4)());
console.log(add(1)(2)(3)());
console.log(add(1)(2)());
console.log(add(1)());
console.log(add());
console.log(add.toString());