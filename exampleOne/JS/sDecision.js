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
