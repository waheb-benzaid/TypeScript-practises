const add = (a: number, b: number) : number => {
     return a + b
}

//we can also do it like this , without the annotation, but it's preferable to annotate it to avoid the void function
const add_2 = (a: number, b: number) => {
    return a + b // if I remove the return keyword, it will be a void function, because it is not annotated 
}

// we can also use the annotation sentax for 

// 1) a named function , like this : 

function devide(a:number,b:number) : number {
    return a/b
}

// 2) an annonimous function assigned to a variable, like this one : 

const multiply = function (a:number,b:number) : number {
    return a * b
}

//------------------------------------------------------------------------------

// Fucntion that takes an object as argument

//the object : 

const todaysWeather = {
    date : new Date(),
    weather : 'sunny'
}

const logWeather = (forcast : {date : Date,weather : string}) : void => {
    console.log(forcast.date);
    console.log(forcast.weather);
}
//we can using ES2015 destructuring like this : 

const logWeather_2=({date,weather} : {date : Date,weather:string}) : void =>{
    console.log(date);
    console.log(weather);
} 


logWeather(todaysWeather)