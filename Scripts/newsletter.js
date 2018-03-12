//Change Newsletter Option (YES or NO) 

$('.dropdown-inverse li > a').click(function(e){
	$('.status').text(this.innerHTML); 
}); 