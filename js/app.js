'use strict';




let parent=document.getElementById('form');


function Student(studentName,studentGrade,course) {
    this.studentName=studentName;
    this.studentGrade=[];
    this.course=course;


    Student.allStudents.push(this);
    
}





let allStudents=[];



Student.prototype.gettingRandomGrade = function () {

    for (let i = 0; i < allStudents.length; i++) {
      
        this.studentGrade.push(Math.floor(Math.random() * 100));
        
    }

    
}

// console.log(Student.studentGrade);

console.log(allStudents);


parent.addEventListener('submit', submiter);
let select=document.getElementById('course');


function submiter(event) {
event.preventDefault();

    let studentName=event.target.studentNameField.value;
    let studentGrade=gettingRandomGrade();


    let course=select.options[select.selectedIndex].value;

    let addedStudent= new Student(studentName,studentGrade,course);



console.log(event.target.course.value);

settingStorage();
    
}





function settingStorage() {
    let stringsArray=JSON.stringify(allStudents);
    localStorage.setItem("student",stringsArray);

    
}

function gettingItem() {
    let data=localStorage.getItem("student");
    let parsed=JSON.parse(data);

    if (parsed){

        for (let i = 0; i < parsed.length; i++) {
           let student=new Student(parsed[i].studentName,parsed[i].studentGrade,parsed[i].course);
            
        }
    }

    
}

let tableParent =document.getElementById('table');


Student.prototype.render = function () {

    gettingItem();

for (let i = 0; i < allStudents.length; i++) {
    
    let dataRow=document.createElement('tr');
tableParent.appendChild(dataRow);

let tableContent=document.createElement('td');
dataRow.appendChild(tableContent);

tableContent.textContent= allStudents[i];

}




    
}



