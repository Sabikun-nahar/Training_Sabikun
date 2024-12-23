function mapping(expectedModel)
{
    const car = {
        carA: {
            color: "black",
            wheel: 4,
            brand: "hundai",
        },
        carB: {
            color: "red",
            wheel: 6,
            brand: "prado",
        },
        carC: {
            color: "red",
            wheel: 6,
            brand: "prado",
        },
    };

var carkey = Object.keys(car).find(key => car[key].brand === expectedModel);
var carvalue = Object.values(car).find((car)=> car.brand === expectedModel);
var cark = Object.keys(car).filter(key => car[key].brand === expectedModel);

    console.log(carkey);
    console.log(carvalue);
    console.log(cark);

}
mapping("prado");


/*function mapping()
{
    const car = {
        carA: {
            color: "black",
            wheel: 4,
            brand: "hundai",
        },
        carB: {
            color: "red",
            wheel: 6,
            brand: "prado",
        },
    };
console.log(car.carB.color);
}
mapping();

function mapping(carName)
{
    const car = {
        carA: {
            color: "black",
            wheel: 4,
            brand: "hundai",
        },
        carB: {
            color: "red",
            wheel: 6,
            brand: "prado",
        },
    };
console.log(car[carName].color);
}
mapping("carA");

function mapping()
{
    const car = {
        carA: {
            color: "black",
            wheel: 4,
            brand: "hundai",
        },
        carB: {
            color: "red",
            wheel: 6,
            brand: "prado",
        },
    };
console.log(car.carA);
}
mapping();*/

