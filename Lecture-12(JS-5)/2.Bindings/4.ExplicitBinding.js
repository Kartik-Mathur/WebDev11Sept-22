let person = {
    firstName: 'Kartik',
    lastName: 'Mathur'
}

let person1 = {
    firstName: 'Vansh',
    lastName: 'Gupta'
}

function printDetails(company, city){
    console.log("First Name:",this.firstName);
    console.log("Last Name:",this.lastName);
    console.log("Company:",company);
    console.log("City:",city);
}

// printDetails.call(person,"Coding Blocks","Delhi");
// printDetails.apply(person,["Coding Blocks","Delhi"]);
let personPrintDetails = printDetails.bind(person1);
personPrintDetails("Google","Banglore");