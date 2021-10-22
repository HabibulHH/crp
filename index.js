// This will be global window 
function namePrinter(){
console.log("This is ",this);
}
namePrinter();

// This will be person scope// 
let person = function(){
    console.log(this);
}
let students= new person();


function showMeSomeInformation (){
 console.log(this);
  let scopeArea = function(){
      console.log(this);
  }
  scopeArea();
}
showMeSomeInformation();

let Student = {
    name:"hira",
    age :233,
    marks : [1,2,2,3],
    printName: function(){
        console.log("scope is",this.name);
    },
    printInfo: function(){
      this.marks.map(function(mark){
       console.log(this.name+" got: "+ mark);
      });
    },
    printInfo_arrow: function(){
        this.marks.map(item=>{
         console.log(this.name+" got: "+item);
        });
    }
}

Student.printName();
Student.printInfo();
Student.printInfo_arrow();
// Because ‘this’, always references the owner of the function
//  it is in, for this case — since it is now out of scope — 
//  the window/global object.

