// function rules for this
console.log(this);
function rana(){
    console.log("rana is in ",this);
}
// fn -- object-- this == she object

function outer(){
    let test = function(){
        console.log(this)
    }
    test();
  }
  outer();

let Student = {
    name : "rana",
    age : 435,
    printInformation: function(){
    console.log(this)
      let tst =  function(){
       console.log(this);
      }
     tst();
    },
    printData: {
        name:"hira",
        __print:function(){
            console.log(this.name);
        }
    }
}
Student.printInformation();
let outerFunc = function(){}
let Student = function(name,age){
    this.name = name;
    this.age = age;
    console.log(this)
}

// let rana = new Student("rana",23);



let Teacher = {
    msg : "you are taking ",
    classes : ["java","c++","algo"],
    showAllClasses: function(){
        var __this = this;
        this.classes.map(function(item){
            console.log(this.msg + item);
     }.bind(this));
    },
    showAllClasses_arrow: function(){
        this.classes.map(item=>{
        console.log(this.msg + item);
     });
    }
}
Teacher.showAllClasses_arrow();


let Human = {
    name:"hira",
    print_dna_data:function(){
        console.log("this is human dna data of",this.name)
    }
}

// Human.print_dna_data();

let Person = {
    name:"hira hasan",

}
// context borrowing
// Person e asi
// chaitesi human er context
// Human.print_dna_data.call(Person);
// human borrowing
// person borrower
let Person = {
    name:"hira hasan",
    print_dna_data:function(){
        console.log("this is human dna data of",this.name)
    }
}

let context = Human.print_dna_data.bind(Person);
context();


let outerFunc = function(names){
    person_name = "hira hasan";
    function  test  (){
     console.log(this.person_name);
     demo = 89;
     function innner_most(){
      console.log(demo);
      console.log(person_name,names);
     }
    }
    test();
}
outerFunc(names);
let inner_from_outer = outerFunc();
console.log(inner_from_outer);
inner_from_outer();
// fns are treated as vars
function test(name){
    return name;
}
let fn = function(){console.log("hira test")};
let result = test(fn);
result();
