// let student = "hira hasan";
// console.log(student);

// function namePrinter(){
// console.log("This is ",this);
// }

// namePrinter();

// let person = function(){
//     console.log(this);
// }
// let students= new person();


let Teacher = {
    name:"hira",
    age :233,
    marks : [1,2,2,3],
    printName: function(){
        console.log("scope is",this.name);
    },
    printInfo: function(){
      this.marks.map(function(item){
       console.log(this.name+" got: "+item);
      });
    },
    printInfo_arrow: function(){
        this.marks.map(item=>{
         console.log(this.name+" got: "+item);
        });
    }
}

Teacher.printName();
Teacher.printInfo();
Teacher.printInfo_arrow();
// Because ‘this’, always references the owner of the function
//  it is in, for this case — since it is now out of scope — 
//  the window/global object.