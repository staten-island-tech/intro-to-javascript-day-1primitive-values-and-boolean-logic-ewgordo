
// Assessment 1
let color= "green";

if (color === "green") {
    console.log ("go");
} else if (color === "yellow") {
    console.log ("caution");
}else if (color === "red") {
    console.log ("stop");
} else {
    console.log("no");
}


// Assessment 2
let Kristy = "lactose intolerant";
let BaoBao = "lactose intolerant";

if (Kristy === "lactose intolerant" &&  BaoBao === "non lactose intolerant") {
    console.log ("milk and almond milk");
} else if (Kristy === "non lactose intolerant" &&  BaoBao === "lactose intolerant") {
    console.log ("milk and almond milk");
} else if (Kristy === "lactose intolerant" &&  BaoBao === "lactose intolerant") {
    console.log ("almond milk only");
} else {
    console.log("milk only");
}


// Assessment 3
let temperature = 69

if (temperature < 68) {
    console.log ("too cold");
}else if (temperature >= 68 && temperature < 72) {
    console.log ("perfect");
}else if (temperature >= 73 && temperature < 76) {
    console.log ("warm");
}else if (temperature > 76) {
    console.log ("too hot");
}


/////Day 2

// Assessment 1

let students = [
    "Riya", 
    "Omor", 
    "Alan", 
    "Jaiyu", 
    "Michael", 
    "Lisa", 
    "Richard"];

const filtered = students.filter(students => students.length < 5);
console.log(filtered);

// Assessment 2

const checkJunshen = students.includes("Junshen");
console.log (checkJunshen);

function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
      return val === arrVal;
    });
  }
  
  checkAvailability(students, "Alan"); 
  checkAvailability(students, "Savva");