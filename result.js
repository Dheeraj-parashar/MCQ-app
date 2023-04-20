const ans=document.querySelector("#answered")
const review=document.querySelector("#review")
const score=document.querySelector("#score")
let answered= JSON.parse(window.localStorage.getItem("answered"));
let reviewed= JSON.parse(window.localStorage.getItem("markForReview"));
let scored= JSON.parse(window.localStorage.getItem("score"));
ans.innerHTML=answered;
review.innerHTML=reviewed;
scored.innerHTML=scored;
localStorage.clear();