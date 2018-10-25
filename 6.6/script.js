class  User{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
    sayHi(){
        return "Привет "+this.name;
    }
}

class Female extends User{
    sayHi(){
        return "Привет "+this.name+"! Ты зарегистрирована."
    }
}

const Men = new User("Ivan","ivan@mail.ru","123456");
console.log(Men.sayHi());

const Anna = new Female("Anna","Anna@mail.ru","654321");
console.log(Anna.sayHi());