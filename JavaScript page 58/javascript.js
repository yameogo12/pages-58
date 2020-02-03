
function My_First_Function(){
	    var str = "This text is green!";
		var result = str.fontcolor("green");
		document.getElementById("Green_Text").innerHTML = result;
}

function displayDate(){
	     document.getElementById("The time is?").innerHTML = Date();
}

function myFunction(){
	     var sentence = "I am learning";
		 sentence+= " a lot from this book!";
		 document.getElementById("concatenate").innerHTML = sentence;
} 
 
 
 var foo = document.getElementsByTagName("p");