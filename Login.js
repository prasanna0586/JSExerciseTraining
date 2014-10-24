var validUsers = [["prasanna","123456"],["lakshmi","123456"],["rvignesh","123456"]], formObj = document.logIn;
function signIn()
{
	if(validateUsername() && validatePassword())
	{
		var isValidUser = validateUser();
		if(isValidUser)
		{
			return true;
		}
		else
		{
			alert("Please enter a valid username and password");
			return false;
		}
	}
	else
	{
		return false;
	}
}

function validateUsername()
{
	var validKeyRegex = /[a-zA-Z0-9]$/;
	var isValidUserName = true;
	if(formObj.userName.value.length === 0)
	{
		alert("Username cannot be empty.");
		formObj.userName.value = "";
		isValidUserName = false;
	}
	else if(!(validKeyRegex.test(formObj.userName.value)))
	{
		alert("Username can only be alphanumeric. Special characters are not allowed...");
		formObj.userName.value = "";
		isValidUserName = false;
	}
	else if(formObj.userName.value.length > 8)
	{
		alert("Username cannot be more than 8 characters.");
		isValidUserName = false;
	}
	return isValidUserName;
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

function validatePassword()
{
	var isValidPassword = true;
	if(formObj.password.value.length < 6)
	{
		alert("Password cannot be less than 6 characters.");
		formObj.password.value = "";
		isValidPassword = false;
	}
	return isValidPassword;
}