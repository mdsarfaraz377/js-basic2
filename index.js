console.log('Helloo jeee kaise ho saaree')


// const rectangle={
//     length:12,
//     breadth:23,

//     draw:function(){
//         console.log('draw')
//     }
// };

// let rectangle = {
//     length:12,
//     breadth:13,

//     draw:function(){
//         console.log('draw ')
//     }
// }
 
// //factory function
// function createRectangle(length, breadth){
//     return rectangle = {
//         length,          //property
//         breadth,

//         draw(){                                   //method
//             console.log('draw drawing');
//         }
//     };
// }

// let rectangleObj1 = createRectangle(5,4)
// // rectangle.length;
// // rectangle.breadth;
// // rectangle.draw();

// // camecase ->  e.g-> createRectangle
// // pascalNotation -> firstletter of every word will be capiltal e,g-> CreateRectangle


// // conrtuctor function -> prop/methods -> initalize/define

// function Rectangle(){
//     this.length =1,
//     this.breadth = 2,
//     this.draw=function(){
//         console.log('drawing')
//     }
// }

// // object creation using constructor function
// // let rectangleObject = new Rectangle()

// // rectangleObject.color ='yellow';
// // rectangleObject.number = 5;
// // console.log(rectangleObject)

// // delete rectangleObject.color
// // console.log(rectangleObject)

// let Rectangle1 = new Function (
//     'length', 'breadth',
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw=function(){
//         console.log('drawing rectangle);
//     }`
// );

// let rect = new Rectangle1(2,3);
// console.log(rect)

// let a=10;
// let b =a;

// a++;
// console.log(a)
// console.log(b)

// let a = {value:10}
// let b=a;

// a.value++;

// console.log(a.value);
// console.log(b.value)

// let a = {value:10}

// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value)

let rectangle = {
    length:12,
    breadth:13,
}

// // for-in loop
// for(let key in rectangle){
//     // keys are reflected through key variable
//     // values are reflected through [key] rectangle
//     console.log(key, rectangle[key])
// }

// for-of loop
// for(let key of Object.keys(rectangle)){
//     console.log(key)
// }

// for(let key of Object.entries(rectangle)){
//     console.log(key)
// }

if('length' in rectangle){
    console.log('Present');
}
else{
    console.log('Absent');
}

// cloning :
// 1. Iteration
// 2. Assign
// 3. Spread

// 1 object clone 1: Iteration
// let src = {
//     a:10,
//     b:20,
//     c:30
// }
// let dest = {}

// for(let key in src){
//     dest[key] = src[key]
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// // Object Clone 2-assign
// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let src2 = {value:25}
// let dest = Object.assign({}, src, src2);
// console.log(dest);

// src.a++;
// console.log(dest)

// object cloning 3-> Spread
let src = {
    a:10,
    b:20, 
    c:30
}

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest)