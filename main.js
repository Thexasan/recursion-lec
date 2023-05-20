// function sum(n){
//     if(n==0){
//         return 0
//     }
//     return n + sum(n-1)
// }
// console.log(sum(5))

//2
// function fac(n){
//     if (n==0||n==1){
//         return 1
//     }
//     return n*fac(n-1)
// }
// console.log(fac(5))

//3
// function dfac(n){
//     if(n==0 || n==1){
//         return 1
//     }

//         return n*dfac(n-2)
// }
// console.log(dfac(9))

//4

// function fib(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(5))

//5
// function suD(n){
//     if(n<=10){
//         return n
//     }
//     return  suD(n%10+Math.floor(n/10))
// }
// console.log(suD(2341))

//7
// function multiSum(n, k = 10) {
//   if (k == 0) {
//     return 0;
//   }
//   return (n * k) +  multiSum(n, k - 1);
// }
// console.log(multiSum(1));

//8
// function even(number) {
//     if (number == 0) {
//       return true;
//     } else if (number == 1) {
//       return false;
//     }
//       return even(number - 2);
    
//   }
//   console.log(even(22))

//closure
//1
// function cerM(a)
// {
//     return function (b){
//         return a*b
//     }
// }
// const double = cerM(2)
// console.log(double(5))

//2
// function increment ( n )
// {
//     return (m)=>{
//         return n+=m
//     }
// }
// const adfive = increment(5)
// console.log(adfive(10))
// console.log(adfive(10))

//3
// function create(n){
//     return (m)=>{
//         return n+m
//     }
// }
// const add = create(5)
// console.log(add(3))

//4
// function product(a,b){
//     return (c,d)=>{
//         return (e,f)=>{
//             return a*c*e+b*d*f
//         }
//     }
// }
// console.log(product(1,2)(1,1)(2,3))

//5
// function make(str){
//     return (a)=>{
//         return str==a
//     }
// }
// const send=make('softclub')
// console.log(send('intelect'))
// console.log(send('softclub'))
