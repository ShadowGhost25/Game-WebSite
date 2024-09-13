function checkEmail(){
    let email = document.getElementById("emailFild").value
    if (!email.includes('@')) {
        alert('Нету символа @')
    } else if (!email.includes('.')){
        alert('Нету символа .')
    } else alert("всё гуд")
}