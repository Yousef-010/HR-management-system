'use strict'

let tableEl = document.getElementById("tableID");
let mybody = document.getElementById('tbody')
let tfoott= document.getElementById('footer')


let D_array=[]

function Department( D_name,D_no_Emp,D_avg_sal,D_totla_sal){
    this.name = D_name,
    this.noEmp = D_no_Emp,
    this.avg= D_avg_sal,
    this.totla = D_totla_sal,

    D_array.push(this)
  }

  Department.prototype.render = function () {

    if(this.name==='Total'){

             
            let row = document.createElement('tr')

        tfoott.appendChild(row)


        let dname = document.createElement('td');
        row.appendChild(dname);
        dname.textContent = this.name;

        let dNoEmp = document.createElement('td');
        row.appendChild(dNoEmp);
        dNoEmp.textContent = this.noEmp;
    
        let dAvg = document.createElement('td');
        row.appendChild(dAvg);
        dAvg.textContent = this.avg;
    
        let dTotal = document.createElement('td');
        row.appendChild(dTotal);
        dTotal.textContent = this.totla;

}
else{

    let trEl = document.createElement('tr');

    mybody.appendChild(trEl);
    tableEl.appendChild(mybody)

    let dname = document.createElement('td');
    trEl.appendChild(dname);
    dname.textContent = this.name;

    let dNoEmp = document.createElement('td');
    trEl.appendChild(dNoEmp);
    dNoEmp.textContent = this.noEmp;

    let dAvg = document.createElement('td');
    trEl.appendChild(dAvg);
    dAvg.textContent = this.avg;

    let dTotal = document.createElement('td');
    trEl.appendChild(dTotal);
    dTotal.textContent = this.totla;
}


}

  function reciveData() {
    let dataRecived = localStorage.getItem('All_Employees');
    //  console.log(dataRecived);
     
      
      let allData = JSON.parse(dataRecived);
      console.log(allData);
  
      if (allData != null) {
        //   let obj = {DepartmentName }
        let acounter = 0
        let mcounter = 0
        let dcounter = 0
        let fcounter = 0

        let atotalsal=0
        let mtotalsal=0
        let dtotalsal=0
        let ftotalsal=0

        let aavgsal=0
        let mavgsal=0
        let davgsal=0
        let favgsal=0

        // function totalsal(salary){
             
        // }
          for (let i = 0; i < allData.length; i++) {

            if (allData[i].department == 'Administration') {
                 
                acounter+=1
                atotalsal+=allData[i].salary
                aavgsal = atotalsal/acounter
                

            }
            if (allData[i].department == 'Finance') {
                 
                fcounter+=1
                ftotalsal+=allData[i].salary
                favgsal = ftotalsal/fcounter
                

            }
            if (allData[i].department == 'Development') {
                 
                dcounter+=1
                dtotalsal+=allData[i].salary
                davgsal = dtotalsal/dcounter
                

            }
            if (allData[i].department == 'Marketing') {
                 
                mcounter+=1
                mtotalsal+=allData[i].salary
                mavgsal = mtotalsal/mcounter
                

            }
              

            
          }

          var aelement = new Department(
             'Administration',acounter,aavgsal,atotalsal 
          );
          var felement = new Department(
            'Finance',fcounter,favgsal,ftotalsal 
         );
         var delement = new Department(
            'Development',dcounter,davgsal,dtotalsal 
         );
         var melement = new Department(
            'Marketing',mcounter,mavgsal,mtotalsal 
         );
          
        //   element.getsal()
          aelement.render()

          felement.render()

          delement.render()

          melement.render()

          let finaltotal_noOfEmployee = acounter+mcounter+fcounter+dcounter
          let finaltotal_avg = aavgsal+mavgsal+favgsal+davgsal

          let finaltotal_total = atotalsal+mtotalsal+ftotalsal+dtotalsal

          

          var foot = new Department(
            'Total',finaltotal_noOfEmployee,finaltotal_avg,finaltotal_total
         );

         foot.render()

      }
  
  }
  
  reciveData()
  console.log('D aray ' ,D_array);

//   for (let i = 0; i < D_array.length; i++) {
//     D_array[i].render()
      
//   }