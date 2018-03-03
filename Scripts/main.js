

$(function(){
	//$('div.alert-danger').text('Error'); 
	
	//JQuery to hid alerts 
	
	$('div.alert-danger').addClass('hidden'); 
	$('div.alert-warning').addClass('hidden'); 
	$('div.alert-success').addClass('hidden'); 
	
	$('#submit').click(function (){
		$('div.alert-danger').removeClass('hidden');
		
		$('input').each(function(){
		
			var formGroup =$(this).parents('.form-group'); 
			
			if(this.checkValidity()){
				formGroup.addClass('has-success').removeClass('has-error'); 
				
			}else{
				formGroup.addClass('has-error').removeClass('has-success'); 
				
			}
			
			
			
			
		})
		
		
	})
	
})

