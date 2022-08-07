function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    // Start your code here ..
    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

//Translate hello and goodbye into french for users
// if it is neither of these, alert 'not recognuised'

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if(greeting == "Hello") {
        alert('Bonjour')
    } else if(greeting == "Goodbye") {
        alert ('Au revoir')
    } else {
        alert('not recognised')
    }
}
