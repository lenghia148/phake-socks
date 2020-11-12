let name = document.getElementById("name");
let birthday = document.getElementById("birthday");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");

var message = ""
var listUser = [];


function validateForm() {
    if (password.value != repassword.value) {
        alert("Đăng kí thất bại!")
        return false;
    }else {
        console.log("acacsaca")
        let user = {
            name: name.value,
            birthday: birthday.value,
            email: email.value,
            password: password.value
        }
        console.log(user)
        listUser.push(user);
       
        localStorage.setItem("listUser", JSON.stringify(listUser))

    }

}



   

