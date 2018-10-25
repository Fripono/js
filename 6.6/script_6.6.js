class Custumer{
    constructor(name){
        this.name=name;
    }
    buy(){
        return "Куплено";
    }
}

class childCustumer extends Custumer{
    getPresent(){
        return "Шарик в подарок";
    }
}

const Piter=new childCustumer("Петя");

console.log(Piter.name+", "+Piter.buy()+"! "+Piter.getPresent());