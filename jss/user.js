let user_object = {};

class UserClass{

    constructor(firstname,lastname,email,phoneNumber,password){
        user_object.firstname = firstname;
        user_object.lastname = lastname
        user_object.email = email;
        user_object.phoneNumber = phoneNumber;
        user_object.password = password;
    }

    //UC1     -       As a User need to enter a valid First Name
    validateFirstName(){
        let reg = /^([A-Z])([a-z]){3,}/
        if(reg.test(user_object.firstname)){
            console.log("First Name\t\t\t\t\t:\t" +"Valid");
        }else{
            console.log("First Name\t\t\t\t:\t" +"Invalid");
        }
    }

    //uc2     -       As a User need to enter a valid Last Name
    validateLastName(){
        let reg = /^([A-Z])([a-z]){3,}/
        if(reg.test(user_object.lastname)){
            console.log("Last Name\t\t\t\t\t:\t" +"Valid");
        }else{
            console.log("Last Name\t\t\t\t\t:\t" +"Invalid");
        }
    }

    //uc3     -       As a User need to enter a valid email
    validateEmail(){
        let reg = /^([a-z]+)([\.][a-z]+)?(@)([a-z]+)(.)([a-z]{2,3})([\.][a-z]{2,3})$/
        if(reg.test(user_object.email)){
            console.log("Email\t\t\t\t\t\t:\t" +"Valid");
        }else{
            console.log("Email\t\t\t\t\t\t:\t" +"Invalid");
        }
    }

    //uc4     -       As a User need to follow pre defined Mobile Format
    validatePhoneNumber(){
        let reg = /^([\d]{2})(\-)([789])([\d]{9})$/
        if(reg.test(user_object.phoneNumber)){
            console.log("Phone Number\t\t\t\t\t:\t" +"Valid");
        }else{
            console.log("Phone Number\t\t\t\t\t:\t" +"Invalid");
        }
    }

    //uc5     -       As a User need to follow pre-defined Password rules
    validatePassword(){
        console.log("Password")
        //Rule1 -> minimum 8 Characters 
        let rule1 = /([\w\d\W_]+){8,}/
        let reg1 = rule1.test(user_object.password);

        //Rule2 – Should have at least 1 Upper Case
        let rule2 = /([A-Z])+/
        let reg2 = rule2.test(user_object.password);
        
        //Rule3 –> Should have at least 1 numeric number in the password
        let rule3 = /([0-9])+/
        let reg3 = rule3.test(user_object.password);

        //Rule4 –> Has exactly 1 Special Character
        let rule4 = /([\W])/g
        let reg4 = user_object.password.match(rule4);
        let rule4_flag = false;

        if(reg1){
            console.log(" -Rule_1 - Password has minimum 8 characters\t:\t" +"Valid");
        }else{
            console.log(" -Rule_1 - Password has minimum 8 characters\t:\t" +"Invalid");
        }

        if(reg2){
            console.log(" -Rule_2 - Should have at least 1 Upper Case\t:\t" +"Valid");
        }else{
            console.log(" -Rule_2 - Should have at least 1 Upper Case\t:\t" +"Invalid");
        }

        if(reg3){
            console.log(" -Rule_3 - Should have at least 1 numeric number:\t" +"Valid");
        }else{
            console.log(" -Rule_3 - Should have at least 1 numeric number:\t" +"Invalid");
        }

        try{
            if(reg4.length == 1){
                console.log(" -Rule_4 - Has exactly 1 Special Character\t:\t" +"Valid");
                rule4_flag = true;
            }else{
                console.log(" -Rule_4 - Has exactly 1 Special Character\t:\t" +"Invalid");
            }
            
        }catch(error){
            console.log(" -Rule_4 - Has exactly 1 Special Character\t:\t" +"Invalid");
        }

        console.log("----------------------------------------------------------------------");
        if(reg1 && reg2 && reg3 && rule4_flag){
            console.log("Overall Password-->\t\t\t\t:\t" +"Valid");
        }else{
            console.log("Overall Password Status --->\t\t\t:\t" +"Invalid");
        }
    }

    display(){
        console.log("");
        console.log("----------User Registration Problem----------");
        console.log(user_object);
        console.log("");
    }

    startValidating(){
        console.log("----------------------------------------------------------------------");
        console.log("Parameter\t\t\t\t\t:\t" +"Valid/Invalid");
        console.log("----------------------------------------------------------------------");
        this.validateFirstName();
        this.validateLastName();
        this.validateEmail();
        this.validatePhoneNumber();
        this.validatePassword();
        console.log("----------------------------------------------------------------------");
        console.log("");
    }

    //uc9     -       Should clear all email samples provided separately
    validateMoreEmails(emails_array){
        console.log("-----------------Validating all email samples-------------------------");
        let reg = /^([a-z]+)([\.][a-z]+)?(@)([a-z]+)(.)([a-z]{2,3})([\.][a-z]{2,3})$/       
        let emails = emails_array;
        for(let i=0;i<emails.length;i++){
            console.log(emails[i]);
            if(reg.test(emails[i])){
                console.log("Email\t\t\t\t\t\t:\t" +"Valid");
            }else{
                console.log("Email\t\t\t\t\t\t:\t" +"Invalid");
            }
            console.log("");
        }
    }
}

let user = new UserClass("Smit","Koli","smit.koli@gmail.co.in","91-9919819801","hss2sss!eR");
user.display();
user.startValidating();
user.validateMoreEmails(["smit.koli@gmail.co.in","smi.koli@gmail.in","smit@gmail.co.in","smit@gmail.@in",
                            "koli.smit@gmail.comsss"]);