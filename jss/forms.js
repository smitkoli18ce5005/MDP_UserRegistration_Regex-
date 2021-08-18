const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

console.log(password1.value)
function showError(input, msg) {
    const div = input.parentElement;
    div.className = 'value-error';
    const small = div.querySelector('small');
    small.innerText = msg
}

function showSuccess(input, msg) {
    const div = input.parentElement;
    div.className = 'value-success';
    const small = div.querySelector('small');
    small.innerText = msg
}

function startValidating(inputsArray) {
    inputsArray.forEach(input => {
        if(input.value.trim() === ''){
            if(input.id === password1.id){
                showError(input, `password required!`);
            } else if(input.id === password2.id){
                showError(input, `enter same password!`);
            } else{
                showError(input, `${input.id} required!`);
            }  
        }else{
            if(input.value === username.value){
                checkUsernameLength(username);
            } else if (input.value === email.value){
                checkEmail(email);
            } else if (input.value === password1.value){
                checkPassword1(password1);
            } 
        }
    });
}

function checkRequired(inputsArray) {
    inputsArray.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${input.id} required!`);
        }else{
            checkUsernameLength(username);
        }
    });
}

function checkUsernameLength(username) {
    if(username.value.length >= 3 && username.value.length <=20){
        showSuccess(username, `${username.id} is valid`);
    }else{
        showError(username, `${username.id} should have value between 3 and 20`);
    }
}

function checkEmail(email) {
    let reg = /^([a-z]+)([\.][a-z]+)?(@)([a-z]+)(.)([a-z]{2,3})([\.][a-z]{2,3})$/
    if(reg.test(email.value)){
        showSuccess(email, `${email.id} is valid`);
    }else{
        showError(email, `Please enter valid ${email.id}`);
    }
}

function checkPassword1(password1) {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]{1}).{8,}$/
    if(reg.test(password1.value)){
        showSuccess(password1, `password is valid`);
        checkPassword2(password1, password2);
    }else{
        showError(password1, `password is not valid`);
    }
}

function checkPassword2(password1, password2) {
    if(password1.value === password2.value){
        showSuccess(password2, `password is valid`);
    }else{
        showError(password2, `enter same password`);
    }
}

function validate(){
    startValidating([username, email, password1, password2]);
    //checkRequired([username, email, password1, password2]);
    //checkEmail(email);
    //checkPassword1(password1);
}