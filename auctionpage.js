// Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyAmTb3-iVVqoGJX-MEFasQvPrz2934bPQ4",
    authDomain: "auctionpage-a52a4.firebaseapp.com",
    databaseURL: "https://auctionpage-a52a4-default-rtdb.firebaseio.com",
    projectId: "auctionpage-a52a4",
    storageBucket: "auctionpage-a52a4.appspot.com",
    messagingSenderId: "616346286964",
    appId: "1:616346286964:web:ea189d6b5fb2a091198a21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
  var playerid=101;
  var biddingpersonsname;
  var fid= localStorage.getItem("id");
  //alert(fid);
  function get() {
	//var playerid = document.getElementById('playerid').value;
	
	var user_ref = database.ref('PlayerInfo/' + playerid);
	user_ref.on('value', function(snapshot) {
		var data = snapshot.val();
		document.getElementById('playerpic').src=data.Pic;
		document.getElementById('PlayerRole').value = data.PlayerRole;
		document.getElementById('PlayerName').value = data.PlayerName;
		document.getElementById('IPLMatches').value= data.IPLMatches;
		document.getElementById('PlayerType').value= data.PlayerType;
		document.getElementById('BasePrice').value= data.BasePrice;
		//document.getElementById('Status').value= data.Status;
		document.getElementById('IPL2020Teams').value= data.IPL2020Teams;
		document.getElementById('AuctionedPrice').value= data.AuctionedPrice;
		document.getElementById('IPLTeams').value= data.IPLTeams; 
        document.getElementById('trackingbidding').value=data.BiddingTrack;
		});
  }
  function addBid(){
	  var user_ref = database.ref('FranchiseInfo/' + fid);
			user_ref.on('value', function(snapshot) {
				var data = snapshot.val();
				document.getElementById('trackingbidding').value= document.getElementById('trackingbidding').value + data.FranchiseName+" bidded 1 Lac \n";
				//alert(data.FranchiseName);
			});
	    var playerid= document.getElementById('playerid').value;
		  var AuctionedPrice = parseInt(document.getElementById('AuctionedPrice').value);
		  var BiddingTrack= document.getElementById('trackingbidding').value;
		  AuctionedPrice=AuctionedPrice+100000;
		  document.getElementById('AuctionedPrice').value=AuctionedPrice;
		  var updates = {
			AuctionedPrice:AuctionedPrice,
			BiddingTrack:BiddingTrack
		  }
		  database.ref('PlayerInfo/' + playerid).update(updates);
          get();
		  //alert("Updated");
  }
  function useRTM(){
	  alert("This Functionality will be added in the future");
  }
  function pass(){
    alert("Successfully Passed the bidding for this player. Wait until Player's bid is over");
  }
  const auth = firebase.auth();
  	const signOut = document.querySelector('#signOut');
	signOut.addEventListener('click', e => {
	  e.preventDefault();
	  auth.signOut();
    localStorage.removeItem("id");
	  document.location='loginpage.html';
	})
	
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
			if(playerid<111){
				playerid=playerid+1;
				document.getElementById('playerid').value=playerid;
				get();
			}
			else{
				alert("Auction Finished");
			}
        }
    };
    // we don't want to wait a full second before the timer starts	
	timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
	get();
    startTimer(fiveMinutes, display);
	//alert(now);
};