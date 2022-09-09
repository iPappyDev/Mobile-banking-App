function firstRegister(){
    window.location.href = "interphase.html"
}
function firstLogin(){
    window.location.href = "login.html"
}

let allBankCustomers = []
if(localStorage.customers){
    allBankCustomers = JSON.parse(localStorage.getItem("customers"))
}

function registerCustomer(){
    // let firstName = firstname.value
    // let lastName = lastname.value
    // let dateOfBirth = dob.value
    // let email = userEmail.value
    // let password = userPassword.value
    // let accountNumber = "7" + Math.round(Math.random()*10000000000)
    // date = new Date()

    // /^[A-Z]$/
    let validEmail = /^(([\w]+)([@])([\w]+)([.])([a-zA-Z]{1,5})([.][\w]{1,5})?)$/
    let validPassword = /^([A-Z])([\w]+)(.{1})$/
    // let ifGoood = false
    // if((email = validEmail.test(userEmail.value)) && (password = validPassword.test(userPassword.value))){
    //     ifGoood = true
    //     alert("its okay")
    // }else{
    //     alert("fill in correctly")
    // }
    let newCustomer = {
        firstName: firstname.value,
        lastName: lastname.value,
        dateOfBirth: dob.value,
        email: userEmail.value,
        password: userPassword.value,
        accountNumber: "7" + Math.round(Math.random()*1000000000),
        date: new Date()
    }
    if((firstName = firstname.value)  &&
        (lastName = lastname.value) &&
        (dateOfBirth = dob.value) &&
        (email = userEmail.value) &&
        (password = userPassword.value) &&
        (validEmail.test(userEmail.value)== true) && (validPassword.test(userPassword.value) == true)){
        window.location.href ="login.html",
        // alert("iuygtfdfghjk")
        allBankCustomers.push(newCustomer),

        firstname.value = "",
        lastname.value = "",
        dob.value = "",
        userEmail.value = "",
        userPassword.value = ""
    }
    if (validEmail.test(userEmail.value)== false){
        incorrectEmail.innerHTML = `<p> incorrect email</p>`
    }
    if (validPassword.test(userPassword.value) == false){
        incorrectPassword.innerHTML = `<p> incorrect password</p>`
    }
    else{
        alert("fill details correctly")
    }
    localStorage.setItem("customers",JSON.stringify(allBankCustomers))
    // window.location.href ="login.html"
    // acctnumber.innerHTML = "<p>account number is</p>" + "<h4>" + accountNumber + "</h4>"
}

function signinCustomer(){
    let myUsername = username.value
    let myPassword = password.value
    let allBankCustomers = JSON.parse(localStorage.getItem("customers"))
    let check = false
    for (var index = 0; index < allBankCustomers.length; index++) {
        if (allBankCustomers[index].email==myUsername && allBankCustomers[index].password==myPassword){
            check = true
            alert("Login Successfully")
        }        
    }
    if(check){
        window.location.href = "dashboard.html"
    }
    else{
        incorrect.innerHTML = "Incorrect Matric No. or Password"
        incorrect.style.color = "red"
    }
}





























let balance = 1000
function withdrawal(){
    let amountEntered = Number(userInput.value)
    if(amountEntered<0){
        disp.innerHTML = "out of bound"
    }else if(amountEntered>balance){
        disp.innerHTML = "insufficent"
    }else if(amountEntered == ""){
        disp.innerHTML = "enter valid amount"
    }else if(amountEntered){
        balance = balance - amountEntered
        disp.innerHTML = "Transfer successful. Do you want to perform any other transaction? If No press Exit button"
        disp.style.color = "black"
    }else if(amountEntered != Number){
        disp.innerHTML = "Invalid"
        disp.style.color = "red"
    }
}
function addMoney(){
    let amountEntered = Number(userInput.value)
    if(amountEntered<0){
        disp.innerHTML = "out of bound"
    }else if(amountEntered == ""){
        disp.innerHTML = "enter valid amount"
    }else if(amountEntered >0){
        balance = balance + amountEntered
        disp.innerHTML = "deposited"
        disp.style.color = "black"
    }else if(amountEntered != Number){
        disp.innerHTML = "Invalid"
        disp.style.color = "red"
    }
}
function transfer(){
    let amountEntered = Number(userInput.value)
    if(amountEntered<0){
        disp.innerHTML = "out of bound"
    }else if(amountEntered>balance){
        disp.innerHTML = "insufficent"
    }else if(amountEntered == ""){
        disp.innerHTML = "enter valid amount"
    }else if(amountEntered){
        balance = balance - amountEntered
        disp.innerHTML = "Transfer successful."
        disp.style.color = "black"
    }else if(amountEntered != Number){
        disp.innerHTML = "Invalid"
        disp.style.color = "red"
    }
}
function myBalance(){
    let amountEntered = Number(userInput.value)
    disp.innerHTML = "Your balance is $" + balance + " press exit to remove your card"
    disp.style.color = "black"
}