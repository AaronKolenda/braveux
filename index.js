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
				warning.style.display = 'none';
				passwordWrap.style.border = "none";
				usernameWrap.style.border = "none";
				return true;
			}
			else {
				displayWarning(warning, passwordWrap, usernameWrap);
				return false;
			}

	    };

	    //The following toggles the menu to appear and disappear

		var menuImg = document.getElementsByClassName("menu-img");
		var menuOne = menuImg[0];
		var menuTwo = menuImg[1];
		console.log(menuOne, menuTwo);
	    var menu = document.getElementById("menu");

	    menuOne.onclick = function(){
	    	menu.style.display = 'block';
	    }

	    menuTwo.onclick = function(){
	    	menu.style.display = 'none';
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
	el.style.display = 'block';
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



