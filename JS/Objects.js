//OBJECT METHODS
        let obj1={
            name:"Chittu",
            age:15,
            city:"HYD",
            state:"TG"
        }
        //1. Key
        console.log(obj1);
        console.log(Object.keys(obj1));

        //2. Values
        console.log(obj1);
        console.log(Object.values(obj1));

        //3. Entries
        console.log(obj1);
        console.log(Object.entries(obj1));

        //4.seal
        console.log(obj1);

        obj1.food="Sambar Rice"
        console.log(obj1);

        obj1.country="India";
        console.log(obj1);
        
        // console.log(Object.seal(obj1));

        obj1.drink="Soda";
        console.log(obj1);

        obj1.name="Bujji";
        console.log(obj1);

        //5. IsSealed
        console.log(obj1);
        console.log(Object.isSealed());

        //6. Freaze
        console.log(obj1);

        obj1.color="green";
        console.log(obj1);

        obj1.icecream="chocolate"
        console.log(obj1);

        console.log(Object.freeze(obj1));

        obj1.game="Kabaddi";
        console.log(obj1);
        
        obj1.age=20;
        console.log(obj1);

        //7. isFrozen

        console.log(Object.isFrozen(obj1));
        
        
        