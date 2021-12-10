

let myFriends = ["Mohammed", "AbuMaher", "Rami", "Muhnnad"]
let counter = 0;

function showName(){

    document.getElementById("username").innerText = myFriends[counter]
    counter++;

    if(counter === myFriends.length){
        clearInterval()
    }

    
}

let Interval = setInterval(showName, 1000);

