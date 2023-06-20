function hoistingExample() {
    z = 10;
    console.log("Hoisted variable z value: "+z); // 10
  }
  var z;  //Hoisting 
  function shadowingExample() {
    let x = 10;
    if (true) {
      let x = 20; // Shadowing the outer 'x'
      console.log("Shadowing variable x value: "+x); // 20
    }
    console.log("Out side of a block scope vale of x: " + x); // 10
  }
  
  hoistingExample();
  shadowingExample();


function f1(){
    //   const a;  we can not declare "const" varible we have to initialize the constant value to it
    const score1 :string = "Const variable";

    // const score1 : string = "Laxman";  cant be re-declare "const" variable
    console.log(score1);
}
f1();