var button=document.getElementById("converter");

button.addEventListener("click", determineConverter);


function toCelsius (T) 
{
	console.log("in celcius function",T);

	var C = (T - 32)/1.8;
	document.getElementById("demo").innerHTML = "The temperature is " + C;
}

function toFahrenheit (T)
 {
	console.log("in fah function",T);

	var F = T*1.8 + 32;
	document.getElementById("demo").innerHTML = "The temperature is " + F;

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () 
{
	var temperature=document.getElementById("temp").value;
 	// console.log("event", clickEvent);
  	if (document.getElementById("fah").checked)
  	{
  		console.log("fah checked");
  	
  		toFahrenheit(temperature);

  	} else
  	{
  	console.log("celcius checked");
  	toCelsius(temperature);
  }
}


