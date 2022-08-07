// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title
// Output your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids.
// Call that function 3 times with different values fot the arguments.

const getDescription = (partner, amountOfChildren, location, jobTitle) => {
    const message = "I'm currently a " + jobTitle + " living in " + location  + ", and maried to " + partner + " with " + amountOfChildren + "kids";
    console.log(message)
}

getDescription("Jane", 2, "London", "Software Coach")

// **The Lifetime Supply of Snickers**

// Ever wonder how much a lifetime supply of Snickers would acutally be? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of your life (based on a constant max age).
// outputs the result to the console like so: "You will need X to last you until ripe old age of Y"
// Call that funtion three times, assign in different values each time.
// Bonus: Accept floating point values for the amount per day, and round the result to a round number.

const calculateSupply = (currentAge, amountOfSnickersPerDay) => {
    const maxAge = 90;
    const amountOfSnickersPerLifetime = (amountOfSnickersPerDay * 365) * (maxAge - currentAge);
    const message = 'You will need ' + amountOfSnickersPerLifetime + ' bars of Snickers to last you until the ripe old age of ' + maxAge;
    console.log(message);
}

calculateSupply(28, 4);
calculateSupply(28, 2.5);
calculateSupply(28, 12);

// **The Temperature Converter **
// It's hot out! Not. Let's make a celsius/farenheit converter..

const celsiusToFarenheit = (celsius) => {
    const celsiusInFarenheit = (celsius * 9) / 5 + 32;
    console.log(celsius + '°C is ' + celsiusInFarenheit + '°F')
}

celsiusToFarenheit(21);

// **The Puppy Age Calculator**
// You know how old your dog is in human years, but what about dod years? Calculate it!
const calculatePuppyAge = (humanAge) =>{
    const dogAge = humanAge * 7;
    console.log('Your dog is ' + dogAge + ' years old in dog years!!!')
}

calculatePuppyAge(2);
calculatePuppyAge(6);
calculatePuppyAge(10);