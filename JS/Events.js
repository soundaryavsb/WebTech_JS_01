let btn1=document.getElementById("btn1");
btn1.onclick=()=>{
    console.log("Pink");
    console.log("Brown");
    console.log("Green");
    let a=90;
    let b=90;
    console.log(a+b);   
}

let btn2=document.getElementById("btn2");
btn2.ondblclick=()=>{
    console.log("Left");
    console.log("Right");
}

let div=document.getElementById("div");
div.onmouseover=()=>{
    console.log("icecream");
    console.log("fruits");
    console.log("vegitable");    
}

let demo=document.getElementById("demo");
let color=()=>{
    demo.style.color="red"
    demo.style.border="12px double blue"
    demo.style.backgroundColor="yellow"
}



