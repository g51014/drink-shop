var drinkList = []
$('#add-drink-btn').click(
    key => {
        let name = $('#add-drink-name').val();
        let price = $('#add-drink-price').val()
        let newDrink = new Drink(name,3,3,2,parseInt(price))
        !!price && !!name ? this.addDrink(newDrink) : console.log('check name and price again')
    }
)

function checkDrink(drink) {
    let same = false;
    drinkList.forEach(
        e => {
            if(e.name === drink.name) {
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
    this.checkDrink(drink) ? '' :  drinkList.push(drink); 
    drinkList.forEach(e => {
         $('#drink').append('<li class="menu-list"><span>'+e.name+'</span><span>'+ e.price +'</span></li>');
         $('#drink-name-list').append('<option value = "'+ e.name +'"/>')
    })
}



