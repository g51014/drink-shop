class Drink {
    constructor(name, price) {
        this.name = name;
        this.sugar = 2;
        this.ice =  2;
        this.size = 2;
        this.price = price;
    }
    setIce(ice) {
        this.ice = ice;
    }
    setSugar(sugar) {
        this.sugar = sugar;
    }
}