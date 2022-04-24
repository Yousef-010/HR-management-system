"use strict";

let E_array = [];
function Employee(
  e_id,
  e_fullName,
  e_department,
  e_level,
  e_imgUrl)
   {
  (this.id = e_id),
    (this.fullName = e_fullName),
    (this.department = e_department),
    (this.level = e_level);
  this.imgUrl = e_imgUrl;
  this.salary;
  E_array.push(this);
}


    // recprse https://developer.mozilla.org/

Employee.prototype.render = function () {
     
  let selector = document.getElementById("content");
  let tblBody = document.createElement("tbody");
  for (let i = 0; i < 1; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 1; j++) {
      let item = document.createElement("td");
      let item2 = document.createElement("td");

      let itemTextFullName = document.createTextNode(this.fullName);
      let itemTextSalary = document.createTextNode(this.salary);
      item.appendChild(itemTextFullName);
      item2.appendChild(itemTextSalary);
      row.appendChild(item);
      row.appendChild(item2);
    }
    tblBody.appendChild(row);
  }
  selector.appendChild(tblBody);
}
 // recprse https://developer.mozilla.org/
 

Employee.prototype.getSalary = function () {
    if (this.level === "Senior") {
      this.salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    }
    if (this.level === "Mid-Senior") {
        this.salary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
      }
    if (this.level === "Junior") {
        this.salary = Math.floor(Math.random() * (1000 - 500)) + 500;
      }
    this.salary =this.salary - (this.salary / 100) * 7.5;
  }



const ghazi = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assets/ch_ml_1.jpg"
);
const lina = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "./assets/ch_fm_1.jpg"
);
const tamara = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assets/ch_fm_2.jpg"
);
const safi = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assets/ch_ml_2.jpg"
);
const omar = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "./assets/ch_ml_3.jpg"
);
const rana = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  "./assets/ch_fm_3.jpg"
);
const hadi = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assets/ch_ml_4.jpg"
);


for (let i = 0; i < E_array.length; i++) {
    E_array[i].getSalary();
  E_array[i].render();
}
