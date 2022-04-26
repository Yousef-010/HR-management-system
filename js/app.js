"use strict";

let E_array = [];

function Employee( e_id,e_fullName,e_department,e_level,e_imgUrl ){
  this.id = e_id,
  this.fullName = e_fullName,
  this.department = e_department,
  this.level = e_level,
  this.imgUrl = e_imgUrl,
  this.salary=0

  E_array.push(this)
}

Employee.prototype.getsal= function(){
  console.log(this.level);
  if (this.level==='Junior'){
    this.salary= Math.floor(Math.random()*(1000-500)+500)
  }
  if (this.level==='Senior'){
    this.salary= Math.floor(Math.random()*(1500-1000)+1000)
  }
  if (this.level==='Mid-Senior'){
    this.salary= Math.floor(Math.random()*(2000-1500)+1500)
  }
  this.salary= this.salary - (this.salary/100)*7.5
}



let form =document.getElementById('form')


function randomId(){
    let random = Math.floor(Math.random()* (9000-1000))+1000
    return random

}

// Employee.getId= function(min,max){
//     this.id=randomId(min,max)
//     return this.id
// }

let M_main = document.getElementById('main')
let E_container = document.getElementById('container')


Employee.prototype.render = function () {
  console.log(this.salary ,"this.salary :"); 
    let saf = document.getElementById('saf')
     
    let card = document.createElement('div')
    card.classList.add('card')

    for (let i = 0; i < 1 ; i++) {
      
      let image = document.createElement('img')
      image.width='350'
      image.height='200'
      let name = document.createElement('h1')
      let Id = document.createElement('h2')
      let dep = document.createElement('h3')
      let lev = document.createElement('h4')
      let sal = document.createElement('h5')
 
 
     image.setAttribute('src',this.imgUrl)
     name.textContent= 'Name : '+ this.fullName
     Id.textContent= '-ID :'+ this.id
     dep.textContent= 'Deperatment: '+ this.department
     lev.textContent= 'Level : '+ this.level
     sal.textContent = this.salary+'$'
 
 
     card.appendChild(image)
     card.appendChild(name)
     card.appendChild(Id)
     card.appendChild(dep)
     card.appendChild(lev)
     card.appendChild(sal)

    }
    saf.appendChild(card)




}
 
// const ghazi = new Employee(
//   1000,
//   "Ghazi Samer",
//   "Administration",
//   "Senior",
//   "./images/Ghazi.jpg"

// )

// const lina = new Employee(
//   1001,
//   "Lana Ali",
//   "Finance",
//   "Senior",
//   "./images/Lana.jpg"

// )
// const tamara = new Employee(
//   1002,
//   "Tamara Ayoub",
//   "Marketing",
//   "Senior",
//   "./images/Tamara.jpg"

// )
// const safi = new Employee(
//   1003,
//   "Safi Walid",
//   "Administration",
//   "Mid-Senior",
//   "./images/Safi.jpg"
// )
// const omar = new Employee(
//   1004,
//   "Omar Zaid",
//   "Development",
//   "Senior",
//   "./images/Omar.jpg"
// )
// const rana = new Employee(
//   1005,
//   "Rana Saleh",
//   "Development",
//   "Junior",
//   "./images/Rana.jpg"
// )
// const hadi = new Employee(
//   1006,
//   "Hadi Ahmad",
//   "Finance",
//   "Mid-Senior",
//   "./images/Hadi.jpg"

// )



function renderAll(){

for (let i = 0; i < E_array.length; i++) {

    // E_array[i].randomId()
    E_array[i].getsal()
    E_array[i].render()

}
}

renderAll()


 

form.addEventListener('submit',addsubmit)

function addsubmit (event){
    event.preventDefault()
    // console.log(event.target.dep.value);
    let id = randomId()
    let Name=event.target.fulname.value
    let depart=event.target.dep.value
    let lvl=event.target.lev.value
    let img=event.target.img.value
    // console.log(Name,depart,lvl,img);

    let newEmployee = new Employee(id,Name,depart,lvl,img)
    newEmployee.getsal()
    newEmployee.render()

    storeData(E_array);
// console.log(E_array);
}




function storeData(data) {
  let datastored = JSON.stringify(data);
  localStorage.setItem('All_Employees', datastored)

}


function reciveData() {
  let dataRecived = localStorage.getItem('All_Employees');
   console.log(dataRecived);
  //  console.log(typeof(dataRecived));
    
    let allData = JSON.parse(dataRecived);
    console.log(allData);

    if (allData != null) {
        
        for (let i = 0; i < allData.length; i++) {
          var element = new Employee(
            allData[i].id,
            allData[i].fullName,
            allData[i].department,
            allData[i].level,
            allData[i].imgUrl,
            allData[i].salary
          );
        }
        element.getsal()
        element.render()
    
    }

}

reciveData();