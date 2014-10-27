var userDetailsArray=new Array();

function UserDetails(name,age,phone,email,address,dataURL)
{
this.name=name;
this.age=age;
this.phone=phone;
this.email=email;
this.address=address;
this.dataURL=dataURL;
}
var formObj= document.ProfilePageForm;
function checkUserName()
{
var validUserRegx=/[a-zA-Z]$/,
	isValidUserName=true;
	if((formObj.userName.value==""))
	{
		isValidUserName=false; 
	}
	else
	{
			if(validUserRegx.test(formObj.userName.value))
			{
				if(formObj.userName.value.length >= 50)
				{
				alert("Max characters allowed for name is only 50. Please retype your name");
				formObj.userName.value="";
				formObj.userName.focus();
				isValidUserName=false; 
				}
			}
			else
			{
			alert("Please enter a valid name");
			formObj.userName.value="";
			formObj.userName.focus();
			isValidUserName=false;
			}
	}
return isValidUserName;
}
function checkAge()
{
var validAgeRegx=/[0-9]$/,
	isAgeValid=true;
	if(formObj.age.value)
	{
		if(validAgeRegx.test(formObj.age.value))
		{
			if((formObj.age.value<=0) ||(formObj.age.value>=100))
			{
				alert("Age cannot be "+formObj.age.value+". Please enter a valid age.");
				formObj.age.value="";
				formObj.age.focus();
				isAgeValid=false
			}
		}
		else
		{
			alert("Age can have only numbers.");
			formObj.age.value="";
			formObj.age.focus();
			isAgeValid=false;
		}
	}
return isAgeValid;
}
function checkPhoneNumber()
{
var validPhoneRegX=/[0-9]$/
	isPhoneNoValid=true;
	if(formObj.phone.value=="")
	{
	isPhoneNoValid=false;
	}
	else
	{
		if(validPhoneRegX.test(formObj.phone.value))
		{
			if((formObj.phone.value.length >10))
			{
			alert("Phone numbers should have 10 digits. Please enter a valid phone number");
			formObj.phone.value=""
			formObj.phone.focus();
			isPhoneNoValid=false;
			}
		}
		else
		{
		alert("Phone number can have only numerals");
		formObj.phone.value=""
		formObj.phone.focus();
		isPhoneNoValid=false;
		}
	}
return isPhoneNoValid;
}

function saveUserDetails()
{
	var name=formObj.userName.value,
		age=formObj.age.value,
		phone=formObj.phone.value,
		email=formObj.email.value,
		address=formObj.address.value;
if(checkUserName() && checkAge() && checkPhoneNumber() && checkEmail())
{
var output = document.getElementById('output');
     var dataURL=output.src;
	  var data=dataURL.split("base64,")[1];
	  
	var obj = new UserDetails(name,age,phone,email,address,data);
	userDetailsArray.push(obj);
	alert("User Profile Details saved successfully "+ obj["name"]);
	document.getElementById("ProfilePageForm").reset();
	

}
else
{
alert("Please enter the mandatory details");
}
}
var openFile = function(event)
{
    var input = event.target;
	var dataURL;

    var reader = new FileReader();
    reader.onload = function(){
	
	  dataURL = reader.result;
	  
	 
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
function checkEmail()
{
var isEmailValid=true;
	if(formObj.email.value=="")
	{
	isEmailValid=false;
	}
	else
	{
			if(formObj.email.value.indexOf("@")==-1)
			{
			alert("Please enter a valid email address");
			isEmailValid=false;
			formObj.email.value=""
			formObj.email.focus();
			}
	}
	return isEmailValid;
}