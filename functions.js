//! implicit return 
// function demo (a,b){
//     return a+b;
// }
// let x = demo(5,5);
// console.log(x);


// let y = (a,b)=> a+b;
// let a = y(10,20);
// console.log(y);


// function hof(a){
//     return a;
// }

// let x = hof (function(){ return "Hello i am callback function "});
// console.log(x);

// var a= 100;
// let b = "hi";
// function x(){
//     var user = 'Vinay';
//     let company = "Google";
//     const sal = 1234567890;
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a,b);
// };
// x();

function x(){
    let a  = 10;
    const b =20;
    console.log(a,b);
    function y(){
        let p = "JS";
        var q = "ReactJS";
        console.log(p,q);
        function z(){
            const username = "prabhas";
            console.log(username);
            console.log(a);        
            console.log(q);
        }
        z();

    }y();
}
x();

