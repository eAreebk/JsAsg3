/*Create a program that prompts the user to enter the current temperature in Celsius. Use an if statement to check if the
temperature is above 30 degrees. If true, display an alert saying"It'sa hot day!" 
If false, display an alert saying "The weather is moderate."*/

var temp = +prompt("Please Enter Temperature in celsius", "30");

if(temp>30){
    alert("It's a hot day, stay hydrated.");
}

else{
    alert("The Weather is Moderate, live every moment.")
}

