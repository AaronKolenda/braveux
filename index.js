document.addEventListener("DOMContentLoaded", function() {

  	//The following function validates the username and password input

  	var login = document.getElementById("login");
	login.onclick = function(){

	        var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			var warning = document.getElementById("warning");
			var passwordWrap = document.getElementById("password-wrap");
			var usernameWrap = document.getElementById("username-wrap");

			var nonAlphaNumeric = checkAlphaNumeric(password);
			var capital = hasUpperCase(password);
			var sixChars = false;

			if (password.length >= 6) {
				sixChars = true;
			}

			if (nonAlphaNumeric === true && capital === true && sixChars === true && username.length > 0) {
				//Use the following if you want the div to reappear instead of transition:
				//warning.style.display = 'none';
				//otherwise use fadeOut(warning);
				fadeOut(warning);
				passwordWrap.style.border = "none";
				usernameWrap.style.border = "none";
				return true;
			}
			else {
				displayWarning(warning, passwordWrap, usernameWrap);
				return false;
			}

	    };

	    //The following toggles the menu in and out

		var menuImg = document.getElementsByClassName("menu-img");
		var menuOne = menuImg[0];
		var menuTwo = menuImg[1];
		console.log(menuOne, menuTwo);
	    var menu = document.getElementById("menu");

	    menuOne.onclick = function(){
	    	//Use the following if you want the div to reappear instead of transition:
	    	//menu.style.display = 'block';
	    	//otherwise use menu.style.marginLeft = '40%';:
	    	menu.style.marginLeft = '40%';
	    }

	    menuTwo.onclick = function(){
	    	//Use the following if you want the div to disappear instead of transition:
	    	//menu.style.display = 'none';
	    	//otherwise use menu.style.marginLeft = '105%';:
	    	menu.style.marginLeft = '105%';
	    }

	    //The following toggles the password input type from password to text when the eye is clicked

	    var eye = document.getElementById("eye");
	    eye.onclick = function(){
	    	togglePasswordFieldClicked();
	    }
});

//This function checks if a string has an alphanumeric character, and returns true if it does

function checkAlphaNumeric(string){
    if( /[^a-zA-Z0-9]/.test(string) ) {
       return true;
    }
    return false;     
}

//This function checks if a string has an uppercase character, and returns true if it does

function hasUpperCase(string) {
    return (/[A-Z]/.test(string));
}

//This function displays the warning error div, 
//notifying the user that their username or password isn't valid

function displayWarning(el, inputel1, inputel2) {
	//el.style.display = 'block'; - Use this if not using transitions, otherwise use slideDown(el)
	slideDown(el);
	inputel1.style.border = "2px solid rgb(236, 28, 35)";
	inputel2.style.border = "2px solid rgb(236, 28, 35)";
}

//This function toggles the password input type between password and text

function togglePasswordFieldClicked() {
    var passwordField = document.getElementById('password');
    var value = passwordField.value;

    if(passwordField.type == 'password') {
        passwordField.type = 'text';
    }

    else {
        passwordField.type = 'password';
    }
    passwordField.value = value;
}

//This function makes the warning div slide down into place

function slideDown(el) {
	el.style.top = "53px";
}

//This function makes the warning div fade out after validation of username/password is met

function fadeOut(el) {
	el.style.opacity = "0";
	timeoutID = window.setTimeout(function(){resetWarning(el)}, 1000);
}

/*The next two functions are timed to reset the warning div to it's original place
after the username/password validation is met, so it can slide back down again
if the user enters invalid info a second time.*/

function resetWarning(el) {
	el.style.top = "-57px";
	timeoutIDW = window.setTimeout(function(){resetOpacity(el)}, 1000);
}

function resetOpacity(el) {
	el.style.opacity = "1";
}



