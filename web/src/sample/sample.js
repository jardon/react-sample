// integer, string, float, boolean, char, double, short, long
// let, const, var
// 

// int count = 0;

// =, +=, -=, ++, -- 
// >, <, >=, <=, ==, !=, ===, !==
// &&, || 

// true && false == false
// true || false == true
// count > 0 && count !== 3 == false

// 3 == '3' = true
// 3 === '3' = false
// 3 === Integer.parseInt('3') = true 
// 3 != '3' = false
// 3 !== '3' = true

// If else
// if(true)
//     --Do this
// else 
//     -- Do that

// ternary operator
// let switch = count > 0 ? 'true' : 'false'; 


// let switch = count < 1 ? true : 5;

let names = ['Drew', 'Jarred', 'Shawny', 'Ian', 'Adi'];
let names = ['Drew', 'Jarred', 'Shawny', 'Ian', 'Adi', null, null];

console.log(names[0]);

// while(count > 0) {

// }

// for(let i = 0; i < names.length - 1; i++) {
//     console.log(names[i])
// } OLD STYLE UGGO

// for(person in names) {
//     console.log(person)
// }

names.forEach(name => console.log(name));
names.forEach(name => name = name + ' is a butt');

names.forEach(name => {
    // add code
})

names.map(name => name + ' is a butt')
.forEach(name => console.log(name));

names.filter(name => name !== null)

// function(names) {

// }
