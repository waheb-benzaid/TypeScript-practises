class Vehicle {
    // color : string

    // constructor(color : string){
    //     this.color = color
    // } 

    // this commented code is equivalent of : 

    constructor(public color : string){} //this code is equivalent of the code above, it's a shortcut
        

    drive():void { 
        console.log('chugga chugga');
    }

    protected honk():void {
        console.log('beep beep');
    }
}


const vehicle = new Vehicle('Orange') //I have to put this param because it's declared in the constructor
console.log(vehicle.color);



class Car extends Vehicle {
    drive():void{
        console.log('Vroom');
    }

    startDrivingProcess() : void {
        this.drive()
        this.honk()
    }
}

//const car = new Car()
//car.startDrivingProcess()


// 1- Private methods could be called just in their classes.
// 2- Protected methodes could be called both in their classes and child classes.
// 3- Public classes could be called everywhere and everytime.

