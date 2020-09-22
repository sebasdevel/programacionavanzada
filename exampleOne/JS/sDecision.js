function showMessage() {
    let age = parseInt(document.getElementById('age').value);

    // if (age >= 18) {
    //     message = "You are adult."
    // }else{
    //     message = "You are a adolescent or kid"
    // }

    // If con operador terniario
    let message = (age >= 18) ? "You are adult" : "You are a adolescent or kid"

    // alert(message);
    document.write(message);
}

function messageTwo(){
    let age = parseInt(document.getElementById("ageTwo").value);
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);

    const paramAge = 80;
    const paramHeight = 1.40;
    const paramWeight = 70;
    let messageDecision;

//     if (age <= paramAge) {
//         if(height >= paramHeight){
//             if(weight == paramWeight){
//                 messageDecision = "Yes!"
//             }else{
//                 messageDecision = "No! Your weight.";
//             }
//         }else{
//             messageDecision = "No! Your height.";
//         }
//     } else {
//         messageDecision = "No! Your age";
//     }

//     document.write(messageDecision);
// If with operator logic AND(&&)
    if (age <= paramAge && height >= paramHeight && weight == paramWeight) {
        messageDecision = "Yes!"
    }else{
        messageDecision = "No!"
    }

    alert(messageDecision);
}

// function price() {
//     let productName = document.getElementById("productName").value;
//     let price = 0;

//     const PRODUCT_ONE = "A";
//     const PRODUCT_TWO = "B";
//     const PRODUCT_THREE = "C";

    // if (productName.toUpperCase() == PRODUCT_ONE) {
    //     price = 2000;
    // } else {
    //     if(productName == PRODUCT_TWO){
    //         price = 5000;
    //     }
    //     else{
    //         if(productName.toUpperCase() == PRODUCT_THREE){
    //             price = 7000;
    //         }
    //         else{
    //             alert("Introduce a value valid.")
    //         }
    //     }
    // }
    
    // alert(price);

//     switch (productName.toUpperCase()) {
//         case PRODUCT_ONE:
//             price = 2000;
//             break;
//         case PRODUCT_TWO:
//             price = 5000;
//             break;
//         case PRODUCT_THREE:
//             price = 7000;
//             break;
//         default:
//             alert("Introduce a value valid.");
//             break;
//     }

//     alert(price);
//     alert(Int1.NumberFormat().format(price));
    
// }

let switchFocus = interruptor => {
    let pic;

    // if (interruptor == 0){
    //     alert("OFF");
    // }else{
    //     alert("ON");
    // }

    let mensaje = (interruptor == 0) ? "OFF" : "ON"
    alert(mensaje)
}