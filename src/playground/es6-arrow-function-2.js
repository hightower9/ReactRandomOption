// arguments objects no longer bound

const add = (a,b) => {
    // console.log(arguments) cannot be used in es6 arrow function
    return a+b;
}

console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Vasco', 'London', 'Margao'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        
        // this.cities.forEach((city) => {
        //   console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());


const multipier = {
    number: [1, 6],
    multiplyBy: 2,
    multiply(){
        return this.number.map((num) => num * this.multiplyBy);
    }
}

console.log(multipier.multiply());