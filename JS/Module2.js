//?Default Export

//!Function
// function Raja(){
//     console.log("I am Raja");
// }
// export default Raja

//!Arrya
let arr=[10,20,30,40,50];
export default arr

//? Named Export

//!Function
let fri=()=>{
    console.log("I am best friend of me.");
}
export {fri as friend};

//! Array
let fruits=["Apple","Banana","Mango","Watermelon"];
export {fruits as vegitable};
