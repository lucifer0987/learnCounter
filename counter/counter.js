var date = prompt("Please enter last date in this format.  'sep 5, 2020 10:00:00'", "sep 5, 2020 10:00:00");
    
if (date != null) {
    alert("You have entered " + date);
}
var dest = new Date(date).getTime();


var x = setInterval(function(){
	var now = new Date().getTime();
	var diff = dest - now;
	console.log(diff);

	//days left
	var days = Math.floor(diff/(60*60*24*1000));
	var hours = Math.floor((diff%(60*60*24*1000)) / (1000*60*60));
	var min = Math.floor((diff%(1000*60*60)) / (1000*60));
	var sec = Math.floor((diff%(60*1000)) / (1000));
	if(diff <= 0){
		document.getElementById("demo").innerHTML = "Time's up";
	}else if(diff > 0){
		document.getElementById("demo").innerHTML = days + " d, " + hours + " hrs, " 
		+ min + " min, " + sec + " s";
	}
	
}, 1000);

