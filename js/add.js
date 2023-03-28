const firebaseConfig = {
    apiKey: "AIzaSyA_SmMeA3qCvPUljPSE8zMsS-I8xdh7UjE",
    authDomain: "ofek-d4560.firebaseapp.com",
    projectId: "ofek-d4560",
    storageBucket: "ofek-d4560.appspot.com",
    messagingSenderId: "1046902376700",
    appId: "1:1046902376700:web:aadab0a3fef134a4282f79",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database()




var Firstname, Lastname , Age , Email , Rank, ID , PN , Role,Department,Sapir,Matcali,Phone 

var submit = document.getElementById("Submit")




submit.onclick = function(event){
  event.preventDefault();



  Firstname = document.getElementById("Firstname").value;
  Lastname = document.getElementById("Lastname").value;
  Age = document.getElementById("age").value;
  Email = document.getElementById("Email").value;
  Rank = document.getElementById("Rank").value;
  ID = document.getElementById("ID").value;
  PN = document.getElementById("PN").value;
  Role = document.getElementById("Role").value;
  Department = document.getElementById("Department").value;
  Sapir = document.getElementById("SapirPhone").value;
  Matcali = document.getElementById("MatcaliPhone").value;
  Phone = document.getElementById("Phone").value;
  error_message1 = document.getElementById("error_message1");

  error_message1.style.padding = "10px";
  document.getElementById("H1ADD").style.margin = "0px"
  document.getElementById("H1ADD").style.paddingTop = "20px"

 
  if (Firstname.length < 2) {
    text = "*please enter a valid Firstname ";
          error_message1.innerHTML = text;
    return false;
  }
  if(Lastname.length< 2){
      text ="*please enter a valid Lastname";
            error_message1.innerHTML = text;
      return false;
  }

  if (Email.indexOf("@") == -1 || Email.length < 6) {
    text = "Please enter a valid email address";
          error_message1.innerHTML = text;
    return false;
  }

  if(Age < 18){
    text ="*please enter a Valid solider age";
          error_message1.innerHTML = text;
    return false;
}
  if (Rank.length < 2) {
    text = "*please enter a valid Rank ";
          error_message1.innerHTML = text;
    return false;
  }

  if (ID.length != 9) {
    text = "*please enter a valid ID ";
          error_message1.innerHTML = text;
    return false;
  }

  localStorage.setItem("PN",PN)
  if (PN.length != 7) {
    text = "*please enter a valid Personal Number ";
    error_message1.innerHTML = text;
    return false;
  }
  

  
  if (Role.length < 2) {
    text = "*please enter a valid Role Name ";
          error_message1.innerHTML = text;
    return false;
  }

  if (Department.length < 2) {
    text = "*please enter a valid Department Name ";
          error_message1.innerHTML = text;
    return false;
  }

  if (isNaN(Sapir) || Sapir.length != 7) {
    text = "please enter a valid Sapir phone-number";
          error_message1.innerHTML = text;
    return false;
  }

  
  if (isNaN(Matcali) || Matcali.length != 8) {
    text = "please enter a valid Matcali phone-number";
          error_message1.innerHTML = text;
    return false;
  }

  if (isNaN(Phone) || Phone.length != 10) {
    text = "please enter a valid phone-number";
          error_message1.innerHTML = text;
          
    return false;
  }

  
  









  user  = {
    Firstname:Firstname,
    Lastname:Lastname,
    Age : Age,
    Email : Email,
    Rank : Rank,
    ID : ID ,
    Personal_Number : PN,
    Role : Role ,
    Department : Department,
    Sapir : Sapir ,
    Matcali : Matcali,
    Phone : Phone
}
   firebase.database().ref('Ofek/' + PN).set(user)
   error_message1.style.padding = "0px";
   form = document.getElementById("Form").style.display = "none"
   h1 = document.getElementById("add").style.display = "block"

   setTimeout(function() {
    location.replace("Contacts.html")
  },2000);

}












































  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
