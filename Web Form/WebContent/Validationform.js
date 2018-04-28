function check_info(){
		
		var firstname=document.getElementById("firstname").value;
		var lastname=document.getElementById('lastname').value;
		var email=document.getElementById('email').value;
		
		if(firstname =="" || lastname=="" || email==""){
			alert('Please fill in all fields');
			return false;
		}
		else
			return true;
		
	}