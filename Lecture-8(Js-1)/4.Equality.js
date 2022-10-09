1 === '1' // compares value and datatype both
1  == '1' // compares only value

[1,2,3] == [1,2,3] // true

let a = [1,2,3];
let b = a;
a === b;//  true

[] == '';//  true
'' == 0;//  true
[] == 0; //  true

'\t' == 0 // true
0 == ' ' // true
'\t' == ' ' // false
'\n' == 0 // true

+[] // 0 // array ko integer mei convert
+[[]] // 0
+[[[[[[[[[[[]]]]]]]]]]] // 0
+[[],[]] // NaN

3/0 // Infinity
0/0 // Nan
-3/0 // -Infinity
Infinity + (-Infinity) // NaN

'' + []; // ''
'' + [1,2,3]; //'1,2,3'

[] + {};
{} + [];