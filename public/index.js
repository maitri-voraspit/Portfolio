

window.transitionToPage = function(href) {
	document.querySelector('body').style.opacity = 0
	setTimeout(function() { 
			window.location.href = href
	}, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
	document.querySelector('body').style.opacity = 1
})
var adjTab =["responsive", "creative","dynamic", "extrovert","stupid"];
var i = 0;
window.onload =function crazy()
{
	
	document.getElementById("adj").innerHTML= adjTab[i];
	setTimeout ("Recur()", 1000);
};

function Recur()
{
  i++
	if( i == 5 )
		i = 0;
  	document.getElementById("adj").innerHTML= adjTab[i];
  setTimeout ("Recur()", 1000);
}




