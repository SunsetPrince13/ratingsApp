var ratings = document.getElementsByClassName("ratings");
var commentSection = document.querySelector("#comment");
var feedbackMenu = document.querySelector(".thankFeedback");
var ratingsMenu = document.querySelector(".ratingsMenu");
var submit_btn = document.querySelector(".submit");
var skip_btn = document.querySelector(".skip");

let comments = {
    "1":"Poor 👎",
    "2":"Didn't impress me 🥱",
    "3":"Average 😑",
    "4":"Good, but not the best 👌",
    "5":"Superb 🥳",
}

for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener("click", () => {
        console.log(ratings[i].id)
        for (let x = 0; x < ratings.length; x++) {
            ratings[x].checked = false;
            
        }
        for (let x = 0; x < ratings[i].id; x++) {
            ratings[x].checked = true;
            
        }
        commentSection.textContent = comments[i+1];
    })
    
}

submit_btn.addEventListener("click", () => {
    console.log("button clicked");
    feedbackMenu.style.display = "block";
    ratingsMenu.style.display = "none";
})

skip_btn.addEventListener("click", () => {
    console.log("button clicked");
    feedbackMenu.style.display = "none";
    ratingsMenu.style.display = "none";
})