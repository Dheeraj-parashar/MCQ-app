const ans=document.querySelector("#answered")
const review=document.querySelector("#review")
const score=document.querySelector("#score")
let answered= JSON.parse(localStorage.getItem("answered"));
let reviewed= JSON.parse(localStorage.getItem("markForReview"));
let scored= JSON.parse(localStorage.getItem("score"));
console.log(answered)
console.log(reviewed)
console.log(scored)
ans.innerHTML=answered;
review.innerHTML=reviewed;
score.innerHTML=scored;
localStorage.clear();