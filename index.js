document.addEventListener("DOMContentLoaded", function() {

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

});

function checkAlphaNumeric(string){
    if( /[^a-zA-Z0-9]/.test(string) ) {
       return true;
    }
    return false;     
}

function hasUpperCase(string) {
    return (/[A-Z]/.test(string));
}

function displayWarning(el, inputel1, inputel2) {
	el.style.display = 'block';
	inputel1.style.border = "2px solid rgb(236, 28, 35)";
	inputel2.style.border = "2px solid rgb(236, 28, 35)";
}


