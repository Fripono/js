class Custumer{
    constructor(name){
        this.name=name;
    }
    buy(){
        console.log("Куплено");
    }
}

class childCustumer extends Custumer{
    getPresent(){
        console.log("Шарик в подарок");
    }
}

const Piter=new childCustumer("Петя");

Piter.buy();