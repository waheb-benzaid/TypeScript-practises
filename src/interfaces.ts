interface Reportable{//Vehicle { //renaming the interface to be more generic
    // name : string,
    // year : number,
    // broken : boolean,
    summary() : string // function that return a string
}

const oldCivic = {
    name : 'Civic',
    year : 2000,
    broken : true ,
    summary() : string{
        return `Name : ${this.name}`
    }
}

const printVehicle = (vehicle : {name : string, year : number, broken : boolean}): void => {
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);
}

printVehicle(oldCivic)

// It's correct but the htypoe annotation is very long => we welii use Interfaces*
// We can you the interface to write a clean type annotation

const printSummary = (item : Reportable) : void => {
    // console.log(vehicle.name);
    // console.log(vehicle.year);
    // console.log(vehicle.broken);
    console.log(item.summary());
}

printSummary(oldCivic)






