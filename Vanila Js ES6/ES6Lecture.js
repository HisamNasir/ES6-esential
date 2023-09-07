////1. Basirc Js template

// function hello(){
//     for(var i=0;i<10;i++){
//         console.log(i);
//     }
//     // console.log(i);
// }
// hello();

//// NOTE

//// const -> block withing it's body cant be called outside
//// let -> block withing it's body cant be called outside
//// var -> function throughout the code (Dont use it until it is necessayr)

// what is the difference between (const vs let)

// const x=2;
// x=3;   // it will show error( you canot change const once declared to 2)

// let x=2;
// x=3; //it will show no error ( you can reasign variable of x)

//// ------------------------------------------------------------------

////2. OBJECTS:

//// -> Methods 
// const person={  //Person Object with 3 members (1 property 2 methods)
//     name: 'Hisam',  //name property
//     walk: function(){}, // the old way to call a method
//     talk(){ } //new way to call method
// };
//// there are two ways to call it
// person['name']='John' // to change the value of property
// person.talk(); //or just call it
// const target = 'name';
// person[target.value]='John'

////---------------------------------------------------------------

//// This Keyword

// const person={  //Person Object with 3 members (1 property 2 methods)
//     name: 'Hisam',  
//     walk(){
//         console.log(this);
//     } 
// };
// person.walk();
// const walk=person.walk;
// walk(); // it should show the window object but in stric mod it shows undefined

////-----------------------------------------------------------------

//// MBINDING

// const person={  //Person Object with 3 members (1 property 2 methods)
//     name: 'Hisam',  
//     walk(){
//         console.log(this);
//     } 
// };
// person.walk();
// const walk=person.walk.bind(person);// this binds person object with walk
// walk(); // it should ignore stric mod it shows window

////----------------------------------------------------------------

////Arrow Function

// const square = function(number){    //
//     return number * number;         // old ways
// }                                   //

// const square = number => number * number; // new way
// console.log(square(5))

////another one

// const jobs=[
//     {id:1,isActive: true},
//     {id:2,isActive: true},
//     {id:3,isActive: false},
// ];

// const activeJobs = jobs.filter(function(job){ return job.isActive;}); // old way
// const activeJobs = jobs.filter(job=>job.isActive); // new way

////------------------------------------------------------------------

//// Arrow function and This 

// const person={                       //
//     talk(){                          //
//         var self = this;             //
//         setTimeout(function(){        //
//             console.log("self",self); // old way
//         },1000)                      //  
//     }                                //
// };                                   //
// person.talk();                       //

// const person={
//     talk(){
//         var self = this;
//         setTimeout(() => {
//             console.log("this",this); // New way
//         },1000)
//     }
// };
// person.talk();

////------------------------------------------------------------

////Array.map()

// const colors=['red', 'blue', 'green'];
// const items=colors.map(color=>'<li>'+color+'</li>')
// console.log(items)

////---------------------------------------------------------------

//// Object destructuring

// const address={
//     street:'',
//     city:'',
//     country:'',
// };
// // const street=address.street;    //
// // const city=address.city;        // we are repeating same (const x=address.x) over and over again
// // const country=address.country;  // we need to solve repetion.

// const {street,city,country}=address; //neww way to solve repetion
// ////we can give new name to existing objects.
// const {street: st}=address; //st is the new name of street

////---------------------------------------------------------------

////Spread Operator

// const first=[1,2,3];
// const second=[4,5,6];
// // const combined=first.concat(second);
// const combined=[...first, ...second];
// console.log(combined)

////------------------------------------------------------------

////Classes

// const person={                  //
//     name: "Hisam",              //
//     walk(){                     // 
//         console.log("Walk");    //
//     }                           //
// };                              // you can see we are repeating object
// const person1={                 // with repearing walk objects in it
//     name: "Hisam",              // 
//     walk(){                     //
//         console.log("Walk");    //
//     }                           //
// };                              //
////sow we use classes
// const person={
//     name:"Mosh",
// };
// class Person{
//     constructor(name){
//         this.name=name; 
//     }
//     walk(){
//         console.log("walk");
//     }
// }
// const person=new Person(name)
// person.name

////-----------------------------------------------------------------

////Inheritance

// class Person{
//     constructor(name){
//         this.name=name; 
//     }
//     walk(){
//         console.log("walk");
//     }
// }
// class Teacher{
//     tech(){
//         console.log("teach");
//     }
// }
