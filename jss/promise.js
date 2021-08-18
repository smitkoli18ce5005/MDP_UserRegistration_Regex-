
    let reg_first_name = /^([A-Z])([a-z]){3,}/
    let reg_last_name = /^([A-Z])([a-z]){3,}/
    let reg_email = /^([a-z]+)([\.][a-z]+)?(@)([a-z]+)(.)([a-z]{2,3})([\.][a-z]{2,3})$/
    let reg_phone_number = /^([\d]{2})(\-)([789])([\d]{9})$/
    let reg_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]{1}).{8,}$/

    class NewUserClass{
        constructor(firstname,lastname,email,phoneNumber,password){
            this.validate(firstname, reg_first_name).then(
                () => this.validate(lastname, reg_last_name).then(
                    () => this.validate(email, reg_email).then(
                        () => this.validate(phoneNumber, reg_phone_number).then(
                            () => this.validate(password, reg_password).catch((b) => console.log(b +" Password") )
                        ).catch((b) => console.log(b +" Phone Number"))
                    ).catch((b) => console.log(b +" Email"))
                ).catch((b) => console.log(b +" Last Name"))
            ).catch((b) => console.log(b +" First Name"))
        }

        validate(str, reg){
            return new Promise((resolve, reject) => {
                if(reg.test(str)){
                    resolve(true);
                }else{
                    reject("Invalid");
                }
            })
        }
    }


let obj = new NewUserClass("Smit","Koli","smit.koli@gmail.com","91-9988776655","!SSS233fcn*6");
    