const questions = [
    {
        question: "Which is longest river in the world",
        options: {
            a: "Amazon",
            b: "Nile",
            c: "Ganges",
            d: "Hudson"
        },
        visited: false,
        answered: false,
        review: false,
        correctOption: "b",
        userAns: "",
        scored: false
    },
    {
        question: "Which is largest river in the world",
        options: {
            a: "Amazon",
            b: "Nile",
            c: "Ganges",
            d: "Hudson"
        },
        visited: false,
        answered: false,
        review: false,
        correctOption: "a",
        userAns: "",
        scored: false
    },
    {
        question: "Who is main lead of Movie Top Gun",
        options: {
            a: "Christian Bale",
            b: "Jason Stathom",
            c: "Tom Cruise",
            d: "Will smith"
        },
        visited: false,
        answered: false,
        review: false,
        correctOption: "c",
        userAns: "",
        scored: false
    }
]

let score = 0;
let qNo = 0;
// const marker = document.querySelector(`#q${qNo}`)
const prev = document.querySelector("#prev")
const review = document.querySelector("#markForReview")
const save = document.querySelector("#saveAndNext")
const pelletque = document.querySelectorAll(".que")
const viewedQuestion = document.querySelector("#viewedQuestion")
const optionA = document.querySelector("#optionA")
const optionB = document.querySelector("#optionB")
const optionC = document.querySelector("#optionC")
const optionD = document.querySelector("#optionD")
const user = document.querySelector("#user")

if (localStorage.getItem("userName")!=null){ user.innerHTML = JSON.parse(JSON.parse(localStorage.getItem("userName")))} //shows name of the user who logged in
else (user.innnerHTML = "Random User") //should not come in full app test
console.log(JSON.parse(JSON.parse(localStorage.getItem("userName"))))

optionA.addEventListener("click", () => {
    if (questions[qNo].userAns != "a") {        //if answer is a it already has
        questions[qNo].userAns = "a";           //color green, if not it will change    
        optionA.style.backgroundColor = "green"     //it to green
        optionB.style.backgroundColor = "bisque"
        optionC.style.backgroundColor = "bisque"
        optionD.style.backgroundColor = "bisque"
      
    }
    else {
        questions[qNo].userAns = "";            // if same option is clicked again
        optionA.style.backgroundColor = "bisque"
        if(questions[qNo].correctOption==a){score-=1}
        questions[qNo].scored = false;
    }

})

optionB.addEventListener("click", () => {
    if (questions[qNo].userAns != "b") {
        questions[qNo].userAns = "b";
        optionA.style.backgroundColor = "bisque"
        optionB.style.backgroundColor = "green"
        optionC.style.backgroundColor = "bisque"
        optionD.style.backgroundColor = "bisque"
       
    }
    else {
        questions[qNo].userAns = "";
        optionB.style.backgroundColor = "bisque"
        if(questions[qNo].correctOption==b){score-=1}
        questions[qNo].scored = false;
    }
})





optionC.addEventListener("click", () => {
    if (questions[qNo].userAns != "c") {
        questions[qNo].userAns = "c";
        optionA.style.backgroundColor = "bisque"
        optionB.style.backgroundColor = "bisque"
        optionC.style.backgroundColor = "green"
        optionD.style.backgroundColor = "bisque"
      
    }
    else {
        questions[qNo].userAns = "";
        optionC.style.backgroundColor = "bisque"
        if(questions[qNo].correctOption==c){score-=1}
        questions[qNo].scored = false;
    }
})

optionD.addEventListener("click", () => {
    if (questions[qNo].userAns != "d") {
        questions[qNo].userAns = "d";
        optionA.style.backgroundColor = "bisque"
        optionB.style.backgroundColor = "bisque"
        optionC.style.backgroundColor = "bisque"
        optionD.style.backgroundColor = "green"
       
    }
    else {
        questions[qNo].userAns = "";
        optionD.style.backgroundColor = "bisque"
        if(questions[qNo].correctOption==d){score-=1}
        questions[qNo].scored = false;
    }
})

function loadNextQuestion(qNo) {

    viewedQuestion.innerHTML = questions[qNo].question  //to load new question 
    // console.log(questions)                              //and its options
    optionA.innerHTML = questions[qNo].options.a
    optionB.innerHTML = questions[qNo].options.b
    optionC.innerHTML = questions[qNo].options.c
    optionD.innerHTML = questions[qNo].options.d
    optionA.style.backgroundColor = "bisque"
    optionB.style.backgroundColor = "bisque"
    optionC.style.backgroundColor = "bisque"
    optionD.style.backgroundColor = "bisque"
}
loadNextQuestion(qNo);    //first load of question, which is at 0th index

save.addEventListener("click", () => {
    console.log(pelletque)
    if (questions[qNo].userAns != "") {       //it means answer is given
        pelletque[qNo].style.backgroundColor = "green"
        questions[qNo].visited = true
        questions[qNo].answered = true
        if (questions[qNo].userAns == questions[qNo].correctOption && questions[qNo].scored == false) {
            score += 1;
            questions[qNo].scored = true;
        }
        if (qNo == 2) alert("Last Question")         // last question then set question to first
        else {qNo += 1;             //next question
        loadNextQuestion(qNo);}   // nex question is loaded by save button
    }
    else {
        pelletque[qNo].style.backgroundColor = "purple"  //when anser is not given
        questions[qNo].visited = true               //question is visited
        if (qNo == 2) alert("Last Question")
        else {qNo += 1;
        loadNextQuestion(qNo);}
    }
})

/*------------------------------------------------------------*/

prev.addEventListener("click", () => {

    if (questions[qNo].userAns != "") {       //it means answer is given
        pelletque[qNo].style.backgroundColor = "green"
        questions[qNo].visited = true
        questions[qNo].answered = true
        if (questions[qNo].userAns == questions[qNo].correctOption && questions[qNo].scored == false) {
            score += 1;
            questions[qNo].scored = true;
        }
        if (qNo == 0) alert("First Question")        // first question then set question to lastfirst
        else {qNo -= 1;             //prev question
        loadNextQuestion(qNo);}   // prev question is loaded by prev button
    }
    else {
        pelletque[qNo].style.backgroundColor = "purple"  //when anser is not given
        questions[qNo].visited = true               //question is visited
        if (qNo == 0) alert("First Question")
        else {qNo -= 1;
        loadNextQuestion(qNo);}
    }
})
/*---------------------------------------------------------------------------------*/

review.addEventListener("click", () => {
    if (questions[qNo].userAns != "") {       //it means answer is given
        pelletque[qNo].style.backgroundColor = "magenta"
        questions[qNo].visited = true
        questions[qNo].answered = true
        if (questions[qNo].userAns == questions[qNo].correctOption && questions[qNo].scored == false) {
            score += 1;
            questions[qNo].scored = true;
        }
        if (qNo == 2) alert("Last Question")         // last question then set question to first
        else {qNo += 1;             //next question
        loadNextQuestion(qNo);  } // nex question is loaded by save button
    }
    else {
        pelletque[qNo].style.backgroundColor = "magenta"  //when anser is not given
        questions[qNo].visited = true               //question is visited
        if (qNo == 2) alert("Last Question")
        else {qNo += 1;
        loadNextQuestion(qNo);}
    }
})
const timer=document.querySelector("#timer")
let timeleft=20;
let time=setInterval(()=>{
    timeleft-=1;
    timer.innerHTML=`Timer :${timeleft}`
},1000)

setTimeout(() => {
    clearInterval(time);
    localStorage.setItem("score", JSON.stringify(score));
    let markForReview = 0;
    let answered = 0;
    questions.map((e) => {
        if (e.review == true) markForReview += 1;
        if (e.answered == true) answered += 1;
    })
    localStorage.setItem("answered", JSON.stringify(answered));
    localStorage.setItem("markForReview", JSON.stringify(markForReview));
    window.location.href = "https://super-halva-a36bfc.netlify.app/result";
}, 20000);