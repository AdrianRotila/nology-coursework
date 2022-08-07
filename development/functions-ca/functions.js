// **Challenges**

// 1. White a function to find the perimeter of a rectangle
const calculatePerimiter = (width, height) => {
    return width + width + height + height;
}

// 2. White a function to find the area of a circle. When given a radius, print the area to the console
const calculateArea = (radius) => {
    const area = Math.PI * radius * radius;
    return area;
}

 const smallArea = calculateArea(2);

 // 3. Now do the same to find the circumference of a circle...
 const calculateCircumference = (radius) =>{
    return 2 * Math.PI * radius;
 }