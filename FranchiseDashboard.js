 var firebaseConfig = {
    apiKey: "AIzaSyAmTb3-iVVqoGJX-MEFasQvPrz2934bPQ4",
    authDomain: "auctionpage-a52a4.firebaseapp.com",
    databaseURL: "https://auctionpage-a52a4-default-rtdb.firebaseio.com",
    projectId: "auctionpage-a52a4",
    storageBucket: "auctionpage-a52a4.appspot.com",
    messagingSenderId: "616346286964",
    appId: "1:616346286964:web:c302051bd7a9a05c198a21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

	var id= localStorage.getItem("id");
	//alert(id);
	 var database = firebase.database();
  function get() {
	//var playerid = document.getElementById('playerid').value;
	var user_ref = database.ref('FranchiseInfo/' + id);
	user_ref.on('value', function(snapshot) {
		var data = snapshot.val();
		document.getElementById('Logo').src=data.Logo;
		document.getElementById('FranchiseName').value = data.FranchiseName;
		document.getElementById('EmailID').value = data.EmailID;
		document.getElementById('Owners').value= data.Owners;
		document.getElementById('Coaches').value= data.Coaches;
		document.getElementById('RTMCards').value= data.RTMCards;
		//document.getElementById('Status').value= data.Status;
		document.getElementById('Budget').value= data.Budget;
		});
  }
  function loadAuction(){
	localStorage.setItem("id", id);

  }
  	const signOut = document.querySelector('#signOut');
	signOut.addEventListener('click', e => {
	  e.preventDefault();
	  auth.signOut();
	  localStorage.removeItem("id");
	  document.location='loginpage.html';
	});