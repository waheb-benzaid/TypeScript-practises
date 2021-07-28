const profile = {
    name : 'Alex',
    age : 20,
    coords:{
        lat:0,
        lng:15
    },
    setAge(age: number):void{
        this.age=age
    }
}

//Annotation when using the destructing ES6 syntax with one property
const { age } : {age:number}=profile

//Annotation when using several properties
const { age, name}:{ age :number, name:string} = profile


//Annotation when we use a nested object  
const {coords : {lat,lng}} : {coords : {lat : number, lng : number}}= profile


