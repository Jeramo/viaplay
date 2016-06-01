var clicked;
var isClicked= [];
var isRead;
var isClosed;
var i;

var arrRead = [];
var arrClosed = [];
var arrHasBeenRead = [];
var arrBtnClosed = [];

$(function() {

	    var url = 'http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json';
		
	    $.getJSON(url, function(data) {

			//Lägger över data från JSON-filen så den kan ses i HTML-format.
			var text = "<br/>Actors: " + data.Actors + "<br/><br/>" + "IMDB-rating: " + data.imdbRating +
			"<br/><br/>" + "Runtime: " + data.Runtime;

			document.getElementById("actors").innerHTML = text;
			document.getElementById("movieInfo").innerHTML = data.Plot;

			});
		
		
		});

var close = document.getElementsByClassName("closebtn");
var expand = document.getElementsByClassName("seen");

arrRead = JSON.parse(localStorage.getItem("arr"));
arrClosed = JSON.parse(localStorage.getItem("arrClose"));

if(arrRead != null){
	arrHasBeenRead = arrRead;	
}

if(arrClosed != null){
	arrBtnClosed = arrClosed;	
}



if(arrRead != null){
	for(var c = 0; c < arrRead.length; c++){
	if(arrRead[c] == true){
	var div = document.getElementsByClassName("notification");
	div[c].style.backgroundColor="#4CAF50";

}else{
	console.log(c + " är NULL.")
}
}
}

if(arrClosed != null){
	for(var c = 0; c < arrClosed.length; c++){
	if(arrClosed[c] == true){
		console.log(arrClosed);
	var div = document.getElementsByClassName("notification");
	div[c].style.opacity = "0";
	div[c].style.display = "none"; 

}else{
	console.log(c + " är NULL.")
}
}
}

function removeStorage(){
	localStorage.removeItem("arr");
	localStorage.removeItem("arrClose");
	alert("Resetting...");
	location.reload();
}


function goToGit(){
	window.location.href = "https://github.com/Jeramo/viaplay"
}

//CLOSE-KNAPP
for (i = 0; i < close.length; i++)(function(i)  {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
		
        setTimeout(function(){
		div.style.display = "none"; 
			}, 300);
			
		isClosed = true;		
	    arrBtnClosed[i] = isClosed;
	 
		localStorage.setItem("arrClose", JSON.stringify(arrBtnClosed));
	    arrClosed = JSON.parse(localStorage.getItem("arrClose"));
		console.log(arrClosed);

		

    }
})(i);

//EXPAND-KNAPP
for (i = 0; i < expand.length; i++)(function(i) {
		
		expand[i].onclick = function(){
		
		var div = this.parentElement;
		var divChild = this.parentElement.childNodes[7];
		var divExpand = this.parentElement.children[1];

		
		
		if(isClicked[i] == true){
			
			divChild.style.display="none";
			divExpand.innerHTML = "Expand";
			clicked = false;
			
		}else{
		
		clicked = true;
		isRead = true;
     
			divChild.style.display="inherit";
			div.style.backgroundColor="#4CAF50";
			divExpand.innerHTML = "Minimize";
		
		}
		
		
	  isClicked[i] = clicked;
	  arrHasBeenRead[i] = isRead;

	  localStorage.setItem("arr", JSON.stringify(arrHasBeenRead));
	  arrRead = JSON.parse(localStorage.getItem("arr"));
       console.log(arrRead);

	  
    }
		

})(i);

