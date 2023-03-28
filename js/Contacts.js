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



firebase.database().ref("Ofek").on("value",fbRespons)

const table = document.getElementById("table")


function fbRespons(data){
  data.forEach(elemet => {
    Firstname = elemet.val().Firstname
    Lastname = elemet.val().Lastname
    Age = elemet.val().Age
    Email= elemet.val().Email
    Rank= elemet.val().Rank
    ID= elemet.val().ID
    PN= elemet.val().Personal_Number
    Role= elemet.val().Role
    Department= elemet.val().Department
    Sapir= elemet.val().Sapir
    Matcali= elemet.val().Matcali
    Phone = elemet.val().Phone

    






    const tr = document.createElement("tr");
    const firstname = document.createElement("th")
    firstname.innerHTML = Firstname
    const lastname = document.createElement("th")
    lastname.innerHTML = Lastname
    const email = document.createElement("th")
    email.innerHTML = Email
    const rank = document.createElement("th")
    rank.innerHTML = Rank
    const age = document.createElement("th")
    age.innerHTML = Age
    const id = document.createElement("th")
    id.innerHTML = ID
    const pn = document.createElement("th")
    pn.innerHTML = PN
    const role = document.createElement("th")
    role.innerHTML = Role
    const department = document.createElement("th")
    department.innerHTML = Department
    const sapir = document.createElement("th")
    sapir.innerHTML = Sapir 
    const matcali = document.createElement("th")
    matcali.innerHTML = Matcali
    const phone = document.createElement("th")
    phone.innerHTML = Phone
    
    tr.appendChild(firstname)
    tr.appendChild(lastname)
    tr.appendChild(email)
    tr.appendChild(rank)
    tr.appendChild(age)
    tr.appendChild(id)
    tr.appendChild(pn)
    tr.appendChild(role)
    tr.appendChild(department)
    tr.appendChild(sapir)
    tr.appendChild(matcali)
    tr.appendChild(phone)
    
    table.appendChild(tr)
    
    


  })
}




function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('table');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
    XLSX.writeFile(wb, fn || ('Ofek_Contacts.' + (type || 'xlsx')));
}

































































function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }