// for (let people = 1; people <= 3; people++) {
//     let age = prompt("Enter age:");

//     let ageParameter = 18;

//     let message = age >= ageParameter ? "You're adult" : "Younger";

//     alert(message)
// }

// let cars = ["Subaru", "Renault", "Mitsubichi", "Honda"]

// for (let i = 0; i < cars.length; i++) {
//     const viewCars = `${cars[i]}<br>`;
//     document.write(viewCars);
// }

// document.write(`<br>${cars[2]}`);

// let student = () => {
//     let studentName = "";
//     let paramName = "NN"

//     while(studentName.toUpperCase() != paramName){
//         studentName = prompt("Enter student name");
//         alert(`Your name is ${studentName}. Registered!`);
//     }
// }

// student();

let people = () => {
    let age = 0, paramAge = 0
    let count = -1
    let totalAge = 0, averangeAge = 0

    do {
        age = parseInt(prompt('Enter age: '));

        if(age <= 18){
            alert("I'm sorry. You're younger!")
        }else{
            alert("Welcome!")
        }

        count++;

        // totalAge = totalAge + age;
        totalAge+= age;

    } while(age != paramAge);

    averangeAge = parseInt(totalAge / count);

    console.log(`Cant: ${count} / Total age: ${totalAge} / Prom: ${averangeAge}`)
}

people();