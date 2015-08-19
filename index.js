document.addEventListener("DOMContentLoaded", function() {
  var login = document.getElementById("login");

	login.onclick = function(){

	        var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			var warning = document.getElementById("warning");
			var passwordWrap = document.getElementById("password-wrap");
			var usernameWrap = document.getElementById("username-wrap");

			if (username.length <= 0) {
				warning.style.display = 'block';
				console.log(warning);
				passwordWrap.style.border = "2px solid rgb(236, 28, 35)";
				usernameWrap.style.border = "2px solid rgb(236, 28, 35)";
			}

	        return false;
	    };
});


