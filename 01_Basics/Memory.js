let myYoutubename = "sudeshgoredotcom"

let anothername = myYoutubename // copy of "myYoutubename" get stored in "anothername"

anothername = "Altname" // updating value of "anothername"

console.log(myYoutubename); // sudeshgoredotcom
console.log(anothername); // return "Altname"


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sudeshgore@gmail.com"

console.log(userOne);
console.log(userTwo);

/* 
    Get stored in heap and userOne and userTwo points to following
     {
        email: "user@google.com",
        upi: "user@ybl"
    }

    if we make changes userOne or userTwo then it will reflect in both.
*/
