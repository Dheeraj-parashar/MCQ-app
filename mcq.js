const studentData=[{
    "userId": 'Dheeraj',
    "password": 'Dhee@1234'
}
,
{
    "userId": 'Anjali',
    "password": 'Anjali@1234'
}]
const submitButton=document.querySelector("#submit")
const inputUser=document.querySelector("#userid")
const pass=document.querySelector("#password")

let access=false;
let accessor=""
submitButton.addEventListener("click",()=>{
    studentData.forEach((e)=>{
        if((e.userId.toLowerCase())===(inputUser.value.toLowerCase()) && e.password===pass.value){
            access=true
            accessor=e.userId
            
        }
    })
    if(accessor=="") alert("Wrong Credentials")
    else{
         console.log(accessor)
         window.location.href="https://super-halva-a36bfc.netlify.app/questionpage"
    }
})