function sum(){
    // Reiceve the data

    let nOne = parseInt(document.getElementById("nOne").value);
    let nTwo = parseInt(document.getElementById("nTwo").value);
    let result;

    // Process the data

    result = parseInt(nOne + nTwo);

    // Deliver the results
    
    document.getElementById("resultOperation").innerHTML = result;
}

function rest() {
    // Reiceve the data

    let nOne = parseInt(document.getElementById("nOne").value);
    let nTwo = parseInt(document.getElementById("nTwo").value);
    let result;

    // Process the data

    result = parseInt(nOne - nTwo);

    // Deliver the results

    document.getElementById("resultOperation").innerHTML = result;
}

function mult(){
    // Reiceve the data

    let nOne = parseInt(document.getElementById("nOne").value);
    let nTwo = parseInt(document.getElementById("nTwo").value);
    let result;

    // Process the data

    result = parseInt(nOne * nTwo);

    // Deliver the results

    document.getElementById("resultOperation").innerHTML = result;
}

function division() {
    // Reiceve the data

    let nOne = parseInt(document.getElementById("nOne").value);
    let nTwo = parseInt(document.getElementById("nTwo").value);
    let result;

    // Process the data

    result = parseInt(nOne / nTwo);

    // Deliver the results

    document.getElementById("resultOperation").innerHTML = result;
}

function areaTriangle(){
    let base = parseInt(document.getElementById("base").value);
    let height = parseInt(document.getElementById("height").value);
    let resultArea;

    resultArea = parseInt(base * height)/2;

    document.getElementById("resultAreaTriangle").innerHTML = resultArea;
}

function areaCircle() {
    let radio = parseInt(document.getElementById("radio").value);
    let resultArea;

    resultArea = parseFloat(Math.PI * radio * radio);

    document.getElementById("resultAreaCircle").innerHTML = resultArea;
}