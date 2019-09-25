var drinkList = []
var orderList = []
var state = false;

$('#add-drink-btn').click(
    _ => {
        let name = $('#add-drink-name').val();
        let price = $('#add-drink-price').val()
        let newDrink = new Drink(name, parseInt(price))
        !!price && !!name ? this.addDrink(newDrink) : console.log('check name and price again')
    }
)

$('#checkout-mode-btn').click(
    _ => {
        state = !state;
        checkout()
    }
)

$('#order-btn').click(
    _ => {
        drinkList[$('#name').val()].setIce($('#ice').val());
        drinkList[$('#name').val()].setSugar($('#sugar').val());
        orderList.push(new Order(drinkList[$('#name').val()], $('#mount').val(), orderList.length + 1))
        $('#order-detail').append(
            '<li>' + '<span>' + orderList[orderList.length-1].id + '</span>' + '<span>' + orderList[orderList.length-1].drink.name + '</span>' + '<span>' + orderList[orderList.length-1].drink.ice + '</span>' + '<span>' + orderList[orderList.length-1].drink.sugar + '</span>' + '<span>' + orderList[orderList.length-1].quantity + '</span>' + '<span>' + orderList[orderList.length-1].quantity * orderList[orderList.length-1].drink.price + '</span>' + '</li>'
        )
    }
)

function checkDrink(drink) {
    let same = false;
    drinkList.forEach(
        e => {
            if (e.name === drink.name) {
                e.price = drink.price;
                same = true;
            }
        }
    )
    return same;
}

function addDrink(drink) {
    $('#drink').empty();
    $('#drink-name-list').empty();
    this.checkDrink(drink) ? '' : drinkList.push(drink);
    drinkList.forEach(e => {
        $('#drink').append('<li class="menu-list"><span>' + e.name + '</span><span>' + e.price + '</span></li>');
        $('#drink-name-list').append('<option value = "' + e.name + '"/>')
    })
}


function checkout() {
    if (state) {
        let drink;
        drinkList.forEach((e, i) => drink = drink + '<option ' + 'value="' + i + '">' + e.name + '</option>')
        $('#name').append(drink);
        $('#add-drink').css('display', 'none');
        $('#order').css('display', 'flex');
        $('#order-list').css('display', 'flex')
    }
    else {
        $('#name').empty();
        $('#add-drink').css('display', 'flex');
        $('#order').css('display', 'none');
        $('#order-list').css('display', 'none')
    }
}

function order() {

}