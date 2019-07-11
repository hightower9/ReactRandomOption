class Person {
   constructor(name = 'Anonymous',age = 0){
       this.name = name;
       this.age = age;
   }

   getGreeting(){
       return `Hi. I am ${this.name}!`;
   }

   getDescription(){
       return `${this.name} is ${this.age} year(s) old.`
   }
}

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){ // overriding the func in person class
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their Major is ${this.major}.`;
        }
        return description;
    }
}

const me = new Student('Alister Pereira',24,'Information Technology');

console.log(me.getDescription());

const other = new Person();

console.log(other.getDescription());