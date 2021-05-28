
   let car = {
        mileage: 12000,
        drive: function(miles){
            car.mileage += miles;
        }
    };

    let dog = {
        breed: 'Dalmation',
        hungry: true,
        bark: function(){
            console.log('Woof!');
        },
        eat: function(){
            dog.hungry = false;
        }
    };


    let myPiggy = {
        value: 0,
        addMoney: function(amount){
            myPiggy.value = myPiggy.value + amount;
        }
    }   
    myPiggy.addMoney(15);
    console.log(myPiggy.value)