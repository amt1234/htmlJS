<input type="text" id="userInput" >
<button onclick="myFunction()" > click here</button>
function myFunction()
{
var text;
var input=document.getElementById("userInput").value;
document.write(input);
switch(input)
{
	case 1:
		document.write("Banana");
	break;
	case 2:
	 	document.write("Apple");
	break;
	case 3:
	 	document.write("Mango");
	break;
	default:
		document.write("Invalid choice");	
}
}
