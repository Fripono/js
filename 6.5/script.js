let Users={
    hasAccessToProfile: true,
    approved: true,
    sayHi: function(){return "Привет"}
}

function User(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
    this.__proto__ = Users;
}

const Ivan = new User("Иван","ivan@mail.ru","qwerty");

console.log(Ivan.sayHi());

function FUser(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
    this.__proto__ = Users;
    this.sayHi=function(){return "Привет, "+this.name+"! Ты зарегистрирована!"}
}

const Marja = new FUser("Марья","marja@mail.ru","ytrewq");

console.log(Marja.sayHi());