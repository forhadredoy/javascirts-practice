// // class Car {
// //     constructor(brand) {
// //       this.carname = brand;
// //     }
// //     get cnam() {
// //       return this.carname;
// //     }
// //     set cnam(x) {
// //       this.carname = x;
// //     }
// //   }
  
// //   let myCar = new Car("Ford");
  
// //   console.log( myCar.cnam);
// class Car {
//     constructor(brand) {
//       this._carname = brand;
//     }
//     get carname() {
//       return this._carname;
//     }
//     set carname(x) {
//       this._carname = x;
//     }
//   }
  
//   let myCar = new Car("Ford");
  
//   document.getElementById("demo").innerHTML = myCar.carname;
class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }
  
  let myCar = new Car("Ford");
  myCar.carname = "Volvo";
  console.log(myCar.carname);