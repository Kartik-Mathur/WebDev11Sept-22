import React from 'react'
let userName = 'Yash';

const Person = () => {
    return (
        <div>
            {
                userName != undefined ?
                    <div> Hello, {userName}! Welcome to CB </div> :
                    <div>Hello, Stranger</div>
            }
        </div>
    );
}

// const Person = () => {
//     if(userName){
// return (
//     <div>
//         Hello, {userName}
//     </div>
// );
//     }
//     else{
//         return (
// <div>
//     Hello, Stranger
// </div>
//         );
//     }
// }

export default Person
