// let a = 12;

// {
//     let a = "samir";                          //---------------> block scope
//     console.log(a);
// }
// console.log(a);

var a = 12;

{
    var a = "samir";               
    console.log(a);
}
console.log(a);