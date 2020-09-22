let hotel = () =>{

    let peopleQuantity = document.getElementById("quantityHuesped").value;
    let quantityDays = document.getElementById("quantityDays").value;
    let subtotal = 0;
    let total = 0;
    let tarifa = 0;

    const tarifaIndividual = 2500;
    const tarifaDouble = 4600;
    const tarifaFamily = 5200;
    const IVA = (16/100);

    if(peopleQuantity == 1){
        subtotal = (tarifaIndividual * quantityDays);
        total = (subtotal+(subtotal*IVA));
        tarifa = (total-(total*(5/100)));
    }else{
        if(peopleQuantity == 2){
            subtotal = (tarifaDouble * quantityDays);
            total = (subtotal+(subtotal*IVA));
            tarifa = (total-(total*(9/100)));
        }else{
            if(peopleQuantity >= 3){
                subtotal = (tarifaFamily * quantityDays);
                total = (subtotal*(subtotal*IVA));
                tarifa = (total-(total*(15/100)));
            }
        }
    }

    alert("Price without IVA: " + subtotal + "\nPrice with IVA: " + total + "\nTotal tarifa with offer OFF: " + tarifa);

}