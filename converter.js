var button1=document.getElementById("converter");

button1.addEventListener("click", determineConverter);

var button2=document.getElementById("clear");
button2.addEventListener("click", resetForm);

x=document.getElementById("temp");


x.addEventListener('keyup', event);

 
 function event(q){

  //check to see if the enter key was pressed
  if (q.which === 13) {
    determineConverter();
  }
 }


function toCelsius (T) 
{
	console.log("in celcius function",T);

	var C = Math.round((T - 32)/1.8,2);
   if ( C > 32)
  {
     document.getElementById("demo").innerHTML = "<font color=red>The temperature is " + C + " degrees celcius</font>";
  } 
  else if ( C < 0)
  {
      document.getElementById("demo").innerHTML = "<font color=blue>The temperature is " + C + " degrees celcius</font>";
  }
  else
  {
    document.getElementById("demo").innerHTML = "<font color=green>The temperature is " + C + " degrees celcius</font>";
  }
	
}

function toFahrenheit (T)
 {
	console.log("in fah function",T);

	var F = Math.round(T*1.8 + 32,2);
  if ( F > 90)
  {
	   document.getElementById("demo").innerHTML = "<font color=red>The temperature is " + F + " degrees fahrenheit</font>";
  } else if (F < 32)
  {
    document.getElementById("demo").innerHTML = "<font color=blue>The temperature is " + F +" degrees fahrenheit</font>";
  }
  else
  {
      document.getElementById("demo").innerHTML = "<font color=green>The temperature is " + F + " degrees fahrenheit</font>";
  }

}

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

  	} else if (document.getElementById("cel").checked)
  	{
    	console.log("celcius checked");
    	toCelsius(temperature);
    } else
    {
      alert("You need to select one of the radio buttons");
      
    }
}

function resetForm()
{
  document.getElementById("temp").value = "";
  document.getElementById("demo").innerHTML="";
}


