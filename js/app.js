"use strict";

let E_array = [];
 

function Employee( e_id,e_fullName,e_department,e_level,e_imgUrl ){
  this.id = e_id,
  this.fullName = e_fullName,
  this.department = e_department,
  this.level = e_level,
  this.imgUrl = e_imgUrl,
   
  E_array.push(this)
}

 
let bttn = document.getElementById('bttn')
let form =document.getElementById('form')


function randomId(min,max){
    let random = Math.floor(Math.random()* (max-min))+min
    return random
    
}

Employee.prototype.getId= function(min,max){
    this.id=randomId(min,max)
    return this.id
}

let M_main = document.getElementById('main')
let E_container = document.getElementById('container')
 let card = document.getElementById('card')
 
Employee.prototype.render = function () { 

     let image = document.createElement('img')
     image.width='350'
     image.height='200'
     let name = document.createElement('h1')
     let Id = document.createElement('h2')
     let dep = document.createElement('h3')
     let lev = document.createElement('h4')
    
    
    image.setAttribute('src',this.imgUrl)
    name.textContent= 'Name : '+ this.fullName
    Id.textContent= '-ID :'+ this.id
    dep.textContent= 'Deperatment: '+ this.department
    lev.textContent= 'Level : '+ this.level
  
    
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(Id)
    card.appendChild(dep)
    card.appendChild(lev)
    
    
}
 
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
 
  "./images/Ghazi.jpg"

)

 
  "./assets/ch_ml_1.jpg"
);
 
const lina = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
 
  "./images/Lana.jpg"
  
)
 
  "./assets/ch_fm_1.jpg"
);
 
const tamara = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",

  "./images/Tamara.jpg"
  
)

  "./assets/ch_fm_2.jpg"
);

const safi = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./images/Safi.jpg"
)
  "./assets/ch_ml_2.jpg"
);
const omar = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "./images/Omar.jpg"
)
  "./assets/ch_ml_3.jpg"
);
const rana = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",

  "./images/Rana.jpg"
)

  "./assets/ch_fm_3.jpg"
);

const hadi = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",

  "./images/Hadi.jpg"
  
)

function renderAll(){
    
for (let i = 0; i < E_array.length; i++) {

    E_array[i].getId(1000,9999)
    E_array[i].render()

}
}

renderAll()


bttn.addEventListener('click', say_hi)
function say_hi(){
    alert('Lsets Start Adding Employees ...')
}

form.addEventListener('submit',addsubmit)

function addsubmit (event){
    event.preventDefault()
    // console.log(event.target.dep.value);
    let ID = event.target.id.value
    let Name=event.target.fulname.value
    let depart=event.target.dep.value
    let lvl=event.target.lev.value
    let img=event.target.img.value
    // console.log(Name,depart,lvl,img);

    let newEmployee = new Employee(ID,Name,depart,lvl,img)
    newEmployee.render()
// console.log(E_array);
 
  "./assets/ch_ml_4.jpg"
);


for (let i = 0; i < E_array.length; i++) {
    E_array[i].getSalary();
  E_array[i].render();

}
