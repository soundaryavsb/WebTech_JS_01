class Main{
    add(a:number,b:number):number;
    add(a:number,b:number,c?:number):number;
    add(a:number,b:number,c?:number):number{
        if(c===undefined)
        {
            return a+b;
        }
        else{
            return a+b+c;
        }
    }
}
let obj=new Main();
console.log(obj.add(10,20));
console.log(obj.add(19,27,89));