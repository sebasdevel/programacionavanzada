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

let student = () => {
    let studentName = "";
    let paramName = "NN"

    while(studentName.toUpperCase() != paramName){
        studentName = prompt("Enter student name");
        alert(`Your name is ${studentName}. Registered!`);
    }
}

student();