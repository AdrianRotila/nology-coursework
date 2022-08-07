// Positive or Negative Checker
function handleNumberChecker(event) {
    let number = event.target.value;
    if(number > 0){
        alert("It is positive!")
    } else if(number == 0){
        alert("It is null")
    } else {
        alert("It is negative")
    }
}


// Days left until weekend
function weekendCountdown(event) {
    let getDay = event.target.value;
    switch(getDay) {
        case "Sunday":
            alert("It is weekend already!")
            break;
        case "Monday":
            alert("4 days")
            break;
        case "Tuesday":
            alert("3 days")
            break;
        case "Wednesday":
            alert("2 days")
            break;
        case "Thursday":
            alert("1 days")
            break;
        case  "Friday":
            alert("No days left")
            break;
        case "Saturday":
            alert("It is weekend!")
            break;   
    }
}


// Switch case for vegetable prices
function vegetablePrices(event) {
    let vegetable = event.target.value;;
    switch(vegetable) {
        case "potato":
        case "carrot":
            alert("2.45£/kg")
            break;
        case "brocolli":
            alert("0.99£/kg")
            break;
        case "cabbage":
            alert("asparagus")
            break;
    }
}
