function wallPassword(){
var theanswer = wallprompt("ENTER THE PASSWORD");

var reply2answer = "";

if (theanswer == "password") {
  		reply2answer = "Welcome, Doc.";
        location.href = ("hallwayceo.html")	
  		}
  	 else if (theanswer == null) {
  		reply2answer = "Try again"
  	}
    else if (thenaswer !== "password"){
        reply2answer = "Try again"
    }
	alert(reply2answer);
}
