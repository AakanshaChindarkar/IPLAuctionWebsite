 var firebaseConfig = {
    apiKey: "AIzaSyAmTb3-iVVqoGJX-MEFasQvPrz2934bPQ4",
    authDomain: "auctionpage-a52a4.firebaseapp.com",
    databaseURL: "https://auctionpage-a52a4-default-rtdb.firebaseio.com",
    projectId: "auctionpage-a52a4",
    storageBucket: "auctionpage-a52a4.appspot.com",
    messagingSenderId: "616346286964",
    appId: "1:616346286964:web:c91aab2c33d99e25198a21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function LogIn(){	
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert("Enter Valid Information"));

	auth.onAuthStateChanged(function(user){	
		if(user){
			var id = document.getElementById("franchiseid").value;
			sessionStorage.clear();
			sessionStorage.setItem("id", id);
			document.location='FranchiseDashboard.html';
		}
		else{
			document.getElementById('email').value = '';
			document.getElementById('password').value = '';
			document.getElementById("franchiseid").value='';
		}		
	});
  }
	