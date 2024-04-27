function addNewWEfield()
{
    // console.log("added");


    let  newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","enter here");
    newNode.setAttribute("rows",3);

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQfield()
{
    let  newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","enter here");
    newNode.setAttribute("rows",3);

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

// generating CV
function generateCV()
{
    // console.log("generting CV");

    let nameField = document.getElementById("namefield").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML  = nameField;

    // direct

    document.getElementById("nameT2").innerHTML = nameField;

    // contact 

    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;

    // address
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;
 
    // links

    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedfield").value;

 // Objective 

 document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;


 // we

 let wes = document.getElementsByClassName("wefield");

 let str =" ";

 for(let e of wes)
     {
        str  = str + `<li> ${e.value} </li>`;
     }

     document.getElementById("weT").innerHTML = str;



// aq

let aqs = document.getElementsByClassName("aqfield");
let str1 =" ";

 for(let e of wes)
     {
        str1  = str1 + `<li> ${e.value} </li>`;
     }

     document.getElementById("aqT").innerHTML = str1;

 // setting the profile photo
      let file = document.getElementById("imgfield").files[0];

      let reader = new FileReader();
      
      reader.readAsDataURL(file);

// set the to template

 reader.onloadend= function()
 {
    document.getElementById("imgTemplate").src = reader.result;

 }

     // for using the display

     document.getElementById("CV-form").style.display="none";
     document.getElementById("CV-template").style.display="block";




}
// print CV function
function printCV(){

  window.print();
}