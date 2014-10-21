var validUsers = [["prasanna","1234"],["lakshmi","1234"],["rvignesh","1234"]], formObj = document.logIn;
function signIn()
{
	//validatePassword();
	var isValidUser = validateUser();
	if(isValidUser)
	{
		//window.location = ""; redirect him to next page
		console.log("Valid User...");
	}
	else
	{
		alert("Please enter a valid username and password")
	}
}

function validateUsername()
{
	var validKeyRegex = /[a-zA-Z0-9]$/;
	if(!(validKeyRegex.test(formObj.userName.value)))
	{
		alert("Username can only be alphanumeric. Special characters are not allowed...");
		formObj.userName.value = "";
	}
	else if(formObj.userName.value.length > 8)
	{
		alert("Username cannot be more than 8 characters.");
		formObj.userName.value = "";
	}
}

function validateUser()
{
	var validUser = false;
	for(var count = 0; count < validUsers.length; count++)
	{
		if(validUsers[count][0] === formObj.userName.value  && validUsers[count][1] === formObj.password.value)
		{
			validUser = true;
			break;
		}
	}
	return validUser;
}