function f1(){
    var date = new Date()
    document.getElementById("date").value+=date
}

f1()


function registration() {
    p1 = document.getElementById("pass1").value
    p2 = document.getElementById("pass2").value
    n = document.getElementById("passalert")
    ptag = document.getElementById("passalert")
    m = document.getElementById("mailalert")
    mail = document.getElementById("mail")

    let strong = new RegExp('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])')
    let veryStrong = new RegExp('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.[!#$&%*^])')
    let medium= new RegExp('(?=.*[a-z])(?=.*[0-9])')
    let weak = new RegExp('((?=.*[a-z]))')
    let regularMail = new RegExp('((?=.*[@]))(?=.*[a-z])')
    if ((veryStrong.test(p1)===true) && (strong.test(p1)===false) ) {
        n.style.color = "green"
        n.innerHTML = "პაროლი ძალიან ძლიერია ✔️"
    } else if ((strong.test(p1)===true) && veryStrong.test(p1)===false) {
        n.style.color = "green"
        n.innerHTML = "პაროლი ძალიან ძლიერია ✔️"
    } else if (medium.test(p1)===true) {
        n.style.color = "green"
    n.innerHTML = "პაროლი საშუალო სიძლიერისაა" 
    } else if(weak.test(p1)===true) {
        n.innerHTML = "პაროლი სუსტია"
    }

    if (p1!==p2 ) {
        ptag.innerHTML = "პაროლები უნდა ემთხვეოდეს"

    }



  }



 registration()

  
function mail() {
    let regularMail = new RegExp('((?=.*[@]))(?=.*[a-z])')
    m = document.getElementById("mailalert")
    if (mail.test(regularMail)===false) {
        m.innerHTML = "მეილის ფორმატი არასწორია"

    }

}

mail()

function reg() {
    registration(); mail()
}

reg()