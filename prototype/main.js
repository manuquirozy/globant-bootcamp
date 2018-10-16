console.log("hola");

var Persona={
    name:"Manuela",
    lastName:"Quiroz"
}

Persona.gender='F';

console.log(Person);

//funciones constructoras
function Person(name, lastName, gender){
    this.name= name;
    this.lastName=lastName;
    this.gender=gender;
}

var me= new Person("Manuela", "Quiroz", "F");

console.log(me);

Person.prototype.introduce = function(){
    console.log('Hello World, Im '+this.name+' '+this.lastName);
}

me.introduce();

function Developer(name, lastName, gender, yearsOfExperience){
    Person.call(this, name, lastName, gender);
    this.yearsOfExperience = yearsOfExperience;
}

Developer.prototype = Object.create(Person.prototype);

var me2 = new Developer("Pepito","Perez","M",2);
console.log(me2.introduce());

Developer.prototype.introduceAboutJob = function (){
    console.log("Hi I'm "+this.name+" "+this.lastName+ " and I have "+this.yearsOfExperience+" years of experience");
}

var me3= new Developer("Jose", "Gonzales", "M", 3);

console.log(me3.introduceAboutJob());

class PersonClass{
    constructor(name, lastName, gender){
        this.name= name;
        this.lastName=lastName;
        this.gender=gender;
    }

    introduce(){
        console.log(`Hi I'm ${this.name} ${this.lastName}`);
    }
}

var personWC= new PersonClass("Maria", "Salazar", "F", 4);
console.log(personWC.introduce());

class DeveloperClass extends PersonClass{
    constructor(name, lastName,gender,yearsOfExperience){
        super(name, lastName, gender);
        this.yearsOfExperience=yearsOfExperience;
    }

    introduceAboutJob(){
        console.log(`Hi, I'm ${this.name} ${this.lastName} and I have ${this.yearsOfExperience} years of experience`);
    }
}

var developerWC= new DeveloperClass("Luis", "Obando", "M", 2);
console.log(developerWC.introduceAboutJob());